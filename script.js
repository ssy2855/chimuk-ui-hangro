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
function grant(ids){
 const newly=[];
 ids.forEach(id=>{
  if(!has(id)){
   state.got.push(id);
   note(clues[id].note);
   newly.push(id);
  }
 });
 save();render();
 if(newly.length) showEvidenceGain(newly);
}

function showEvidenceGain(ids){
 const cardsHtml=ids.map(id=>{
  const c=clues[id];
  return `<button class="clueCard" onclick="openImage('${c.title}','${A(c.img)}','${c.note}')">
    <img src="${A(c.img)}" alt="">
    <span>${c.title}</span>
  </button>`;
 }).join("");
 $("imageTitle").textContent="새 단서 획득";
 $("imageFull").style.display="none";
 $("imageCaption").innerHTML=`<div class="summaryText"><p>조사 기록에 새로운 단서가 추가되었다.</p><div class="row compactRow">${cardsHtml}</div></div>`;
 $("imageModal").classList.remove("hidden");
}
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

function lounge(){
 const image=A("clue-lounge-seat-map(1).jpg");
 let tiles=[
  {id:0,pos:"0% 0%"},{id:1,pos:"50% 0%"},{id:2,pos:"100% 0%"},
  {id:3,pos:"0% 50%"},{id:4,pos:"50% 50%"},{id:5,pos:"100% 50%"},
  {id:6,pos:"0% 100%"},{id:7,pos:"50% 100%"},{id:8,pos:"100% 100%"}
 ].sort(()=>Math.random()-.5);
 let sel=null;

 function draw(e=""){
  $("puzzleRoot").innerHTML=pTitle("라운지 좌석 배치도 복원")+
   `<div class="row compactRow">
      ${card("loungeMap","좌석 배치도")}
      ${card("loungeCup","라운지 잔 기록")}
    </div>
    <div class="slot">찢어진 좌석 배치도를 원래 형태로 맞춘다.</div>
    <div class="tileBoard nine" id="lounge9" style="--img:url('${image}')"></div>`+
   msg(e)+
   `<div class="actions">
      <button class="btn" id="shuffleLounge">섞기</button>
      <button class="btn primary" id="checkLounge">도면 확인</button>
    </div>`;

  tiles.forEach((t,i)=>{
   const b=document.createElement("button");
   b.className=`tile ${sel===i?"sel":""}`;
   b.style.backgroundPosition=t.pos;
   b.onclick=()=>{
    if(sel===null) sel=i;
    else{[tiles[sel],tiles[i]]=[tiles[i],tiles[sel]];sel=null}
    draw();
   };
   $("lounge9").appendChild(b);
  });

  $("shuffleLounge").onclick=()=>{tiles.sort(()=>Math.random()-.5);sel=null;draw()};
  $("checkLounge").onclick=()=>{
   const ok=tiles.map(t=>t.id).join("")==="012345678";
   ok?pass("lounge",[
    "좌석 배치도 / VIP 좌석과 초청석 확인",
    "강하나 / 최태오의 좌석 가까이에 있던 초청객"
   ],["kangLetter"],"lounge"):draw("도면 조각이 맞지 않는다")
  };
 }
 draw()
}
function medical(){
 function draw(){
  $("puzzleRoot").innerHTML=pTitle("의무실 조사")+
   `<div class="row compactRow">
      ${card("medicalLog","의무 기록지")}
      ${card("medicalDrug","약품 보관함")}
      ${card("kangMedical","피해 의료 기록")}
      ${card("kangReport","반려된 보고서")}
    </div>
    <div class="dialogue">
      약품 보관함에는 비어 있는 자리가 있고, 의무 기록지에는 같은 계열의 약품 흔적이 남아 있다.
      반려된 보고서와 피해 의료 기록은 이 일이 오늘 밤 처음 시작된 일이 아니라는 사실을 보여준다.
    </div>
    <div class="actions">
      <span></span>
      <button class="btn primary" id="finishMedical">조사 기록에 추가</button>
    </div>`;
  $("finishMedical").onclick=()=>pass("medical",[
   "의무실 / 비어 있는 약품 자리",
   "강하나 / 접힌 가족 편지와 반려된 보고서"
  ],["kangMedical","kangLetter","kangReport"],"medical");
 }
 draw()
}
function corridor(){
 function draw(){
  $("puzzleRoot").innerHTML=pTitle("복도 조사")+
   `<div class="row compactRow">
      ${card("footprints","복도 발자국")}
      ${card("handle","문손잡이 흔적")}
      ${card("leePhoto","오래된 사진")}
    </div>
    <div class="dialogue">
      발자국은 복도를 지나 객실 문 앞에서 멈춘다.
      문손잡이에 남은 흔적은 누군가 문을 열고 들어갔음을 보여준다.
      오래된 사진은 이민정과 최태오가 오늘 밤 처음 만난 사이가 아니었음을 암시한다.
    </div>
    <div class="actions">
      <span></span>
      <button class="btn primary" id="finishCorridor">조사 기록에 추가</button>
    </div>`;
  $("finishCorridor").onclick=()=>pass("corridor",[
   "복도 / 객실 문 앞에서 끊긴 발자국",
   "문손잡이 / 열린 흔적",
   "이민정 / 최태오와 과거부터 이어진 접점"
  ],["leePhoto"],"corridor");
 }
 draw()
}
function cabin(){
 function draw(){
  $("puzzleRoot").innerHTML=pTitle("객실 조사")+
   `<div class="row compactRow">
      ${card("cabinCall","호출 장치")}
      ${card("cabinTrace","객실 현장")}
      ${card("leeCall","통화 기록")}
      ${card("leeLawsuit","반려된 진정서")}
    </div>
    <div class="dialogue">
      객실에는 급하게 도움을 요청하려 한 흔적과 충돌의 흔적이 함께 남아 있다.
      이민정의 통화 기록과 반려된 진정서는 그녀가 최태오에게 책임을 묻기 위해 오래전부터 움직였음을 보여준다.
    </div>
    <div class="actions">
      <span></span>
      <button class="btn primary" id="finishCabin">조사 기록에 추가</button>
    </div>`;
  $("finishCabin").onclick=()=>pass("cabin",[
   "객실 / 도움 요청 뒤에 남은 충돌 흔적",
   "이민정 / 최태오를 직접 찾아간 피해자"
  ],["leeCall","leeLawsuit"],"cabin");
 }
 draw()
}
function office(){
 function draw(){
  $("puzzleRoot").innerHTML=pTitle("사무실 조사")+
   `<div class="row compactRow">
      ${card("officeMail","이메일 출력물")}
      ${card("officeThreat","경고 메모")}
      ${card("hwangContract","운영 계약서")}
      ${card("hwangAccess","접근 로그")}
      ${card("hwangBlackmail","압박 문서")}
    </div>
    <div class="dialogue">
      계약서와 접근 로그는 황세준이 통신실에 접근할 수 있는 위치였음을 보여준다.
      이메일 출력물과 압박 문서는 사건 이후 보고가 왜 외부로 나가지 못했는지 설명한다.
    </div>
    <div class="actions">
      <span></span>
      <button class="btn primary" id="finishOffice">조사 기록에 추가</button>
    </div>`;
  $("finishOffice").onclick=()=>pass("office",[
   "사무실 / 통신실에 닿아 있는 접근 기록",
   "황세준 / 최태오 회사 내부자와 보고 차단 정황"
  ],["hwangContract","hwangAccess","hwangBlackmail"],"office");
 }
 draw()
}
function communication(){let seq=[];const nums=["17","9","5","3","22","18"],answer="179532218";function draw(e=""){$("puzzleRoot").innerHTML=pTitle("송신 기록 복원")+`<div class="codeGrid"><div>${card("transCode","송신 코드 카드")}${card("console","통신 콘솔")}${card("channel","비상 채널")}${card("routeLock","항로 잠금")}</div><div><div class="slot">좌측 기록 → 우측 기록<br>위에서 아래로 입력</div><div class="display">${seq.join("")||"송신 대기"}</div><div id="nums" class="numBtns"></div>`+msg(e)+`<div class="actions"><button class="btn" id="clear">초기화</button><button class="btn primary" id="send">송신</button></div></div></div>`;nums.forEach(n=>{const b=document.createElement("button");b.className="num";b.textContent=n;b.onclick=()=>{seq.push(n);draw()};$("nums").appendChild(b)});$("clear").onclick=()=>{seq=[];draw()};$("send").onclick=()=>{if(!state.truth){showEnding(false,"SIGNAL LOST","TRUTH REQUIRED");return}seq.join("")===answer?(state.escape=true,note("SIGNAL SENT"),note("ROUTE UNLOCKED"),save(),showEnding(true,"송신 완료","항로 잠금 해제")):draw("열 순서 불일치")}}draw()}

