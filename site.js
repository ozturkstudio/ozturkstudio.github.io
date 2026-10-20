// Yüzen WhatsApp butonu: ilk ekran geçilince görünür
(function(){
  var f=document.querySelector('.float-wa');
  if(!f) return;
  var limit=function(){return window.innerHeight*0.7};
  var tick=function(){f.classList.toggle('on', window.scrollY>limit())};
  window.addEventListener('scroll',tick,{passive:true});
  tick();
})();
