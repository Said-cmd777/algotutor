function esc(s) { return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }

function dlCode(btn) {
    const ta = btn.closest('.card')?.querySelector('textarea.answer');
    if (!ta || !ta.value.trim()) { alert('Write some code first!'); return; }
    const blob = new Blob([ta.value], { type: 'text/plain' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = (T[cur] ? T[cur].name : 'algo').replace(/\s+/g, '_') + '_solution.txt';
    a.click(); URL.revokeObjectURL(a.href);
}

function buildGrid() {
    document.getElementById('topicGrid').innerHTML = T.map((t, i) => {
        if (t.locked) {
            return `<div class="topic-card locked" id="tc${i}">
      <div class="topic-icon" style="font-size:28px;opacity:.5">🔒</div>
      <div class="topic-name" style="opacity:.45">${t.name}</div>
      <div class="topic-sub" style="opacity:.4">${t.sub}</div>
      <div style="font-size:10px;color:var(--red);margin-top:4px;font-weight:600">🔴 Pas encore étudié</div>
    </div>`;
        }
        const p = topicPct(t.id), b = p > 0 ? `<span class="saved-badge">${p}%</span>` : '';
        return `<div class="topic-card" onclick="sel(${i})" id="tc${i}">
      <div class="topic-icon">${t.icon}</div>
      <div class="topic-name">${t.name}${b}</div>
      <div class="topic-sub">${t.sub}</div>
    </div>`;
    }).join('');
}

function buildAll() {
    const t = T[cur];
    document.getElementById('pills').innerHTML = `
    <div class="pill on" onclick="showSec(0)" id="p0">① Concept</div>
    <div class="pill" onclick="showSec(1)" id="p1">② Exercises</div>
    <div class="pill" onclick="showSec(2)" id="p2">③ Challenges</div>`;
    document.getElementById('sec0').innerHTML = buildConcept(t);
    document.getElementById('sec1').innerHTML = buildExercises(t);
    document.getElementById('sec2').innerHTML = buildChallenges(t);
    updProg();
}

function showSec(n) {
    saveProgress();
    [0, 1, 2].forEach(i => {
        document.getElementById('sec' + i).style.display = i === n ? 'block' : 'none';
        document.getElementById('p' + i).classList.toggle('on', i === n);
    });
}

function buildConcept(t) {
    const c = t.concept;
    return `<div class="section-head"><span class="section-num">1</span> Concept</div>
    <div class="card">
      <div class="card-title">${c.title}</div>
      <div class="real-world">🌍 <strong>Real-world:</strong> ${c.real}</div>
      <div style="margin:12px 0">${c.body}</div>
      <div class="diagram">${esc(c.diagram)}</div>
      <div style="font-size:14px;font-weight:700;margin:14px 0 6px;color:var(--accent)">USTHB Pseudocode:</div>
      <div class="code">${esc(c.code)}</div>
      <div class="insight">💡 ${c.insight}</div>
    </div>
    <div style="text-align:center;margin-top:14px">
      <button class="btn btn-p" onclick="showSec(1)">Go to Exercises →</button>
    </div>`;
}

function buildExercises(t) {
    return `<div class="section-head"><span class="section-num">2</span> Graduated Exercises</div>
    ${mkT1(t.exercises.t1)}${mkT2(t.exercises.t2)}${mkT3(t.exercises.t3)}
    <div style="text-align:center;margin-top:14px">
      <button class="btn btn-p" onclick="showSec(2)">Go to Challenges →</button>
    </div>`;
}

function mkT1(t) {
    const rows = t.steps.map((s, i) => `<tr>
    <td style="text-align:left;font-size:12px">${s.label}</td>
    <td><input class="trace-in" id="tr${i}" placeholder="?" oninput="chkTr(${i})" onchange="saveProgress()"></td>
    <td id="trf${i}" style="font-size:12px"></td></tr>`).join('');
    return `<div class="card"><span class="tier-badge t1">TIER 1 — TRACE</span>
    <div class="card-title">${t.title}</div><div class="desc">${t.desc}</div>
    <div class="code">${esc(t.code)}</div>
    <table class="trace-tbl"><thead><tr><th>Step</th><th>Answer</th><th>Feedback</th></tr></thead>
    <tbody>${rows}</tbody></table></div>`;
}

function mkT2(t) {
    const bl = t.blanks.map((b, i) => `<div style="margin:10px 0">
    <div style="font-size:12px;color:var(--text2);margin-bottom:4px">${i + 1}. ${b.ph}</div>
    <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap">
      <input class="blank-in" id="bl${i}" placeholder="..." oninput="chkBl(${i})" onchange="saveProgress()">
      <span id="blf${i}" style="font-size:12px"></span>
    </div></div>`).join('');
    return `<div class="card"><span class="tier-badge t2">TIER 2 — FILL</span>
    <div class="card-title">${t.title}</div><div class="desc">${t.desc}</div>
    <div class="code">${esc(t.code)}</div>
    <div style="margin-top:12px">${bl}</div></div>`;
}

function mkT3(t) {
    const cks = t.checks.map((c, i) => `<li><div class="ck" id="ck${i}" onclick="togCk(${i})"></div><span>${c}</span></li>`).join('');
    return `<div class="card"><span class="tier-badge t3">TIER 3 — BUILD</span>
    <div class="card-title">${t.title}</div>
    <div class="real-world">🎯 <strong>Scenario:</strong> ${t.scenario}</div>
    <div class="desc" style="margin-top:8px">${t.desc}</div>
    <textarea class="answer" placeholder="Write your algorithm here..." oninput="onT3(this)" onblur="saveProgress()"></textarea>
    <div class="btn-row">
      <button class="btn btn-p" onclick="showRef()">Show Reference Solution</button>
      <button class="btn-dl" onclick="dlCode(this)">📥 Download My Code</button>
    </div>
    <div class="reveal" id="refSol">
      <div style="font-size:14px;font-weight:700;margin-bottom:10px;color:var(--accent)">Compare:</div>
      <div class="side">
        <div><div style="font-size:11px;color:var(--text2);margin-bottom:4px;font-weight:600">YOUR ANSWER</div>
          <div class="code" id="stuSol" style="min-height:60px;white-space:pre-wrap"></div></div>
        <div><div style="font-size:11px;color:var(--green);margin-bottom:4px;font-weight:600">REFERENCE</div>
          <div class="code">${esc(t.ref)}</div></div>
      </div>
      <div style="margin-top:14px;font-weight:700;font-size:14px">Checklist (auto-checked ✓):</div>
      <ul class="ck-list">${cks}</ul>
    </div></div>`;
}

function showRef() {
    const b = document.getElementById('refSol'); b.classList.add('show');
    const ta = b.closest('.card').querySelector('textarea');
    document.getElementById('stuSol').textContent = ta ? ta.value || '(empty)' : '';
    saveProgress();
}

function buildChallenges(t) {
    if (!t.challenges || !t.challenges.length) return '<div class="section-head"><span class="section-num">3</span> Challenges</div><div class="card"><p>Coming soon.</p></div>';
    return `<div class="section-head"><span class="section-num">3</span> Challenge Problems</div>
    ${t.challenges.map((c, i) => mkCh(c, i)).join('')}`;
}

function mkCh(c, ci) {
    const h = c.hints.map((h, hi) => `<button class="hint-btn" onclick="document.getElementById('h${ci}_${hi}').classList.add('show')">Hint ${hi + 1}</button>
    <div class="hint-box" id="h${ci}_${hi}">💡 ${h}</div>`).join('');
    return `<div class="ch-card"><div class="ch-title">${c.title}</div>
    <div class="ch-scene">${c.scene}</div>
    <div style="font-size:15px;font-weight:600;margin-bottom:12px">❓ ${c.q}</div>
    <div style="margin-bottom:8px">${h}</div>
    <textarea class="answer" placeholder="Think, then write..." oninput="updProg()" onblur="saveProgress()"></textarea>
    <div class="btn-row">
      <button class="btn btn-g" onclick="document.getElementById('cs${ci}').classList.add('show');saveProgress()">Show Solution</button>
      <button class="btn-dl" onclick="dlCode(this)">📥 Download</button>
    </div>
    <div class="reveal" id="cs${ci}">
      <div style="font-size:14px;font-weight:700;margin-bottom:8px;color:var(--purple)">Solution:</div>
      <div class="code">${esc(c.sol)}</div>
    </div></div>`;
}

function updProg() {
    const ok = document.querySelectorAll('.trace-in.ok,.blank-in.ok').length;
    const f = [...document.querySelectorAll('textarea.answer')].filter(t => t.value.trim().length > 10).length;
    const c = document.querySelectorAll('.ck.on').length;
    const total = document.querySelectorAll('.trace-in').length + document.querySelectorAll('.blank-in').length + document.querySelectorAll('textarea.answer').length + document.querySelectorAll('.ck').length;
    const pct = total > 0 ? Math.min(100, Math.round((ok + f + c) / total * 100)) : 0;
    document.getElementById('progress-bar').style.width = pct + '%';
    document.getElementById('progress-pct').textContent = pct + '%';
}
