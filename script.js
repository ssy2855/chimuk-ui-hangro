const A=n=>`assets/${n}`;

const places=[
{id:'deck',t:'갑판',img:'space-deck.jpg',goal:'촬영 기록 배열',puz:'deck',req:['deckPhoto','deckNote'],hs:[['deckPhoto',24,35],['deckNote',66,56]]},
{id:'lounge',t:'라운지',img:'space-lounge.jpg',goal:'좌석 기록 대조',puz:'lounge',req:['loungeMap','loungeCup'],hs:[['loungeMap',22,32],['loungeCup',60,50]]},
{id:'medical',t:'의무실',img:'space-medical.jpg',goal:'누락 슬롯 확인',puz:'medical',req:['medicalLog','medicalDrug'],hs:[['medicalLog',28,46],['medicalDrug',64,34]]},
{id:'corridor',t:'복도',img:'space-corridor.jpg',goal:'흔적 경로 연결',puz:'corridor',req:['footprints','handle'],hs:[['footprints',42,72],['handle',74,42]]},
{id:'cabin',t:'객실',img:'space-cabin.jpg',goal:'현장 위치 복원',puz:'cabin',req:['cabinTrace','cabinCall'],hs:[['cabinTrace',70,76],['cabinCall',88,56]]},
{id:'office',t:'사무실',img:'space-office.jpg',goal:'문서 연결',puz:'office',req:['officeMail','officeThreat'],hs:[['officeMail',42,53],['officeThreat',70,48]]},
{id:'communication',t:'통신실',img:'space-communication.jpg',goal:'송신 기록 복원',puz:'communication',req:['console','channel','transCode','routeLock'],hs:[['console',33,68],['channel',54,34],['transCode',22,42],['routeLock',70,44]]}
];

const clues={
deckPhoto:{t:'갑판 사진 묶음',th:'thumb-deck-photo-set.png',img:'clue-deck-photo-set.jpg',note:'사진 묶음 / 22:15-22:35'},
deckNote:{t:'촬영 시간 메모',th:'thumb-deck-time-note.png',img:'clue-deck-time-note.jpg',note:'촬영 메모 / 5개 시간'},
loungeMap:{t:'라운지 좌석 배치도',th:'thumb-lounge-seat-map.png',img:'clue-lounge-seat-map(1).jpg',note:'좌석 배치도 / VIP-09'},
loungeCup:{t:'라운지 컵 기록',th:'thumb-lounge-cup.png',img:'clue-lounge-cups.jpg',note:'VIP-09 / 잔류 흔적'},
medicalLog:{t:'의료 기록',th:'thumb-medical-log.png',img:'clue-medical-log.jpg',note:'의무기록지 / 이상 수치'},
medicalDrug:{t:'약품 누락 케이스',th:'thumb-medical-missing-drug.png',img:'clue-medical-missing-drug.jpg',note:'약품 케이스 / 빈 슬롯'},
footprints:{t:'복도 발자국',th:'thumb-corridor-footprints.png',img:'clue-corridor-footprints.jpg',note:'객실 712 앞 / 정지 흔적'},
handle:{t:'문손잡이 흔적',th:'thumb-corridor-handle.png',img:'clue-corridor-handle.jpg',note:'손잡이 옆 / 압박 흔적'},
cabinTrace:{t:'객실 현장 흔적',th:'thumb-cabin-scene-trace.png',img:'clue-cabin-scene-trace.jpg',note:'침대 옆 / 충돌 흔적'},
cabinCall:{t:'객실 호출 기록',th:'thumb-cabin-call-log.png',img:'clue-cabin-call-log.jpg',note:'22:15-22:22 / 응답 공백'},
officeMail:{t:'내부 이메일 출력물',th:'thumb-office-email-print.png',img:'clue-office-email-print.jpg',note:'외부 공유 제한 / 출력물'},
officeThreat:{t:'경고 메모 조각',th:'thumb-office-threat-note.png',img:'clue-office-threat-note.jpg',note:'DO NOT REPORT / 경고 조각'},
console:{t:'통신 콘솔',th:'clue-communication-console.jpg',img:'clue-communication-console.jpg',note:'송신 콘솔 / 입력 대기'},
channel:{t:'비상 채널 기록',th:'clue-emergency-channel.jpg',img:'clue-emergency-channel.jpg',note:'EMERGENCY CHANNEL / LOCKED'},
transCode:{t:'송신 코드 카드',th:'clue-transmission-code.jpg',img:'clue-transmission-code.jpg',note:'TRANS. LOG / SEA LINK'},
routeLock:{t:'항로 잠금 화면',th:'clue-route-lock.jpg',img:'clue-route-lock.jpg',note:'ROUTE LOCK / 해상 지도'}
};