const dialogues={deck:{profile:"lee",name:"이민정",lines:["사진의 시간이 맞춰졌다. 최태오가 쓰러진 뒤, 이 배는 어디에도 닿지 못하고 있었다.","이민정은 바다 쪽을 보며 말했다. “최태오 대표가 쓰러진 건 갑판이 아니었어요. 시작은 라운지였죠.”","최태오의 마지막 동선은 다시 라운지로 돌아간다."]},lounge:{profile:"kang",name:"강하나",lines:["좌석 도면이 맞춰졌다. 최태오의 VIP 좌석 가까이에 초청석 하나가 걸린다.","강하나는 손을 움켜쥐었다. “그 자리에 앉았다는 이유만으로는 아무것도 증명할 수 없어요.”","접힌 가족 편지가 손에 남았다. 강하나는 단순한 초청객이 아니다."]},medical:{profile:"kang",name:"강하나",lines:["약품 누락 기록과 반려된 보고서가 나란히 놓인다.","강하나는 긴 침묵 끝에 말했다. “그 보고서는 오래전에 사라졌어야 했어요. 우리 가족도, 그 기록도요.”","최태오의 회사가 묻어둔 부작용 사건. 강하나가 이 배에 오른 이유가 여기에 있다."]},corridor:{profile:"lee",name:"이민정",lines:["발자국은 객실 문 앞에서 멈춘다. 문손잡이에는 접촉 흔적이 남아 있다.","이민정은 오래된 사진을 바라보며 말했다. “그 사람은 제게 사과해야 했어요. 그 회사의 약을 먹은 뒤로, 제 삶이 달라졌으니까요.”","이민정은 최태오와 과거부터 이어져 있었다. 그것도 직접 피해자로."]},cabin:{profile:"lee",name:"이민정",lines:["호출 기록의 빈 구간은 22:15에서 22:22 사이에 고정되었다.","이민정은 낮게 말했다. “제가 방을 나왔을 때, 아직 완전히 끝난 건 아니었어요.”","반려된 진정서와 호출 기록이 맞물린다. 이민정은 최태오를 직접 찾아갔다. 그리고 그 뒤, 최태오는 도움을 받지 못했다."]},office:{profile:"hwang",name:"황세준",lines:["계약서, 접근 로그, 압박 문서. 따로 보이던 문서들이 한 줄로 이어진다.","황세준은 문서를 보고 더 이상 부정하지 못했다. “예전엔 최태오 대표의 회사에서 일했습니다. 그때부터 빠져나올 수 없었죠.”","통신실 접근 권한. 이 배가 밀실이 된 이유가 여기에 있다."]}};
function showDialogue(key){const d=dialogues[key];let i=0;function draw(){$("puzzleRoot").innerHTML=pTitle(d.name)+`<div class="dialogueLayout"><div class="portraits"><img src="${A(profiles[d.profile].img)}"></div><div><div class="dialogue">${d.lines[i]}</div><div class="actions"><span></span><button id="nextLine" class="btn primary">${i===d.lines.length-1?"계속 조사":"다음"}</button></div></div></div>`;$("nextLine").onclick=()=>{i++;if(i>=d.lines.length)closePuzzle();else draw()}}draw();$("puzzleModal").classList.remove("hidden")}

