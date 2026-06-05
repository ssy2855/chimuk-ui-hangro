const A = 'assets/';
const STORAGE_KEY = 'silent-route-state-v1';

const locations = {
  deck: { title: '갑판', bg: 'space-deck.jpg', objective: '갑판에서 사진과 촬영 시간 기록을 확인하라.' },
  corridor: { title: '복도', bg: 'space-corridor.jpg', objective: '복도의 발자국과 손잡이 흔적을 비교하라.' },
  lounge: { title: 'VIP 라운지', bg: 'space-lounge.jpg', objective: '라운지의 컵과 좌석 배치도를 조사하라.' },
  medical: { title: '의무실', bg: 'space-medical.jpg', objective: '의료 기록과 사라진 약품을 확인하라.' },
  office: { title: '사무실', bg: 'space-office.jpg', objective: '내부 이메일과 압박 문서를 조사하라.' },
  cabin: { title: '객실 712호', bg: 'space-cabin.jpg', objective: '호출 기록과 객실 안의 충돌 흔적을 확인하라.' },
  communication: { title: '통신실', bg: 'space-communication.jpg', objective: '증거 송신을 위한 콘솔과 잠긴 항로를 해석하라.' }
};

const clues = [
  { id:'deck-photo-set', title:'갑판 사진 묶음', location:'deck', thumb:'thumb-deck-photo-set.png', image:'clue-deck-photo-set.jpg', desc:'갑판에서 촬영된 사진 묶음이다. 시간 흐름을 추적할 수 있다.', x:35, y:48 },
  { id:'deck-time-note', title:'촬영 시간 메모', location:'deck', thumb:'thumb-deck-time-note.png', image:'clue-deck-time-note.jpg', desc:'22시대의 짧은 기록이 적힌 메모다.', x:63, y:62 },
  { id:'corridor-footprints', title:'복도 발자국', location:'corridor', thumb:'thumb-corridor-footprints.png', image:'clue-corridor-footprints.jpg', desc:'객실 앞에서 멈춘 구두 자국이다.', x:47, y:72 },
  { id:'corridor-handle', title:'문 손잡이 흔적', location:'corridor', thumb:'thumb-corridor-handle.png', image:'clue-corridor-handle.jpg', desc:'강한 압박과 손자국이 남은 손잡이다.', x:67, y:42 },
  { id:'lounge-cup', title:'라운지 컵 기록', location:'lounge', thumb:'thumb-lounge-cup.png', image:'clue-lounge-cups.jpg', desc:'물기와 잔 흔적이 남은 라운지의 컵이다.', x:54, y:67 },
  { id:'lounge-seat-map', title:'라운지 좌석 배치도', location:'lounge', thumb:'thumb-lounge-seat-map.png', image:'clue-lounge-seat-map(1).jpg', desc:'VIP 라운지의 좌석 배치도다.', x:30, y:54 },
  { id:'medical-log', title:'의무실 의료 로그', location:'medical', thumb:'thumb-medical-log.png', image:'clue-medical-log.jpg', desc:'피해자의 상태가 기록된 의무실 로그다.', x:37, y:56 },
  { id:'medical-missing-drug', title:'누락된 약품 케이스', location:'medical', thumb:'thumb-medical-missing-drug.png', image:'clue-medical-missing-drug.jpg', desc:'빈 슬롯이 남은 약품 케이스다.', x:67, y:48 },
  { id:'office-email-print', title:'내부 이메일 출력물', location:'office', thumb:'thumb-office-email-print.png', image:'clue-office-email-print.jpg', desc:'사건 직후 내부 보고 흔적이 남은 문서다.', x:36, y:52 },
  { id:'office-threat-note', title:'경고 메모 조각', location:'office', thumb:'thumb-office-threat-note.png', image:'clue-office-threat-note.jpg', desc:'누군가에게 침묵을 요구하는 듯한 찢어진 문서다.', x:66, y:59 },
  { id:'cabin-call-log', title:'객실 호출 기록', location:'cabin', thumb:'thumb-cabin-call-log.png', image:'clue-cabin-call-log.jpg', desc:'객실에서 반복된 호출과 응답 공백이 확인된다.', x:73, y:44 },
  { id:'cabin-scene-trace', title:'객실 충돌 흔적', location:'cabin', thumb:'thumb-cabin-scene-trace.png', image:'clue-cabin-scene-trace.jpg', desc:'깨진 유리와 흐트러진 천 조각이 남아 있다.', x:59, y:75 },
  { id:'communication-console', title:'통신 콘솔', location:'communication', thumb:'clue-communication-console.jpg', image:'clue-communication-console.jpg', desc:'외부 송신을 시도할 수 있는 콘솔이다.', x:33, y:66 },
  { id:'emergency-channel', title:'비상 채널 기록', location:'communication', thumb:'clue-emergency-channel.jpg', image:'clue-emergency-channel.jpg', desc:'잠긴 비상 채널과 주파수 기록이 보인다.', x:66, y:43 },
  { id:'transmission-code', title:'송신 코드 카드', location:'communication', thumb:'clue-transmission-code.jpg', image:'clue-transmission-code.jpg', desc:'숫자와 기호가 적힌 송신 코드 단서다.', x:49, y:55 },
  { id:'route-lock', title:'항로 잠금 기록', location:'communication', thumb:'clue-route-lock.jpg', image:'clue-route-lock.jpg', desc:'크루즈의 항로가 잠긴 화면이다.', x:76, y:70 }
];

