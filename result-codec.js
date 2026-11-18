/* Versioned, portable result data. Data is embedded in the URL fragment, not
   stored on a server and not tamper-proof. Keep payload small. */
(function(root,factory){
  const api=factory();
  if(typeof module!=='undefined'&&module.exports)module.exports=api;
  if(root)root.BachataResultCodec=api;
})(typeof window!=='undefined'?window:null,function(){
  'use strict';
  const MAX_BYTES=24000;
  function encode(data){
    const bytes=new TextEncoder().encode(JSON.stringify(data));
    if(bytes.length>MAX_BYTES)throw new Error('Слишком большой результат для ссылки.');
    let binary='';for(const b of bytes)binary+=String.fromCharCode(b);
    return btoa(binary).replace(/\+/g,'-').replace(/\//g,'_').replace(/=+$/,'');
  }
  function decode(encoded){
    if(!/^[a-zA-Z0-9_-]+$/.test(encoded)||encoded.length>MAX_BYTES*2)throw new Error('Некорректная ссылка.');
    let raw=atob(encoded.replace(/-/g,'+').replace(/_/g,'/')+'='.repeat((4-encoded.length%4)%4));
    if(raw.length>MAX_BYTES)throw new Error('Слишком большой результат.');
    const data=JSON.parse(new TextDecoder('utf-8',{fatal:true}).decode(Uint8Array.from(raw,c=>c.charCodeAt(0))));
    if(!data || data.v!==1 || !Array.isArray(data.tracks) || data.tracks.length>3 || !data.tracks.length ||
      typeof data.date!=='string' || data.date.length>40 ||
      !data.tracks.every(r=>r&&typeof r.title==='string'&&r.title.length<250 &&
        Number.isInteger(r.score) && r.score>=0 && r.score<=1000 &&
        Number.isInteger(r.completed) && r.completed>=0 && r.completed<=500 &&
        Array.isArray(r.patterns)&&r.patterns.length<=200 && r.patterns.every(p=>typeof p==='string'&&p.length<30))) {
      throw new Error('Ссылка содержит неподдерживаемый формат результата.');
    }
    return data;
  }
  function getLink(data,locationHref){
    const url=new URL('result.html',locationHref);
    url.hash='r='+encode(data);
    return url.href;
  }
  return {encode,decode,getLink};
});
