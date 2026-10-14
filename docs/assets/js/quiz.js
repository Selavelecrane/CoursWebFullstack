/* ============================================================
   CWF · quiz.js — Moteur de quiz interactif
   ============================================================ */
(function(){
  let finalCorrect = 0, finalTotal = 0;

  document.querySelectorAll('.quiz').forEach(quiz=>{
    const opts = quiz.querySelectorAll('.quiz-opt');
    const fb   = quiz.querySelector('.quiz-fb');
    const correct = quiz.dataset.answer;
    const isFinal = quiz.closest('#quiz-final') !== null;
    if (isFinal) finalTotal++;

    opts.forEach(opt=>{
      opt.addEventListener('click', ()=>{
        if (quiz.dataset.locked) return;
        quiz.dataset.locked = '1';

        opts.forEach(o=>{
          o.classList.add('disabled');
          if (o.dataset.opt === correct) o.classList.add('correct');
        });

        if (opt.dataset.opt === correct){
          fb.textContent = "✅ Bravo, c'est exactement ça !";
          fb.className = 'quiz-fb show ok';
          if (isFinal) finalCorrect++;
        } else {
          opt.classList.add('wrong');
          fb.textContent = '❌ Pas tout à fait. La bonne réponse est surlignée en vert.';
          fb.className = 'quiz-fb show ko';
        }

        if (isFinal){
          const s = document.getElementById('finalScore');
          if (s){
            s.classList.add('show');
            document.getElementById('scoreVal').textContent = finalCorrect;
            const m = document.getElementById('scoreMsg');
            if (finalCorrect === finalTotal) m.textContent = '🏆 Sans faute !';
            else if (finalCorrect >= finalTotal*0.7) m.textContent = '👍 Très bon niveau.';
            else if (finalCorrect >= finalTotal*0.4) m.textContent = '💪 Pas mal, relis les chapitres concernés.';
            else m.textContent = '📚 Reprends le cours depuis le début.';
          }
        }
      });
    });
  });
})();