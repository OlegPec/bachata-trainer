/* Bachata Trainer — единый набор доступных аудиоверсий песни. */
(function(root, factory){
  const api = factory();
  if(typeof module !== 'undefined' && module.exports)module.exports = api;
  if(root)root.BachataAudioVariants = api;
})(typeof window !== 'undefined' ? window : null, function(){
  'use strict';
  const VARIANTS = Object.freeze([
    {key:'file', label:'Короткая · 1:30', short:'Короткая', offsetKey:'offset', segmentsKey:'segments', accentsKey:'accents'},
    {key:'file_full', label:'Полная версия', short:'Полная', offsetKey:'offset_full', segmentsKey:'segments_full', accentsKey:'accents_full'},
    {key:'file_guitar', label:'Гитара · короткая', short:'Гитара', offsetKey:'offset_guitar', segmentsKey:'segments_guitar', accentsKey:'accents_guitar'},
    {key:'file_full_guitar', label:'Гитара · полная', short:'Полная гитара', offsetKey:'offset_full_guitar', segmentsKey:'segments_full_guitar', accentsKey:'accents_full_guitar'}
  ]);
  function getDefinition(key){return VARIANTS.find(v=>v.key===key)||null;}
  function filename(track,key){
    if(!track||!getDefinition(key))return '';
    const value=track[key];return typeof value==='string'?value.trim():'';
  }
  function available(track){return VARIANTS.filter(v=>filename(track,v.key));}
  function has(track,key){return Boolean(filename(track,key));}
  function timing(track,key){
    if(!track||!has(track,key))return null;
    const variant=getDefinition(key);
    const overrideOffset=track[variant.offsetKey];
    const offset = variant.key!=='file' && overrideOffset!==undefined && overrideOffset!==null && overrideOffset!=='' && Number.isFinite(Number(overrideOffset)) ? Number(overrideOffset) : Number(track.offset);
    const segments = variant.key!=='file' && Array.isArray(track[variant.segmentsKey]) ? track[variant.segmentsKey] : track.segments;
    const accents = variant.key!=='file' && Array.isArray(track[variant.accentsKey]) ? track[variant.accentsKey] : track.accents;
    return Object.assign({}, track, {file:filename(track,key),offset,segments,accents});
  }
  return {VARIANTS, getDefinition, filename, available, has, timing};
});
