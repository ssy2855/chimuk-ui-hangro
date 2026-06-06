const A = (name) => `assets/${name}`;

const places = [
  {
    id: "deck",
    title: "갑판",
    img: "space-deck.jpg",
    goal: "촬영 기록 배열",
    puzzle: "deck",
    req: ["deckPhoto", "deckNote"],
    hs: [["deckPhoto", 24, 35], ["deckNote", 66, 56]]
  },
  {
    id: "lounge",
    title: "라운지",
    img: "space-lounge.jpg",
    goal: "좌석 배치도 복원",
    puzzle: "lounge",
    req: ["loungeMap"],
    hs: [["loungeMap", 26, 36], ["loungeCup", 62, 50]]
  },
  {
    id: "medical",
    title: "의무실",
    img: "space-medical.jpg",
    goal: "누락 슬롯 확인",
    puzzle: "medical",
    req: ["medicalLog", "medicalDrug"],
    hs: [["medicalLog", 28, 46], ["medicalDrug", 64, 34]]
  },
  {
    id: "corridor",
    title: "복도",
    img: "space-corridor.jpg",
    goal: "흔적 경로 입력",
    puzzle: "corridor",
    req: ["footprints", "handle"],
    hs: [["footprints", 42, 72], ["handle", 74, 42]]
  },
  {
    id: "cabin",
    title: "객실",
    img: "space-cabin.jpg",
    goal: "호출 장치 복원",
    puzzle: "cabin",
    req: ["cabinTrace", "cabinCall"],
    hs: [["cabinTrace", 70, 76], ["cabinCall", 88, 56]]
  },
  {
    id: "office",
    title: "사무실",
    img: "space-office.jpg",
    goal: "문서 금고 해제",
    puzzle: "office",
    req: ["officeMail", "officeThreat"],
    hs: [["officeMail", 42, 53], ["officeThreat", 70, 48]]
  },
  {
    id: "communication",
    title: "통신실",
    img: "space-communication.jpg",
    goal: "송신 기록 복원",
    puzzle: "communication",
    req: ["console", "channel", "transCode", "routeLock"],
    hs: [["console", 33, 68], ["channel", 54, 34], ["transCode", 22, 42], ["routeLock", 70, 44]]
  }
];

const clues = {
  deckPhoto: { title: "갑판 사진 묶음", thumb: "thumb-deck-photo-set.png", img: "clue-deck-photo-set.jpg", note: "사진 묶음 / 22:15-22:35" },
  deckNote: { title: "촬영 시간 메모", thumb: "thumb-deck-time-note.png", img: "clue-deck-time-note.jpg", note: "촬영 메모 / 5개 시간" },

  loungeMap: { title: "라운지 좌석 배치도", thumb: "thumb-lounge-seat-map.png", img: "clue-lounge-seat-map(1).jpg", note: "좌석 배치도 / 도면 조각" },
  loungeCup: { title: "라운지 컵 기록", thumb: "thumb-lounge-cup.png", img: "clue-lounge-cups.jpg", note: "라운지 컵 기록" },

  medicalLog: { title: "의료 기록", thumb: "thumb-medical-log.png", img: "clue-medical-log.jpg", note: "의무기록지 / 이상 수치" },
  medicalDrug: { title: "약품 누락 케이스", thumb: "thumb-medical-missing-drug.png", img: "clue-medical-missing-drug.jpg", note: "약품 케이스 / 빈 슬롯" },

  footprints: { title: "복도 발자국", thumb: "thumb-corridor-footprints.png", img: "clue-corridor-footprints.jpg", note: "발자국 / 연속 흔적" },
  handle: { title: "문손잡이 흔적", thumb: "thumb-corridor-handle.png", img: "clue-corridor-handle.jpg", note: "손잡이 / 지문 흔적" },

  cabinTrace: { title: "객실 현장 흔적", thumb: "thumb-cabin-scene-trace.png", img: "clue-cabin-scene-trace.jpg", note: "객실 현장 / 파손 흔적" },
  cabinCall: { title: "객실 호출 기록", thumb: "thumb-cabin-call-log.png", img: "clue-cabin-call-log.jpg", note: "호출 기록 / 22:15-22:22" },

  officeMail: { title: "내부 이메일 출력물", thumb: "thumb-office-email-print.png", img: "clue-office-email-print.jpg", note: "이메일 출력물 / 가림 처리" },
  officeThreat: { title: "경고 메모 조각", thumb: "thumb-office-threat-note.png", img: "clue-office-threat-note.jpg", note: "경고 메모 / 붉은 표식" },

  console: { title: "통신 콘솔", thumb: "clue-communication-console.jpg", img: "clue-communication-console.jpg", note: "송신 콘솔 / 입력 대기" },
  channel: { title: "비상 채널 기록", thumb: "clue-emergency-channel.jpg", img: "clue-emergency-channel.jpg", note: "EMERGENCY CHANNEL / LOCKED" },
  transCode: { title: "송신 코드 카드", thumb: "clue-transmission-code.jpg", img: "clue-transmission-code.jpg", note: "TRANS. LOG / SEA LINK" },
  routeLock: { title: "항로 잠금 화면", thumb: "clue-route-lock.jpg", img: "clue-route-lock.jpg", note: "ROUTE LOCK / 해상 지도" }
};

