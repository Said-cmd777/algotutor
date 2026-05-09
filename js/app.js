var cur = null, wrongCounts = {}, _loading = false;

const ORDER = ['vars', 'cond', 'loops', 'arrays', 'matrix', 'sort', 'bsearch', 'func', 'recursion', 'ptr', 'strings', 'struct', 'linkedlist'];
T.sort((a, b) => ORDER.indexOf(a.id) - ORDER.indexOf(b.id));

function sel(i) {
    if (T[i].locked) return;
    document.querySelectorAll('.topic-card').forEach(c => c.classList.remove('sel'));
    document.getElementById('tc' + i).classList.add('sel');
    cur = i; wrongCounts = {};
    document.getElementById('start-screen').style.display = 'none';
    document.getElementById('tutor-area').style.display = 'block';
    document.getElementById('backBtn').style.display = 'inline-flex';
    _loading = true;
    buildAll(); restore();
    _loading = false;
    showSec(0);
}

function goHome() {
    saveProgress();
    document.getElementById('start-screen').style.display = 'block';
    document.getElementById('tutor-area').style.display = 'none';
    document.getElementById('backBtn').style.display = 'none';
    cur = null; buildGrid(); updProg();
}

window.addEventListener('beforeunload', () => saveProgress());
buildGrid();
