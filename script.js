const A=n=>`assets/${n}`;

const places=[
{id:"deck",title:"갑판",img:"space-deck.jpg",goal:"촬영 기록 배열",puzzle:"deck",req:["deckPhoto","deckNote"],hs:[["deckPhoto",29,71],["deckNote",63,79]]},
{id:"lounge",title:"라운지",img:"space-lounge.jpg",goal:"좌석 배치도 복원",puzzle:"lounge",req:["loungeMap"],hs:[["loungeMap",21,72],["loungeCup",61,72]]},
{id:"medical",title:"의무실",img:"space-medical.jpg",goal:"의료 파일 분류",puzzle:"medical",req:["medicalLog","medicalDrug"],hs:[["medicalLog",32,65],["medicalDrug",70,66]]},
{id:"corridor",title:"복도",img:"space-corridor.jpg",goal:"흔적 방향 확인",puzzle:"corridor",req:["footprints","handle"],hs:[["footprints",35,74],["handle",75,47]]},
{id:"cabin",title:"객실",img:"space-cabin.jpg",goal:"호출 공백 확인",puzzle:"cabin",req:["cabinTrace","cabinCall"],hs:[["cabinTrace",56,74],["cabinCall",82,52]]},
{id:"office",title:"사무실",img:"space-office.jpg",goal:"문서 분류",puzzle:"office",req:["officeMail","officeThreat"],hs:[["officeMail",39,67],["officeThreat",70,62]]},
{id:"communication",title:"통신실",img:"space-communication.jpg",goal:"송신 기록 복원",puzzle:"communication",req:["console","channel","transCode","routeLock"],hs:[["console",29,70],["channel",54,53],["transCode",17,60],["routeLock",76,58]]}
];

const routes={
deck:{to:"lounge",label:"라운지로 이동",x:90,y:56},
lounge:{to:"medical",label:"의무실로 이동",x:8,y:56},
medical:{to:"corridor",label:"복도로 이동",x:14,y:57},
corridor:{to:"cabin",label:"객실 712로 이동",x:89,y:56},
cabin:{to:"office",label:"사무실로 이동",x:10,y:57},
office:{to:"communication",label:"통신실로 이동",x:88,y:56}
};

const clues={
deckPhoto:{title:"갑판 사진 묶음",thumb:"thumb-deck-photo-set.png",img:"clue-deck-photo-set.jpg",note:"사진 묶음 / 22:15-22:35"},
deckNote:{title:"촬영 시간 메모",thumb:"thumb-deck-time-note.png",img:"clue-deck-time-note.jpg",note:"촬영 메모 / 5개 시간"},
loungeMap:{title:"라운지 좌석 배치도",thumb:"thumb-lounge-seat-map.png",img:"clue-lounge-seat-map(1).jpg",note:"좌석 배치도 / 도면 조각"},
loungeCup:{title:"라운지 컵 기록",thumb:"thumb-lounge-cup.png",img:"clue-lounge-cups.jpg",note:"라운지 컵 기록"},
medicalLog:{title:"의료 기록",thumb:"thumb-medical-log.png",img:"clue-medical-log.jpg",note:"의무기록지 / 이상 수치"},
medicalDrug:{title:"약품 누락 케이스",thumb:"thumb-medical-missing-drug.png",img:"clue-medical-missing-drug.jpg",note:"약품 케이스 / 빈 슬롯"},
footprints:{title:"복도 발자국",thumb:"thumb-corridor-footprints.png",img:"clue-corridor-footprints.jpg",note:"발자국 / 연속 흔적"},
handle:{title:"문손잡이 흔적",thumb:"thumb-corridor-handle.png",img:"clue-corridor-handle.jpg",note:"손잡이 / 지문 흔적"},
cabinTrace:{title:"객실 현장 흔적",thumb:"thumb-cabin-scene-trace.png",img:"clue-cabin-scene-trace.jpg",note:"객실 현장 / 파손 흔적"},
cabinCall:{title:"객실 호출 기록",thumb:"thumb-cabin-call-log.png",img:"clue-cabin-call-log.jpg",note:"호출 기록 / 22:15-22:22"},
officeMail:{title:"내부 이메일 출력물",thumb:"thumb-office-email-print.png",img:"clue-office-email-print.jpg",note:"이메일 출력물 / 가림 처리"},
officeThreat:{title:"경고 메모 조각",thumb:"thumb-office-threat-note.png",img:"clue-office-threat-note.jpg",note:"경고 메모 / 붉은 표식"},
console:{title:"통신 콘솔",thumb:"clue-communication-console.jpg",img:"clue-communication-console.jpg",note:"송신 콘솔 / 입력 대기"},
channel:{title:"비상 채널 기록",thumb:"clue-emergency-channel.jpg",img:"clue-emergency-channel.jpg",note:"EMERGENCY CHANNEL / LOCKED"},
transCode:{title:"송신 코드 카드",thumb:"clue-transmission-code.jpg",img:"clue-transmission-code.jpg",note:"TRANS. LOG / SEA LINK"},
routeLock:{title:"항로 잠금 화면",thumb:"clue-route-lock.jpg",img:"clue-route-lock.jpg",note:"ROUTE LOCK / 해상 지도"},
kangLetter:{title:"가족 편지",thumb:"motive-kang-family-letter.jpg",img:"motive-kang-family-letter.jpg",note:"강하나 / 가족 편지"},
kangMedical:{title:"피해 의료 기록",thumb:"motive-kang-medical-record.jpg",img:"motive-kang-medical-record.jpg",note:"강하나 / 의료 기록"},
kangReport:{title:"부작용 보고서",thumb:"motive-kang-side-effect-report.jpg",img:"motive-kang-side-effect-report.jpg",note:"강하나 / 반려된 부작용 보고서"},
leePhoto:{title:"오래된 사진",thumb:"motive-lee-old-photo.jpg",img:"motive-lee-old-photo.jpg",note:"이민정 / 오래된 사진"},
leeCall:{title:"통화 기록",thumb:"motive-lee-call-record.jpg",img:"motive-lee-call-record.jpg",note:"이민정 / 통화 기록"},
leeLawsuit:{title:"반려된 진정서",thumb:"motive-lee-lawsuit-note.jpg",img:"motive-lee-lawsuit-note.jpg",note:"이민정 / 진정서 반려"},
hwangContract:{title:"운영 계약서",thumb:"motive-hwang-contract.jpg",img:"motive-hwang-contract.jpg",note:"황세준 / 운영 계약서"},
hwangAccess:{title:"접근 로그",thumb:"motive-hwang-access-log.jpg",img:"motive-hwang-access-log.jpg",note:"황세준 / 접근 로그"},
hwangBlackmail:{title:"내부 압박 문서",thumb:"motive-hwang-blackmail-file.jpg",img:"motive-hwang-blackmail-file.jpg",note:"황세준 / 내부 압박 문서"}
};

