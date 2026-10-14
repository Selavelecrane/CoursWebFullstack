/* ============================================================
   CWF · resize.js — Démos redimensionnables (pointer events)
   ============================================================ */
(function(){
  /* Injecte les handles dans tous les .sizer.rs */
  document.querySelectorAll('.sizer.rs').forEach(sizer=>{
    if(!sizer.querySelector('.resize-handle')){
      const h=document.createElement('div');
      h.className='resize-handle';
      h.title='Glisser pour redimensionner';
      sizer.appendChild(h);
    }
    if(!sizer.querySelector('.resize-hint')){
      const hint=document.createElement('div');
      hint.className='resize-hint';
      hint.textContent='↔ redimensionne-moi';
      sizer.appendChild(hint);
    }
  });

  let drag=null;

  function startDrag(handle, clientX, pointerId){
    const sizer=handle.parentElement;
    drag={
      sizer, handle,
      startX:clientX,
      startW:sizer.getBoundingClientRect().width,
      maxW:sizer.parentElement.getBoundingClientRect().width
    };
    handle.classList.add('drag');
    document.body.style.userSelect='none';
    document.body.style.cursor='ew-resize';
    try{ handle.setPointerCapture(pointerId); }catch(_){}
  }
  function moveDrag(clientX){
    if(!drag) return;
    const dx=clientX-drag.startX;
    const w=Math.max(200, Math.min(drag.maxW, drag.startW+dx));
    drag.sizer.style.width=w+'px';
  }
  function endDrag(pointerId){
    if(!drag) return;
    drag.handle.classList.remove('drag');
    document.body.style.userSelect='';
    document.body.style.cursor='';
    try{ drag.handle.releasePointerCapture(pointerId); }catch(_){}
    drag=null;
  }

  document.addEventListener('pointerdown', e=>{
    const h=e.target.closest('.resize-handle');
    if(!h) return;
    e.preventDefault();
    startDrag(h, e.clientX, e.pointerId);
  });
  document.addEventListener('pointermove', e=>{
    if(!drag) return;
    e.preventDefault();
    moveDrag(e.clientX);
  });
  document.addEventListener('pointerup', e=>{ if(drag) endDrag(e.pointerId); });
  document.addEventListener('pointercancel', e=>{ if(drag) endDrag(e.pointerId); });
})();