const records=[
['medical','MR-22-0614','motive-kang-medical-record.jpg'],['medical','M-22-0614','motive-kang-family-letter.jpg'],['medical','AP-22-0917','motive-kang-side-effect-report.jpg'],
['cabin','B-07','motive-lee-old-photo.jpg'],['cabin','통화 기록 01','motive-lee-call-record.jpg'],['cabin','AC-0917','motive-lee-lawsuit-note.jpg'],
['office','AC-VIP-OP-2410','motive-hwang-contract.jpg'],['office','CR-07','motive-hwang-access-log.jpg'],['office','INTERNAL MEMO','motive-hwang-blackmail-file.jpg'],
['report','S-01','suspect-kang-hana-file.jpg'],['report','S-02','suspect-lee-minjeong-file.jpg'],['report','S-03','suspect-hwang-sejun-file.jpg'],['report','V-01','victim-choi-taeo-profile.jpg']
];

const init={place:'deck',unlocked:['deck'],got:[],solved:[],notes:[],report:false,escape:false};
let st=load();

function $(id){return document.getElementById(id)}
function load(){try{return {...init,...JSON.parse(localStorage.silentRoute||'{}')}}catch{return structuredClone(init)}}
function save(){localStorage.silentRoute=JSON.stringify(st)}
function reset(){localStorage.removeItem('silentRoute');st=structuredClone(init);render()}
function screen(id){['home','game','ending'].forEach(x=>$(x).classList.toggle('hidden',x!==id))}
function place(){return places.find(p=>p.id===st.place)}
function toast(t){$('toast').textContent=t;$('toast').classList.remove('hidden');clearTimeout(toast.timer);toast.timer=setTimeout(()=>$('toast').classList.add('hidden'),1400)}
function note(t){if(!st.notes.includes(t))st.notes.push(t)}
function solved(p){return st.solved.includes(p)}
function has(id){return st.got.includes(id)}

function render(){
  const p=place();
  $('placeTitle').textContent=p.t;$('placeGoal').textContent=p.goal;$('placeImage').src=A(p.img);
  $('hotspots').innerHTML='';
  p.hs.forEach(([id,x,y])=>{
    const c=clues[id],b=document.createElement('button');
    b.className='hotspot '+(has(id)?'done':''); b.style.left=x+'%'; b.style.top=y+'%';
    b.innerHTML=`<img src="${A(c.th)}" alt=""><span>${c.t}</span>`;
    b.onclick=()=>getClue(id); $('hotspots').appendChild(b);
  });
  renderNav();renderInv();renderNotes();renderProgress();
  $('puzzleBtn').disabled=!canPuzzle(p);
  $('puzzleBtn').textContent=solved(p.puz)?'잠금 해제 완료':'잠금 장치 확인';
}

function renderNav(){
  $('placeNav').innerHTML='';
  places.forEach(p=>{
    const b=document.createElement('button');
    const open=st.unlocked.includes(p.id);
    b.className='placeBtn '+(open?'open':'locked')+(st.place===p.id?' active':'');
    b.textContent=open?p.t:'잠김'; b.disabled=!open;
    b.onclick=()=>{st.place=p.id;save();render()};
    $('placeNav').appendChild(b);
  });
}