const profiles={kang:{name:"강하나",img:"suspect-kang-hana-file.jpg"},lee:{name:"이민정",img:"suspect-lee-minjeong-file.jpg"},hwang:{name:"황세준",img:"suspect-hwang-sejun-file.jpg"},choi:{name:"최태오",img:"victim-choi-taeo-profile.jpg"}};

const defaultState={place:"deck",unlocked:["deck"],got:[],solved:[],notes:[],truth:false,escape:false};
let state=load();

function $(id){return document.getElementById(id)}
function load(){try{return {...structuredClone(defaultState),...JSON.parse(localStorage.getItem("silentRouteState")||"{}")}}catch{return structuredClone(defaultState)}}
function save(){localStorage.setItem("silentRouteState",JSON.stringify(state))}
function reset(){localStorage.removeItem("silentRouteState");state=structuredClone(defaultState);render()}
function screen(id){["home","game","ending"].forEach(s=>$(s).classList.toggle("hidden",s!==id))}
function place(){return places.find(p=>p.id===state.place)}
function has(id){return state.got.includes(id)}
function solved(id){return state.solved.includes(id)}
function toast(t){$("toast").textContent=t;$("toast").classList.remove("hidden");clearTimeout(toast.timer);toast.timer=setTimeout(()=>$("toast").classList.add("hidden"),1400)}
function note(t){if(!state.notes.includes(t))state.notes.push(t)}