const profiles = {
  kang: { name: "강하나", img: "suspect-kang-hana-file.jpg" },
  lee: { name: "이민정", img: "suspect-lee-minjeong-file.jpg" },
  hwang: { name: "황세준", img: "suspect-hwang-sejun-file.jpg" },
  choi: { name: "최태오", img: "victim-choi-taeo-profile.jpg" }
};

const records = [
  ["medical", "MR-22-0614", "motive-kang-medical-record.jpg"],
  ["medical", "M-22-0614", "motive-kang-family-letter.jpg"],
  ["medical", "AP-22-0917", "motive-kang-side-effect-report.jpg"],
  ["cabin", "B-07", "motive-lee-old-photo.jpg"],
  ["cabin", "통화 기록 01", "motive-lee-call-record.jpg"],
  ["cabin", "AC-0917", "motive-lee-lawsuit-note.jpg"],
  ["office", "AC-VIP-OP-2410", "motive-hwang-contract.jpg"],
  ["office", "CR-07", "motive-hwang-access-log.jpg"],
  ["office", "INTERNAL MEMO", "motive-hwang-blackmail-file.jpg"]
];

const defaultState = {
  place: "deck",
  unlocked: ["deck"],
  got: [],
  solved: [],
  notes: [],
  truth: false,
  escape: false
};

let state = loadState();

function $(id) {
  return document.getElementById(id);
}

function loadState() {
  try {
    return { ...structuredClone(defaultState), ...JSON.parse(localStorage.getItem("silentRouteState") || "{}") };
  } catch {
    return structuredClone(defaultState);
  }
}

function saveState() {
  localStorage.setItem("silentRouteState", JSON.stringify(state));
}

function resetState() {
  localStorage.removeItem("silentRouteState");
  state = structuredClone(defaultState);
  render();
}

function screen(id) {
  ["home", "game", "ending"].forEach(s => $(s).classList.toggle("hidden", s !== id));
}

function currentPlace() {
  return places.find(p => p.id === state.place);
}

function has(id) {
  return state.got.includes(id);
}

function solved(id) {
  return state.solved.includes(id);
}

function toast(text) {
  const el = $("toast");
  el.textContent = text;
  el.classList.remove("hidden");
  clearTimeout(toast.timer);
  toast.timer = setTimeout(() => el.classList.add("hidden"), 1400);
}

function addNote(text) {
  if (!state.notes.includes(text)) state.notes.push(text);
}

function render() {
  renderPlace();
  renderNav();
  renderInventory();
  renderNotes();
  renderProgress();
}

