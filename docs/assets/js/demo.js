/* ============================================================
   CWF · demo.js — CSS live, copier, lignes Grid, boutons .tog
   ============================================================ */

/* ========== 1. Le CSS affiché EST le CSS appliqué ========== */
(function(){
  let n = 0;
  document.querySelectorAll('.try').forEach(t=>{
    t.id = 'try-' + (++n);
    const css = [...t.querySelectorAll('code.live')]
      .map(c => c.textContent).join('\n');
    if (!css) return;
    const s = document.createElement('style');
    s.textContent = '#' + t.id + ' {\n' + css + '\n}';
    document.head.appendChild(s);
  });
})();

/* ========== 2. Boutons "Copier" ========== */
(function(){
  document.querySelectorAll('pre').forEach(pre=>{
    if (pre.id === 'pg-code') return;
    const b = document.createElement('button');
    b.className = 'copy';
    b.type = 'button';
    b.textContent = 'Copier';
    b.addEventListener('click', ()=>{
      const txt = pre.querySelector('code').textContent;
      (navigator.clipboard ? navigator.clipboard.writeText(txt) : Promise.reject())
        .then(()=>{ b.textContent='Copié ✓'; setTimeout(()=>b.textContent='Copier', 1400); })
        .catch(()=>{ b.textContent='—'; });
    });
    pre.appendChild(b);
  });
})();

/* ========== 3. Pastilles de numéros de lignes Grid ========== */
function drawLines(el){
  el.querySelectorAll(':scope > .ln').forEach(x=>x.remove());
  const cs = getComputedStyle(el);
  const num = v => v.split(/\s+/).map(parseFloat).filter(x=>!isNaN(x));
  const cols = num(cs.gridTemplateColumns);
  const rows = num(cs.gridTemplateRows);
  const cg = parseFloat(cs.columnGap) || 0;
  const rg = parseFloat(cs.rowGap) || 0;
  const padL = parseFloat(cs.paddingLeft);
  const padT = parseFloat(cs.paddingTop);

  function positions(tr, gap, pad){
    if (!tr.length) return [];
    let x = pad; const st=[], en=[];
    tr.forEach(w=>{ st.push(x); x+=w; en.push(x); x+=gap; });
    return [st[0], ...en.slice(0,-1).map(e=>e+gap/2), en[en.length-1]];
  }
  const add = (cls,l,t,txt)=>{
    const s = document.createElement('span');
    s.className = 'ln ' + cls;
    s.style.left = l + 'px';
    s.style.top  = t + 'px';
    s.textContent = txt;
    el.appendChild(s);
  };
  positions(cols, cg, padL).forEach((p,i)=>add('c', p-9, 5, i+1));
  positions(rows, rg, padT).forEach((p,i)=>add('r', 5, p-9, i+1));
}
window.drawLines = drawLines;

const roLines = new ResizeObserver(es => es.forEach(e => drawLines(e.target)));
document.querySelectorAll('.demo.lines').forEach(el=>{
  drawLines(el);
  roLines.observe(el);
});

/* ========== 4. Boutons de test .tog ========== */
document.querySelectorAll('.tog').forEach(tog=>{
  const prop = tog.dataset.prop;
  const vals = tog.dataset.values.split(' ');
  const def  = tog.dataset.default || vals[0];
  const lab  = document.createElement('label');
  lab.textContent = prop + ':';
  tog.appendChild(lab);

  vals.forEach(v=>{
    const b = document.createElement('button');
    b.type = 'button';
    b.textContent = v;
    if (v === def) b.classList.add('on');
    b.addEventListener('click', ()=>{
      tog.querySelectorAll('button').forEach(x=>x.classList.toggle('on', x===b));
      const t = tog.closest('.try');
      t.querySelectorAll(tog.dataset.target).forEach(el=>el.style.setProperty(prop, v));
      // Met à jour le code affiché si la prop y figure
      const re = new RegExp('(^|\\s)' + prop + '\\s*:\\s*[^;]+;');
      for (const c of t.querySelectorAll('code.live')){
        if (re.test(c.textContent)){
          c.textContent = c.textContent.replace(re, (m,p)=> p + prop + ': ' + v + ';');
          if (window.Prism) Prism.highlightElement(c);
          break;
        }
      }
      t.querySelectorAll('.demo.lines').forEach(drawLines);
    });
    tog.appendChild(b);
  });
});

/* ========== 5. Calendrier (cellules vides en tête) ========== */
document.querySelectorAll('[data-cal]').forEach(el=>{
  ['Lu','Ma','Me','Je','Ve','Sa','Di'].forEach(d=>{
    const h = document.createElement('div');
    h.className = 'ent';
    h.textContent = d;
    el.appendChild(h);
  });
  // Octobre 2026 commence un jeudi → 3 cellules vides
  const offset = parseInt(el.dataset.offset || '3', 10);
  for (let i=0; i<offset; i++){
    const v = document.createElement('div');
    v.className = 'vide';
    v.textContent = '·';
    el.appendChild(v);
  }
  for (let d=1; d<=31; d++){
    const c = document.createElement('div');
    c.textContent = d;
    const idx = (d + offset - 1) % 7;
    if (idx >= 5) c.classList.add('we');
    el.appendChild(c);
  }
});