function render(){renderPlace();renderNav();renderInv();renderNotes();renderProgress()}
function renderPlace(){
 const p=place();$("placeTitle").textContent=p.title;$("placeGoal").textContent=p.goal;$("placeImage").src=A(p.img);$("hotspots").innerHTML="";
 p.hs.forEach(([id,x,y])=>{const c=clues[id];const b=document.createElement("button");b.className=`hotspot ${has(id)?"done":""}`;b.style.left=x+"%";b.style.top=y+"%";b.innerHTML=`<span>${c.title}</span>`;b.onclick=()=>getClue(id);$("hotspots").appendChild(b)});
 renderRoute(p);renderCaseEvent();
 $("puzzleBtn").disabled=!p.req.every(has);$("puzzleBtn").textContent=solved(p.puzzle)?"잠금 해제 완료":"잠금 장치 확인";
}
function renderRoute(p){
 const idx=places.findIndex(x=>x.id===p.id);
 const prev=places[idx-1];
 const next=places[idx+1];

 function makeArrow(side,target,label){
  const b=document.createElement("button");
  const open=target && state.unlocked.includes(target.id);
  b.className=`stageArrow ${side} ${open?"":"locked"}`;
  b.innerHTML=`<span>${side==="left"?"‹":"›"}</span><em>${open?label:"잠김"}</em>`;
  b.onclick=()=>{
    if(!open){toast("잠금 상태");return}
    state.place=target.id;save();render();
  };
  $("hotspots").appendChild(b);
 }

 makeArrow("left",prev,prev?`${prev.title}로 이동`:"");
 makeArrow("right",next,next?`${next.title}로 이동`:"");
}
function renderCaseEvent(){if(canTruth()){const box=document.createElement("div");box.className="caseEvent";box.innerHTML=`<h3>용의자 소집 가능</h3><p>최태오의 마지막 동선, 객실 호출 공백, 외부 보고 차단 기록이 모두 모였다.</p><button id="sceneTruth" class="btn primary">용의자들을 부른다</button>`;$("hotspots").appendChild(box);$("sceneTruth").onclick=openTruth}}
function renderNav(){$("placeNav").innerHTML="";places.forEach(p=>{const open=state.unlocked.includes(p.id);const b=document.createElement("button");b.className=`placeBtn ${open?"open":"locked"} ${state.place===p.id?"active":""}`;b.textContent=open?p.title:"잠김";b.disabled=!open;b.onclick=()=>{state.place=p.id;save();render()};$("placeNav").appendChild(b)})}
function renderInv(){$("inventory").innerHTML="";state.got.forEach(id=>{const c=clues[id];if(c)addInv(c.title,A(c.thumb),()=>openImage(c.title,A(c.img),c.note))})}
function addInv(t,img,fn){const b=document.createElement("button");b.className="invItem";b.innerHTML=`<img src="${img}" alt=""><span>${t}</span>`;b.onclick=fn;$("inventory").appendChild(b)}
function renderNotes(){$("notes").innerHTML="";(state.notes.length?state.notes:["기록 대기"]).forEach(n=>{const d=document.createElement("div");d.className="note";d.textContent=n;$("notes").appendChild(d)})}
function renderProgress(){const pct=Math.min(100,Math.round(state.got.length/Object.keys(clues).length*34+state.solved.length/places.length*44+(state.truth?12:0)+(state.escape?10:0)));$("progressText").textContent=pct+"%";$("progressBar").style.width=pct+"%";$("summonTop").classList.toggle("hidden",!canTruth())}
function getClue(id){const c=clues[id];if(!has(id)){state.got.push(id);note(c.note);save();render();toast("기록 추가")}openImage(c.title,A(c.img),c.note)}
function grant(ids){ids.forEach(id=>{if(!has(id)){state.got.push(id);note(clues[id].note)}});save();render()}
function openImage(t,src,cap=""){$("imageTitle").textContent=t;$("imageFull").style.display="";$("imageFull").src=src;$("imageCaption").textContent=cap;$("imageModal").classList.remove("hidden")}
function closePuzzle(){$("puzzleModal").classList.add("hidden")}
function pTitle(t){return `<h2 class="pTitle">${t}</h2>`}
function msg(t=""){return `<div class="msg">${t}</div>`}
function option(parent,text,active,fn){const b=document.createElement("button");b.className=`opt ${active?"sel":""}`;b.textContent=text;b.onclick=fn;$(parent).appendChild(b)}
function card(id,label){const c=clues[id];return `<button class="clueCard" onclick="openImage('${c.title}','${A(c.img)}','${c.note}')"><img src="${A(c.img)}" alt=""><span>${label}</span></button>`}
function pass(puzzle,notes=[],grantIds=[],dialogueKey=null){if(!state.solved.includes(puzzle))state.solved.push(puzzle);notes.forEach(note);grant(grantIds);const p=places.find(x=>x.puzzle===puzzle);const n=p&&places[places.findIndex(x=>x.id===p.id)+1]?.id;if(n&&n!=="communication"&&!state.unlocked.includes(n))state.unlocked.push(n);save();render();toast("잠금 해제");if(dialogueKey)showDialogue(dialogueKey);else closePuzzle()}
function openPuzzle(){const p=place();if(!p.req.every(has)){toast("기록 부족");return}builders[p.puzzle]();$("puzzleModal").classList.remove("hidden")}
const builders={deck,lounge,medical,corridor,cabin,office,communication};

function deck(){const data=[{f:"puzzle-photo-a.jpg",l:"사진 A",t:"22:27"},{f:"puzzle-photo-b.jpg",l:"사진 B",t:"22:15"},{f:"puzzle-photo-c.jpg",l:"사진 C",t:"22:35"},{f:"puzzle-photo-d.jpg",l:"사진 D",t:"22:22"},{f:"puzzle-photo-e.jpg",l:"사진 E",t:"22:31"}];let order=[...data].sort(()=>Math.random()-.5);const correct="22:15|22:22|22:27|22:31|22:35";function draw(e=""){$("puzzleRoot").innerHTML=pTitle("촬영 기록 배열")+`<div class="row" id="photoCards"></div>`+msg(e)+`<div class="actions"><button class="btn" id="shuffle">섞기</button><button class="btn primary" id="check">순서 확인</button></div>`;order.forEach((p,i)=>{const div=document.createElement("div");div.className="card";div.innerHTML=`<img src="${A(p.f)}"><div>${p.l} / ${p.t}</div><button class="opt" ${i===0?"disabled":""}>←</button><button class="opt" ${i===order.length-1?"disabled":""}>→</button>`;const bs=div.querySelectorAll("button");bs[0].onclick=()=>{[order[i-1],order[i]]=[order[i],order[i-1]];draw()};bs[1].onclick=()=>{[order[i+1],order[i]]=[order[i],order[i+1]];draw()};$("photoCards").appendChild(div)});$("shuffle").onclick=()=>{order.sort(()=>Math.random()-.5);draw()};$("check").onclick=()=>order.map(x=>x.t).join("|")===correct?pass("deck",["22:15-22:35 / 촬영 흐름 확인"],[],"deck"):draw("시간 배열 불일치")}draw()}

