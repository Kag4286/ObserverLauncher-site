// main.js — interactive showcase tabs, OS detection, and user interface enhancements
(function(){
  const $=s=>document.querySelector(s);
  const $$=s=>[...document.querySelectorAll(s)];

  // ---------- 1. SHOWCASE TABS ----------
  (function(){
    const tabs=$$('.showcase-tab');
    const panels=$$('.showcase-panel');
    if(!tabs.length||!panels.length) return;

    function selectTab(targetTab, e){
      if(e && typeof e.preventDefault === 'function') e.preventDefault();
      const currentScroll = window.scrollY;
      const panelId = targetTab.getAttribute('aria-controls');
      const targetPanel = $('#' + panelId);
      if(!targetPanel) return;

      tabs.forEach(t=>{
        const isCurrent = (t === targetTab);
        t.classList.toggle('active', isCurrent);
        t.setAttribute('aria-selected', String(isCurrent));
      });

      panels.forEach(p=>{
        if(p === targetPanel){
          p.hidden = false;
          requestAnimationFrame(() => p.classList.add('active'));
        } else {
          p.classList.remove('active');
          p.hidden = true;
        }
      });

      // Guard against browser scroll anchoring jumping to bottom of page
      if(Math.abs(window.scrollY - currentScroll) > 1){
        window.scrollTo({ top: currentScroll, behavior: 'instant' });
      }
    }

    tabs.forEach(tab=>{
      tab.addEventListener('click', e => selectTab(tab, e));
      tab.addEventListener('keydown', e => {
        const idx = tabs.indexOf(tab);
        if(e.key === 'ArrowRight' || e.key === 'ArrowDown'){
          e.preventDefault();
          const next = tabs[(idx + 1) % tabs.length];
          next.focus();
          selectTab(next, e);
        } else if(e.key === 'ArrowLeft' || e.key === 'ArrowUp'){
          e.preventDefault();
          const prev = tabs[(idx - 1 + tabs.length) % tabs.length];
          prev.focus();
          selectTab(prev, e);
        }
      });
    });
  })();

  // ---------- 2. OS DETECTION FOR DOWNLOAD CARDS ----------
  (function(){
    const ua=navigator.userAgent||'';
    const plat=navigator.platform||'';
    const isLinux=/Linux/i.test(plat)||/Linux/i.test(ua);
    const winBadge=$('#winRecBadge');
    const linuxBadge=$('#linuxRecBadge');
    const winCard=$('#dlWinCard');
    const linuxCard=$('#dlLinuxCard');

    if(isLinux && !/Android/i.test(ua)){
      if(linuxBadge) linuxBadge.style.display='block';
      if(winBadge) winBadge.style.display='none';
      if(linuxCard) {
        const btn=linuxCard.querySelector('.btn');
        if(btn){ btn.classList.remove('ghost'); btn.classList.add('primary'); }
      }
      if(winCard) {
        const btn=winCard.querySelector('.btn');
        if(btn){ btn.classList.remove('primary'); btn.classList.add('ghost'); }
      }
    } else {
      if(winBadge) winBadge.style.display='block';
      if(linuxBadge) linuxBadge.style.display='none';
    }
  })();

  // ---------- 3. FAQ ACCORDION (close other items on open) ----------
  (function(){
    const items=$$('.faq-item');
    items.forEach(item=>{
      item.addEventListener('toggle',()=>{
        if(item.open){
          items.forEach(other=>{
            if(other!==item && other.open){
              other.open=false;
            }
          });
        }
      });
    });
  })();

  // ---------- 4. HERO APP TILT ON DESKTOP ----------
  (function(){
    const frame=$('.window-frame');
    if(!frame||matchMedia('(hover: none)').matches||matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let raf=0, tx=0, ty=0, cx=0, cy=0;
    addEventListener('pointermove',e=>{
      tx=(e.clientX/innerWidth-0.5);
      ty=(e.clientY/innerHeight-0.5);
      if(!raf) raf=requestAnimationFrame(step);
    },{passive:true});
    function step(){
      raf=0;
      cx+=(tx-cx)*0.06;
      cy+=(ty-cy)*0.06;
      frame.style.transform=`perspective(1200px) rotateY(${(cx*6).toFixed(2)}deg) rotateX(${(-cy*4).toFixed(2)}deg)`;
      if(Math.abs(tx-cx)>0.001||Math.abs(ty-cy)>0.001) raf=requestAnimationFrame(step);
    }
  })();
})();