function renderInv(){
  $('inventory').innerHTML='';
  st.got.forEach(id=>addInv(clues[id].t,A(clues[id].th),()=>openImg(clues[id].t,A(clues[id].img),clues[id].note)));
  records.forEach(([key,t,img])=>{
    if((key==='medical'&&solved('medical'))||(key==='cabin'&&solved('cabin'))||(key==='office'&&solved('office'))||(key==='report'&&st.report)){
      addInv(t,A(img),()=>openImg(t,A(img),''));
    }
  });
}
function addInv(t,img,fn){const b=document.createElement('button');b.className='invItem';b.innerHTML=`<img src="${img}" alt=""><span>${t}</span>`;b.onclick=fn;$('inventory').appendChild(b)}
function renderNotes(){$('notes').innerHTML='';(st.notes.length?st.notes:['기록 대기']).forEach(n=>{const d=document.createElement('div');d.className='note';d.textContent=n;$('notes').appendChild(d)})}
function renderProgress(){const pct=Math.min(100,Math.round(st.got.length/Object.keys(clues).length*40+st.solved.length/places.length*42+(st.report?9:0)+(st.escape?9:0)));$('progressText').textContent=pct+'%';$('progressBar').style.width=pct+'%';$('rebuildBtn').classList.toggle('hidden',!canReport())}
function canPuzzle(p){return p.req.every(has)}
function next(id){return places[places.findIndex(p=>p.id===id)+1]?.id}
function pass(puz,notes=[]){if(!st.solved.includes(puz))st.solved.push(puz);notes.forEach(note);const pl=places.find(p=>p.puz===puz);const n=pl&&next(pl.id);if(n&&!st.unlocked.includes(n))st.unlocked.push(n);save();render();closePuzzle();toast('잠금 해제')}
function getClue(id){const c=clues[id];if(!has(id)){st.got.push(id);note(c.note);save();render();toast('기록 추가')}openImg(c.t,A(c.img),c.note)}
function openImg(t,src,cap){$('imageTitle').textContent=t;$('imageFull').src=src;$('imageCaption').textContent=cap||'';$('imageModal').classList.remove('hidden')}
function closePuzzle(){$('puzzleModal').classList.add('hidden')}
function canReport(){return ['deck','lounge','medical','corridor','cabin','office'].every(solved)}
function pTitle(t){return `<h2 class="pTitle">${t}</h2>`}
function msg(t=''){return `<div class="msg">${t}</div>`}

function openPuzzle(){const p=place(); if(!canPuzzle(p)){toast('기록 부족');return} puzzles[p.puz](); $('puzzleModal').classList.remove('hidden')}
const puzzles={deck,lounge,medical,corridor,cabin,office,communication};

function deck(){
 let order=['puzzle-photo-a.jpg','puzzle-photo-b.jpg','puzzle-photo-c.jpg','puzzle-photo-d.jpg','puzzle-photo-e.jpg'].sort(()=>Math.random()-.5);
 const ok=['puzzle-photo-a.jpg','puzzle-photo-b.jpg','puzzle-photo-c.jpg','puzzle-photo-d.jpg','puzzle-photo-e.jpg'];
 const lab={'puzzle-photo-a.jpg':'사진 A / 22:15','puzzle-photo-b.jpg':'사진 B / 22:22','puzzle-photo-c.jpg':'사진 C / 22:27','puzzle-photo-d.jpg':'사진 D / 22:31','puzzle-photo-e.jpg':'사진 E / 22:35'};
 function draw(m=''){$('puzzleRoot').innerHTML=pTitle('촬영 기록 배열')+`<div class="row" id="cards"></div>`+msg(m)+`<div class="actions"><button class="btn" id="shuffle">섞기</button><button class="btn primary" id="check">순서 확인</button></div>`;
  order.forEach((im,i)=>{const c=document.createElement('div');c.className='card';c.innerHTML=`<img src="${A(im)}"><div>${lab[im]}</div><button class="opt" ${i==0?'disabled':''}>←</button><button class="opt" ${i==order.length-1?'disabled':''}>→</button>`;let bs=c.querySelectorAll('button');bs[0].onclick=()=>{[order[i-1],order[i]]=[order[i],order[i-1]];draw()};bs[1].onclick=()=>{[order[i+1],order[i]]=[order[i],order[i+1]];draw()};$('cards').appendChild(c)});
  $('shuffle').onclick=()=>{order.sort(()=>Math.random()-.5);draw()};$('check').onclick=()=>order.join()==ok.join()?pass('deck',['22:15-22:35 / 촬영 흐름 확인']):draw('시간 배열 불일치')}
 draw();
}