function canTruth(){return ["deck","lounge","medical","corridor","cabin","office"].every(solved)&&!state.truth}
function openTruth(){
 let step=0;
 const rounds=[
  {
   speaker:"강하나",
   profile:"kang",
   tag:"kang",
   evidence:"가족 편지",
   evidenceId:"kangLetter",
   lines:[
    "“저는 최태오 대표와 가까운 자리에 앉아 있었던 것뿐이에요.”",
    "“그 사람이 쓰러진 건 저와 상관없습니다.”",
    "“애초에 최태오 대표의 회사와 제 가족은 아무 관계가 없어요.”"
   ],
   contradictionIndex:2,
   result:"가족 편지와 반려된 부작용 보고서는 강하나의 가족이 최태오 회사의 신약 사건과 연결되어 있음을 보여준다."
  },
  {
   speaker:"이민정",
   profile:"lee",
   tag:"lee",
   evidence:"문손잡이 흔적",
   evidenceId:"handle",
   lines:[
    "“저는 라운지에서 소란이 난 뒤 복도에 있었어요.”",
    "“최태오 대표를 직접 찾아간 적은 없습니다.”",
    "“객실 안에는 들어가지 않았어요.”"
   ],
   contradictionIndex:2,
   result:"복도 발자국과 문손잡이 흔적은 이민정이 객실 문 앞에서 멈췄고, 문이 열린 뒤 안으로 들어갔음을 가리킨다."
  },
  {
   speaker:"황세준",
   profile:"hwang",
   tag:"hwang",
   evidence:"접근 로그",
   evidenceId:"hwangAccess",
   lines:[
    "“사망 보고가 늦어진 건 시스템 문제였을 겁니다.”",
    "“저는 행사 운영 담당자일 뿐이에요.”",
    "“통신실은 제 권한 밖입니다.”"
   ],
   contradictionIndex:2,
   result:"접근 로그와 운영 계약서는 황세준에게 통신실 접근 권한이 있었고, 보고 차단에 개입할 수 있었음을 보여준다."
  }
 ];

 function drawDialogue(lineIndex=0, warning=""){
  const r=rounds[step];
  const isLast=lineIndex>=r.lines.length-1;
  $("puzzleRoot").innerHTML=pTitle("용의자 소집")+
   `<div class="summonScene">
      <img src="${A("scene-suspect-gathering.png")}" alt="">
      <button class="nameTag kang">강하나</button>
      <button class="nameTag lee">이민정</button>
      <button class="nameTag hwang">황세준</button>
    </div>
    <div class="crossExam">
      <div class="speakerLine">${r.speaker}</div>
      <div class="dialogue objectionDialogue">${r.lines[lineIndex]}</div>
      <div class="testimonyMeter">
        ${r.lines.map((_,i)=>`<span class="${i===lineIndex?"on":""}"></span>`).join("")}
      </div>
      ${msg(warning)}
      <div class="actions">
        <button class="btn" id="prevLine" ${lineIndex===0?"disabled":""}>이전 발언</button>
        <button class="btn primary objectionBtn" id="objectBtn">이의제기</button>
        <button class="btn" id="nextLine">${isLast?"처음 발언으로":"다음 발언"}</button>
      </div>
    </div>`;

  bindNameTags();
  $("prevLine").onclick=()=>drawDialogue(Math.max(0,lineIndex-1));
  $("nextLine").onclick=()=>drawDialogue(isLast?0:lineIndex+1);
  $("objectBtn").onclick=()=>{
   if(lineIndex===r.contradictionIndex) drawEvidence(lineIndex);
   else drawDialogue(lineIndex,"아직 결정적인 모순은 아니다.")
  };
 }

 function drawEvidence(lineIndex){
  const r=rounds[step];
  $("puzzleRoot").innerHTML=pTitle("증거 제시")+
   `<div class="summonScene">
      <img src="${A("scene-suspect-gathering.png")}" alt="">
      <button class="nameTag kang">강하나</button>
      <button class="nameTag lee">이민정</button>
      <button class="nameTag hwang">황세준</button>
    </div>
    <div class="dialogue">
      <b>이의제기</b><br><br>
      ${r.speaker}의 발언:<br>
      “${r.lines[lineIndex].replace(/[“”]/g,"")}”<br><br>
      이 발언과 모순되는 증거를 제시한다.
    </div>
    <div class="row compactRow" id="evidenceChoices"></div>
    <div class="actions">
      <button class="btn" id="backToTalk">발언으로 돌아가기</button>
    </div>`;

  bindNameTags();
  const choices=[
    {label:r.evidence,id:r.evidenceId},
    {label:"갑판 사진 묶음",id:"deckPhoto"},
    {label:"라운지 잔 기록",id:"loungeCup"}
  ];
  choices.forEach(ch=>{
    const c=clues[ch.id];
    const b=document.createElement("button");
    b.className="clueCard";
    b.innerHTML=`<img src="${A(c.img)}" alt=""><span>${ch.label}</span>`;
    b.onclick=()=>ch.id===r.evidenceId?showResult(r):drawEvidenceError(lineIndex);
    $("evidenceChoices").appendChild(b);
  });
  $("backToTalk").onclick=()=>drawDialogue(lineIndex);
 }

 function drawEvidenceError(lineIndex){
  $("puzzleRoot").insertAdjacentHTML("beforeend", `<div class="msg">그 증거로는 모순을 무너뜨릴 수 없다.</div>`);
 }

 function showResult(r){
  note(`${r.speaker} / 모순 확인`);
  $("puzzleRoot").innerHTML=pTitle(`${r.speaker}의 모순`)+
   `<div class="summonScene">
      <img src="${A("scene-suspect-gathering.png")}" alt="">
      <button class="nameTag kang">강하나</button>
      <button class="nameTag lee">이민정</button>
      <button class="nameTag hwang">황세준</button>
    </div>
    <div class="dialogue">${r.result}</div>
    <div class="row">${card(r.evidenceId,r.evidence)}</div>
    <div class="actions"><span></span><button id="nextTruth" class="btn primary">${step===rounds.length-1?"통신실로":"다음 증언"}</button></div>`;
  bindNameTags();
  $("nextTruth").onclick=()=>{
   step++;
   if(step>=rounds.length){
    state.truth=true;
    if(!state.unlocked.includes("communication"))state.unlocked.push("communication");
    note("진상 확인 / 증언 속 모순 세 가지");
    save();render();closePuzzle();toast("통신실 해금");
   }else drawDialogue(0);
  };
 }

 function bindNameTags(){
  const k=document.querySelector(".nameTag.kang");
  const l=document.querySelector(".nameTag.lee");
  const h=document.querySelector(".nameTag.hwang");
  if(k) k.onclick=()=>openProfile("kang");
  if(l) l.onclick=()=>openProfile("lee");
  if(h) h.onclick=()=>openProfile("hwang");
 }

 drawDialogue(0);
 $("puzzleModal").classList.remove("hidden")
}
function showEnding(success,t,sub){$("endingImage").src=A(success?"ending-escape-success.jpg":"ending-escape-fail.jpg");$("endingTitle").textContent=t;$("endingSub").textContent=sub;$("truthSummary").classList.toggle("hidden",!success);closePuzzle();$("imageModal").classList.add("hidden");screen("ending")}
function openTruthSummary(){
  const html=`<div class="summaryText">
  <p>항구의 불빛이 가까워지고 있는데도, 손끝은 쉽게 풀리지 않았다. 이 배에서 본 것들이 아직 머릿속에서 이어지고 있었다. 최태오의 죽음은 갑자기 벌어진 사고가 아니었다. 오래전부터 감춰진 기록들이, 오늘 밤 이 배 위에서 한꺼번에 터져 나온 결과였다.</p>

  <p>최태오는 신약 부작용 사건을 덮은 제약회사 대표였다. 이번 크루즈 행사는 그가 다시 투자자들 앞에서 회사를 포장하기 위한 무대였다. 라운지의 조명, VIP 좌석, 웃음소리. 겉으로는 완벽한 행사였지만, 그 안에는 그가 지웠다고 믿은 사람들이 함께 타고 있었다.</p>

  <p>강하나는 초청객처럼 앉아 있었다. 하지만 가족 편지와 반려된 보고서가 그녀의 자리를 다르게 보이게 했다. 그녀의 가족은 최태오 회사의 신약 부작용 사건과 연결되어 있었다. 라운지에서 최태오의 상태가 처음 무너진 순간, 그곳에 강하나가 있었다. 그녀가 아무것도 몰랐다는 말은 이제 맞지 않는다.</p>

  <p>이민정은 객실 근처에 가지 않았다고 했다. 하지만 발자국은 문 앞에서 멈췄고, 문손잡이에는 흔적이 남았다. 객실 안의 깨진 잔과 흐트러진 천, 그리고 반려된 진정서가 이어진다. 이민정은 직접 부작용을 겪은 피해자였다. 그녀는 최태오를 우연히 마주친 게 아니라, 찾아간 것이다.</p>

  <p>황세준은 통신실이 자신의 권한 밖이라고 했다. 하지만 접근 로그가 남아 있었다. 계약서와 내부 압박 문서도 같은 방향을 가리켰다. 보고는 멈췄고, 신호는 막혔다. 최태오가 도움을 받을 수 있었던 시간은 침묵 속으로 사라졌다. 이 배가 밀실이 된 건 우연이 아니었다.</p>

  <p>라운지에서 시작된 이상 증세. 객실에서의 직접 대면. 통신과 보고의 차단. 이 세 가지가 이어지며 최태오의 죽음은 완성되었다. 한 사람의 손만으로 닫힌 사건이 아니다. 서로 다른 과거가 같은 밤, 같은 배에서 한 방향으로 겹친 사건이었다.</p>

  <p>송신은 끝났다. 하지만 손안의 USB는 아직 무겁다. 이 안에는 이 배가 숨기려 했던 기록들이 들어 있다. 이제 남은 건, 이 기록을 어디로 보낼지 결정하는 일뿐이다.</p>

  <h3>USB를 어떻게 할 것인가?</h3>
  <div id="usbChoices" class="row"></div>
  <div id="choiceResult" class="endingChoice hidden"></div>
  </div>`;
  $("imageTitle").textContent="사건 전말";
  $("imageFull").style.display="none";
  $("imageCaption").innerHTML=html;
  $("imageModal").classList.remove("hidden");
  setTimeout(()=>{
    const choices=[
      ["언론사에 보낸다","며칠 뒤, 새벽 뉴스에 최태오의 이름이 다시 오른다. 화면 속 자료의 출처는 끝내 밝혀지지 않는다. 하지만 침묵은 이미 깨졌다."],
      ["피해자 가족에게 먼저 전달한다","USB는 가장 먼저 피해자들의 손에 도착한다. 그들이 어떤 방식으로 이 기록을 세상에 꺼낼지는 아직 알 수 없다."],
      ["수사기관에 제출한다","기록은 공식 절차 안으로 들어간다. 진실이 기록으로 남기까지는 또 다른 시간이 필요하다."],
      ["직접 보관한다","USB는 아직 열리지 않은 채 남아 있다. 배는 항구에 닿았지만, 침묵의 항로가 완전히 끝났는지는 알 수 없다."]
    ];
    const wrap=document.getElementById("usbChoices");
    choices.forEach(([b,t])=>{
      const btn=document.createElement("button");
      btn.className="opt";
      btn.textContent=b;
      btn.onclick=()=>{
        const r=document.getElementById("choiceResult");
        r.textContent=t;
        r.classList.remove("hidden");
      };
      wrap.appendChild(btn);
    });
  },0);
}
function openProfile(k){openImage(profiles[k].name,A(profiles[k].img),"")}