const suspects = [
  { id:'kang', name:'강하나', role:'VIP 초청자', image:'suspect-kang-hana-file.jpg', summary:'피해자 회사와 과거 연결이 있는 인물.' },
  { id:'lee', name:'이민정', role:'과거 분쟁 당사자', image:'suspect-lee-minjeong-file.jpg', summary:'피해자와 과거 직접적인 갈등이 있었던 인물.' },
  { id:'hwang', name:'황세준', role:'행사 운영 담당', image:'suspect-hwang-sejun-file.jpg', summary:'통신실과 기록 접근 권한이 있는 인물.' },
  { id:'victim', name:'최태오', role:'제약회사 대표', image:'victim-choi-taeo-profile.jpg', summary:'VIP 크루즈 행사의 중심 인물.' }
];

const motiveDocs = [
  { id:'motive-kang-medical', person:'kang', title:'강하나 의료 기록', image:'motive-kang-medical-record.jpg', unlock:['medical-log'] },
  { id:'motive-kang-family', person:'kang', title:'낡은 가족의 편지', image:'motive-kang-family-letter.jpg', unlock:['medical-log','medical-missing-drug'] },
  { id:'motive-kang-side', person:'kang', title:'부작용 내부 보고서', image:'motive-kang-side-effect-report.jpg', unlock:['medical-missing-drug'] },
  { id:'motive-lee-photo', person:'lee', title:'오래된 찢어진 사진', image:'motive-lee-old-photo.jpg', unlock:['lounge-seat-map','cabin-scene-trace'] },
  { id:'motive-lee-call', person:'lee', title:'반복된 통화 기록', image:'motive-lee-call-record.jpg', unlock:['cabin-call-log'] },
  { id:'motive-lee-lawsuit', person:'lee', title:'반려된 진정서', image:'motive-lee-lawsuit-note.jpg', unlock:['office-email-print','cabin-call-log'] },
  { id:'motive-hwang-contract', person:'hwang', title:'VIP 행사 운영 계약서', image:'motive-hwang-contract.jpg', unlock:['office-email-print'] },
  { id:'motive-hwang-access', person:'hwang', title:'통신실 출입 기록', image:'motive-hwang-access-log.jpg', unlock:['communication-console','office-threat-note'] },
  { id:'motive-hwang-blackmail', person:'hwang', title:'내부 압박 문서', image:'motive-hwang-blackmail-file.jpg', unlock:['office-threat-note'] }
];

const puzzlePhotos = ['puzzle-photo-a.jpg','puzzle-photo-b.jpg','puzzle-photo-c.jpg','puzzle-photo-d.jpg','puzzle-photo-e.jpg'];
const state = {
  screen:'home', current:'deck', acquired:[], deckPuzzleSolved:false, reportSolved:false, reportAttempted:false, escapeSuccess:false, ending:null
};
let puzzleOrder = [...puzzlePhotos];

const $ = (s) => document.querySelector(s);
const el = {
  home: $('#homeScreen'), game: $('#gameScreen'), start: $('#startBtn'), cont: $('#continueBtn'), homeBtn: $('#homeBtn'), newGame: $('#newGameBtn'),
  title: $('#locationTitle'), objective: $('#objectiveText'), sceneBg: $('#sceneBg'), hotspots: $('#hotspots'), sceneHint: $('#sceneHint'),
  nav: $('#locationNav'), inv: $('#inventoryList'), suspectButtons: $('#suspectButtons'), archive: $('#motiveArchive'),
  progressText: $('#progressText'), progressBar: $('#progressBar'), photoPuzzle: $('#photoPuzzleBtn'), transmission: $('#transmissionBtn'), report: $('#reportBtn'),
  modal: $('#modal'), modalContent: $('#modalContent'), toast: $('#toast')
};