function lounge(){
 let sel=null, placed={}; const cups=['잔류 흔적','빈 잔','물기'], seats=['VIP-07','VIP-09','VIP-12'];
 function draw(m=''){$('puzzleRoot').innerHTML=pTitle('좌석 기록 대조')+`<div class="row"><div class="card"><img src="${A('clue-lounge-cups.jpg')}"><div>컵 기록</div></div><div class="card"><img src="${A('clue-lounge-seat-map(1).jpg')}"><div>좌석 배치도</div></div></div><div class="row" id="cups"></div><div class="row" id="seats"></div>`+msg(m)+`<div class="actions"><span></span><button class="btn primary" id="check">배치 확인</button></div>`;
  cups.forEach(c=>{let b=document.createElement('button');b.className='opt '+(sel===c?'sel':'');b.textContent=c;b.onclick=()=>{sel=c;draw()};$('cups').appendChild(b)});
  seats.forEach(s=>{let b=document.createElement('button');b.className='slot '+(placed[s]?'filled':'');b.innerHTML=`<b>${s}</b><br>${placed[s]||'슬롯'}`;b.onclick=()=>{if(!sel)return;Object.keys(placed).forEach(k=>{if(placed[k]===sel)delete placed[k]});placed[s]=sel;sel=null;draw()};$('seats').appendChild(b)});
  $('check').onclick=()=>placed['VIP-09']==='잔류 흔적'&&placed['VIP-07']==='빈 잔'&&placed['VIP-12']==='물기'?pass('lounge',['VIP-09 / 잔류 흔적','좌석 배치도 09']):draw('좌석 기록 불일치')}
 draw();
}

function medical(){
 let drug='',sym='';
 function draw(m=''){$('puzzleRoot').innerHTML=pTitle('누락 슬롯 확인')+`<div class="row"><div class="card"><img src="${A('clue-medical-missing-drug.jpg')}"><div>약품 케이스</div></div><div class="card"><img src="${A('clue-medical-log.jpg')}"><div>의료 기록</div></div><div class="card"><img src="${A('motive-kang-side-effect-report.jpg')}"><div>AP-22-0917</div></div></div><div class="slot">빈 슬롯: ${drug||'선택 대기'}</div><div class="row" id="drugs"></div><div class="slot">증상 기록: ${sym||'선택 대기'}</div><div class="row" id="syms"></div>`+msg(m)+`<div class="actions"><span></span><button class="btn primary" id="check">슬롯 확인</button></div>`;
  ['진통제','소화제','수면제','항히스타민','항생제','근육이완제','지사제'].forEach(x=>btn('drugs',x,drug,()=>{drug=x;draw()}));
  ['어지러움','오심','혈압 저하','의식 저하'].forEach(x=>btn('syms',x,sym,()=>{sym=x;draw()}));
  $('check').onclick=()=>drug==='수면제'&&sym==='의식 저하'?pass('medical',['빈 슬롯 / 수면제','의식 저하','MR-22-0614','M-22-0614','AP-22-0917']):draw('슬롯 또는 증상 불일치')}
 draw();
}

