// motion.js — streamlined micro-interactions: cursor spotlight, magnetic buttons, scroll progress, and mobile navigation
(function(){
  const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
  const $=s=>document.querySelector(s);
  const $$=s=>[...document.querySelectorAll(s)];

  // Immediately set body state (no artificial bootloader delay)
  document.body.classList.add('booted');

  // ---------- CURSOR SPOTLIGHT ----------
  (function(){
    if(reduce||matchMedia('(hover: none)').matches) return;
    let raf=0,x=0,y=0;
    addEventListener('pointermove',e=>{
      x=e.clientX; y=e.clientY;
      if(!raf) raf=requestAnimationFrame(()=>{
        raf=0;
        document.body.style.setProperty('--mx',x+'px');
        document.body.style.setProperty('--my',y+'px');
        document.body.classList.add('spotlight');
      });
    },{passive:true});
    addEventListener('pointerleave',()=>document.body.classList.remove('spotlight'));
  })();

  // ---------- MAGNETIC BUTTONS ----------
  (function(){
    if(reduce||matchMedia('(hover: none)').matches) return;
    const MAX=6;
    $$('.magnet').forEach(el=>{
      el.addEventListener('pointermove',e=>{
        const r=el.getBoundingClientRect();
        const dx=Math.max(-MAX,Math.min(MAX,(e.clientX-(r.left+r.width/2))/8));
        const dy=Math.max(-MAX,Math.min(MAX,(e.clientY-(r.top+r.height/2))/8));
        el.style.transform=`translate(${dx}px,${dy}px)`;
      });
      el.addEventListener('pointerleave',()=>{
        el.style.transform='';
      });
    });
  })();

  // ---------- SCROLL PROGRESS BAR ----------
  (function(){
    const bar=$('#progressBar');
    if(!bar) return;
    let raf=0;
    function upd(){
      raf=0;
      const h=document.documentElement;
      const max=h.scrollHeight-h.clientHeight;
      bar.style.width=(max>0?(h.scrollTop/max*100):0)+'%';
    }
    addEventListener('scroll',()=>{
      if(!raf) raf=requestAnimationFrame(upd);
    },{passive:true});
    upd();
  })();

  // ---------- EYEBROW TICK GROW ----------
  (function(){
    if(reduce) return;
    const ticks=$$('.eyebrow-tick');
    ticks.forEach(t=>{
      t.style.width='0';
      t.style.transition='width .5s cubic-bezier(.2,.7,.3,1)';
    });
    if(!('IntersectionObserver' in window)){
      ticks.forEach(t=>t.style.width='14px');
      return;
    }
    const io=new IntersectionObserver(es=>{
      es.forEach(e=>{
        if(e.isIntersecting){
          e.target.style.width='14px';
          io.unobserve(e.target);
        }
      });
    },{threshold:.2});
    ticks.forEach(t=>io.observe(t));
  })();

  // ---------- MOBILE NAV MENU ----------
  (function(){
    const btn=document.getElementById('navToggle');
    const menu=document.getElementById('mobileMenu');
    if(!btn||!menu) return;
    let open=false;
    function setOpen(v){
      open=v;
      btn.setAttribute('aria-expanded',String(v));
      if(v){
        menu.hidden=false;
        requestAnimationFrame(()=>menu.classList.add('open'));
      } else {
        menu.classList.remove('open');
        setTimeout(()=>{ if(!open) menu.hidden=true; },200);
      }
    }
    btn.addEventListener('click',e=>{
      e.stopPropagation();
      setOpen(!open);
    });
    menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>setOpen(false)));
    document.addEventListener('click',e=>{
      if(open&&!e.target.closest('#mobileMenu')&&!e.target.closest('#navToggle')) setOpen(false);
    });
    document.addEventListener('keydown',e=>{
      if(e.key==='Escape') setOpen(false);
    });
  })();
})();