function showPrologue(){$("puzzleRoot").innerHTML=pTitle("최태오 사망")+`<div class="prologue"><p>VIP 라운지에서 최태오가 쓰러졌다.</p><p>그는 객실로 옮겨졌고, 얼마 지나지 않아 사망이 확인되었다.</p><p>크루즈는 바다 한가운데 멈춰 있다. 통신은 닫혔고, 항로는 잠겼다.</p><p>사건 기록을 복원하지 못하면 이 배는 계속 침묵한다.</p></div><div class="actions"><span></span><button id="startPrologue" class="btn primary">갑판으로 이동</button></div>`;$("puzzleModal").classList.remove("hidden");$("startPrologue").onclick=()=>closePuzzle()}

document.addEventListener("DOMContentLoaded",()=>{$("newGame").onclick=()=>{reset();screen("game");showPrologue()};$("continueGame").onclick=()=>{screen("game");render()};$("resetGame").onclick=()=>{reset();toast("기록 초기화")};$("homeBtn").onclick=()=>screen("home");$("puzzleBtn").onclick=openPuzzle;$("closePuzzle").onclick=closePuzzle;$("summonTop").onclick=openTruth;$("backGame").onclick=()=>{screen("game");render()};$("endingHome").onclick=()=>screen("home");$("truthSummary").onclick=openTruthSummary;document.querySelectorAll("[data-close]").forEach(el=>el.onclick=()=>{$(el.dataset.close).classList.add("hidden");$("imageFull").style.display=""});document.querySelectorAll(".profileBtn").forEach(b=>b.onclick=()=>openProfile(b.dataset.profile));render()});