function corridor(){
 let path=[],contact='';
 function draw(m=''){$('puzzleRoot').innerHTML=pTitle('흔적 경로 연결')+`<div class="row"><div class="card"><img src="${A('clue-corridor-footprints.jpg')}"><div>발자국</div></div><div class="card"><img src="${A('clue-corridor-handle.jpg')}"><div>손잡이</div></div></div><div class="slot">경로: ${path.join(' → ')||'선택 대기'}</div><div class="row" id="nodes"></div><div class="slot">접촉 위치: ${contact||'선택 대기'}</div><div class="row" id="contacts"></div>`+msg(m)+`<div class="actions"><button class="btn" id="clear">경로 초기화</button><button class="btn primary" id="check">흔적 확인</button></div>`;
  ['라운지 출입구','복도 중간','객실 712 앞','비상계단'].forEach(x=>btn('nodes',x,path.includes(x)?x:'',()=>{if(!path.includes(x))path.push(x);draw()}));
  ['상단','중앙','손잡이 옆','하단'].forEach(x=>btn('contacts',x,contact,()=>{contact=x;draw()}));
  $('clear').onclick=()=>{path=[];draw()};$('check').onclick=()=>path.join('|')==='라운지 출입구|복도 중간|객실 712 앞'&&contact==='손잡이 옆'?pass('corridor',['객실 712 앞 / 정지 흔적','손잡이 옆 / 압박 흔적']):draw('경로 또는 접촉 위치 불일치')}
 draw();
}

function cabin(){
 let sel='',placed={},gap=[];
 function draw(m=''){$('puzzleRoot').innerHTML=pTitle('현장 위치 복원')+`<div class="row"><div class="card"><img src="${A('clue-cabin-scene-trace.jpg')}"><div>현장 흔적</div></div><div class="card"><img src="${A('clue-cabin-call-log.jpg')}"><div>호출 기록</div></div><div class="card"><img src="${A('motive-lee-call-record.jpg')}"><div>통화 기록 01</div></div></div><div class="row" id="items"></div><div class="row" id="slots"></div><div class="slot">응답 공백: ${gap.join(', ')||'선택 대기'}</div><div class="row" id="times"></div>`+msg(m)+`<div class="actions"><button class="btn" id="clear">초기화</button><button class="btn primary" id="check">복원 확인</button></div>`;
  ['깨진 유리 조각','흐트러진 천 조각','호출 장치 기록'].forEach(x=>btn('items',x,sel,()=>{sel=x;draw()}));
  ['침대 아래 바닥','침대 옆','협탁 근처'].forEach(s=>{let b=document.createElement('button');b.className='slot '+(placed[s]?'filled':'');b.innerHTML=`<b>${s}</b><br>${placed[s]||'슬롯'}`;b.onclick=()=>{if(!sel)return;Object.keys(placed).forEach(k=>{if(placed[k]===sel)delete placed[k]});placed[s]=sel;sel='';draw()};$('slots').appendChild(b)});
  ['21:47','22:02','22:15','22:22','22:31','22:45'].forEach(x=>btn('times',x,gap.includes(x)?x:'',()=>{gap.includes(x)?gap=gap.filter(v=>v!==x):gap.push(x);draw()}));
  $('clear').onclick=()=>{sel='';placed={};gap=[];draw()};$('check').onclick=()=>placed['침대 아래 바닥']==='깨진 유리 조각'&&placed['침대 옆']==='흐트러진 천 조각'&&placed['협탁 근처']==='호출 장치 기록'&&gap.length===2&&gap.includes('22:15')&&gap.includes('22:22')?pass('cabin',['침대 옆 / 충돌 흔적','22:15-22:22 / 응답 공백','B-07','통화 기록 01','AC-0917']):draw('위치 또는 시간 불일치')}
 draw();
}