function path(file){ return A + file; }
function has(id){ return state.acquired.includes(id); }
function save(){ localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); }
function load(){ try{ const raw=localStorage.getItem(STORAGE_KEY); if(raw) Object.assign(state, JSON.parse(raw)); }catch(e){} }
function notify(msg){ el.toast.textContent=msg; el.toast.classList.add('show'); clearTimeout(notify.t); notify.t=setTimeout(()=>el.toast.classList.remove('show'), 1800); }

function showGame(reset=false){ if(reset){ resetGame(); } state.screen='game'; el.home.classList.add('hidden'); el.game.classList.remove('hidden'); render(); save(); }
function showHome(){ state.screen='home'; el.game.classList.add('hidden'); el.home.classList.remove('hidden'); save(); }
function resetGame(){ Object.assign(state,{screen:'game',current:'deck',acquired:[],deckPuzzleSolved:false,reportSolved:false,reportAttempted:false,escapeSuccess:false,ending:null}); puzzleOrder=[...puzzlePhotos]; localStorage.removeItem(STORAGE_KEY); }

function render(){ renderLocation(); renderNav(); renderInventory(); renderSuspects(); renderArchive(); renderProgress(); }
function renderLocation(){ const loc=locations[state.current]; el.title.textContent=loc.title; el.objective.textContent=loc.objective; el.sceneBg.src=path(loc.bg); el.sceneHint.textContent = state.current==='communication' ? '통신실 단서를 모은 뒤 송신 코드를 입력하세요.' : '반짝이는 오브젝트를 눌러 단서를 조사하세요.'; el.hotspots.innerHTML=''; clues.filter(c=>c.location===state.current).forEach(c=>{
    const btn=document.createElement('button'); btn.className='hotspot'+(has(c.id)?' acquired':''); btn.style.left=c.x+'%'; btn.style.top=c.y+'%'; btn.title=c.title;
    btn.innerHTML=`<img src="${path(c.thumb)}" alt="${c.title}"><span>${has(c.id)?'확인 완료':c.title}</span>`;
    btn.addEventListener('click',()=>acquire(c.id)); el.hotspots.appendChild(btn);
  });
  el.transmission.classList.toggle('hidden', !(state.current==='communication' && canEnterCommunication()));
}
function renderNav(){ el.nav.innerHTML=''; Object.entries(locations).forEach(([key,loc])=>{ const b=document.createElement('button'); b.textContent=loc.title; b.className=key===state.current?'active':''; if(key==='communication'&&!canEnterCommunication()) b.classList.add('locked'); b.onclick=()=>{ if(key==='communication'&&!canEnterCommunication()){ notify('통신실은 사건 구조를 더 확인한 뒤 진입할 수 있습니다.'); return;} state.current=key; render(); save(); }; el.nav.appendChild(b); }); }
function renderInventory(){ const got=clues.filter(c=>has(c.id)); el.photoPuzzle.classList.toggle('hidden', !has('deck-photo-set'));
  if(!got.length){ el.inv.className='inventory-list empty'; el.inv.textContent='아직 획득한 단서가 없습니다.'; return; }
  el.inv.className='inventory-list'; el.inv.innerHTML=''; got.forEach(c=>{ const b=document.createElement('button'); b.className='inv-item'; b.innerHTML=`<img src="${path(c.thumb)}" alt=""><span><b>${c.title}</b><span>${locations[c.location].title}</span></span>`; b.onclick=()=>openImageModal(c.title,c.image,c.desc); el.inv.appendChild(b); }); }