// ===== Portrait-enhanced dialogue overrides =====
const dialoguePortraits={
  kang:{neutral:'portrait-kang-neutral.png',side:'portrait-kang-side.png',shaken:'portrait-kang-shaken.png'},
  lee:{neutral:'portrait-lee-neutral.png',guarded:'portrait-lee-guarded.png',sad:'portrait-lee-sad.png'},
  hwang:{neutral:'portrait-hwang-neutral.png',worried:'portrait-hwang-worried.png',cold:'portrait-hwang-cold.png'}
};
const dialogueExpressions={
  deck:['neutral','guarded','sad'],
  lounge:['neutral','side','shaken'],
  medical:['side','shaken','neutral'],
  corridor:['guarded','sad','neutral'],
  cabin:['sad','guarded','neutral'],
  office:['neutral','worried','cold']
};
function portraitSrc(profile, expr){
  if(!dialoguePortraits[profile]) return A(profiles[profile]?.img||'');
  const file=dialoguePortraits[profile][expr]||dialoguePortraits[profile].neutral||Object.values(dialoguePortraits[profile])[0];
  return A(file);
}
function showDialogue(key){
  const d=dialogues[key];
  let i=0;
  const exprs=dialogueExpressions[key]||[];
  function draw(){
    const expr=exprs[i]||'neutral';
    $("puzzleRoot").innerHTML=pTitle(d.name)+`<div class="dialogueLayout"><div class="vnPortraitWrap"><img class="vnPortrait" src="${portraitSrc(d.profile,expr)}" alt="${d.name}"></div><div class="vnBox"><div class="vnName">${d.name}</div><div class="dialogue">${d.lines[i]}</div><div class="actions"><span></span><button id="nextLine" class="btn primary">${i===d.lines.length-1?"계속 조사":"다음"}</button></div></div></div>`;
    $("nextLine").onclick=()=>{i++; if(i>=d.lines.length) closePuzzle(); else draw();};
  }
  draw();
  $("puzzleModal").classList.remove("hidden");
}
function openTruth(){
  let step=0;
  const rounds=[
    {
      speaker:'강하나', profile:'kang', evidence:'가족 편지', evidenceId:'kangLetter',
      lines:['저는 최태오 대표를 해치려 한 적 없어요. 그 사람과 우리 가족은 아무 관계도 없어요.','그 사람이 라운지에서 이상해졌다고 해서, 그걸 왜 제 탓으로 돌리시죠?'],
      expressions:['side','shaken'], contradictionIndex:0,
      result:'가족 편지와 반려된 보고서가 겹쳐지자 강하나의 말은 버티지 못했다. 최태오의 회사가 지운 부작용 사건 속에 강하나의 가족이 있었다. 라운지에서 시작된 이상 증세는 우연이 아니었다.'
    },
    {
      speaker:'이민정', profile:'lee', evidence:'문손잡이 흔적', evidenceId:'handle',
      lines:['저는 복도까지만 갔어요. 객실 안으로는 들어가지 않았어요.','최태오를 직접 마주한 적도 없어요.'],
      expressions:['guarded','sad'], contradictionIndex:0,
      result:'문손잡이 흔적과 객실 앞에서 끊긴 발자국이 이민정의 말을 꺾었다. 그녀는 최태오를 직접 찾아갔고, 객실 안에서 그와 마주했다. 오래된 사진과 진정서는 그 대면이 우발적인 만남이 아니었음을 드러낸다.'
    },
    {
      speaker:'황세준', profile:'hwang', evidence:'접근 로그', evidenceId:'hwangAccess',
      lines:['통신실은 제 권한 밖입니다. 저는 그런 기록에 손댈 수 없어요.','보고가 멈춘 건 시스템 문제였을 뿐, 제 결정이 아닙니다.'],
      expressions:['worried','cold'], contradictionIndex:0,
      result:'계약서와 접근 로그가 놓이자 황세준은 침묵했다. 그는 최태오 회사의 내부자였고, 이 배에서도 통신과 기록에 손을 댈 수 있었다. 배가 밀실이 된 마지막 조각은 그의 침묵이었다.'
    }
  ];
  function drawDialogue(lineIndex=0){
    const r=rounds[step];
    const expr=r.expressions[lineIndex]||'neutral';
    $("puzzleRoot").innerHTML=pTitle(`용의자 소집 ${step+1}/3`)+`<div class="summonScene"><img src="${A('scene-suspect-gathering.png')}" alt=""><button class="nameTag kang">강하나</button><button class="nameTag lee">이민정</button><button class="nameTag hwang">황세준</button></div><div class="dialogueLayout"><div class="vnPortraitWrap"><img class="vnPortrait" src="${portraitSrc(r.profile,expr)}" alt="${r.speaker}"></div><div class="vnBox"><div class="vnName">${r.speaker}</div><div class="dialogue">“${r.lines[lineIndex]}”</div><div class="actions"><button class="btn" id="prevLine" ${lineIndex===0?'disabled':''}>이전</button><button class="btn primary" id="objectionBtn">이의제기</button><button class="btn" id="nextLineTalk" ${lineIndex===r.lines.length-1?'disabled':''}>다음</button></div></div></div>`;
    bindNameTags();
    const prev=$("prevLine"); if(prev) prev.onclick=()=>drawDialogue(lineIndex-1);
    const next=$("nextLineTalk"); if(next) next.onclick=()=>drawDialogue(lineIndex+1);
    $("objectionBtn").onclick=()=>drawObjection(lineIndex);
  }
  function drawObjection(lineIndex){
    const r=rounds[step];
    $("puzzleRoot").innerHTML=pTitle(`${r.speaker}의 발언 검증`)+`<div class="dialogue">어느 증거로 이 발언의 모순을 드러낼 것인가?</div><div class="row compactRow" id="evidenceChoices"></div><div class="actions"><button class="btn" id="backToTalk">발언으로 돌아가기</button></div>`;
    const choices=[{label:r.evidence,id:r.evidenceId},{label:'갑판 사진 묶음',id:'deckPhoto'},{label:'라운지 잔 기록',id:'loungeCup'}];
    choices.forEach(ch=>{const c=clues[ch.id];const b=document.createElement('button');b.className='clueCard';b.innerHTML=`<img src="${A(c.img)}" alt=""><span>${ch.label}</span>`;b.onclick=()=>ch.id===r.evidenceId?showResult():showError();$("evidenceChoices").appendChild(b)});
    $("backToTalk").onclick=()=>drawDialogue(lineIndex);
  }
  function showError(){
    const old=document.querySelector('.msg'); if(old) old.remove();
    document.querySelector('#puzzleRoot').insertAdjacentHTML('beforeend', '<div class="msg">그 증거로는 이 발언을 무너뜨릴 수 없다.</div>');
  }
  function showResult(){
    const r=rounds[step];
    note(`${r.speaker} / 모순 확인`);
    $("puzzleRoot").innerHTML=pTitle(`${r.speaker}의 모순`)+`<div class="dialogueLayout"><div class="vnPortraitWrap"><img class="vnPortrait" src="${portraitSrc(r.profile,'neutral')}" alt="${r.speaker}"></div><div class="vnBox"><div class="vnName">${r.speaker}</div><div class="dialogue">${r.result}</div><div class="row">${card(r.evidenceId,r.evidence)}</div><div class="actions"><span></span><button id="nextTruth" class="btn primary">${step===rounds.length-1?'통신실로':'다음 증언'}</button></div></div></div>`;
    $("nextTruth").onclick=()=>{step++; if(step>=rounds.length){state.truth=true; if(!state.unlocked.includes('communication')) state.unlocked.push('communication'); note('진상 확인 / 세 사람의 모순'); save(); render(); closePuzzle(); toast('통신실 해금');} else drawDialogue(0);};
  }
  function bindNameTags(){
    const k=document.querySelector('.nameTag.kang'); const l=document.querySelector('.nameTag.lee'); const h=document.querySelector('.nameTag.hwang');
    if(k) k.onclick=()=>openProfile('kang'); if(l) l.onclick=()=>openProfile('lee'); if(h) h.onclick=()=>openProfile('hwang');
  }
  drawDialogue(0); $("puzzleModal").classList.remove('hidden');
}