function renderPlace() {
  const p = currentPlace();
  $("placeTitle").textContent = p.title;
  $("placeGoal").textContent = p.goal;
  $("placeImage").src = A(p.img);
  $("placeImage").alt = p.title;

  $("hotspotLayer").innerHTML = "";
  p.hs.forEach(([id, x, y]) => {
    const c = clues[id];
    const b = document.createElement("button");
    b.className = `hotspot ${has(id) ? "done" : ""}`;
    b.style.left = `${x}%`;
    b.style.top = `${y}%`;
    b.innerHTML = `<img src="${A(c.thumb)}" alt=""><span>${c.title}</span>`;
    b.onclick = () => acquireClue(id);
    $("hotspotLayer").appendChild(b);
  });

  $("puzzleBtn").disabled = !canOpenPuzzle(p);
  $("puzzleBtn").textContent = solved(p.puzzle) ? "잠금 해제 완료" : "잠금 장치 확인";
}

function renderNav() {
  $("placeNav").innerHTML = "";
  places.forEach(p => {
    const open = state.unlocked.includes(p.id);
    const b = document.createElement("button");
    b.className = `placeBtn ${open ? "open" : "locked"} ${state.place === p.id ? "active" : ""}`;
    b.textContent = open ? p.title : "잠김";
    b.disabled = !open;
    b.onclick = () => {
      state.place = p.id;
      saveState();
      render();
    };
    $("placeNav").appendChild(b);
  });
}

function renderInventory() {
  $("inventory").innerHTML = "";

  state.got.forEach(id => {
    const c = clues[id];
    addInventoryItem(c.title, A(c.thumb), () => openImage(c.title, A(c.img), c.note));
  });

  records.forEach(([key, title, img]) => {
    const open =
      (key === "medical" && solved("medical")) ||
      (key === "cabin" && solved("cabin")) ||
      (key === "office" && solved("office"));

    if (open) addInventoryItem(title, A(img), () => openImage(title, A(img), ""));
  });
}

function addInventoryItem(title, img, onClick) {
  const b = document.createElement("button");
  b.className = "inv-item";
  b.innerHTML = `<img src="${img}" alt=""><span>${title}</span>`;
  b.onclick = onClick;
  $("inventory").appendChild(b);
}

function renderNotes() {
  $("notes").innerHTML = "";
  const list = state.notes.length ? state.notes : ["기록 대기"];
  list.forEach(n => {
    const d = document.createElement("div");
    d.className = "note";
    d.textContent = n;
    $("notes").appendChild(d);
  });
}

function renderProgress() {
  const pct = Math.min(100, Math.round(
    (state.got.length / Object.keys(clues).length) * 34 +
    (state.solved.length / places.length) * 44 +
    (state.truth ? 12 : 0) +
    (state.escape ? 10 : 0)
  ));
  $("progressText").textContent = `${pct}%`;
  $("progressBar").style.width = `${pct}%`;
  $("truthBtn").classList.toggle("hidden", !canOpenTruth());
}

function canOpenPuzzle(p) {
  return p.req.every(id => state.got.includes(id));
}

function nextPlaceId(id) {
  return places[places.findIndex(p => p.id === id) + 1]?.id;
}

function markSolved(puzzle, notes = []) {
  if (!state.solved.includes(puzzle)) state.solved.push(puzzle);
  notes.forEach(addNote);

  const p = places.find(x => x.puzzle === puzzle);
  const next = p && nextPlaceId(p.id);

  if (next && next !== "communication" && !state.unlocked.includes(next)) {
    state.unlocked.push(next);
  }

  saveState();
  render();
  closePuzzle();
  toast("잠금 해제");
}

function acquireClue(id) {
  const c = clues[id];
  if (!has(id)) {
    state.got.push(id);
    addNote(c.note);
    saveState();
    render();
    toast("기록 추가");
  }
  openImage(c.title, A(c.img), c.note);
}

function openImage(title, src, caption = "") {
  $("modalTitle").textContent = title;
  $("modalImage").src = src;
  $("modalCaption").textContent = caption;
  $("imageModal").classList.remove("hidden");
}