function lounge(){const image=A("clue-lounge-seat-map(1).jpg");let tiles=[{id:0,pos:"0% 0%"},{id:1,pos:"100% 0%"},{id:2,pos:"0% 100%"},{id:3,pos:"100% 100%"}].sort(()=>Math.random()-.5);let sel=null;function draw(e=""){$("puzzleRoot").innerHTML=pTitle("좌석 배치도 복원")+`<div class="row">${card("loungeMap","현재 사건 / 좌석 배치도")}${card("kangLetter","해금 예정 / 가족 편지")}</div><div class="row"><div class="tileBoard" id="board" style="--img:url('${image}')"></div></div>`+msg(e)+`<div class="actions"><button class="btn" id="shuffle">섞기</button><button class="btn primary" id="check">도면 확인</button></div>`;tiles.forEach((t,i)=>{const b=document.createElement("button");b.className=`tile ${sel===i?"sel":""}`;b.style.backgroundPosition=t.pos;b.onclick=()=>{if(sel===null)sel=i;else{[tiles[sel],tiles[i]]=[tiles[i],tiles[sel]];sel=null}draw()};$("board").appendChild(b)});$("shuffle").onclick=()=>{tiles.sort(()=>Math.random()-.5);draw()};$("check").onclick=()=>tiles.map(t=>t.id).join("")==="0123"?pass("lounge",["좌석 배치도 / 도면 복원","강하나 / 가족 편지 기록"],["kangLetter"],"lounge"):draw("도면 조각 불일치")}draw()}