// ===== location-based direct objection flow overrides =====
// 의무실부터는 단순 증거 수집이 아니라, 현장에서 짧은 대화 중 직접 이의제기하는 구조로 진행된다.

const localInterrogations = {
  medical: {
    title: "의무실",
    speaker: "강하나",
    profile: "kang",
    expression: "shaken",
    evidenceId: "medicalDrug",
    evidenceLabel: "약품 보관함",
    grantIds: ["kangMedical", "kangLetter", "kangReport"],
    notes: [
      "의무실 / 비어 있는 약품 자리",
      "강하나 / 접힌 가족 편지와 반려된 보고서",
      "강하나 / 라운지에서 시작된 이상 증세와 연결"
    ],
    lines: [
      "저는 최태오 대표가 라운지에서 갑자기 쓰러진 것만 봤어요.",
      "의무실 보관함이 비어 있었다고요? 그건 저와 상관없는 일입니다.",
      "그 약이 무엇인지도 모릅니다. 저는 그런 걸 본 적 없어요."
    ],
    contradictionIndex: 2,
    result: "약품 보관함의 빈자리. 반려된 보고서. 그리고 같은 이름으로 이어지는 기록. 강하나는 이 약을 모르는 사람이 아니다. 라운지에서 최태오가 쓰러진 일도, 우연으로 넘길 수 없다."
  },
  corridor: {
    title: "복도",
    speaker: "이민정",
    profile: "lee",
    expression: "guarded",
    evidenceId: "footprints",
    evidenceLabel: "복도 발자국",
    grantIds: ["leePhoto"],
    notes: [
      "복도 / 객실 문 앞에서 끊긴 발자국",
      "문손잡이 / 열린 흔적",
      "이민정 / 최태오와 과거부터 이어진 접점"
    ],
    lines: [
      "소란이 난 뒤 저는 복도 쪽으로 나왔을 뿐이에요.",
      "객실 문 앞까지 간 적은 없습니다.",
      "최태오 대표와 따로 이야기할 이유도 없었어요."
    ],
    contradictionIndex: 1,
    result: "발자국은 객실 문 앞에서 멈춘다. 문손잡이에는 누군가가 열고 들어간 흔적이 남아 있다. 이민정은 객실 근처에 가지 않았다고 했다. 그 말은 더 이상 그대로 믿을 수 없다."
  },
  cabin: {
    title: "객실",
    speaker: "이민정",
    profile: "lee",
    expression: "sad",
    evidenceId: "cabinTrace",
    evidenceLabel: "객실 현장 흔적",
    grantIds: ["leeCall", "leeLawsuit"],
    notes: [
      "객실 / 도움 요청 뒤에 남은 충돌 흔적",
      "이민정 / 최태오를 직접 찾아간 피해자",
      "이민정 / 반려된 진정서와 통화 기록"
    ],
    lines: [
      "객실 안에서 길게 머문 건 아니에요.",
      "말 몇 마디만 했고, 별다른 일은 없었습니다.",
      "제가 나올 때 최태오 대표는 도움을 청할 정도는 아니었어요."
    ],
    contradictionIndex: 1,
    result: "깨진 잔과 흐트러진 천. 이 방에서는 분명 무언가가 있었다. 통화 기록과 반려된 진정서까지 이어진다. 이민정은 우연히 이 방에 온 게 아니다. 최태오를 직접 마주할 이유가 있었다."
  },
  office: {
    title: "사무실",
    speaker: "황세준",
    profile: "hwang",
    expression: "worried",
    evidenceId: "hwangAccess",
    evidenceLabel: "접근 로그",
    grantIds: ["hwangContract", "hwangAccess", "hwangBlackmail"],
    notes: [
      "사무실 / 통신실에 닿아 있는 접근 기록",
      "황세준 / 최태오 회사 내부자와 보고 차단 정황",
      "황세준 / 접근 로그와 내부 압박 문서"
    ],
    lines: [
      "보고가 늦어진 건 시스템 문제였을 겁니다.",
      "저는 행사 운영 담당자일 뿐, 통신실에는 손댈 수 없어요.",
      "그 시간에 제가 할 수 있는 일은 많지 않았습니다."
    ],
    contradictionIndex: 1,
    result: "접근 로그에는 황세준의 권한이 남아 있다. 통신실은 그의 바깥이 아니었다. 보고가 멈춘 시간과 내부 압박 문서가 겹치며, 이 배가 왜 밀실이 되었는지 드러난다."
  }
};