function closePuzzle() {
  $("puzzleModal").classList.add("hidden");
}

function pTitle(text) {
  return `<h2 class="p-title">${text}</h2>`;
}

function msg(text = "") {
  return `<div class="msg">${text}</div>`;
}

function option(parentId, text, active, onClick) {
  const b = document.createElement("button");
  b.className = `opt ${active ? "sel" : ""}`;
  b.textContent = text;
  b.onclick = onClick;
  $(parentId).appendChild(b);
}

function sameSet(a, b) {
  return a.length === b.length && b.every(x => a.includes(x));
}

function openPuzzle() {
  const p = currentPlace();
  if (!canOpenPuzzle(p)) {
    toast("기록 부족");
    return;
  }
  puzzleBuilders[p.puzzle]();
  $("puzzleModal").classList.remove("hidden");
}

const puzzleBuilders = {
  deck,
  lounge,
  medical,
  corridor,
  cabin,
  office,
  communication
};

function deck() {
  const photoData = [
    { file: "puzzle-photo-a.jpg", label: "사진 A", time: "22:27" },
    { file: "puzzle-photo-b.jpg", label: "사진 B", time: "22:15" },
    { file: "puzzle-photo-c.jpg", label: "사진 C", time: "22:35" },
    { file: "puzzle-photo-d.jpg", label: "사진 D", time: "22:22" },
    { file: "puzzle-photo-e.jpg", label: "사진 E", time: "22:31" }
  ];

  let order = [...photoData].sort(() => Math.random() - .5);
  const correct = ["22:15", "22:22", "22:27", "22:31", "22:35"];

  function draw(error = "") {
    $("puzzleRoot").innerHTML =
      pTitle("촬영 기록 배열") +
      `<div class="row" id="photoCards"></div>` +
      msg(error) +
      `<div class="actions">
        <button class="btn" id="shufflePhotos">섞기</button>
        <button class="btn primary" id="checkPhotos">순서 확인</button>
      </div>`;

    order.forEach((p, i) => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        <img src="${A(p.file)}" alt="">
        <div>${p.label} / ${p.time}</div>
        <button class="opt" ${i === 0 ? "disabled" : ""}>←</button>
        <button class="opt" ${i === order.length - 1 ? "disabled" : ""}>→</button>
      `;
      const buttons = card.querySelectorAll("button");
      buttons[0].onclick = () => {
        [order[i - 1], order[i]] = [order[i], order[i - 1]];
        draw();
      };
      buttons[1].onclick = () => {
        [order[i + 1], order[i]] = [order[i], order[i + 1]];
        draw();
      };
      $("photoCards").appendChild(card);
    });

    $("shufflePhotos").onclick = () => {
      order.sort(() => Math.random() - .5);
      draw();
    };

    $("checkPhotos").onclick = () => {
      const current = order.map(p => p.time);
      if (current.join("|") === correct.join("|")) {
        markSolved("deck", ["22:15-22:35 / 촬영 흐름 확인"]);
      } else {
        draw("시간 배열 불일치");
      }
    };
  }

  draw();
}

function lounge() {
  const image = A("clue-lounge-seat-map(1).jpg");
  let tiles = [
    { id: 0, pos: "0% 0%" },
    { id: 1, pos: "100% 0%" },
    { id: 2, pos: "0% 100%" },
    { id: 3, pos: "100% 100%" }
  ].sort(() => Math.random() - .5);
  let selected = null;

  function draw(error = "") {
    $("puzzleRoot").innerHTML =
      pTitle("좌석 배치도 복원") +
      `<div class="row">
        <div class="tile-board" id="tileBoard" style="--img:url('${image}')"></div>
      </div>` +
      msg(error) +
      `<div class="actions">
        <button class="btn" id="shuffleTiles">섞기</button>
        <button class="btn primary" id="checkTiles">도면 확인</button>
      </div>`;

    tiles.forEach((t, i) => {
      const b = document.createElement("button");
      b.className = `tile ${selected === i ? "sel" : ""}`;
      b.style.backgroundPosition = t.pos;
      b.onclick = () => {
        if (selected === null) {
          selected = i;
        } else {
          [tiles[selected], tiles[i]] = [tiles[i], tiles[selected]];
          selected = null;
        }
        draw();
      };
      $("tileBoard").appendChild(b);
    });

    $("shuffleTiles").onclick = () => {
      tiles.sort(() => Math.random() - .5);
      selected = null;
      draw();
    };

    $("checkTiles").onclick = () => {
      if (tiles.map(t => t.id).join("") === "0123") {
        markSolved("lounge", ["좌석 배치도 / 도면 복원"]);
      } else {
        draw("도면 조각 불일치");
      }
    };
  }

  draw();
}

function medical() {
  let left = false;
  let mid = false;
  let record = "";

  function draw(error = "") {
    $("puzzleRoot").innerHTML =
      pTitle("누락 슬롯 확인") +
      `<div class="row">
        <div class="card"><img src="${A("clue-medical-missing-drug.jpg")}" alt=""><div>약품 케이스</div></div>
        <div class="card"><img src="${A("clue-medical-log.jpg")}" alt=""><div>의료 기록</div></div>
        <div class="card"><img src="${A("motive-kang-side-effect-report.jpg")}" alt=""><div>AP-22-0917</div></div>
      </div>
      <div class="row">
        <button id="slotLeft" class="slot ${left ? "filled" : ""}">빈 슬롯 01</button>
        <button id="slotMid" class="slot ${mid ? "filled" : ""}">빈 슬롯 02</button>
        <button class="slot">약병 보관</button>
      </div>
      <div class="slot">기록 표식: ${record || "선택 대기"}</div>
      <div class="row" id="recordMarks"></div>` +
      msg(error) +
      `<div class="actions">
        <button class="btn" id="clearMedical">초기화</button>
        <button class="btn primary" id="checkMedical">슬롯 확인</button>
      </div>`;

    $("slotLeft").onclick = () => {
      left = !left;
      draw();
    };
    $("slotMid").onclick = () => {
      mid = !mid;
      draw();
    };

    ["ARCHIVED", "CONFIDENTIAL", "REJECTED"].forEach(x => {
      option("recordMarks", x, record === x, () => {
        record = x;
        draw();
      });
    });

    $("clearMedical").onclick = () => {
      left = false;
      mid = false;
      record = "";
      draw();
    };

    $("checkMedical").onclick = () => {
      if (left && mid && record === "REJECTED") {
        markSolved("medical", ["빈 슬롯 01-02", "REJECTED / AP-22-0917", "MR-22-0614", "M-22-0614"]);
      } else {
        draw("슬롯 또는 표식 불일치");
      }
    };
  }

  draw();
}

function corridor() {
  let path = [];

  const dots = [
    { id: 1, x: 55, y: 16 },
    { id: 2, x: 58, y: 38 },
    { id: 3, x: 43, y: 61 },
    { id: 4, x: 55, y: 83 }
  ];

  function draw(error = "") {
    $("puzzleRoot").innerHTML =
      pTitle("흔적 경로 입력") +
      `<div class="row">
        <div class="foot-board" id="footBoard"></div>
        <div>
          <div class="card"><img src="${A("clue-corridor-handle.jpg")}" alt=""><div>손잡이 흔적</div></div>
          <div class="slot">입력: ${path.join(" → ") || "대기"}</div>
        </div>
      </div>` +
      msg(error) +
      `<div class="actions">
        <button class="btn" id="clearPath">초기화</button>
        <button class="btn primary" id="checkPath">경로 확인</button>
      </div>`;

    dots.forEach(d => {
      const b = document.createElement("button");
      b.className = `foot-dot ${path.includes(d.id) ? "sel" : ""}`;
      b.style.left = `${d.x}%`;
      b.style.top = `${d.y}%`;
      b.textContent = d.id;
      b.onclick = () => {
        if (!path.includes(d.id)) path.push(d.id);
        draw();
      };
      $("footBoard").appendChild(b);
    });

    $("clearPath").onclick = () => {
      path = [];
      draw();
    };

    $("checkPath").onclick = () => {
      if (path.join("") === "1234") {
        markSolved("corridor", ["발자국 / 1-2-3-4", "손잡이 / 지문 흔적"]);
      } else {
        draw("경로 불일치");
      }
    };
  }

  draw();
}

function cabin() {
  let hour = 22;
  let minuteA = 10;
  let minuteB = 20;

  function draw(error = "") {
    $("puzzleRoot").innerHTML =
      pTitle("호출 장치 복원") +
      `<div class="row">
        <div class="card"><img src="${A("clue-cabin-call-log.jpg")}" alt=""><div>호출 기록</div></div>
        <div class="card"><img src="${A("clue-cabin-scene-trace.jpg")}" alt=""><div>현장 흔적</div></div>
        <div class="card"><img src="${A("motive-lee-call-record.jpg")}" alt=""><div>통화 기록 01</div></div>
      </div>
      <div class="dial-wrap">
        <div>
          <div class="dial">${hour}</div>
          <button class="opt" id="hourDown">-</button>
          <button class="opt" id="hourUp">+</button>
        </div>
        <div>
          <div class="dial">${String(minuteA).padStart(2, "0")}</div>
          <button class="opt" id="aDown">-</button>
          <button class="opt" id="aUp">+</button>
        </div>
        <div>
          <div class="dial">${String(minuteB).padStart(2, "0")}</div>
          <button class="opt" id="bDown">-</button>
          <button class="opt" id="bUp">+</button>
        </div>
      </div>
      <div class="slot">시간 범위: ${hour}:${String(minuteA).padStart(2, "0")} - ${hour}:${String(minuteB).padStart(2, "0")}</div>` +
      msg(error) +
      `<div class="actions">
        <button class="btn" id="resetDial">초기화</button>
        <button class="btn primary" id="checkDial">장치 확인</button>
      </div>`;

    $("hourDown").onclick = () => {
      hour = Math.max(21, hour - 1);
      draw();
    };
    $("hourUp").onclick = () => {
      hour = Math.min(23, hour + 1);
      draw();
    };
    $("aDown").onclick = () => {
      minuteA = Math.max(0, minuteA - 1);
      draw();
    };
    $("aUp").onclick = () => {
      minuteA = Math.min(59, minuteA + 1);
      draw();
    };
    $("bDown").onclick = () => {
      minuteB = Math.max(0, minuteB - 1);
      draw();
    };
    $("bUp").onclick = () => {
      minuteB = Math.min(59, minuteB + 1);
      draw();
    };

    $("resetDial").onclick = () => {
      hour = 22;
      minuteA = 10;
      minuteB = 20;
      draw();
    };

    $("checkDial").onclick = () => {
      if (hour === 22 && minuteA === 15 && minuteB === 22) {
        markSolved("cabin", ["22:15-22:22 / 호출 공백", "객실 현장 / 파손 흔적", "B-07", "통화 기록 01", "AC-0917"]);
      } else {
        draw("시간 범위 불일치");
      }
    };
  }

  draw();
}

function office() {
  let input = "";

  function draw(error = "") {
    $("puzzleRoot").innerHTML =
      pTitle("문서 금고 해제") +
      `<div class="row">
        <div class="card"><img src="${A("motive-hwang-access-log.jpg")}" alt=""><div>CR-07</div></div>
        <div class="card"><img src="${A("clue-office-email-print.jpg")}" alt=""><div>이메일 출력물</div></div>
        <div class="card"><img src="${A("clue-office-threat-note.jpg")}" alt=""><div>경고 메모</div></div>
        <div class="card"><img src="${A("motive-hwang-contract.jpg")}" alt=""><div>AC-VIP-OP-2410</div></div>
      </div>
      <div class="safe">
        <div class="safe-display">${input || "----"}</div>
        <div id="keypad" class="keypad"></div>
      </div>` +
      msg(error) +
      `<div class="actions">
        <button class="btn" id="clearSafe">초기화</button>
        <button class="btn primary" id="openSafe">금고 해제</button>
      </div>`;

    ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "←", "OK"].forEach(n => {
      const b = document.createElement("button");
      b.textContent = n;
      b.onclick = () => {
        if (n === "←") input = input.slice(0, -1);
        else if (n === "OK") check();
        else if (input.length < 4) input += n;
        draw();
      };
      $("keypad").appendChild(b);
    });

    $("clearSafe").onclick = () => {
      input = "";
      draw();
    };

    $("openSafe").onclick = check;

    function check() {
      if (input === "0418") {
        markSolved("office", ["C-0418 / 통신실 접근", "DO NOT REPORT", "AC-VIP-OP-2410", "INTERNAL MEMO"]);
      } else {
        draw("코드 불일치");
      }
    }
  }

  draw();
}

function canOpenTruth() {
  return ["deck", "lounge", "medical", "corridor", "cabin", "office"].every(solved) && !state.truth;
}

function openTruth() {
  let step = 0;
  const answers = ["강하나", "이민정", "황세준"];
  const portraits = `
    <div class="truth-portraits">
      <img src="${A("suspect-kang-hana-file.jpg")}" alt="">
      <img src="${A("suspect-lee-minjeong-file.jpg")}" alt="">
      <img src="${A("suspect-hwang-sejun-file.jpg")}" alt="">
    </div>`;

  const lines = [
    {
      text: "라운지의 좌석 도면, 의무실의 빈 슬롯, 반려된 보고서. 이 줄은 한 사람에게 모인다.",
      note: "A-09 / 빈 슬롯 / AP-22-0917"
    },
    {
      text: "복도의 발자국, 손잡이의 흔적, 객실의 호출 공백. 문은 안에서만 닫히지 않았다.",
      note: "B-712 / 22:15-22:22"
    },
    {
      text: "접근 로그의 반복 ID, 경고 메모, 금고 안쪽 문서. 통신실은 우연히 잠긴 게 아니다.",
      note: "C-0418 / DO NOT REPORT"
    }
  ];

  function draw(error = "") {
    const current = lines[step];
    $("puzzleRoot").innerHTML =
      pTitle("진상 밝히기") +
      `<div class="truth-layout">
        ${portraits}
        <div>
          <div class="dialogue">${current.text}<br><br><span class="muted">${current.note}</span></div>
          <div class="evidenceBtns" id="truthOptions"></div>
          ${msg(error)}
        </div>
      </div>`;

    ["강하나", "이민정", "황세준"].forEach(name => {
      option("truthOptions", name, false, () => {
        if (name === answers[step]) {
          step++;
          if (step >= answers.length) {
            state.truth = true;
            addNote("진상 확인 / A-09 / B-712 / C-0418");
            if (!state.unlocked.includes("communication")) state.unlocked.push("communication");
            saveState();
            render();
            closePuzzle();
            toast("통신실 해금");
          } else {
            draw();
          }
        } else {
          draw("지목 불일치");
        }
      });
    });
  }

  draw();
  $("puzzleModal").classList.remove("hidden");
}

function communication() {
  let seq = [];
  const nums = ["17", "9", "5", "3", "22", "18"];
  const answer = "179532218";

  function draw(error = "") {
    $("puzzleRoot").innerHTML =
      pTitle("송신 기록 복원") +
      `<div class="code-grid">
        <div>
          <img src="${A("clue-transmission-code.jpg")}" alt="">
          <div class="row">
            <div class="card"><img src="${A("clue-communication-console.jpg")}" alt=""><div>CONSOLE</div></div>
            <div class="card"><img src="${A("clue-emergency-channel.jpg")}" alt=""><div>CHANNEL</div></div>
            <div class="card"><img src="${A("clue-route-lock.jpg")}" alt=""><div>ROUTE LOCK</div></div>
          </div>
        </div>
        <div>
          <div class="slot">좌측 기록 → 우측 기록<br>위에서 아래로 입력</div>
          <div class="display">${seq.join("") || "송신 대기"}</div>
          <div id="numButtons" class="num-buttons"></div>
          ${msg(error)}
          <div class="actions">
            <button class="btn" id="clearCode">초기화</button>
            <button class="btn primary" id="sendCode">송신</button>
          </div>
        </div>
      </div>`;

    nums.forEach(n => {
      const b = document.createElement("button");
      b.className = "num";
      b.textContent = n;
      b.onclick = () => {
        seq.push(n);
        draw();
      };
      $("numButtons").appendChild(b);
    });

    $("clearCode").onclick = () => {
      seq = [];
      draw();
    };

    $("sendCode").onclick = () => {
      if (!state.truth) {
        showEnding(false, "SIGNAL LOST", "TRUTH REQUIRED");
        return;
      }
      if (seq.join("") === answer) {
        state.escape = true;
        addNote("SIGNAL SENT");
        addNote("ROUTE UNLOCKED");
        saveState();
        showEnding(true, "송신 완료", "항로 잠금 해제");
      } else {
        draw("열 순서 불일치");
      }
    };
  }

  draw();
}

function showEnding(success, title, subtitle) {
  $("endingImage").src = A(success ? "ending-escape-success.jpg" : "ending-escape-fail.jpg");
  $("endingTitle").textContent = title;
  $("endingSubtitle").textContent = subtitle;
  $("truthSummaryBtn").classList.toggle("hidden", !success);
  closePuzzle();
  $("imageModal").classList.add("hidden");
  screen("ending");
}

function openTruthSummary() {
  $("modalTitle").textContent = "사건 전말";
  $("modalImage").src = "";
  $("modalImage").style.display = "none";
  $("modalCaption").innerHTML = `
    <div class="summary">
      <p><b>강하나</b> — 부작용 피해자의 가족. 라운지와 의무실 기록의 첫 번째 선.</p>
      <p><b>이민정</b> — 직접 부작용을 겪은 피해자. 복도와 객실 기록의 두 번째 선.</p>
      <p><b>황세준</b> — 최태오의 회사에서 일했던 내부자. 접근 로그와 통신 차단 기록의 세 번째 선.</p>
      <p><b>최태오</b> — 신약 부작용 은폐의 중심에 있던 제약회사 대표.</p>
      <p>사건은 라운지의 개입, 객실의 대면, 통신 차단이 겹치며 완성되었다.</p>
    </div>`;
  $("imageModal").classList.remove("hidden");
}

function openProfile(key) {
  const p = profiles[key];
  openImage(p.name, A(p.img), "");
}

document.addEventListener("DOMContentLoaded", () => {
  $("newGameBtn").onclick = () => {
    resetState();
    screen("game");
  };

  $("continueBtn").onclick = () => {
    screen("game");
    render();
  };

  $("resetBtn").onclick = () => {
    resetState();
    toast("기록 초기화");
  };

  $("homeBtn").onclick = () => screen("home");
  $("puzzleBtn").onclick = openPuzzle;
  $("closePuzzleBtn").onclick = closePuzzle;
  $("truthBtn").onclick = openTruth;

  $("backGameBtn").onclick = () => {
    screen("game");
    render();
  };
  $("endingHomeBtn").onclick = () => screen("home");
  $("truthSummaryBtn").onclick = openTruthSummary;

  document.querySelectorAll("[data-close]").forEach(el => {
    el.onclick = () => {
      $(el.dataset.close).classList.add("hidden");
      $("modalImage").style.display = "";
    };
  });

  document.querySelectorAll(".profileBtn").forEach(btn => {
    btn.onclick = () => openProfile(btn.dataset.profile);
  });

  render();
});