function medical(){
 let slot="", drug="", stamp="";
 function draw(e=""){
  $("puzzleRoot").innerHTML=pTitle("약품 보관함 잠금")+
   `<div class="row compactRow">
      ${card("medicalDrug","약품 보관함")}
      ${card("medicalLog","의무 기록지")}
      ${card("kangReport","반려된 보고서")}
    </div>`+
   `<div class="slot">비어 있는 칸: ${slot||"선택 대기"}</div><div class="row" id="slotBtns"></div>`+
   `<div class="slot">기록지의 약품명: ${drug||"선택 대기"}</div><div class="row" id="drugBtns"></div>`+
   `<div class="slot">보고서 도장: ${stamp||"선택 대기"}</div><div class="row" id="stampBtns"></div>`+
   msg(e)+
   `<div class="actions"><button class="btn" id="clear">초기화</button><button class="btn primary" id="check">잠금 해제</button></div>`;

  ["왼쪽 칸","가운데 칸","오른쪽 칸"].forEach(x=>option("slotBtns",x,slot===x,()=>{slot=x;draw()}));
  ["NVX-201","AG-204","GF-72"].forEach(x=>option("drugBtns",x,drug===x,()=>{drug=x;draw()}));
  ["ARCHIVED","REJECTED","APPROVED"].forEach(x=>option("stampBtns",x,stamp===x,()=>{stamp=x;draw()}));

  $("clear").onclick=()=>{slot="";drug="";stamp="";draw()};
  $("check").onclick=()=>{
    const ok=slot==="왼쪽 칸"&&drug==="NVX-201"&&stamp==="REJECTED";
    ok?pass("medical",[
      "약품 보관함 / 왼쪽 칸 누락",
      "NVX-201 / 의무 기록지와 반려 보고서",
      "강하나 / 최태오 회사의 부작용 기록"
    ],["kangMedical","kangLetter","kangReport"],"medical"):draw("약품 보관함, 약품명, 도장 중 맞지 않는 항목이 있다")
  };
 }
 draw()
}
function corridor(){
 let dir="",handle="",photo="";
 function draw(e=""){
  $("puzzleRoot").innerHTML=pTitle("복도 흔적 확인")+
   `<div class="row">${card("footprints","현재 사건 / 발자국")}${card("handle","현재 사건 / 문손잡이")}${card("leePhoto","이민정 과거 / 오래된 사진")}</div>`+
   `<div class="slot">발자국 방향: ${dir||"선택 대기"}</div><div class="row" id="dirs"></div>`+
   `<div class="slot">문손잡이 흔적: ${handle||"선택 대기"}</div><div class="row" id="handles"></div>`+
   `<div class="slot">오래된 사진 속 기록이 이어지는 장소: ${photo||"선택 대기"}</div><div class="row" id="photoLinks"></div>`+
   msg(e)+
   `<div class="actions"><button class="btn" id="clear">초기화</button><button class="btn primary" id="check">흔적 확인</button></div>`;

  ["라운지 쪽으로 돌아간다","객실 문 앞에서 멈춘다","비상계단 쪽으로 이어진다"].forEach(x=>option("dirs",x,dir===x,()=>{dir=x;draw()}));
  ["문이 열린 흔적","문이 잠긴 흔적","청소 흔적"].forEach(x=>option("handles",x,handle===x,()=>{handle=x;draw()}));
  ["갑판 사진 묶음","객실 712","통신실 로그"].forEach(x=>option("photoLinks",x,photo===x,()=>{photo=x;draw()}));

  $("clear").onclick=()=>{dir="";handle="";photo="";draw()};
  $("check").onclick=()=>{
    const ok=dir==="객실 문 앞에서 멈춘다"&&handle==="문이 열린 흔적"&&photo==="객실 712";
    ok?pass("corridor",[
      "발자국 / 객실 문 앞 정지",
      "문손잡이 / 열린 흔적",
      "오래된 사진 / 이민정과 최태오의 과거 접점",
      "이민정 / 객실 712로 이어진 인물"
    ],["leePhoto"],"corridor"):draw("흔적 연결이 맞지 않는다")
  };
 }
 draw()
}
function cabin(){
 let order=[],gap="",relation="";
 const cards=[["22:02 정상 호출","22:02"],["22:15 호출 시작","22:15"],["22:22 응답 없음","22:22"],["22:31 기록 종료","22:31"]];
 function draw(e=""){
  $("puzzleRoot").innerHTML=pTitle("객실 호출 기록")+
   `<div class="row">${card("cabinCall","현재 사건 / 호출 기록")}${card("cabinTrace","현재 사건 / 충돌 흔적")}${card("leeCall","이민정 과거 / 통화 기록")}${card("leeLawsuit","이민정 과거 / 진정서")}</div>`+
   `<div class="slot">기록 순서: ${order.join(" → ")||"선택 대기"}</div><div class="row" id="timeBtns"></div>`+
   `<div class="slot">비어 있는 구간: ${gap||"선택 대기"}</div><div class="row" id="gapBtns"></div>`+
   `<div class="slot">진정서가 향하는 대상: ${relation||"선택 대기"}</div><div class="row" id="relationBtns"></div>`+
   msg(e)+
   `<div class="actions"><button class="btn" id="clear">초기화</button><button class="btn primary" id="check">기록 확인</button></div>`;

  cards.forEach(([label,val])=>option("timeBtns",label,order.includes(val),()=>{if(!order.includes(val))order.push(val);draw()}));
  ["22:02-22:15","22:15-22:22","22:22-22:31"].forEach(x=>option("gapBtns",x,gap===x,()=>{gap=x;draw()}));
  ["운영 담당자 황세준","제약회사 대표 최태오","VIP 초청자 강하나"].forEach(x=>option("relationBtns",x,relation===x,()=>{relation=x;draw()}));

  $("clear").onclick=()=>{order=[];gap="";relation="";draw()};
  $("check").onclick=()=>{
    const ok=order.join("|")==="22:02|22:15|22:22|22:31"&&gap==="22:15-22:22"&&relation==="제약회사 대표 최태오";
    ok?pass("cabin",[
      "22:15-22:22 / 호출 공백",
      "객실 현장 / 직접 대면 흔적",
      "이민정 / 최태오를 향한 진정서와 통화 기록",
      "이민정 / 신약 부작용을 직접 겪은 피해자"
    ],["leeCall","leeLawsuit"],"cabin"):draw("시간 순서, 공백 구간, 진정서 대상 중 맞지 않는 항목이 있다")
  };
 }
 draw()
}
function office(){
 let map={};
 const docs=[["hwangContract","계약"],["hwangAccess","접근"],["officeThreat","경고"],["officeMail","차단"],["hwangBlackmail","압박"]];
 const choices=["계약","접근","경고","차단","압박"];
 function draw(e=""){
  $("puzzleRoot").innerHTML=pTitle("문서 분류")+`<div class="row compactRow" id="docs"></div>`+msg(e)+`<div class="actions"><button class="btn" id="clear">초기화</button><button class="btn primary" id="check">문서 확인</button></div>`;
  docs.forEach(([id,ans])=>{
    const d=document.createElement("div");
    d.className="clueTile";
    d.innerHTML=`<button class="zoomTile"><img src="${A(clues[id].img)}"><span>${clues[id].title}</span></button><div class="slot ${map[id]?"filled":""}">${map[id]||"분류"}</div><div class="pickBtns"></div>`;
    d.querySelector('.zoomTile').onclick=()=>openImage(clues[id].title,A(clues[id].img),clues[id].note);
    choices.forEach(ch=>{const b=document.createElement('button');b.className=`miniBtn ${map[id]===ch?'sel':''}`;b.textContent=ch;b.onclick=()=>{map[id]=ch;draw()};d.querySelector('.pickBtns').appendChild(b)});
    $("docs").appendChild(d);
  });
  $("clear").onclick=()=>{map={};draw()};
  $("check").onclick=()=>docs.every(([id,ans])=>map[id]===ans)
     ? pass("office",["계약 / 접근 / 경고 / 보고 차단 / 내부 압박","황세준 / 최태오 회사 내부자와 통신 접근 권한"],["hwangContract","hwangAccess","hwangBlackmail"],"office")
     : draw("문서 분류가 맞지 않는다");
 }
 draw();
}
function communication(){let seq=[];const nums=["17","9","5","3","22","18"],answer="179532218";function draw(e=""){$("puzzleRoot").innerHTML=pTitle("송신 기록 복원")+`<div class="codeGrid"><div>${card("transCode","송신 코드 카드")}${card("console","통신 콘솔")}${card("channel","비상 채널")}${card("routeLock","항로 잠금")}</div><div><div class="slot">좌측 기록 → 우측 기록<br>위에서 아래로 입력</div><div class="display">${seq.join("")||"송신 대기"}</div><div id="nums" class="numBtns"></div>`+msg(e)+`<div class="actions"><button class="btn" id="clear">초기화</button><button class="btn primary" id="send">송신</button></div></div></div>`;nums.forEach(n=>{const b=document.createElement("button");b.className="num";b.textContent=n;b.onclick=()=>{seq.push(n);draw()};$("nums").appendChild(b)});$("clear").onclick=()=>{seq=[];draw()};$("send").onclick=()=>{if(!state.truth){showEnding(false,"SIGNAL LOST","TRUTH REQUIRED");return}seq.join("")===answer?(state.escape=true,note("SIGNAL SENT"),note("ROUTE UNLOCKED"),save(),showEnding(true,"송신 완료","항로 잠금 해제")):draw("열 순서 불일치")}}draw()}