function runLocalInterrogation(key){
  const data = localInterrogations[key];
  let lineIndex = 0;

  function renderLine(warning=""){
    const expr = lineIndex === data.contradictionIndex ? data.expression : "neutral";
    $("puzzleRoot").innerHTML = pTitle(`${data.title} 조사`) + `
      <div class="dialogueLayout">
        <div class="vnPortraitWrap">
          <img class="vnPortrait" src="${portraitSrc(data.profile, expr)}" alt="${data.speaker}">
        </div>
        <div class="vnBox">
          <div class="vnName">${data.speaker}</div>
          <div class="dialogue">“${data.lines[lineIndex]}”</div>
          <div class="testimonyMeter">
            ${data.lines.map((_,i)=>`<span class="${i===lineIndex?"on":""}"></span>`).join("")}
          </div>
          ${msg(warning)}
          <div class="actions">
            <button class="btn" id="localPrev" ${lineIndex===0?"disabled":""}>이전 발언</button>
            <button class="btn primary objectionBtn" id="localObject">이의제기</button>
            <button class="btn" id="localNext" ${lineIndex===data.lines.length-1?"disabled":""}>다음 발언</button>
          </div>
        </div>
      </div>`;
    $("localPrev").onclick = ()=>{ lineIndex = Math.max(0, lineIndex-1); renderLine(); };
    $("localNext").onclick = ()=>{ lineIndex = Math.min(data.lines.length-1, lineIndex+1); renderLine(); };
    $("localObject").onclick = ()=>{
      if(lineIndex === data.contradictionIndex) renderEvidence();
      else renderLine("지금은 아니다. 아직 찌를 지점이 보이지 않는다.");
    };
  }

  function renderEvidence(warning=""){
    const evidenceChoices = [
      {id:data.evidenceId, label:data.evidenceLabel},
      {id:"deckPhoto", label:"갑판 사진 묶음"},
      {id:"loungeCup", label:"라운지 잔 기록"}
    ];
    $("puzzleRoot").innerHTML = pTitle("증거 제시") + `
      <div class="dialogueLayout">
        <div class="vnPortraitWrap">
          <img class="vnPortrait" src="${portraitSrc(data.profile, data.expression)}" alt="${data.speaker}">
        </div>
        <div class="vnBox">
          <div class="vnName">${data.speaker}</div>
          <div class="dialogue">
            “${data.lines[lineIndex]}”<br><br>
            이 말에 맞서는 기록을 꺼낸다.
          </div>
          <div class="row compactRow" id="localEvidence"></div>
          ${msg(warning)}
          <div class="actions">
            <button class="btn" id="backToLocalLine">발언으로 돌아가기</button>
          </div>
        </div>
      </div>`;
    evidenceChoices.forEach(choice=>{
      const c = clues[choice.id];
      const b = document.createElement("button");
      b.className = "clueCard";
      b.innerHTML = `<img src="${A(c.img)}" alt=""><span>${choice.label}</span>`;
      b.onclick = ()=>{
        if(choice.id === data.evidenceId) renderResult();
        else renderEvidence("이 기록으로는 부족하다.");
      };
      $("localEvidence").appendChild(b);
    });
    $("backToLocalLine").onclick = ()=>renderLine();
  }

  function renderResult(){
    $("puzzleRoot").innerHTML = pTitle(`${data.title} 기록 확인`) + `
      <div class="dialogueLayout">
        <div class="vnPortraitWrap">
          <img class="vnPortrait" src="${portraitSrc(data.profile, data.expression)}" alt="${data.speaker}">
        </div>
        <div class="vnBox">
          <div class="vnName">${data.speaker}</div>
          <div class="dialogue">${data.result}</div>
          <div class="row">${card(data.evidenceId, data.evidenceLabel)}</div>
          <div class="actions">
            <span></span>
            <button id="finishLocal" class="btn primary">기록에 남긴다</button>
          </div>
        </div>
      </div>`;
    $("finishLocal").onclick = ()=>{
      pass(key, data.notes, data.grantIds, null);
      closePuzzle();
    };
  }

  renderLine();
  $("puzzleModal").classList.remove("hidden");
}

function medical(){ runLocalInterrogation("medical"); }
function corridor(){ runLocalInterrogation("corridor"); }
function cabin(){ runLocalInterrogation("cabin"); }
function office(){ runLocalInterrogation("office"); }

