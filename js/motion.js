// motion.js — the choreography layer. Boot sequence, hero reveal trigger, section-rail tracking,
// cursor spotlight, magnetic buttons, corner-bracket focus. Restrained but deliberate; everything
// bails out under prefers-reduced-motion.
(function(){
  const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
  const $=s=>document.querySelector(s);
  const $$=s=>[...document.querySelectorAll(s)];

  // ---------- BOOT SEQUENCE ----------
  (function(){
    const boot=$('#boot'); if(!boot){ document.body.classList.add('booted'); return; }
    if(reduce){ boot.remove(); document.body.classList.add('booted'); return; }
    const bar=$('#bootBar'), status=$('#bootStatus');
    const steps=[[14,'boot.init'],[38,'boot.state'],[62,'boot.market'],[86,'boot.field'],[100,'boot.ready']];
    let i=0, done=false;
    const statusText={ 'boot.init':'INITIALISING','boot.state':'LOADING STATE','boot.market':'FETCHING VERSIONS','boot.field':'CALIBRATING FIELD','boot.ready':'READY' };
    function advance(){
      if(done) return;
      if(i>=steps.length){ finish(); return; }
      const [pct,key]=steps[i];
      if(bar) bar.style.width=pct+'%';
      if(status) status.textContent=statusText[key]||key;
      i++;
      setTimeout(advance, 260+Math.random()*220);
    }
    function finish(){
      if(done) return; done=true;
      if(bar) bar.style.width='100%';
      if(status) status.textContent='READY';
      setTimeout(()=>{ boot.classList.add('done'); document.body.classList.remove('is-booting'); document.body.classList.add('booted'); setTimeout(()=>boot.remove(),600); }, 320);
    }
    setTimeout(advance, 220);
    // skip on any interaction
    const skip=()=>finish();
    addEventListener('keydown',skip,{once:true}); addEventListener('pointerdown',skip,{once:true});
    // safety
    setTimeout(finish, 3200);
  })();

  // ---------- SECTION RAIL ----------
  (function(){
    const list=$('#railList'), idx=$('#railIdx'); if(!list) return;
    const sections=$$('main [data-ch]');
    if(!sections.length) return;
    list.innerHTML=sections.map(s=>`<li data-target="${s.id}" data-name="${s.dataset.name||s.dataset.ch}"><span class="rl-name">${s.dataset.name||('CH '+s.dataset.ch)}</span><span class="rl-bar"></span></li>`).join('');
    const items=$$('#railList li');
    items.forEach(li=>li.addEventListener('click',()=>{ const el=document.getElementById(li.dataset.target); if(el) el.scrollIntoView({behavior:reduce?'auto':'smooth',block:'start'}); }));
    const total=String(sections.length).padStart(2,'0');
    const io=new IntersectionObserver(entries=>{
      entries.forEach(e=>{
        if(!e.isIntersecting) return;
        const id=e.target.id;
        items.forEach(li=>li.classList.toggle('active',li.dataset.target===id));
        const ch=e.target.dataset.ch||'01';
        if(idx) idx.textContent=`${ch} / ${total}`;
      });
    },{rootMargin:'-45% 0px -45% 0px',threshold:0});
    sections.forEach(s=>io.observe(s));
  })();

  // ---------- CURSOR SPOTLIGHT ----------
  (function(){
    if(reduce||matchMedia('(hover: none)').matches) return;
    let raf=0,x=0,y=0;
    addEventListener('pointermove',e=>{ x=e.clientX; y=e.clientY; if(!raf) raf=requestAnimationFrame(()=>{ raf=0; document.body.style.setProperty('--mx',x+'px'); document.body.style.setProperty('--my',y+'px'); document.body.classList.add('spotlight'); }); },{passive:true});
    addEventListener('pointerleave',()=>document.body.classList.remove('spotlight'));
  })();

  // ---------- MAGNETIC BUTTONS ----------
  (function(){
    if(reduce) return;
    const MAX=5;
    $$('.magnet').forEach(el=>{
      el.addEventListener('pointermove',e=>{ const r=el.getBoundingClientRect(); const dx=Math.max(-MAX,Math.min(MAX,(e.clientX-(r.left+r.width/2))/10)); const dy=Math.max(-MAX,Math.min(MAX,(e.clientY-(r.top+r.height/2))/10)); el.style.transform=`translate(${dx}px,${dy}px)`; });
      el.addEventListener('pointerleave',()=>{ el.style.transform=''; });
    });
  })();

  // ---------- CORNER-BRACKET FOCUS (injected spans on focusable controls) ----------
  (function(){
    const sel='.btn,.lang-btn,.dl-card,.rail-list li,.site-nav a';
    $$(sel).forEach(el=>{ if(!el.querySelector('.cb')){ const s=document.createElement('span'); s.className='cb'; s.setAttribute('aria-hidden','true'); el.appendChild(s); } });
  })();

  // ---------- NUMBER COUNTERS (metric strip warm-up) ----------
  (function(){
    const els={tps:$('#roTps'),mspt:$('#roMspt'),cpu:$('#roCpu'),ram:$('#roRam'),players:$('#roPlayers')};
    if(!els.tps||reduce) return;
    const targets={tps:20,mspt:3.4,cpu:18,ram:2.1,players:0};
    const fmts={tps:v=>v.toFixed(2),mspt:v=>v.toFixed(2),cpu:v=>Math.round(v)+'%',ram:v=>v.toFixed(1)+' / 6 GB',players:v=>String(Math.round(v))};
    function run(){
      const t0=performance.now(), dur=1100;
      (function step(now){ const k=Math.min(1,(now-t0)/dur); const e=1-Math.pow(1-k,3);
        for(const kk in els){ if(els[kk]) els[kk].textContent=fmts[kk](targets[kk]*e); }
        if(k<1) requestAnimationFrame(step); })(performance.now());
    }
    // kick off when the instrument scrolls into view
    const inst=$('.instrument');
    if(inst&&'IntersectionObserver' in window){ const io=new IntersectionObserver(es=>{ es.forEach(e=>{ if(e.isIntersecting){ run(); io.disconnect(); } }); },{threshold:.3}); io.observe(inst); }
    else run();
  })();

  // ---------- SCROLL PROGRESS ----------
  (function(){
    const bar=$('#progressBar'); if(!bar) return;
    let raf=0;
    function upd(){ raf=0; const h=document.documentElement; const max=h.scrollHeight-h.clientHeight; bar.style.width=(max>0?(h.scrollTop/max*100):0)+'%'; }
    addEventListener('scroll',()=>{ if(!raf) raf=requestAnimationFrame(upd); },{passive:true}); upd();
  })();

  // ---------- SPLIT-TEXT REVEAL (section headings) ----------
  (function(){
    if(reduce) return;
    const heads=$$('.band-head h2, .oss-copy h2, .ai-copy h2');
    heads.forEach(h=>{
      if(h.dataset.split) return; h.dataset.split='1';
      const words=h.textContent.split(' ');
      h.innerHTML=words.map(w=>`<span class="w">${w}</span>`).join(' ');
      h.classList.add('split-w');
      // stagger via inline delay
      h.querySelectorAll('.w').forEach((w,i)=>w.style.transitionDelay=(i*40)+'ms');
    });
    if(!('IntersectionObserver' in window)){ heads.forEach(h=>h.classList.add('in')); return; }
    const io=new IntersectionObserver(es=>{ es.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); } }); },{rootMargin:'0px 0px -14% 0px',threshold:.2});
    heads.forEach(h=>io.observe(h));
  })();

  // ---------- SCREENSHOT TILT + PARALLAX ----------
  (function(){
    if(reduce||matchMedia('(hover: none)').matches) return;
    const frames=$$('.shot-frame');
    frames.forEach(fr=>{
      fr.addEventListener('pointermove',e=>{ const r=fr.getBoundingClientRect(); const px=(e.clientX-r.left)/r.width-0.5; const py=(e.clientY-r.top)/r.height-0.5; fr.style.transform=`perspective(900px) rotateY(${px*7}deg) rotateX(${-py*7}deg) scale(1.015)`; });
      fr.addEventListener('pointerleave',()=>{ fr.style.transform=''; });
    });
    // parallax on scroll. PERF: only touch shots whose section is near the viewport (a Set of
    // visible .shot elements, kept by one IntersectionObserver) instead of measuring every shot
    // on every scroll frame. getBoundingClientRect on 10 lazy images per frame is layout thrash.
    const shots=$$('.shot');
    const visible=new Set();
    if('IntersectionObserver' in window){
      const io=new IntersectionObserver(es=>{ es.forEach(e=>{ if(e.isIntersecting) visible.add(e.target); else visible.delete(e.target); }); },{rootMargin:'25% 0px 25% 0px'});
      shots.forEach(s=>io.observe(s));
    } else shots.forEach(s=>visible.add(s));
    let raf=0;
    function upd(){ raf=0; if(!visible.size) return; const vh=innerHeight;
      visible.forEach(s=>{ const r=s.getBoundingClientRect(); const mid=r.top+r.height/2; const d=(mid-vh/2)/vh; const dir=Number(s.dataset.parallax||1); s.style.transform=`translateY(${(-d*22*dir).toFixed(1)}px)`; }); }
    addEventListener('scroll',()=>{ if(!raf) raf=requestAnimationFrame(upd); },{passive:true});
    addEventListener('resize',()=>{ if(!raf) raf=requestAnimationFrame(upd); }); upd();
  })();

  // ---------- COUNT-UP STATS ----------
  (function(){
    const nums=$$('.stat-num'); if(!nums.length) return;
    function runOne(el){ const to=Number(el.dataset.count)||0; if(reduce||to===0){ el.textContent=String(to); return; } const t0=performance.now(), dur=1200; (function step(now){ const k=Math.min(1,(now-t0)/dur); const e=1-Math.pow(1-k,3); el.textContent=String(Math.round(to*e)); if(k<1) requestAnimationFrame(step); })(performance.now()); }
    const io=new IntersectionObserver(es=>{ es.forEach(e=>{ if(e.isIntersecting){ runOne(e.target); io.unobserve(e.target); } }); },{threshold:.5});
    nums.forEach(n=>io.observe(n));
  })();

  // ---------- STICKY HOW-IT-WORKS ----------
  (function(){
    const steps=$$('.how-step'); if(!steps.length) return;
    const line=$('#howLine');
    function setActive(i){ steps.forEach((s,k)=>s.classList.toggle('active',k===i)); if(line) line.style.height=Math.round(((i+1)/steps.length)*200)+'px'; }
    if(!('IntersectionObserver' in window)){ setActive(0); return; }
    const io=new IntersectionObserver(es=>{ es.forEach(e=>{ if(e.isIntersecting){ const i=steps.indexOf(e.target); if(i>=0) setActive(i); } }); },{rootMargin:'-45% 0px -45% 0px',threshold:0});
    steps.forEach(s=>io.observe(s)); setActive(0);
  })();

  // ---------- EYEBROW TICK GROW ----------
  (function(){
    if(reduce) return;
    const ticks=$$('.eyebrow-tick');
    ticks.forEach(t=>{ t.style.width='0'; t.style.transition='width .6s cubic-bezier(.2,.7,.3,1)'; });
    const io=new IntersectionObserver(es=>{ es.forEach(e=>{ if(e.isIntersecting){ e.target.style.width='14px'; io.unobserve(e.target); } }); },{threshold:.4});
    ticks.forEach(t=>io.observe(t));
  })();

  // ---------- MOBILE NAV MENU ----------
  (function(){
    const btn=document.getElementById('navToggle'), menu=document.getElementById('mobileMenu');
    if(!btn||!menu) return;
    let open=false;
    function setOpen(v){ open=v; btn.setAttribute('aria-expanded',String(v));
      if(v){ menu.hidden=false; requestAnimationFrame(()=>menu.classList.add('open')); }
      else{ menu.classList.remove('open'); setTimeout(()=>{ if(!open) menu.hidden=true; },200); } }
    btn.addEventListener('click',e=>{ e.stopPropagation(); setOpen(!open); });
    menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>setOpen(false)));
    document.addEventListener('click',e=>{ if(open&&!e.target.closest('#mobileMenu')&&!e.target.closest('#navToggle')) setOpen(false); });
    document.addEventListener('keydown',e=>{ if(e.key==='Escape') setOpen(false); });
  })();

  // ---------- SMOOTH SCROLL on in-page nav ----------
  // NOTE: this block used to intercept every anchor click and call startViewTransition() +
  // scrollIntoView({behavior:'auto'}). 'auto' JUMPS instantly, which defeated the CSS
  // html{scroll-behavior:smooth} and made nav feel abrupt. Native smooth scrolling is smoother and
  // simpler, so the interception is gone; scroll-padding-top (CSS) keeps anchors clear of the fixed
  // header, and prefers-reduced-motion still falls back to instant via the CSS media query.
  // (View Transitions are still used for the language switch in i18n.js.)

  // ---------- HERO APP 3D TILT ----------
  (function(){
    const frame=document.querySelector('.hero-app-frame'); if(!frame) return;
    if(reduce||matchMedia('(hover: none)').matches) return;
    let raf=0,tx=0,ty=0,cx=0,cy=0;
    addEventListener('pointermove',e=>{ tx=e.clientX/innerWidth-0.5; ty=e.clientY/innerHeight-0.5; if(!raf) raf=requestAnimationFrame(step); },{passive:true});
    function step(){ raf=0; cx+=(tx-cx)*0.08; cy+=(ty-cy)*0.08;
      frame.style.transform=`rotateY(${(-16+cx*10).toFixed(2)}deg) rotateX(${(6-cy*8).toFixed(2)}deg) rotateZ(-1.5deg)`;
      if(Math.abs(tx-cx)>0.001||Math.abs(ty-cy)>0.001) raf=requestAnimationFrame(step); }
  })();

  // ---------- RAIL PROGRESS DOTS ----------
  (function(){
    const list=$('#railList'); if(!list) return;
    list.querySelectorAll('li').forEach(li=>{ const d=document.createElement('span'); d.className='rl-dot'; li.prepend(d); });
  })();
})();