function office(){
 let left='',con={},rid='';
 function draw(m=''){$('puzzleRoot').innerHTML=pTitle('문서 연결')+`<div class="row"><div class="card"><img src="${A('motive-hwang-contract.jpg')}"><div>운영 계약서</div></div><div class="card"><img src="${A('motive-hwang-access-log.jpg')}"><div>접근 로그</div></div><div class="card"><img src="${A('motive-hwang-blackmail-file.jpg')}"><div>내부 메모</div></div><div class="card"><img src="${A('clue-office-threat-note.jpg')}"><div>경고 메모</div></div><div class="card"><img src="${A('clue-office-email-print.jpg')}"><div>이메일 출력물</div></div></div><div class="connect"><div id="lefts"></div><div id="rights"></div></div><div class="slot">반복 ID: ${rid||'선택 대기'}</div><div class="row" id="ids"></div>`+msg(m)+`<div class="actions"><button class="btn" id="clear">연결 초기화</button><button class="btn primary" id="check">연결 확인</button></div>`;
  ['운영 계약서','접근 로그','경고 메모'].forEach(x=>{let b=document.createElement('button');b.className='lineBtn';b.textContent=x+' → '+(con[x]||'');b.onclick=()=>{left=x;draw()};$('lefts').appendChild(b)});
  ['내부 메모','이메일 출력물'].forEach(x=>{let b=document.createElement('button');b.className='lineBtn';b.textContent=x;b.onclick=()=>{if(!left)return;con[left]=x;left='';draw()};$('rights').appendChild(b)});
  ['C-0721','C-0418','CR-07'].forEach(x=>btn('ids',x,rid,()=>{rid=x;draw()}));
  $('clear').onclick=()=>{con={};draw()};$('check').onclick=()=>con['운영 계약서']==='내부 메모'&&con['접근 로그']==='이메일 출력물'&&con['경고 메모']==='내부 메모'&&rid==='C-0418'?pass('office',['C-0418 / 통신실 접근','내부 메모 / 보고 제한','AC-VIP-OP-2410','CR-07','INTERNAL MEMO']):draw('문서 연결 불일치')}
 draw();
}

function reportPuzzle(){
 let lineA=[],lineB=[],lineC=[],pa='',pb='',pc='',ord=[];
 const cards=['좌석 배치도','컵 잔류 흔적','약품 빈 슬롯','부작용 보고서','발자국','문손잡이 압박 흔적','통화 기록','객실 충돌 흔적','운영 계약서','접근 로그','내부 압박 문서','응답 공백'];
 function box(n,arr,p){return `<div class="slot"><b>${n}</b><br>${arr.join(' / ')||'카드 대기'}<br>${p||'인물 대기'}</div>`}
 function draw(m=''){$('puzzleRoot').innerHTML=pTitle('최종 사건 보고서')+`<div class="row"><div class="card"><img src="${A('suspect-kang-hana-file.jpg')}"><div>S-01</div></div><div class="card"><img src="${A('suspect-lee-minjeong-file.jpg')}"><div>S-02</div></div><div class="card"><img src="${A('suspect-hwang-sejun-file.jpg')}"><div>S-03</div></div><div class="card"><img src="${A('victim-choi-taeo-profile.jpg')}"><div>V-01</div></div></div><div class="row" id="cards"></div><div class="row">${box('A-09',lineA,pa)}${box('B-712',lineB,pb)}${box('C-0418',lineC,pc)}</div><div class="slot">라인 순서: ${ord.join(' → ')||'선택 대기'}</div><div class="row" id="orders"></div>`+msg(m)+`<div class="actions"><button class="btn" id="clear">초기화</button><button class="btn primary" id="check">보고서 확인</button></div>`;
  cards.forEach(c=>{let b=document.createElement('button');b.className='opt';b.textContent=c;b.onclick=()=>{let l=prompt('라인 입력: A, B, C');if(!l)return;l=l.toUpperCase();[lineA,lineB,lineC].forEach(arr=>{let i=arr.indexOf(c);if(i>-1)arr.splice(i,1)});if(l==='A')lineA.push(c);if(l==='B')lineB.push(c);if(l==='C')lineC.push(c);draw()};$('cards').appendChild(b)});
  [['A','강하나'],['B','이민정'],['C','황세준'],['A','이민정'],['B','황세준'],['C','강하나']].forEach(([l,p])=>{let b=document.createElement('button');b.className='opt';b.textContent=`${l}:${p}`;b.onclick=()=>{if(l==='A')pa=p;if(l==='B')pb=p;if(l==='C')pc=p;draw()};$('cards').appendChild(b)});
  ['A-09','B-712','C-0418'].forEach(x=>btn('orders',x,ord.includes(x)?x:'',()=>{if(!ord.includes(x))ord.push(x);draw()}));
  $('clear').onclick=()=>{lineA=[];lineB=[];lineC=[];pa=pb=pc='';ord=[];draw()};$('check').onclick=()=>{
    const ok=same(lineA,['좌석 배치도','컵 잔류 흔적','약품 빈 슬롯','부작용 보고서'])&&same(lineB,['발자국','문손잡이 압박 흔적','통화 기록','객실 충돌 흔적'])&&same(lineC,['운영 계약서','접근 로그','내부 압박 문서','응답 공백'])&&pa==='강하나'&&pb==='이민정'&&pc==='황세준'&&ord.join('|')==='A-09|B-712|C-0418';
    if(ok){st.report=true;note('A-09 / B-712 / C-0418');note('REPORT ACCEPTED');if(!st.unlocked.includes('communication'))st.unlocked.push('communication');save();render();closePuzzle();openImg('REPORT ACCEPTED',A('ending-report-complete.jpg'),'CASE VERIFIED')}else{openImg('INCOMPLETE',A('ending-report-incomplete.jpg'),'REVIEW FAILED');draw('보고서 항목 불일치')}
  }}
 draw(); $('puzzleModal').classList.remove('hidden');
}

