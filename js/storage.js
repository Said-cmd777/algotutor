const SK = 'algotutor_v3';

// ── Export / Import progress ──────────────────────
function exportProgress() {
    const data = loadAll();
    if (!Object.keys(data).length) { alert('No progress saved yet. Complete some exercises first!'); return; }
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'algotutor_progress.json';
    a.click(); URL.revokeObjectURL(a.href);
}
function importProgress() {
    document.getElementById('importFile').click();
}
function doImport(e) {
    const f = e.target.files[0]; if (!f) return;
    const r = new FileReader();
    r.onload = ev => {
        try {
            const d = JSON.parse(ev.target.result);
            localStorage.setItem(SK, JSON.stringify(d));
            alert('✅ Progress restored!');
            if (typeof _loading !== 'undefined') _loading = true;
            location.reload();
        } catch (err) { alert('❌ Invalid file. Please use a file exported from AlgoTutor.'); }
    };
    r.readAsText(f);
    e.target.value = '';
}

function saveProgress() {
    if (cur === null || _loading) return;
    const d = loadAll(), id = T[cur].id;
    d[id] = {
        tr: [...document.querySelectorAll('.trace-in')].map(e => ({ v: e.value, c: e.classList.contains('ok') })),
        bl: [...document.querySelectorAll('.blank-in')].map(e => ({ v: e.value, c: e.classList.contains('ok') })),
        ta: [...document.querySelectorAll('textarea.answer')].map(e => e.value),
        ck: [...document.querySelectorAll('.ck')].map(e => e.classList.contains('on')),
        wc: wrongCounts
    };
    try { localStorage.setItem(SK, JSON.stringify(d)); } catch (e) { }
}
function loadAll() {
    try {
        const raw = JSON.parse(localStorage.getItem(SK)) || {};
        if (!Array.isArray(window.T)) return raw;
        const valid = new Set(T.map(t => t.id));
        let changed = false;
        const data = {};
        Object.keys(raw).forEach(id => {
            if (valid.has(id)) data[id] = raw[id];
            else changed = true;
        });
        if (changed) localStorage.setItem(SK, JSON.stringify(data));
        return data;
    } catch (e) { return {}; }
}
function restore() {
    if (cur === null) return;
    const s = (loadAll())[T[cur].id];
    if (!s) return;
    wrongCounts = s.wc || {};
    const tr = document.querySelectorAll('.trace-in');
    (s.tr || []).forEach((x, i) => { if (tr[i] && x.v) { tr[i].value = x.v; if (x.c) tr[i].className = 'trace-in ok'; } });
    const bl = document.querySelectorAll('.blank-in');
    (s.bl || []).forEach((x, i) => { if (bl[i] && x.v) { bl[i].value = x.v; if (x.c) bl[i].className = 'blank-in ok'; } });
    const ta = document.querySelectorAll('textarea.answer');
    (s.ta || []).forEach((x, i) => { if (ta[i] && x) ta[i].value = x; });
    const ck = document.querySelectorAll('.ck');
    (s.ck || []).forEach((x, i) => { if (ck[i] && x) { ck[i].classList.add('on'); ck[i].textContent = '✓'; } });
    updProg();
    ta.forEach(t => autoCheck(t));
}
function topicPct(id) {
    const s = (loadAll())[id];
    if (!s) return 0;
    const a = (s.tr || []).filter(x => x.c).length + (s.bl || []).filter(x => x.c).length;
    const b = (s.ta || []).filter(x => x && x.trim().length > 10).length;
    const c = (s.ck || []).filter(x => x).length;
    const t = (s.tr || []).length + (s.bl || []).length + (s.ta || []).length + (s.ck || []).length;
    return t > 0 ? Math.round((a + b + c) / t * 100) : 0;
}