// Final summon also avoids artificial wording and uses direct testimony navigation.
function openTruth(){
  let step=0;
  const rounds=[
    {
      speaker:'강하나', profile:'kang', evidence:'라운지 잔 기록', evidenceId:'loungeCup',
      lines:[
        '최태오 대표가 마시던 잔에는 손댄 적 없습니다.',
        '제가 그 사람에게 원한을 품을 이유도 없어요.',
        '저는 그냥 초청장을 받고 배에 오른 손님일 뿐입니다.'
      ],
      expressions:['side','shaken','neutral'], contradictionIndex:0,
      result:'라운지 잔 기록이 강하나의 말을 흔든다. 가족 편지와 부작용 보고서까지 겹친다. 그녀는 단순한 초청객이 아니었다. 최태오의 상태 이상은 여기서 시작됐다.'
    },
    {
      speaker:'이민정', profile:'lee', evidence:'문손잡이 흔적', evidenceId:'handle',
      lines:[
        '저는 객실 안으로 들어가지 않았습니다.',
        '최태오 대표와 직접 대면한 적도 없어요.',
        '그가 쓰러진 뒤에야 상황을 알았습니다.'
      ],
      expressions:['guarded','sad','neutral'], contradictionIndex:0,
      result:'문손잡이 흔적과 객실 앞 발자국이 이민정의 말을 막아선다. 그녀는 최태오를 직접 찾아갔다. 그리고 객실 안에서 그와 마주했다.'
    },
    {
      speaker:'황세준', profile:'hwang', evidence:'접근 로그', evidenceId:'hwangAccess',
      lines:[
        '통신실은 제 권한 밖입니다.',
        '보고가 멈춘 건 시스템 문제였을 겁니다.',
        '저는 그저 행사 운영을 맡았을 뿐입니다.'
      ],
      expressions:['worried','cold','neutral'], contradictionIndex:0,
      result:'접근 로그가 남아 있다. 황세준은 통신실 밖에 있던 사람이 아니다. 보고가 멈춘 시간, 내부 압박 문서, 운영 계약서가 하나로 이어진다. 마지막 침묵은 여기서 만들어졌다.'
    }
  ];

  function renderLine(lineIndex=0, warning=""){
    const r=rounds[step];
    const expr=r.expressions[lineIndex]||"neutral";
    $("puzzleRoot").innerHTML = pTitle(`용의자 소집 ${step+1}/3`) + `
      <div class="summonScene">
        <img src="${A('scene-suspect-gathering.png')}" alt="">
        <button class="nameTag kang">강하나</button>
        <button class="nameTag lee">이민정</button>
        <button class="nameTag hwang">황세준</button>
      </div>
      <div class="dialogueLayout">
        <div class="vnPortraitWrap">
          <img class="vnPortrait" src="${portraitSrc(r.profile, expr)}" alt="${r.speaker}">
        </div>
        <div class="vnBox">
          <div class="vnName">${r.speaker}</div>
          <div class="dialogue">“${r.lines[lineIndex]}”</div>
          <div class="testimonyMeter">
            ${r.lines.map((_,i)=>`<span class="${i===lineIndex?"on":""}"></span>`).join("")}
          </div>
          ${msg(warning)}
          <div class="actions">
            <button class="btn" id="truthPrev" ${lineIndex===0?"disabled":""}>이전 발언</button>
            <button class="btn primary objectionBtn" id="truthObject">이의제기</button>
            <button class="btn" id="truthNext" ${lineIndex===r.lines.length-1?"disabled":""}>다음 발언</button>
          </div>
        </div>
      </div>`;
    bindNameTags();
    $("truthPrev").onclick=()=>renderLine(Math.max(0,lineIndex-1));
    $("truthNext").onclick=()=>renderLine(Math.min(r.lines.length-1,lineIndex+1));
    $("truthObject").onclick=()=>{
      if(lineIndex===r.contradictionIndex) renderEvidence(lineIndex);
      else renderLine(lineIndex, "지금은 아니다. 아직 찌를 지점이 보이지 않는다.");
    };
  }

  function renderEvidence(lineIndex, warning=""){
    const r=rounds[step];
    const choices=[
      {label:r.evidence,id:r.evidenceId},
      {label:"갑판 사진 묶음",id:"deckPhoto"},
      {label:"의무 기록지",id:"medicalLog"}
    ];
    $("puzzleRoot").innerHTML=pTitle("증거 제시")+`
      <div class="dialogueLayout">
        <div class="vnPortraitWrap">
          <img class="vnPortrait" src="${portraitSrc(r.profile, r.expressions[lineIndex]||'neutral')}" alt="${r.speaker}">
        </div>
        <div class="vnBox">
          <div class="vnName">${r.speaker}</div>
          <div class="dialogue">“${r.lines[lineIndex]}”<br><br>이 말에 맞서는 기록을 꺼낸다.</div>
          <div class="row compactRow" id="truthEvidence"></div>
          ${msg(warning)}
          <div class="actions"><button class="btn" id="truthBack">발언으로 돌아가기</button></div>
        </div>
      </div>`;
    choices.forEach(ch=>{
      const c=clues[ch.id];
      const b=document.createElement("button");
      b.className="clueCard";
      b.innerHTML=`<img src="${A(c.img)}" alt=""><span>${ch.label}</span>`;
      b.onclick=()=>ch.id===r.evidenceId?renderResult():renderEvidence(lineIndex, "이 기록으로는 부족하다.");
      $("truthEvidence").appendChild(b);
    });
    $("truthBack").onclick=()=>renderLine(lineIndex);
  }

  function renderResult(){
    const r=rounds[step];
    note(`${r.speaker} / 발언의 틈 확인`);
    $("puzzleRoot").innerHTML=pTitle(`${r.speaker}의 발언이 흔들린다`)+`
      <div class="dialogueLayout">
        <div class="vnPortraitWrap">
          <img class="vnPortrait" src="${portraitSrc(r.profile, 'neutral')}" alt="${r.speaker}">
        </div>
        <div class="vnBox">
          <div class="vnName">${r.speaker}</div>
          <div class="dialogue">${r.result}</div>
          <div class="row">${card(r.evidenceId,r.evidence)}</div>
          <div class="actions"><span></span><button id="truthContinue" class="btn primary">${step===rounds.length-1?"통신실로":"다음 증언"}</button></div>
        </div>
      </div>`;
    $("truthContinue").onclick=()=>{
      step++;
      if(step>=rounds.length){
        state.truth=true;
        if(!state.unlocked.includes("communication")) state.unlocked.push("communication");
        note("진상 확인 / 세 사람의 발언과 기록");
        save(); render(); closePuzzle(); toast("통신실 해금");
      }else renderLine(0);
    };
  }

  function bindNameTags(){
    const k=document.querySelector(".nameTag.kang");
    const l=document.querySelector(".nameTag.lee");
    const h=document.querySelector(".nameTag.hwang");
    if(k) k.onclick=()=>openProfile("kang");
    if(l) l.onclick=()=>openProfile("lee");
    if(h) h.onclick=()=>openProfile("hwang");
  }

  renderLine(0);
  $("puzzleModal").classList.remove("hidden");
}
