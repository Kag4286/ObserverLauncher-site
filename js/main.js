// main.js — content behaviour: pulse wave, dynamic cards, the console + AI terminal demos, and the
// ongoing metric jitter. Boot sequence, section rail, spotlight, magnetic buttons, corner brackets
// and the counter warm-up live in motion.js. No framework, no bundler.
(function(){
  const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
  const $=s=>document.querySelector(s);
  const esc=s=>String(s).replace(/[&<>]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;'}[c]));

  // ---------- pulse wave (8 ticks, ~5s, the app heartbeat) ----------
  (function(){
    const box=$('#pulseWave'); if(!box) return;
    const ticks=[]; for(let i=0;i<8;i++){ const el=document.createElement('i'); box.appendChild(el); ticks.push(el); }
    if(reduce){ ticks.forEach(t=>t.classList.add('on')); return; }
    let pos=0;
    setInterval(()=>{ ticks.forEach((t,i)=>t.classList.toggle('on',i===pos%8)); pos++; }, 625);
  })();

  // ---------- feature grid ----------
  const ICONS={
    setup:'<path d="M12 2v6M12 16v6M4.9 4.9l4.2 4.2M14.9 14.9l4.2 4.2M2 12h6M16 12h6M4.9 19.1l4.2-4.2M14.9 9.1l4.2-4.2"/>',
    monitor:'<path d="M3 12h4l2 6 4-14 2 8h6"/>',
    players:'<circle cx="9" cy="8" r="3"/><path d="M3 20a6 6 0 0112 0M16 6a3 3 0 010 6M21 20a6 6 0 00-4-5.6"/>',
    market:'<path d="M4 7l8-4 8 4-8 4-8-4z"/><path d="M4 7v10l8 4 8-4V7"/>',
    editor:'<path d="M4 4h10l6 6v10H4z"/><path d="M14 4v6h6M8 14h8M8 17h5"/>',
    backup:'<path d="M12 3v10M8 9l4 4 4-4M5 21h14"/>',
    map:'<path d="M9 4L3 6v14l6-2 6 2 6-2V4l-6 2-6-2zM9 4v14M15 6v14"/>',
    console:'<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M7 9l3 3-3 3M13 15h4"/>',
    multi:'<rect x="3" y="3" width="8" height="8" rx="1"/><rect x="13" y="3" width="8" height="8" rx="1"/><rect x="3" y="13" width="8" height="8" rx="1"/><rect x="13" y="13" width="8" height="8" rx="1"/>',
    cli:'<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M7 9l3 3-3 3"/><path d="M12.5 15h4"/>',
    docker:'<path d="M3 9h14a1 1 0 011 1v3a7 7 0 01-7 7H6a3 3 0 01-3-3z"/><path d="M18 10a3 3 0 013 3"/><rect x="5" y="5" width="2.5" height="2.5" rx=".4"/><rect x="8.5" y="5" width="2.5" height="2.5" rx=".4"/><rect x="12" y="5" width="2.5" height="2.5" rx=".4"/><rect x="8.5" y="1.5" width="2.5" height="2.5" rx=".4"/>',
  };
  const FEATURES=[
    ['setup','feat.setup','feat.setupD'],['monitor','feat.monitor','feat.monitorD'],['players','feat.players','feat.playersD'],
    ['market','feat.market','feat.marketD'],['editor','feat.editor','feat.editorD'],['backup','feat.backup','feat.backupD'],
    ['map','feat.map','feat.mapD'],['console','feat.console','feat.consoleD'],['multi','feat.multi','feat.multiD'],
    ['cli','feat.headless','feat.headlessD'],['docker','feat.docker','feat.dockerD'],
  ];
  (function(){
    const grid=$('#featGrid'); if(!grid) return;
    grid.innerHTML=FEATURES.map(([ic,tk,dk])=>`<article class="feat-card"><span class="fc-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">${ICONS[ic]}</svg></span><h3 data-i18n="${tk}"></h3><p data-i18n="${dk}"></p></article>`).join('');
  })();

  // ---------- software grid ----------
  const SOFTWARE=[['Vanilla','basic'],['Paper','native'],['Purpur','native'],['Leaf','native'],['Fabric','basic'],['Forge','native'],['NeoForge','native'],['Folia','native'],['Velocity','proxy'],['Spigot','build']];
  (function(){
    const grid=$('#softGrid'); if(!grid) return;
    grid.innerHTML=SOFTWARE.map(([name,tag])=>`<div class="soft-card"><span class="sc-name">${name}</span><span class="sc-tag ${tag==='native'?'tps':''}">${({native:'TPS',basic:'PLAYERS',proxy:'PROXY',build:'BUILD'})[tag]}</span></div>`).join('');
    const mq=$('#marquee'); if(mq){ const set=SOFTWARE.map(([n])=>`<span>${n}</span>`).join(''); mq.innerHTML=set+set; }
  })();

  // helper: run fn once when el scrolls into view
  function onceInView(el,fn,margin){ if(!el) return; if(!('IntersectionObserver' in window)){ fn(); return; } const io=new IntersectionObserver(es=>{ es.forEach(e=>{ if(e.isIntersecting){ fn(); io.disconnect(); } }); },{rootMargin:margin||'0px 0px -10% 0px',threshold:.15}); io.observe(el); }

  // ---------- screenshots grid (parallax) ----------
  const SHOTS=[['overview','shot.overview'],['console','shot.console'],['players','shot.players'],['inspector','shot.inspector'],['performance','shot.performance'],['content','shot.content'],['marketplace','shot.marketplace'],['worlds','shot.worlds'],['worldmap','shot.worldmap'],['editor','shot.editor']];
  (function(){
    const grid=$('#shotsGrid'); if(!grid) return;
    grid.innerHTML=SHOTS.map(([file,key],i)=>`<figure class="shot" data-parallax="${(i%2? -1:1)}"><div class="shot-frame"><img src="./assets/shots/${file}.png" alt="ObserverLauncher ${file} screen" loading="lazy" decoding="async"></div><figcaption><b data-i18n="${key}"></b><span data-i18n="shotd.${file}"></span></figcaption></figure>`).join('');
  })();

  // ---------- requirements table ----------
  (function(){
    const box=$('#reqTable'); if(!box) return;
    const rows=['r0','r1','r2','r3','r4'];
    box.innerHTML=`<div class="req-row req-head"><span data-i18n="req.c0"></span><span data-i18n="req.c1"></span><span data-i18n="req.c2"></span></div>`
      + rows.map(r=>`<div class="req-row"><span data-i18n="req.${r}"></span><span data-i18n="req.${r}a"></span><span data-i18n="req.${r}b"></span></div>`).join('');
  })();

  // ---------- languages chips ----------
  (function(){
    const box=$('#langChips'); if(!box) return;
    box.innerHTML=['English','Tiếng Việt','Español','Português (BR)','Deutsch','Русский','简体中文'].map(n=>`<span class="lang-chip">${n}</span>`).join('');
  })();

  // ---------- limitations list ----------
  (function(){
    const box=$('#limitsList'); if(!box) return;
    box.innerHTML=[1,2,3,4,5,6,7,8].map(n=>`<li><span class="lim-dot"></span><span data-i18n="lim.${n}"></span></li>`).join('');
  })();

  // ---------- console demo (typewriter, starts on scroll-in) ----------
  (function(){
    const body=$('#consoleBody'); if(!body) return;
    const lines=[
      {c:'cmd',t:'start'},
      {c:'inf',t:'[12:04:01] [Server thread/INFO]: Starting minecraft server version 1.21.4'},
      {c:'inf',t:'[12:04:03] [Server thread/INFO]: Preparing level "world"'},
      {c:'ok', t:'[12:04:06] [Server thread/INFO]: Done (3.142s)! For help, type "help"'},
      {c:'cmd',t:'list'},
      {c:'inf',t:'[12:04:12] [Server thread/INFO]: There are 3 of a max of 20 players online: Alex, Steve, Nova'},
      {c:'cmd',t:'tps'},
      {c:'ok', t:'[12:04:18] [Server thread/INFO]: TPS from last 1m, 5m, 15m: 20.0, 20.0, 19.98'},
    ];
    const badge={cmd:'CMD',inf:'INF',ok:'INF',wrn:'WRN'};
    let li=0, ci=0, out='', started=false;
    function step(){
      if(li>=lines.length){ setTimeout(()=>{ out=''; li=0; ci=0; step(); }, 4600); return; }
      const L=lines[li];
      if(ci===0){ out += `<span class="lvl">${badge[L.c]}</span> `; }
      if(ci<=L.t.length){
        body.innerHTML=out+`<span class="${L.c}">${esc(L.t.slice(0,ci))}</span>`;
        body.scrollTop=body.scrollHeight;
        ci++; setTimeout(step, L.c==='cmd'?38:9);
      } else { out += `<span class="${L.c}">${esc(L.t)}</span>\n`; li++; ci=0; setTimeout(step,260); }
    }
    function start(){ if(started) return; started=true; if(reduce){ body.innerHTML=lines.map(L=>`<span class="lvl">${badge[L.c]}</span> <span class="${L.c}">${esc(L.t)}</span>`).join('\n'); } else setTimeout(step,300); }
    onceInView($('#console-band'),start);
  })();

  // ---------- AI terminal (starts on scroll-in) ----------
  (function(){
    const body=$('#aiTerm'); if(!body) return;
    const rows=[
      '<span class="d">> </span><span class="k">doctor_report</span>',
      '<span class="d">  checking port 25565 … </span><span class="ok">free</span>',
      '<span class="d">  scanning console … </span><span class="ok">no errors</span>',
      '<span class="d">  tps 20.0 · mspt 3.4 · ram 2.1/6 GB</span>',
      '<span class="ok">  all clear — nothing to fix.</span>',
      '',
      '<span class="d">> </span><span class="k">plan_modpack</span><span class="d"> (create, jei, sodium)</span>',
      '<span class="d">  resolved 3 projects · 1 dependency added</span>',
      '<span class="d">  awaiting confirmation …</span>',
      '<span class="ok">  installed 3 files. restart to apply.</span>',
    ];
    let i=0, started=false;
    function push(){ if(i>=rows.length){ setTimeout(()=>{ body.innerHTML=''; i=0; push(); }, 5200); return; } body.innerHTML+=rows[i]+'\n'; body.scrollTop=body.scrollHeight; i++; setTimeout(push, 520); }
    function start(){ if(started) return; started=true; if(reduce){ body.innerHTML=rows.join('\n'); } else setTimeout(push, 500); }
    onceInView($('#ai'),start);
  })();

  // ---------- ongoing metric jitter (after the counter warm-up in motion.js) ----------
  (function(){
    const els={tps:$('#roTps'),mspt:$('#roMspt'),cpu:$('#roCpu'),ram:$('#roRam')};
    if(!els.tps||reduce) return;
    const st={tps:20,mspt:3.4,cpu:18,ram:2.1};
    function tween(el,to,fmt,cls){ if(!el) return; const from=parseFloat(el.dataset.v||el.textContent)||0; const t0=performance.now();
      (function step(now){ const k=Math.min(1,(now-t0)/420); const e=1-Math.pow(1-k,3); const v=from+(to-from)*e; el.textContent=fmt(v); el.dataset.v=v; if(cls!==undefined) el.className=cls; if(k<1) requestAnimationFrame(step); })(performance.now()); }
    function jitter(){ st.tps=Math.max(19.6,Math.min(20,st.tps+(Math.random()-0.5)*0.12)); st.mspt=Math.max(2.4,Math.min(5.6,st.mspt+(Math.random()-0.5)*0.5)); st.cpu=Math.max(8,Math.min(46,st.cpu+(Math.random()-0.5)*9)); st.ram=Math.max(1.6,Math.min(3.4,st.ram+(Math.random()-0.5)*0.25));
      tween(els.tps,st.tps,v=>v.toFixed(2),st.tps>=19?'ok':st.tps>=17?'warn':'bad');
      tween(els.mspt,st.mspt,v=>v.toFixed(2),st.mspt<25?'ok':'warn');
      tween(els.cpu,st.cpu,v=>Math.round(v)+'%',st.cpu<60?'ok':st.cpu<85?'warn':'bad');
      tween(els.ram,st.ram,v=>v.toFixed(1)+' / 6 GB',''); }
    // delay so motion.js's 1.1s counter warm-up completes first
    setTimeout(()=>setInterval(jitter,2200),1400);
  })();

  // ---------- scroll-reveal fallback ----------
  (function(){
    if(typeof CSS!=='undefined' && CSS.supports && CSS.supports('animation-timeline: view()')) return;
    document.documentElement.classList.add('no-sda');
    const targets=document.querySelectorAll('.band-head,.feat-grid,.soft-grid,.intro-grid,.ai-inner,.privacy-grid,.dl-inner,.instrument');
    targets.forEach(t=>t.classList.add('reveal-init'));
    if(!('IntersectionObserver' in window)||reduce){ targets.forEach(t=>{t.classList.remove('reveal-init');t.classList.add('reveal-in')}); return; }
    const io=new IntersectionObserver((entries)=>{ entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.remove('reveal-init'); e.target.classList.add('reveal-in'); io.unobserve(e.target); } }); },{rootMargin:'0px 0px -12% 0px',threshold:.08});
    targets.forEach(t=>io.observe(t));
  })();
})();