const dialogues={deck:{profile:"lee",name:"이민정",lines:["갑판 사진의 시간이 맞춰지자, 최태오가 쓰러진 뒤 배가 어디에도 닿지 못한 시간이 드러났다.","이민정은 바다 쪽을 보며 말했다. “최태오 대표가 쓰러진 건 갑판이 아니었어요. 시작은 라운지였죠.”","그녀의 말은 최태오의 마지막 동선을 라운지 쪽으로 돌려놓았다."]},lounge:{profile:"kang",name:"강하나",lines:["좌석 도면이 복원되자 최태오의 VIP 좌석과 가까운 초청석이 드러났다.","강하나는 손을 움켜쥐었다. “그 자리에 앉았다는 이유만으로는 아무것도 증명할 수 없어요.”","그 말과 함께 접힌 가족 편지가 수집 기록에 남았다. 강하나는 단순한 초청객이 아니었다."]},medical:{profile:"kang",name:"강하나",lines:["현재의 약품 누락 기록과 과거 부작용 보고서가 나란히 놓였다.","강하나는 긴 침묵 끝에 말했다. “그 보고서는 오래전에 사라졌어야 했어요. 우리 가족도, 그 기록도요.”","최태오의 회사가 묻어둔 부작용 사건은 강하나가 이 배에 오른 이유가 되었다."]},corridor:{profile:"lee",name:"이민정",lines:["발자국은 객실 문 앞에서 멈췄고, 문손잡이는 누군가의 접촉을 남겼다.","이민정은 오래된 사진을 바라보며 말했다. “그 사람은 제게 사과해야 했어요. 그 회사의 약을 먹은 뒤로, 제 삶이 달라졌으니까요.”","이민정은 최태오와 과거부터 이어진 직접 피해자였다."]},cabin:{profile:"lee",name:"이민정",lines:["호출 기록의 빈 구간은 22:15에서 22:22 사이에 고정되었다.","이민정은 낮게 말했다. “제가 방을 나왔을 때, 아직 완전히 끝난 건 아니었어요.”","반려된 진정서와 호출 기록은 이민정이 최태오를 직접 찾아갔고, 그 뒤 최태오가 도움을 받지 못한 시간을 보여주었다."]},office:{profile:"hwang",name:"황세준",lines:["문서들이 분류되자 계약서, 접근 로그, 압박 문서가 한 줄로 이어졌다.","황세준은 문서를 보고 더 이상 부정하지 못했다. “예전엔 최태오 대표의 회사에서 일했습니다. 그때부터 빠져나올 수 없었죠.”","통신실 접근 권한은 사건 이후 배가 밀실이 된 이유를 가리켰다."]}};
function showDialogue(key){const d=dialogues[key];let i=0;function draw(){$("puzzleRoot").innerHTML=pTitle(d.name)+`<div class="dialogueLayout"><div class="portraits"><img src="${A(profiles[d.profile].img)}"></div><div><div class="dialogue">${d.lines[i]}</div><div class="actions"><span></span><button id="nextLine" class="btn primary">${i===d.lines.length-1?"계속 조사":"다음"}</button></div></div></div>`;$("nextLine").onclick=()=>{i++;if(i>=d.lines.length)closePuzzle();else draw()}}draw();$("puzzleModal").classList.remove("hidden")}