function renderSuspects(){ el.suspectButtons.innerHTML=''; suspects.forEach(s=>{ const b=document.createElement('button'); b.className='suspect-btn'; b.innerHTML=`<b>${s.name}</b><span>${s.role}</span>`; b.onclick=()=>openSuspect(s.id); el.suspectButtons.appendChild(b); }); }
function isUnlocked(doc){ return doc.unlock.every(has); }
function renderArchive(){ el.archive.innerHTML=''; motiveDocs.forEach(d=>{ const unlocked=isUnlocked(d); const b=document.createElement('button'); b.className='motive-item '+(unlocked?'':'locked'); b.innerHTML=`<img src="${path(d.image)}" alt=""><span><b>${d.title}</b><span>${unlocked?'열람 가능':'관련 기본 단서 필요'}</span></span>`; b.onclick=()=>{ if(!unlocked){ notify('아직 관련 기본 단서가 부족합니다.'); return; } openImageModal(d.title,d.image,'인물의 동기를 암시하는 사건 자료다.');}; el.archive.appendChild(b); }); }
function renderProgress(){ const max=clues.length+3; let score=state.acquired.length+(state.deckPuzzleSolved?1:0)+(state.reportSolved?1:0)+(state.escapeSuccess?1:0); const pct=Math.min(100,Math.round(score/max*100)); el.progressText.textContent=`조사 진행률 ${pct}%`; el.progressBar.style.width=pct+'%'; }

function acquire(id){ const c=clues.find(x=>x.id===id); if(!c) return; if(!has(id)){ state.acquired.push(id); notify(`단서 획득: ${c.title}`); if(id==='deck-photo-set') setTimeout(openPhotoPuzzle,300); } else notify('이미 확인한 단서입니다.'); openImageModal(c.title,c.image,c.desc); render(); save(); }
function canEnterCommunication(){ return state.deckPuzzleSolved && state.reportSolved && state.acquired.length>=10; }

function openModal(html){ el.modalContent.innerHTML=html; el.modal.classList.remove('hidden'); }
function closeModal(){ el.modal.classList.add('hidden'); el.modalContent.innerHTML=''; }
function openImageModal(title,image,desc){ openModal(`<h3 class="modal-title">${title}</h3><img class="modal-img" src="${path(image)}" alt="${title}"><p class="modal-copy">${desc||''}</p>`); }
function openSuspect(id){ const s=suspects.find(x=>x.id===id); const docs=motiveDocs.filter(d=>d.person===id); let docHtml=''; if(docs.length){ docHtml='<div class="modal-actions">'+docs.map(d=>`<button class="mini-btn" data-doc="${d.id}">${isUnlocked(d)?d.title:'잠김: '+d.title}</button>`).join('')+'</div>'; } openModal(`<h3 class="modal-title">${s.name}</h3><img class="modal-img" src="${path(s.image)}" alt="${s.name}"><p class="modal-copy"><b>${s.role}</b><br>${s.summary}</p>${docHtml}`); el.modalContent.querySelectorAll('[data-doc]').forEach(btn=>btn.onclick=()=>{ const d=motiveDocs.find(x=>x.id===btn.dataset.doc); if(!isUnlocked(d)){ notify('관련 기본 단서를 먼저 확보해야 합니다.'); return; } openImageModal(d.title,d.image,'인물의 동기를 암시하는 사건 자료다.'); }); }

function openPhotoPuzzle(){ puzzleOrder=[...puzzleOrder]; renderPhotoPuzzle(); }
function renderPhotoPuzzle(msg=''){ const cards=puzzleOrder.map((p,i)=>`<div class="photo-card"><img src="${path(p)}" alt="사진 ${i+1}"><div class="photo-actions"><button data-up="${i}">←</button><button data-down="${i}">→</button></div></div>`).join(''); openModal(`<h3 class="modal-title">갑판 사진 순서 맞추기</h3><p class="modal-copy">사진의 시점과 이동 방향을 기준으로 촬영 흐름을 배열하라.</p><div class="puzzle-row">${cards}</div><p class="modal-copy">${msg}</p><div class="modal-actions"><button id="checkPhoto" class="primary-btn">순서 확인</button></div>`); el.modalContent.querySelectorAll('[data-up]').forEach(b=>b.onclick=()=>{ const i=+b.dataset.up; if(i>0){ [puzzleOrder[i-1],puzzleOrder[i]]=[puzzleOrder[i],puzzleOrder[i-1]]; renderPhotoPuzzle(); }}); el.modalContent.querySelectorAll('[data-down]').forEach(b=>b.onclick=()=>{ const i=+b.dataset.down; if(i<puzzleOrder.length-1){ [puzzleOrder[i+1],puzzleOrder[i]]=[puzzleOrder[i],puzzleOrder[i+1]]; renderPhotoPuzzle(); }}); $('#checkPhoto').onclick=()=>{ const ok=puzzleOrder.every((p,i)=>p===puzzlePhotos[i]); if(ok){ state.deckPuzzleSolved=true; notify('촬영 흐름 확인 완료'); closeModal(); render(); save(); } else renderPhotoPuzzle('사진의 시간대와 이동 방향이 맞지 않는다.'); }; }

