/* ============================================================
   CWF · nav.js — Sidebar, progression, navigation
   ============================================================ */

(function(){
  const COURS = window.COURS;
  const BASE = window.BASE_URL || "./";

  /* --- URL d'un chapitre --- */
  function urlChap(modId, chapId){
    return BASE + modId + "/" + chapId + ".html";
  }

  /* --- Chapitre courant (via l'URL) --- */
  const path = location.pathname;
  let current = { mod: null, chap: null };
  COURS.modules.forEach(m => {
    m.chapitres.forEach(c => {
      if (path.endsWith("/" + m.id + "/" + c.id + ".html")) {
        current = { mod: m.id, chap: c.id };
      }
    });
  });

  /* --- Progression (localStorage) --- */
  const KEY = "cwf_done_";
  function isDone(modId, chapId){ return localStorage.getItem(KEY + modId + "-" + chapId) === "1"; }
  function markDone(modId, chapId){ localStorage.setItem(KEY + modId + "-" + chapId, "1"); }
  function totalDispo(){
    let n = 0;
    COURS.modules.forEach(m => m.chapitres.forEach(c => { if(c.dispo) n++; }));
    return n;
  }
  function totalDone(){
    let n = 0;
    COURS.modules.forEach(m => m.chapitres.forEach(c => {
      if(c.dispo && isDone(m.id, c.id)) n++;
    }));
    return n;
  }

  /* --- Construction de la sidebar --- */
  const nav = document.getElementById("nav");
  if (nav) {
    COURS.modules.forEach(m => {
      const wrap = document.createElement("div");
      wrap.className = "nav-level";
      wrap.style.setProperty("--lv", m.couleur);

      const a = document.createElement("a");
      a.href = "#";
      a.innerHTML = '<span class="dot"></span>' + m.emoji + " " + m.titre;
      wrap.appendChild(a);

      const ul = document.createElement("ul");
      m.chapitres.forEach(c => {
        const li = document.createElement("li");
        const link = document.createElement("a");
        const done = isDone(m.id, c.id);
        const act = (current.mod === m.id && current.chap === c.id);

        if (!c.dispo) {
          link.href = "javascript:void(0)";
          link.classList.add("locked");
        } else {
          link.href = urlChap(m.id, c.id);
        }
        if (act) link.classList.add("act");

        link.innerHTML = (done ? '<span class="done">✓</span> ' : '') + c.titre;
        li.appendChild(link);
        ul.appendChild(li);
      });
      wrap.appendChild(ul);
      nav.appendChild(wrap);
    });

    /* --- Mini-barre de progression --- */
    const done = totalDone(), tot = totalDispo();
    const pct = tot ? Math.round(done / tot * 100) : 0;
    const box = document.createElement("div");
    box.className = "progress-mini";
    box.innerHTML = `
      <b>Progression</b>
      ${done} / ${tot} chapitres · ${pct} %
      <div class="bar"><i style="width:${pct}%"></i></div>
    `;
    nav.appendChild(box);
  }

  /* --- Burger mobile --- */
  const burger = document.getElementById("burger");
  const side = document.getElementById("side");
  if (burger && side) {
    burger.addEventListener("click", () => side.classList.toggle("open"));
    document.addEventListener("click", e => {
      if (window.innerWidth <= 980
          && side.classList.contains("open")
          && !side.contains(e.target)
          && e.target !== burger) {
        side.classList.remove("open");
      }
    });
  }

  /* --- Barre de progression en haut --- */
  const bar = document.getElementById("progress");
  if (bar) {
    addEventListener("scroll", () => {
      const h = document.documentElement;
      const p = h.scrollTop / (h.scrollHeight - h.clientHeight) * 100;
      bar.style.width = p + "%";
    }, { passive: true });
  }

  /* --- Navigation prev/next + bouton "marquer comme lu" --- */
  const navBox = document.getElementById("chap-nav");
  if (navBox && current.mod && current.chap) {
    const flat = [];
    COURS.modules.forEach(m => m.chapitres.forEach(c => {
      if (c.dispo) flat.push({ mod: m.id, chap: c.id, titre: c.titre });
    }));
    const idx = flat.findIndex(x => x.mod === current.mod && x.chap === current.chap);
    const prev = idx > 0 ? flat[idx - 1] : null;
    const next = idx < flat.length - 1 ? flat[idx + 1] : null;

    const html = `
      <a class="${prev ? "" : "disabled"}"
         href="${prev ? urlChap(prev.mod, prev.chap) : "#"}">
        ← ${prev ? prev.titre : "Début"}
      </a>
      <a class="next ${next ? "" : "disabled"}"
         href="${next ? urlChap(next.mod, next.chap) : "#"}">
        ${next ? next.titre : "Fin"} →
      </a>
    `;
    navBox.innerHTML = html;
  }

  /* --- Bouton "marquer comme lu" --- */
  const doneBox = document.getElementById("mark-done");
  if (doneBox && current.mod && current.chap) {
    const already = isDone(current.mod, current.chap);
    const btn = document.createElement("button");
    btn.textContent = already ? "✓ Chapitre terminé" : "Marquer comme terminé";
    if (already) btn.classList.add("done");
    btn.addEventListener("click", () => {
      markDone(current.mod, current.chap);
      btn.textContent = "✓ Chapitre terminé";
      btn.classList.add("done");
    });
    doneBox.appendChild(btn);
  }

  /* --- Accueil : construction de la liste des modules --- */
  const accueilModules = document.getElementById("accueil-modules");
  if (accueilModules) {
    COURS.modules.forEach(m => {
      const card = document.createElement("a");
      card.className = "module-card";
      card.style.setProperty("--lv", m.couleur);
      const firstChap = m.chapitres.find(c => c.dispo);
      card.href = firstChap ? urlChap(m.id, firstChap.id) : "javascript:void(0)";

      const li = m.chapitres.map(c =>
        `<li>${c.titre}</li>`
      ).join("");

      const dispoCount = m.chapitres.filter(c => c.dispo).length;

      card.innerHTML = `
        <div class="mc-head">
          <span class="mc-emoji">${m.emoji}</span>
          <h3>${m.titre}</h3>
        </div>
        <p>${m.description}</p>
        <ol>${li}</ol>
        <div class="mc-count">${dispoCount} / ${m.chapitres.length} chapitres disponibles</div>
      `;
      accueilModules.appendChild(card);
    });
  }
})();