function canTruth(){return ["deck","lounge","medical","corridor","cabin","office"].every(solved)&&!state.truth}
function openTruth(){
 let step=0;
 const rounds=[
  {
    speaker:"강하나",
    profile:"kang",
    statement:"“저는 최태오 대표의 회사와 개인적인 관계가 없어요. 그날 라운지에서도 그냥 멀리 앉아 있었을 뿐입니다.”",
    lie:"최태오 대표의 회사와 개인적인 관계가 없어요.",
    evidence:"가족 편지",
    evidenceId:"kangLetter",
    result:"가족 편지와 부작용 보고서는 강하나가 단순한 초청객이 아니라 피해자의 가족이었음을 보여준다."
  },
  {
    speaker:"이민정",
    profile:"lee",
    statement:"“저는 객실 안에 들어가지 않았어요. 최태오 대표를 직접 찾아간 적도 없습니다.”",
    lie:"객실 안에 들어가지 않았어요.",
    evidence:"문손잡이 흔적",
    evidenceId:"handle",
    result:"복도 발자국과 문손잡이 흔적은 이민정이 객실 문 앞에서 멈췄고, 문이 열린 뒤 안으로 들어갔음을 가리킨다."
  },
  {
    speaker:"황세준",
    profile:"hwang",
    statement:"“통신실은 제 권한 밖입니다. 사건 이후 보고가 멈춘 이유도 저는 모릅니다.”",
    lie:"통신실은 제 권한 밖입니다.",
    evidence:"접근 로그",
    evidenceId:"hwangAccess",
    result:"접근 로그와 운영 계약서는 황세준에게 통신실 접근 권한이 있었고, 보고 차단에 개입할 수 있었음을 보여준다."
  }
 ];

 function draw(e=""){
  const r=rounds[step];
  $("puzzleRoot").innerHTML=pTitle("진상 밝히기")+
   `<div class="dialogueLayout">
      <div class="portraits"><img src="${A(profiles[r.profile].img)}"></div>
      <div>
        <div class="dialogue">
          <b>${r.speaker}</b><br><br>
          ${r.statement}<br><br>
          <span style="color:var(--muted)">모순되는 문장과 제시할 단서를 고르시오.</span>
        </div>
        <div class="slot">모순 문장: <span id="selectedLie">선택 대기</span></div>
        <div class="row" id="lieBtns"></div>
        <div class="slot">제시 단서: <span id="selectedEvidence">선택 대기</span></div>
        <div class="row" id="evidenceBtns"></div>
        ${msg(e)}
        <div class="actions">
          <button class="btn" id="resetTruth">다시 선택</button>
          <button class="btn primary" id="checkTruth">추궁</button>
        </div>
      </div>
    </div>`;

  let pickedLie="", pickedEvidence="";
  [
    r.lie,
    "그날 라운지에는 가지 않았어요.",
    "최태오 대표가 쓰러진 뒤에야 알았습니다."
  ].forEach(x=>option("lieBtns",x,false,()=>{pickedLie=x;$("selectedLie").textContent=x}));
  [
    r.evidence,
    "갑판 사진 묶음",
    "라운지 컵 기록"
  ].forEach(x=>option("evidenceBtns",x,false,()=>{pickedEvidence=x;$("selectedEvidence").textContent=x}));

  $("resetTruth").onclick=()=>draw();
  $("checkTruth").onclick=()=>{
    if(pickedLie===r.lie&&pickedEvidence===r.evidence){
      note(`${r.speaker} / 모순 확인`);
      showContradictionResult(r);
    }else{
      draw("모순 문장 또는 제시 단서가 맞지 않는다")
    }
  };
 }

 function showContradictionResult(r){
  $("puzzleRoot").innerHTML=pTitle(`${r.speaker}의 모순`)+
   `<div class="dialogueLayout">
      <div class="portraits"><img src="${A(profiles[r.profile].img)}"></div>
      <div>
        <div class="dialogue">${r.result}</div>
        <div class="row">${card(r.evidenceId,r.evidence)}</div>
        <div class="actions"><span></span><button id="nextTruth" class="btn primary">${step===rounds.length-1?"통신실로":"다음 대화"}</button></div>
      </div>
    </div>`;
  $("nextTruth").onclick=()=>{
    step++;
    if(step>=rounds.length){
      state.truth=true;
      if(!state.unlocked.includes("communication"))state.unlocked.push("communication");
      note("진상 확인 / 대화 속 모순 세 가지");
      save();render();closePuzzle();toast("통신실 해금");
    }else draw();
  };
 }

 draw();
 $("puzzleModal").classList.remove("hidden")
}
function showEnding(success,t,sub){$("endingImage").src=A(success?"ending-escape-success.jpg":"ending-escape-fail.jpg");$("endingTitle").textContent=t;$("endingSub").textContent=sub;$("truthSummary").classList.toggle("hidden",!success);closePuzzle();$("imageModal").classList.add("hidden");screen("ending")}
function openTruthSummary(){const html=`<div class="summaryText"><p>크루즈가 항구의 불빛을 향해 방향을 틀었을 때에도, 배 안의 누구도 쉽게 입을 열지 못했다. 최태오의 죽음은 그날 밤 갑자기 일어난 사건처럼 보였지만, 사실 그 죽음은 훨씬 오래전부터 배 안으로 따라 들어온 일이었다.</p><p>최태오는 신약 부작용 사건을 은폐한 제약회사 대표였다. 이번 VIP 크루즈 행사는 투자자와 관계자들을 모아 다시 한 번 회사를 포장하기 위한 자리였다. 그는 성공한 대표처럼 웃으며 라운지의 VIP 좌석에 앉았지만, 같은 배 안에는 그가 묻었다고 믿었던 과거가 함께 타고 있었다.</p><p>강하나는 초청객의 이름으로 배에 올랐다. 그러나 그녀의 가방 안쪽에 접힌 가족 편지와 오래된 의료 기록은 그녀가 단순한 손님이 아니었음을 보여주었다. 그녀의 가족은 최태오 회사의 신약 부작용 사건으로 무너졌고, 반려된 보고서는 그 피해가 공식 기록에서 지워졌다는 사실을 남기고 있었다. 라운지에서 시작된 최태오의 이상 증세는 그녀가 감춰온 분노와 맞닿아 있었다.</p><p>이민정은 직접 부작용을 겪은 사람이었다. 오래된 사진은 그녀가 최태오와 과거부터 연결되어 있었음을, 통화 기록과 반려된 진정서는 그녀가 여러 번 책임을 묻고자 했음을 보여주었다. 최태오가 객실로 향한 뒤, 그녀는 그 문 앞까지 갔고 안으로 들어갔다. 객실의 충돌 흔적과 호출 기록의 공백은 그 대면이 단순한 항의로 끝나지 않았음을 말해주었다.</p><p>황세준은 크루즈 운영 담당자였지만, 그보다 먼저 최태오의 회사에서 일했던 내부자였다. 계약서, 접근 로그, 내부 압박 문서는 그가 왜 이 배에서 통신과 보고에 접근할 수 있었는지를 설명했다. 최태오가 도움을 요청할 수 있었던 시간, 외부로 나가야 할 보고는 멈췄다. 그 침묵이 배를 밀실로 만들었다.</p><p>결국 최태오의 죽음은 한 사람의 단독 범행으로 닫히지 않았다. 라운지에서 시작된 이상 증세, 객실에서의 직접 대면, 그리고 통신과 보고 차단이 차례로 겹치며 죽음은 완성되었다. 플레이어가 송신한 것은 단순한 탈출 신호가 아니라, 세 사람의 과거와 최태오의 은폐가 얽힌 사건 기록 전체였다.</p><p>항구가 가까워질 무렵, 손안에는 작은 USB가 남아 있었다. 그 안에는 이 배가 침묵하려 했던 모든 기록이 들어 있었다.</p><h3>USB를 어떻게 할 것인가?</h3><div id="usbChoices" class="row"></div><div id="choiceResult" class="endingChoice hidden"></div></div>`;$("imageTitle").textContent="사건 전말";$("imageFull").style.display="none";$("imageCaption").innerHTML=html;$("imageModal").classList.remove("hidden");setTimeout(()=>{const choices=[["언론사에 보낸다","며칠 뒤, 새벽 뉴스에 최태오의 이름이 다시 오른다. 하지만 화면 속 자료의 출처는 끝내 밝혀지지 않는다."],["피해자 가족에게 먼저 전달한다","USB는 가장 먼저 피해자들의 손에 도착한다. 그들이 침묵을 깰지, 다시 숨길지는 아직 알 수 없다."],["수사기관에 제출한다","사건은 공식 기록으로 넘어간다. 그러나 기록이 진실이 되기까지는 또 다른 시간이 필요하다."],["직접 보관한다","USB는 아직 열리지 않은 채 남아 있다. 침묵의 항로는 끝났지만, 침묵이 끝난 것은 아니다."]];const wrap=document.getElementById("usbChoices");choices.forEach(([b,t])=>{const btn=document.createElement("button");btn.className="opt";btn.textContent=b;btn.onclick=()=>{const r=document.getElementById("choiceResult");r.textContent=t;r.classList.remove("hidden")};wrap.appendChild(btn)})},0)}
function openProfile(k){openImage(profiles[k].name,A(profiles[k].img),"")}