function communication(){
 let seq=[]; const nums=['17','9','5','3','22','18'], answer='179532218';
 function draw(m=''){$('puzzleRoot').innerHTML=pTitle('송신 기록 복원')+`<div class="codeGrid"><div><img src="${A('clue-transmission-code.jpg')}"><div class="row"><div class="card"><img src="${A('clue-communication-console.jpg')}"><div>CONSOLE</div></div><div class="card"><img src="${A('clue-emergency-channel.jpg')}"><div>CHANNEL</div></div><div class="card"><img src="${A('clue-route-lock.jpg')}"><div>ROUTE LOCK</div></div></div></div><div><div class="slot">좌측 기록 → 우측 기록<br>위에서 아래로 입력</div><div class="display">${seq.join('')||'송신 대기'}</div><div class="numBtns" id="nums"></div>`+msg(m)+`<div class="actions"><button class="btn" id="clear">초기화</button><button class="btn primary" id="send">송신</button></div></div></div>`;
  nums.forEach(n=>{let b=document.createElement('button');b.className='num';b.textContent=n;b.onclick=()=>{seq.push(n);draw()};$('nums').appendChild(b)});
  $('clear').onclick=()=>{seq=[];draw()};$('send').onclick=()=>{if(!st.report){ending(false,'SIGNAL LOST','REPORT REQUIRED');return}seq.join('')===answer?(st.escape=true,note('SIGNAL SENT'),note('ROUTE UNLOCKED'),save(),ending(true,'송신 완료','항로 잠금 해제')):ending(false,'SIGNAL LOST','열 순서 불일치')}}
 draw();
}

function btn(parent,text,sel,fn){let b=document.createElement('button');b.className='opt '+(sel===text?'sel':'');b.textContent=text;b.onclick=fn;$(parent).appendChild(b)}
function same(a,b){return a.length===b.length&&b.every(x=>a.includes(x))}
function ending(success,t,sub){$('endingImg').src=A(success?'ending-escape-success.jpg':'ending-escape-fail.jpg');$('endingTitle').textContent=t;$('endingText').textContent=sub;closePuzzle();$('imageModal').classList.add('hidden');screen('ending')}

document.addEventListener('DOMContentLoaded',()=>{
 $('newGame').onclick=()=>{reset();screen('game')}; $('continueGame').onclick=()=>{screen('game');render()}; $('wipeGame').onclick=()=>{reset();toast('기록 초기화')};
 $('homeBtn').onclick=()=>screen('home'); $('puzzleBtn').onclick=openPuzzle; $('closePuzzle').onclick=closePuzzle; $('rebuildBtn').onclick=()=>canReport()?reportPuzzle():toast('기록 부족');
 $('backToGame').onclick=()=>{screen('game');render()}; $('endingHome').onclick=()=>screen('home');
 document.querySelectorAll('[data-close]').forEach(e=>e.onclick=()=>$(e.dataset.close).classList.add('hidden'));
 render();
});
