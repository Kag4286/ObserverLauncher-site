// changelog.js — fetch CHANGELOG.md from the GitHub raw endpoint and render a release timeline
// with a sticky version index. Dependency-free Markdown subset (## release, ### section, bullets,
// **bold**, `code`). Releases reveal on scroll; the index tracks the active version.
(function(){
  const body=document.getElementById('clBody'); if(!body) return;
  const idx=document.getElementById('clIndex');
  const RAW='https://raw.githubusercontent.com/Kag4286/ObserverLauncher/main/CHANGELOG.md';
  const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;

  function esc(s){ return String(s).replace(/[&<>]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;'}[c])); }
  function inline(s){
    return esc(s)
      .replace(/\*\*([^*]+)\*\*/g,'<b>$1</b>')
      .replace(/`([^`]+)`/g,'<code>$1</code>');
  }

  function parse(md){
    const lines=md.split(/\r?\n/);
    const releases=[]; let cur=null; let mode=null;
    const push=()=>{ if(cur) releases.push(cur); };
    for(const raw of lines){
      const line=raw.replace(/\s+$/,'');
      let m=line.match(/^##\s*\[([^\]]+)\](?:\s*[—-]\s*(.+))?/);
      if(m){ push(); cur={ver:m[1],date:(m[2]||'').trim(),summary:[],secs:[],sec:null}; mode='release'; continue; }
      if(!cur) continue;
      let h=line.match(/^###\s+(.+)/);
      if(h){ cur.sec={title:h[1].trim(),items:[]}; cur.secs.push(cur.sec); mode='sec'; continue; }
      let b=line.match(/^[-*]\s+(.+)/);
      if(b){ if(cur.sec) cur.sec.items.push(b[1]); else cur.summary.push(b[1]); continue; }
      if(!line.trim()) continue;
      if(mode==='release') cur.summary.push(line.trim());
    }
    push();
    return releases;
  }

  function skeleton(){
    return Array.from({length:3}).map(()=>`<div class="cl-skel"><div class="cl-skel-head"><span class="cl-skel-bar w40"></span><span class="cl-skel-bar w20"></span></div><div class="cl-skel-line w90"></div><div class="cl-skel-line w70"></div></div>`).join('');
  }

  function slug(v){ return 'rel-'+String(v).replace(/[^a-z0-9]/gi,'-').toLowerCase(); }

  function render(releases){
    if(!releases.length){ body.innerHTML='<div class="cl-err">No releases found.</div>'; return; }
    body.innerHTML=releases.map((r,i)=>{
      const latest=i===0;
      const summary=r.summary.join(' ').trim();
      const secs=r.secs.map(s=>`<div class="cl-sec"><h4>${esc(s.title)}</h4><ul>${s.items.map(it=>`<li>${inline(it)}</li>`).join('')}</ul></div>`).join('');
      return `<article class="cl-release" id="${slug(r.ver)}" data-ver="${esc(r.ver)}">
        <div class="cl-release-head">
          <span class="cl-ver${latest?' latest':''}">${esc(r.ver)}</span>
          ${latest?'<span class="cl-latest-tag">LATEST</span>':''}
          ${r.date?`<span class="cl-date">${esc(r.date)}</span>`:''}
        </div>
        ${summary?`<p class="cl-summary">${inline(summary)}</p>`:''}
        ${secs}
      </article>`;
    }).join('');

    if(idx){
      idx.innerHTML=releases.map((r,i)=>`<a href="#${slug(r.ver)}" data-ver="${esc(r.ver)}"${i===0?' class="active"':''}><span>${esc(r.ver)}</span></a>`).join('');
      idx.parentElement.hidden=false;
      idx.querySelectorAll('a').forEach(a=>a.addEventListener('click',e=>{
        e.preventDefault();
        const el=document.getElementById(a.getAttribute('href').slice(1));
        if(el) el.scrollIntoView({behavior:reduce?'auto':'smooth',block:'start'});
      }));
    }

    // scroll reveal + active version tracking
    const rels=[...body.querySelectorAll('.cl-release')];
    if(reduce){ rels.forEach(r=>r.classList.add('in')); }
    else if('IntersectionObserver' in window){
      const io=new IntersectionObserver(es=>es.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); } }),{rootMargin:'0px 0px -12% 0px',threshold:.08});
      rels.forEach(r=>io.observe(r));
    } else rels.forEach(r=>r.classList.add('in'));

    if(idx&&'IntersectionObserver' in window){
      const links=[...idx.querySelectorAll('a')];
      const spy=new IntersectionObserver(es=>es.forEach(e=>{
        if(!e.isIntersecting) return;
        const v=e.target.dataset.ver;
        links.forEach(l=>l.classList.toggle('active',l.dataset.ver===v));
      }),{rootMargin:'-40% 0px -55% 0px',threshold:0});
      rels.forEach(r=>spy.observe(r));
    }
  }

  body.innerHTML=skeleton();
  fetch(RAW,{cache:'no-store'})
    .then(r=>{ if(!r.ok) throw new Error('HTTP '+r.status); return r.text(); })
    .then(md=>render(parse(md)))
    .catch(err=>{
      body.innerHTML=`<div class="cl-err">Could not load the changelog (${esc(err.message)}). <a href="https://github.com/Kag4286/ObserverLauncher/blob/main/CHANGELOG.md" target="_blank" rel="noopener">Open it on GitHub instead</a>.</div>`;
    });
})();