function showPrologue(){$("puzzleRoot").innerHTML=pTitle("최태오 사망")+`<div class="prologue"><p>VIP 라운지에서 최태오가 쓰러졌다.</p><p>그는 객실로 옮겨졌고, 얼마 지나지 않아 사망이 확인되었다.</p><p>크루즈는 바다 한가운데 멈춰 있다. 통신은 닫혔고, 항로는 잠겼다.</p><p>사건 기록을 복원하지 못하면 이 배는 계속 침묵한다.</p></div><div class="actions"><span></span><button id="startPrologue" class="btn primary">갑판으로 이동</button></div>`;$("puzzleModal").classList.remove("hidden");$("startPrologue").onclick=()=>closePuzzle()}

document.addEventListener("DOMContentLoaded",()=>{$("newGame").onclick=()=>{reset();screen("game");showPrologue()};$("continueGame").onclick=()=>{screen("game");render()};$("resetGame").onclick=()=>{reset();toast("기록 초기화")};$("homeBtn").onclick=()=>screen("home");$("puzzleBtn").onclick=openPuzzle;$("closePuzzle").onclick=closePuzzle;$("summonTop").onclick=openTruth;$("backGame").onclick=()=>{screen("game");render()};$("endingHome").onclick=()=>screen("home");$("truthSummary").onclick=openTruthSummary;document.querySelectorAll("[data-close]").forEach(el=>el.onclick=()=>{$(el.dataset.close).classList.add("hidden");$("imageFull").style.display=""});document.querySelectorAll(".profileBtn").forEach(b=>b.onclick=()=>openProfile(b.dataset.profile));render()});
