/* Bachata Trainer v0.8: musical count and flexible eight-count challenges.
   No external dependencies. Usable in browser and in Node test runner. */
(function(root,factory){
  const api=factory();
  if(typeof module!=='undefined' && module.exports) module.exports=api;
  if(root) root.BachataExamEngine=api;
})(typeof window!=='undefined'?window:null,function(){
  'use strict';
  const PATTERNS=Object.freeze([
    {id:'odd',counts:[1,3,5,7]},
    {id:'even',counts:[2,4,6,8]},
    {id:'first-four',counts:[1,2,3,4]},
    {id:'last-four',counts:[5,6,7,8]},
    {id:'one-four',counts:[1,4]},
    {id:'all',counts:[1,2,3,4,5,6,7,8]}
  ]);
  function shuffle(arr,rng=Math.random){
    const result=arr.slice();
    for(let i=result.length-1;i>0;i--){const j=Math.floor(rng()*(i+1));[result[i],result[j]]=[result[j],result[i]];}
    return result;
  }
  function makePlaylist(tracks,count=3,rng=Math.random){
    const ps=shuffle(PATTERNS,rng);
    return shuffle(tracks,rng).slice(0,Math.max(0,count)).map((track,i)=>({track,pattern:ps[i%ps.length]}));
  }
  function nextPattern(current,rng=Math.random){
    const opts=PATTERNS.filter(p=>!current||p.id!==current.id);
    return opts[Math.min(opts.length-1,Math.floor(rng()*opts.length))];
  }
  /* Musical beats are computed from BPM and offset. Every 'normal' begins
     at count 1; an appendix consumes time but isn't a scoring opportunity.
     Beyond the last segment normal eighths continue by default. */
  function expectedBeats(track,durationSeconds,targetCounts=[1,2,3,4,5,6,7,8]){
    const bpm=Number(track.bpm),offset=Number(track.offset),limit=Math.min(90,Number(durationSeconds));
    if(!Number.isFinite(bpm)||bpm<=0||!Number.isFinite(offset)||!Number.isFinite(limit)||limit<=0)return [];
    const beatSeconds=60/bpm;
    const countLimit=Math.min(10000,Math.max(0,Math.ceil((limit-offset)/beatSeconds)));
    const chosen=new Set(targetCounts);
    const segments=Array.isArray(track.segments)?track.segments.filter(s=>
      s&&(s.type==='normal'||s.type==='appendix')&&Number.isInteger(s.beats)&&s.beats>0
    ):[];
    const result=[];
    let seg=0,local=0;
    for(let i=0;i<countLimit;i++){
      while(seg<segments.length&&local>=segments[seg].beats){seg++;local=0;}
      const appendix=seg<segments.length&&segments[seg].type==='appendix';
      const count=local%8+1,time=offset+i*beatSeconds;
      if(time>=0 && time<limit && !appendix && chosen.has(count))result.push({time,count,beatIndex:i});
      local++;
    }
    return result;
  }
  function buildEighths(track,durationSeconds){
    const notes=expectedBeats(track,durationSeconds);
    const limit=Math.min(90,Number(durationSeconds));
    const out=[];
    let group=[];
    function flush(){
      if(group.length===8 && group.every((n,i)=>n.count===i+1)
        && group[7].time+0.001<limit){out.push({index:out.length,startTime:group[0].time,beats:group});}
    }
    for(const note of notes){
      if(note.count===1){flush();group=[note];}
      else if(group.length&&note.count===group.length+1)group.push(note);
      else {flush();group=[];}
    }
    flush();
    return out;
  }
  class SequenceSession{
    constructor(track,durationSeconds,initialPattern=null,rng=Math.random){
      this.bpm=Number(track.bpm);
      this.windowMs=Math.min(220,(60000/this.bpm)*0.44);
      this.windowSec=this.windowMs/1000;
      this.bars=buildEighths(track,durationSeconds);
      this.rng=rng;
      this.pattern=initialPattern||nextPattern(null,rng);
      this.assignedAt=0; // Earliest time the new challenge can be started.
      this.originIndex=0; // First eligible eighth for this challenge.
      this.active=null;
      this.feedback={kind:'info',text:'Начни с '+this.pattern.counts[0]+' на любой подходящей восьмёрке.'};
      this.snapshot=null;
      this.completedSets=0;this.failedSets=0;this.attempts=0;
      this.perfect=0;this.good=0;this.near=0;this.extra=0;
      this.rawEarned=0;this.bonus=0;this.penalty=0;
      this.signedErrors=[];this.waitedBarsTotal=0;
      this.patternHistory=[this.pattern.id];
      this.originIndex=this._findOrigin();
    }
    get points(){return Math.max(0,this.rawEarned+this.bonus-this.penalty);}
    get completedCounts(){return this.active?this.active.hits.slice():(this.snapshot?this.snapshot.hits.slice():[]);}
    get failedCount(){return this.snapshot?this.snapshot.failedCount:null;}
    _findOrigin(){
      const first=this.pattern.counts[0];
      const idx=this.bars.findIndex(bar=>bar.beats[first-1].time>=this.assignedAt-0.000001);
      return idx===-1?this.bars.length:idx;
    }
    waitingBars(time){
      if(this.active)return Math.max(0,this.active.bar.index-this.originIndex);
      const first=this.pattern.counts[0];
      let passed=0;
      for(let i=this.originIndex;i<this.bars.length;i++){
        if(time>this.bars[i].beats[first-1].time+this.windowSec)passed++;
        else break;
      }
      return passed;
    }
    tick(time){
      if(!Number.isFinite(time)||!this.active)return;
      const targetCount=this.pattern.counts[this.active.step];
      const target=this.active.bar.beats[targetCount-1];
      if(time>target.time+this.windowSec){
        this._fail(targetCount,'счёт пропущен',false,time);
      }
    }
    _fail(count,reason,wrongTap,time){
      if(this.active){
        this.failedSets++;
        this.snapshot={hits:this.active.hits.slice(),failedCount:count};
        this.active=null;
      }
      if(wrongTap){this.extra++;this.penalty+=10;}
      this.feedback={kind:'error',text:'Счёт '+count+' не засчитан ('+reason+'). Начни набор заново с '+this.pattern.counts[0]+' в любой следующей восьмёрке.'};
      // The same challenge and its original speed clock are retained.
    }
    tap(time){
      if(!Number.isFinite(time))return {kind:'ignored'};
      const hadActive=!!this.active;
      const neededBefore=hadActive?this.pattern.counts[this.active.step]:null;
      this.tick(time);
      if(hadActive&&!this.active){
        // A late tap cannot be consumed as the first tap of another attempt.
        this.extra++;this.penalty+=10;
        this.feedback={kind:'error',text:'Поздно на '+neededBefore+'. Попробуй с '+this.pattern.counts[0]+' в следующей восьмёрке.'};
        return {kind:'wrong',count:neededBefore};
      }
      if(!this.active){
        const first=this.pattern.counts[0];
        let bar=null,smallest=Infinity;
        for(let i=this.originIndex;i<this.bars.length;i++){
          const possible=this.bars[i];
          const when=possible.beats[first-1].time;
          if(when<this.assignedAt-0.000001)continue;
          const diff=Math.abs(when-time);
          if(diff<=this.windowSec&&diff<smallest){bar=possible;smallest=diff;}
          if(when>time+this.windowSec)break;
        }
        if(!bar){
          this.extra++;this.penalty+=10;
          this.feedback={kind:'error',text:'Не попал на '+first+'. Набор ещё ждёт тебя — можно начать на любой следующей восьмёрке.'};
          return {kind:'wrong',count:first};
        }
        this.active={bar,step:0,hits:[],ratings:[],errors:[]};
        this.snapshot=null;
        this.attempts++;
      }
      const needed=this.pattern.counts[this.active.step];
      const target=this.active.bar.beats[needed-1];
      const signedMs=(time-target.time)*1000;
      if(Math.abs(signedMs)>this.windowMs){
        this._fail(needed,signedMs<0?'слишком рано':'слишком поздно',true,time);
        return {kind:'wrong',count:needed};
      }
      const points=Math.abs(signedMs)<=90?100:Math.abs(signedMs)<=165?70:30;
      if(points===100)this.perfect++;else if(points===70)this.good++;else this.near++;
      this.signedErrors.push(signedMs);
      this.active.hits.push(needed);
      this.active.ratings.push(points);
      this.active.errors.push(signedMs);
      this.active.step++;
      if(this.active.step<this.pattern.counts.length){
        this.feedback={kind:'success',text:'✓ '+needed+' засчитан ('+(signedMs<0?'раньше':'позже')+' на '+Math.round(Math.abs(signedMs))+' мс). Дальше '+this.pattern.counts[this.active.step]+'.'};
        return {kind:'hit',count:needed,signedMs};
      }
      const finishedPattern=this.pattern;
      const waited=Math.max(0,this.active.bar.index-this.originIndex);
      const accuracy=Math.round(this.active.ratings.reduce((s,x)=>s+x,0)/this.active.ratings.length);
      const speedBonus=Math.max(0,25-5*waited);
      this.rawEarned+=accuracy;
      this.bonus+=speedBonus;
      this.waitedBarsTotal+=waited;
      this.completedSets++;
      this.active=null;
      this.snapshot=null;
      this.pattern=nextPattern(finishedPattern,this.rng);
      this.patternHistory.push(this.pattern.id);
      this.assignedAt=time+0.001;
      this.originIndex=this._findOrigin();
      this.feedback={kind:'completed',text:'Набор пройден! +'+accuracy+' за точность, +'+speedBonus+' за скорость. Новый набор: '+this.pattern.counts.join(' · ')};
      return {kind:'completed',count:needed,points:accuracy+speedBonus,accuracy,speedBonus,waited,newPattern:this.pattern};
    }
    finish(){
      const totalHits=this.perfect+this.good+this.near;
      const avgAbs=totalHits?this.signedErrors.reduce((a,b)=>a+Math.abs(b),0)/totalHits:null;
      const avgSigned=totalHits?this.signedErrors.reduce((a,b)=>a+b,0)/totalHits:null;
      return {
        score:Math.min(1000,this.points),points:this.points,
        rawEarned:this.rawEarned,bonus:this.bonus,penalty:this.penalty,
        completedSets:this.completedSets,failedSets:this.failedSets,attempts:this.attempts,
        unfinishedSets:this.active?1:0,
        perfect:this.perfect,good:this.good,near:this.near,extra:this.extra,
        hitCount:totalHits,meanAbsMs:avgAbs,meanSignedMs:avgSigned,
        waitedBarsTotal:this.waitedBarsTotal,windowMs:this.windowMs,
        patternHistory:this.patternHistory.slice()
      };
    }
  }
  return {PATTERNS,shuffle,makePlaylist,nextPattern,expectedBeats,buildEighths,SequenceSession};
});
