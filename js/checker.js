function norm(s) { return s.replace(/\s+/g, ' ').trim().toLowerCase().replace(/←/g, '<-'); }

function autoCheck(ta) {
    const rawCode = ta.value, card = ta.closest('.card');
    if (!card) return;
    const cks = card.querySelectorAll('.ck');
    if (!cks.length || rawCode.length < 15) return;
    // Strip comments before matching to avoid false positives
    const code = rawCode.split('\n').map(l => l.replace(/\/\/.*$/g, '')).join('\n');
    const warns = [];
    const hasArrow = /(<-|←)/.test(code);
    const usesEq = /[^!<>=]=[^=]/.test(code.replace(/<-/g, 'XX').replace(/←/g, 'XX').replace(/>=/g, 'XX').replace(/<=/g, 'XX').replace(/!=/g, 'XX'));
    if (usesEq && !hasArrow) warns.push('⚠️ Use "<-" for assignment, not "=". USTHB rule!');
    // Auto-tick checklist (yellow = detected, not verified)
    if (T[cur] && T[cur].exercises.t3 && T[cur].exercises.t3.checks) {
        T[cur].exercises.t3.checks.forEach((txt, i) => {
            if (i >= cks.length) return;
            if (cks[i].classList.contains('on') && !cks[i].classList.contains('auto')) return; // manual override
            let m = false; const cl = txt.toLowerCase();
            const arrow = '(?:<-|←)';
            if (T[cur].id === 'linkedlist') {
                if ((cl.includes('new node') || cl.includes('new(newe)')) && /new\s*\(\s*newE\s*\)/i.test(code)) m = true;
                if ((cl.includes('*newe.data') || cl.includes('data')) && new RegExp('\\*\\s*newE\\s*\\.\\s*data\\s*' + arrow + '\\s*val\\b', 'i').test(code)) m = true;
                if (cl.includes('*newe.next') && cl.includes('null') && new RegExp('\\*\\s*newE\\s*\\.\\s*next\\s*' + arrow + '\\s*null\\b', 'i').test(code)) m = true;
                if ((cl.includes('empty list') || cl.includes('head = null')) && /head\s*=\s*null\b/i.test(code)) m = true;
                if ((cl.includes('traversed') || cl.includes('*curr.next = null')) && /While\s*\(\s*\*\s*curr\s*\.\s*next\s*!=\s*null\s*\)\s*Do/i.test(code)) m = true;
                if (cl.includes('linked the last node') && new RegExp('\\*\\s*curr\\s*\\.\\s*next\\s*' + arrow + '\\s*newE\\b', 'i').test(code)) m = true;
                if (cl.includes('returned head') && /Return\s+head\b/i.test(code)) m = true;
            }
            // Stricter patterns: require actual code structure, not just keyword
            if (cl.includes('<-') && hasArrow) m = true;
            if (cl.includes('struct') && /struct\s+\w+\s*\{/i.test(code)) m = true;
            if (cl.includes('return') && /Return\s+\w/i.test(code)) m = true;
            if (cl.includes('for') && /For\s+\w+\s*<-/i.test(code)) m = true;
            if (cl.includes('while') && /While\s*\(.+\)\s*Do/i.test(code)) m = true;
            if (cl.includes('null') && /NULL/i.test(code)) m = true;
            if (cl.includes('swap') && /temp\s*<-/i.test(code)) m = true;
            if (cl.includes('pointer') && /\*\w+\s*<-/i.test(code)) m = true;
            if (cl.includes('dereference') && /\*\w+\s*<-/i.test(code)) m = true;
            if (m) { cks[i].classList.add('on', 'auto'); cks[i].textContent = '~'; }
            else if (cks[i].classList.contains('auto')) { cks[i].classList.remove('on', 'auto'); cks[i].textContent = ''; }
        });
    }
    let w = card.querySelector('.syntax-warn');
    if (!w) { w = document.createElement('div'); w.className = 'syntax-warn'; ta.parentNode.insertBefore(w, ta.nextSibling); }
    if (warns.length) { w.innerHTML = warns.join('<br>'); w.classList.add('show'); } else { w.classList.remove('show'); }
}

function chkTr(i) {
    const t = T[cur].exercises.t1, inp = document.getElementById('tr' + i), fb = document.getElementById('trf' + i);
    const v = inp.value.trim(), k = 'tr' + i;
    if (!v) { inp.className = 'trace-in'; fb.innerHTML = ''; return; }
    if (norm(v) === norm(t.steps[i].ans)) {
        inp.className = 'trace-in ok';
        fb.innerHTML = '<span style="color:var(--green)">✓ Correct</span>';
        updProg(); saveProgress();
    } else {
        inp.className = 'trace-in err';
        wrongCounts[k] = (wrongCounts[k] || 0) + 1;
        if (wrongCounts[k] >= 2) fb.innerHTML = `<span style="color:var(--red)">✗ Answer: <code>${t.steps[i].ans}</code></span>`;
        else fb.innerHTML = `<span style="color:var(--red)">✗ Try again </span><button class="btn-sol" style="display:inline-block" onclick="this.parentElement.innerHTML='<span style=\\'color:var(--accent)\\'>Answer: ${t.steps[i].ans}</span>'">Show solution</button>`;
    }
}

function chkBl(i) {
    const t = T[cur].exercises.t2, inp = document.getElementById('bl' + i), fb = document.getElementById('blf' + i);
    const v = inp.value.trim(), k = 'bl' + i;
    if (!v) { inp.className = 'blank-in'; fb.innerHTML = ''; return; }
    if (norm(v) === norm(t.blanks[i].ans)) {
        inp.className = 'blank-in ok';
        fb.innerHTML = `<span style="color:var(--green)">✓ ${t.blanks[i].hint}</span>`;
        updProg(); saveProgress();
    } else {
        inp.className = 'blank-in err';
        wrongCounts[k] = (wrongCounts[k] || 0) + 1;
        if (wrongCounts[k] >= 2) fb.innerHTML = `<span style="color:var(--red)">Answer: <code>${esc(t.blanks[i].ans)}</code> — ${t.blanks[i].hint}</span>`;
        else fb.innerHTML = `<span style="color:var(--red)">✗ Hint: ${t.blanks[i].hint} </span><button class="btn-sol" style="display:inline-block" onclick="this.parentElement.innerHTML='<span style=\\'color:var(--accent)\\'>Answer: ${esc(t.blanks[i].ans)}</span>'">Show solution</button>`;
    }
}

function onT3(ta) { autoCheck(ta); updProg(); }

function togCk(i) {
    const e = document.getElementById('ck' + i);
    e.classList.toggle('on'); e.classList.remove('auto');
    e.textContent = e.classList.contains('on') ? '✓' : '';
    updProg(); saveProgress();
}