function openReportPuzzle(){ const options=suspects.filter(s=>s.id!=='victim').map(s=>`<option value="${s.id}">${s.name}</option>`).join(''); openModal(`<h3 class="modal-title">사건 구조 재구성</h3><p class="modal-copy">각 역할에 가장 깊게 연결된 인물을 선택하라.</p><div class="form-grid"><label>독살 시도와 관련 깊은 인물<select id="q1"><option value="">선택</option>${options}</select></label><label>객실에서 직접 대면한 인물<select id="q2"><option value="">선택</option>${options}</select></label><label>통신/호출 기록에 접근 가능한 인물<select id="q3"><option value="">선택</option>${options}</select></label></div><div class="modal-actions"><button id="checkReport" class="primary-btn">보고서 제출</button></div>`); $('#checkReport').onclick=()=>{ const ok=$('#q1').value==='kang'&&$('#q2').value==='lee'&&$('#q3').value==='hwang'; state.reportAttempted=true; if(ok){ state.reportSolved=true; showEnding('ending-report-complete.jpg','사건 구조 확인 완료. 통신실 진입 조건이 열렸습니다.',false); } else { showEnding('ending-report-incomplete.jpg','보고서가 불완전합니다. 빠진 연결고리를 다시 확인하세요.',false); } render(); save(); }; }

function openTransmissionPuzzle(){ if(!canEnterCommunication()){ notify('아직 송신 조건이 부족합니다.'); return; } openModal(`<h3 class="modal-title">최종 송신 코드</h3><p class="modal-copy">송신 코드 카드의 숫자 흐름을 해석해 외부 채널로 증거를 전송하라.</p><div class="gallery"><div class="gallery-card"><img src="${path('clue-transmission-code.jpg')}" alt="송신 코드"><b>송신 코드 카드</b></div><div class="gallery-card"><img src="${path('clue-emergency-channel.jpg')}" alt="비상 채널"><b>비상 채널</b></div><div class="gallery-card"><img src="${path('clue-route-lock.jpg')}" alt="항로 잠금"><b>항로 잠금</b></div></div><div class="form-grid" style="margin-top:16px"><label>TRANSMISSION CODE<input id="codeInput" placeholder="숫자 8자리" inputmode="numeric"></label></div><div class="modal-actions"><button id="sendCode" class="primary-btn">증거 송신</button></div>`); $('#sendCode').onclick=()=>{ const code=$('#codeInput').value.trim(); if(state.reportSolved && code==='17952218'){ state.escapeSuccess=true; state.ending='success'; showEnding('ending-escape-success.jpg','증거 송신 완료. 항로가 다시 열렸다.',true); } else { state.ending='fail'; showEnding('ending-escape-fail.jpg','신호가 차단되었다. 코드나 단서 연결을 다시 확인하라.',true); } render(); save(); }; }
function showEnding(image,msg,finale){ openModal(`<img class="ending-img" src="${path(image)}" alt="엔딩"><h3 class="modal-title">${finale?'탈출 결과':'보고서 결과'}</h3><p class="modal-copy">${msg}</p><div class="modal-actions"><button class="primary-btn" id="backInvestigate">다시 조사하기</button><button class="ghost-btn" id="goHomeEnd">처음으로</button></div>`); $('#backInvestigate').onclick=()=>{ closeModal(); render(); }; $('#goHomeEnd').onclick=()=>{ closeModal(); showHome(); }; }

el.start.onclick=()=>showGame(true);
el.cont.onclick=()=>{ load(); showGame(false); };
el.homeBtn.onclick=showHome;
el.newGame.onclick=()=>{ if(confirm('저장된 조사를 초기화할까요?')) showGame(true); };
el.photoPuzzle.onclick=openPhotoPuzzle;
el.transmission.onclick=openTransmissionPuzzle;
el.report.onclick=openReportPuzzle;
el.modal.addEventListener('click',e=>{ if(e.target.dataset.close) closeModal(); });
document.addEventListener('keydown',e=>{ if(e.key==='Escape') closeModal(); });

load();
if(state.screen==='game') showGame(false); else showHome();
