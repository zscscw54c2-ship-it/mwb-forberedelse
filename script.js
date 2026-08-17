const IKONER = {
  bibellesning: `<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M24 12c-3.5-2.5-8-3.5-13-3.5v25c5 0 9.5 1 13 3.5"/>
    <path d="M24 12c3.5-2.5 8-3.5 13-3.5v25c-5 0-9.5 1-13 3.5"/>
    <path d="M24 12v25"/>
  </svg>`,
  andelige_perler: `<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M24 6l4.5 8.5L38 18l-8 6 2 10-8-5-8 5 2-10-8-6 9.5-3.5z"/>
  </svg>`,
  skatter_fra_guds_ord: `<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
    <rect x="8" y="20" width="32" height="18" rx="3"/>
    <path d="M8 24h32"/>
    <path d="M12 20c0-7 5.5-12 12-12s12 5 12 12"/>
    <circle cx="24" cy="29" r="2.3" fill="currentColor" stroke="none"/>
  </svg>`,
  menighetsbibelstudiet: `<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M6 26h36l-4 10H10z"/>
    <path d="M14 26v-9a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v9"/>
    <path d="M24 15V9"/>
    <path d="M20 9h8"/>
  </svg>`,
  spill: `<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M27 4 13 27h9l-3 17 18-23h-9z"/>
  </svg>`,
  bibelkort: `<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
    <rect x="8" y="14" width="24" height="17" rx="3" transform="rotate(-8 20 22.5)" opacity="0.5"/>
    <rect x="13" y="12" width="27" height="18" rx="3"/>
    <path d="M20 20.5c0-2 1.6-3 3.4-3 1.9 0 3.1 1.3 2.9 2.9-.2 1.6-3.3 2-3.3 4.6"/>
    <circle cx="23" cy="27.3" r="0.4" fill="currentColor"/>
  </svg>`,
  kapitler: `<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
    <rect x="28" y="7" width="11" height="12" rx="1.5"/>
    <path d="M28 13h-6.5"/>
    <ellipse cx="20" cy="19" rx="14" ry="6"/>
    <ellipse cx="20" cy="19" rx="7.5" ry="3"/>
    <path d="M7 19c0 8.5 4 15 13 15s13-6.5 13-15"/>
    <path d="M13 34l-2 7h18l-2-7"/>
  </svg>`,
};

const BANNERE = {
  bibellesning: `<svg viewBox="0 0 400 150" xmlns="http://www.w3.org/2000/svg">
    <g stroke="#b8860b" stroke-width="3" stroke-linecap="round" opacity="0.4">
      <line x1="200" y1="16" x2="200" y2="0"/>
      <line x1="164" y1="22" x2="152" y2="8"/>
      <line x1="236" y1="22" x2="248" y2="8"/>
    </g>
    <ellipse cx="108" cy="82" rx="15" ry="36" fill="#f6e7c8"/>
    <ellipse cx="292" cy="82" rx="15" ry="36" fill="#f6e7c8"/>
    <rect x="106" y="48" width="188" height="68" fill="#fdf6e6"/>
    <ellipse cx="108" cy="82" rx="15" ry="36" fill="none" stroke="#b8860b" stroke-width="3.5"/>
    <ellipse cx="292" cy="82" rx="15" ry="36" fill="none" stroke="#b8860b" stroke-width="3.5"/>
    <g stroke="#b8860b" stroke-width="3" stroke-linecap="round">
      <line x1="134" y1="66" x2="266" y2="66"/>
      <line x1="134" y1="82" x2="246" y2="82"/>
      <line x1="134" y1="98" x2="262" y2="98"/>
    </g>
  </svg>`,
  andelige_perler: `<svg viewBox="0 0 400 150" xmlns="http://www.w3.org/2000/svg">
    <g fill="#6449a8">
      <path d="M200 34l17 28-17 56-17-56z"/>
      <path d="M148 58l12 19-12 40-12-40z" opacity="0.65"/>
      <path d="M252 58l12 19-12 40-12-40z" opacity="0.65"/>
    </g>
    <g stroke="#6449a8" stroke-width="3.5" stroke-linecap="round" opacity="0.7">
      <path d="M92 44l7 7M99 44l-7 7"/>
      <path d="M308 64l7 7M315 64l-7 7"/>
      <path d="M118 108l6 6M124 108l-6 6"/>
      <path d="M282 112l6 6M288 112l-6 6"/>
    </g>
  </svg>`,
  skatter_fra_guds_ord: `<svg viewBox="0 0 400 150" xmlns="http://www.w3.org/2000/svg">
    <line x1="20" y1="122" x2="380" y2="122" stroke="#0f6b64" stroke-width="2" opacity="0.25"/>
    <path d="M162 30q-22 0-22 20q0 16 16 16" fill="none" stroke="#0f6b64" stroke-width="6" stroke-linecap="round"/>
    <line x1="162" y1="30" x2="162" y2="118" stroke="#0f6b64" stroke-width="6" stroke-linecap="round"/>
    <g fill="#0f6b64">
      <ellipse cx="235" cy="104" rx="32" ry="19"/>
      <circle cx="264" cy="92" r="11"/>
    </g>
    <g fill="#0f6b64" opacity="0.55">
      <ellipse cx="305" cy="112" rx="24" ry="15"/>
      <circle cx="327" cy="102" r="9"/>
    </g>
  </svg>`,
  menighetsbibelstudiet: `<svg viewBox="0 0 400 150" xmlns="http://www.w3.org/2000/svg">
    <g fill="none" stroke-width="7" stroke-linecap="round">
      <path d="M96 108A104 104 0 0 1 304 108" stroke="#9c3349" opacity="0.45"/>
      <path d="M110 108A90 90 0 0 1 290 108" stroke="#b8860b" opacity="0.45"/>
      <path d="M124 108A76 76 0 0 1 276 108" stroke="#0f6b64" opacity="0.45"/>
    </g>
    <g fill="#9c3349">
      <rect x="148" y="88" width="104" height="34" rx="10"/>
      <path d="M172 88l28-26 28 26z"/>
    </g>
    <path d="M50 128q17-12 34 0t34 0t34 0t34 0t34 0t34 0t34 0t34 0" fill="none" stroke="#9c3349" stroke-width="4" stroke-linecap="round" opacity="0.45"/>
  </svg>`,
  spill: `<svg viewBox="0 0 400 150" xmlns="http://www.w3.org/2000/svg">
    <g fill="#2568b0">
      <circle cx="120" cy="100" r="16" opacity="0.5"/>
      <circle cx="90" cy="60" r="10" opacity="0.35"/>
      <circle cx="300" cy="95" r="22" opacity="0.4"/>
      <circle cx="270" cy="50" r="9" opacity="0.3"/>
      <circle cx="330" cy="55" r="7" opacity="0.3"/>
    </g>
    <path d="M212 28 194 66h16l-6 34 32-46h-16z" fill="#2568b0"/>
  </svg>`,
  bibelkort: `<svg viewBox="0 0 400 150" xmlns="http://www.w3.org/2000/svg">
    <g stroke="#2f7d4f" stroke-width="4" fill="none">
      <rect x="128" y="36" width="90" height="112" rx="12" transform="rotate(-9 173 92)" opacity="0.3"/>
      <rect x="150" y="30" width="90" height="112" rx="12" transform="rotate(5 195 86)" opacity="0.55"/>
      <rect x="185" y="34" width="90" height="112" rx="12"/>
    </g>
    <g stroke="#2f7d4f" stroke-width="5" stroke-linecap="round" fill="none">
      <path d="M216 78c0-8 6.5-13 14-13 7.8 0 12.6 5.3 11.8 11.8-.8 6.5-13.6 8-13.6 18.6"/>
      <circle cx="228" cy="112" r="1" fill="#2f7d4f"/>
    </g>
  </svg>`,
  kapitler: `<svg viewBox="0 0 400 150" xmlns="http://www.w3.org/2000/svg">
    <g fill="none" stroke="#b5502e" stroke-width="4" stroke-linecap="round" stroke-linejoin="round">
      <path d="M200 36c-14-10-34-13-58-12v78c24-1 44 2 58 12"/>
      <path d="M200 36c14-10 34-13 58-12v78c-24-1-44 2-58 12"/>
      <path d="M200 36v78"/>
    </g>
    <g fill="#b5502e" opacity="0.55">
      <circle cx="112" cy="46" r="4"/>
      <circle cx="292" cy="112" r="5"/>
      <circle cx="88" cy="98" r="3"/>
    </g>
  </svg>`,
};

const SEKSJONER = [
  { id: "bibellesning", navn: "Bibellesning" },
  { id: "skatter_fra_guds_ord", navn: "Skatter" },
  { id: "andelige_perler", navn: "Perler" },
  { id: "menighetsbibelstudiet", navn: "Bibelstudiet" },
  { id: "bibelkort", navn: "Bibelkort" },
  { id: "spill", navn: "Spill" },
  { id: "kapitler", navn: "Vær modig" },
];

const kvizTilstand = {};
const perleTilstand = { valgt: 0 };
let ukeIndeks = [];
let gjeldendeUkeId = null;
let bibelkortData = null;
const BIBELKORT_ANTALL = 12;

const SPILL_STARTTID = 45000;
const SPILL_BONUS_START = 2000;
const SPILL_BONUS_FLATE_ANTALL = 3;
const SPILL_BONUS_STEG = 100;
const SPILL_MAKSTID = 52000;
const SPILLER_NAVN_NOKKEL = "mwb-spiller-navn";
const FIREBASE_DB_URL = "https://mwb-forberedelse-default-rtdb.firebaseio.com";

const spillTilstand = {
  status: "intro",
  pool: [],
  i: 0,
  poeng: 0,
  tidIgjen: 0,
  timerId: null,
  navn: "",
};

let kapittelIndeks = null;
const KAPITTEL_REKORD_PREFIKS = "mwb-kapittel-rekord-";
const BOMBE_TID = 25000;

const kapittelTilstand = {
  status: "liste",
  kapittelId: null,
  kapittelData: null,
  biteIndex: 0,
  valgt: null,
  laerPoeng: 0,
  feilBiter: [],
  bombePool: [],
  bombeIndex: 0,
  bombePoeng: 0,
  bombeTidIgjen: 0,
  bombeTimerId: null,
  bombeValgt: null,
};

function hentKapittelRekord(id) {
  return parseInt(localStorage.getItem(KAPITTEL_REKORD_PREFIKS + id) || "0", 10);
}

function lagreKapittelRekord(id, poeng) {
  const forrige = hentKapittelRekord(id);
  if (poeng > forrige) {
    localStorage.setItem(KAPITTEL_REKORD_PREFIKS + id, String(poeng));
    return true;
  }
  return false;
}

function escapeHtml(s) {
  const div = document.createElement("div");
  div.textContent = s;
  return div.innerHTML;
}

function hentLagretNavn() {
  return localStorage.getItem(SPILLER_NAVN_NOKKEL) || "";
}

function lagreNavn(navn) {
  localStorage.setItem(SPILLER_NAVN_NOKKEL, navn);
}

async function hentLeaderboard(ukeId) {
  try {
    const res = await fetch(`${FIREBASE_DB_URL}/leaderboards/${ukeId}.json`);
    const data = await res.json();
    if (!data) return [];
    return Object.values(data)
      .sort((a, b) => b.poeng - a.poeng)
      .slice(0, 10);
  } catch (e) {
    return [];
  }
}

async function lagreTilLeaderboard(ukeId, navn, poeng) {
  try {
    const res = await fetch(`${FIREBASE_DB_URL}/leaderboards/${ukeId}.json`);
    const data = (await res.json()) || {};
    const navnLower = navn.toLowerCase();

    let eksisterendeNokkel = null;
    let eksisterendePoeng = -1;
    for (const [nokkel, oppforing] of Object.entries(data)) {
      if (String(oppforing.navn).toLowerCase() === navnLower) {
        eksisterendeNokkel = nokkel;
        eksisterendePoeng = oppforing.poeng;
        break;
      }
    }

    if (eksisterendeNokkel) {
      // Samme navn finnes fra før – behold kun høyeste poengsum (og navnet
      // slik det ble skrevet da den poengsummen ble satt).
      if (poeng > eksisterendePoeng) {
        await fetch(`${FIREBASE_DB_URL}/leaderboards/${ukeId}/${eksisterendeNokkel}.json`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ navn, poeng, tid: Date.now() }),
        });
      }
    } else {
      await fetch(`${FIREBASE_DB_URL}/leaderboards/${ukeId}.json`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ navn, poeng, tid: Date.now() }),
      });
    }
  } catch (e) {
    // Stille feil – dårlig nett skal ikke ødelegge spillopplevelsen.
  }
}

function renderLeaderboardListe(liste) {
  if (!liste.length) {
    return `<p class="leaderboard-tom">Ingen har spilt ennå denne uken. Bli den første!</p>`;
  }
  return `
    <ol class="leaderboard-liste">
      ${liste.map((e, i) => `
        <li class="${i === 0 ? "forste" : ""}">
          <span class="lb-plass">${i + 1}.</span>
          <span class="lb-navn">${escapeHtml(String(e.navn))}</span>
          <span class="lb-poeng">${e.poeng}</span>
        </li>
      `).join("")}
    </ol>
  `;
}

function tittelFor(id, data) {
  if (id === "bibellesning") return data.bibellesning.referanse;
  if (id === "andelige_perler") return "Åndelige perler";
  if (id === "skatter_fra_guds_ord") return "Skatter fra Guds Ord";
  if (id === "spill") return "Overlev så lenge som mulig";
  if (id === "bibelkort") return "Bibelkort – 20 spørsmål Bibelen svarer på";
  if (id === "kapitler") return "Kapitler – lær «Vær modig» bit for bit";
  return data.menighetsbibelstudiet.kapitteltittel;
}

function renderOverskrift(id, data) {
  return `
    <div class="header-kort">
      <div class="illustrasjon">${BANNERE[id]}</div>
      <div class="overskrift">
        <div class="ikon">${IKONER[id]}</div>
        <div>
          <h2>${tittelFor(id, data)}</h2>
          <p class="undertittel">${data.dato}</p>
        </div>
      </div>
    </div>
  `;
}

function renderPrikker(seksjonId, antall) {
  const t = kvizTilstand[seksjonId];
  let html = "";
  for (let i = 0; i < antall; i++) {
    let cls = "prikk";
    if (i < t.i) cls += " gjort";
    if (i === t.i) cls += " na";
    html += `<span class="${cls}"></span>`;
  }
  return html;
}

function renderKvizkort(seksjonId, data) {
  const t = kvizTilstand[seksjonId];
  const sp = t.sporsmalListe[t.i];
  const ferdig = t.valgt !== null;
  const feilSvart = ferdig && t.valgt !== sp.riktig;

  const knapper = sp.alternativer.map((alt, idx) => {
    let cls = "alt-knapp";
    if (ferdig && idx === sp.riktig) cls += " riktig";
    else if (ferdig && idx === t.valgt) cls += " feil";
    return `<button class="${cls}" data-idx="${idx}" ${ferdig ? "disabled" : ""}>${alt}</button>`;
  }).join("");

  const sisteSporsmal = t.i === t.sporsmalListe.length - 1;

  return `
    <div class="quiz-header">
      <h3>Quiz</h3>
      <div class="prikker" style="color:var(--${fargeFor(seksjonId)})">${renderPrikker(seksjonId, t.sporsmalListe.length)}</div>
    </div>
    <div class="quizkort">
      <div class="sporsmal">${sp.sporsmal}</div>
      <div class="alternativer">${knapper}</div>
      ${feilSvart && sp.kilde ? `<p class="quiz-kilde">Se: ${sp.kilde}</p>` : ""}
      <div class="quiz-knapper">
        <button class="${ferdig ? "synlig" : ""}" id="neste-${seksjonId}">${sisteSporsmal ? "Se resultat" : "Neste spørsmål →"}</button>
      </div>
    </div>
    ${t.ferdigVist ? `
      <p class="poeng">Du fikk ${t.riktigeSvar} av ${t.sporsmalListe.length} riktige! 🎉</p>
      ${t.feilListe.length ? `<button class="prov-igjen-knapp" id="prov-igjen-${seksjonId}">🔁 Prøv de du bommet på (${t.feilListe.length})</button>` : ""}
    ` : ""}
  `;
}

function fargeFor(id) {
  return { bibellesning: "gold", andelige_perler: "violet", skatter_fra_guds_ord: "teal", menighetsbibelstudiet: "maroon", bibelkort: "green", spill: "blue", kapitler: "rust" }[id];
}

function stokk(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function byggSpillPool(data) {
  const alle = [
    ...data.bibellesning.sporsmal,
    ...data.skatter_fra_guds_ord.sporsmal,
    ...data.menighetsbibelstudiet.sporsmal,
  ];
  return stokk(alle).map(q => {
    const rekkefolge = stokk(q.alternativer.map((alt, idx) => ({ alt, erRiktig: idx === q.riktig })));
    return {
      sporsmal: q.sporsmal,
      alternativer: rekkefolge.map(r => r.alt),
      riktig: rekkefolge.findIndex(r => r.erRiktig),
    };
  });
}

function renderSpillIntro(liste) {
  return `
    <div class="spill-intro">
      <p>Svar riktig så mange ganger du klarer før klokka går ut! Riktig svar gir poeng og litt ekstra tid – første feil svar avslutter runden.</p>
      <input type="text" id="spiller-navn-input" class="navn-input" placeholder="Skriv inn navnet ditt" maxlength="20">
      <p class="spill-feil" id="spill-navn-feil" style="display:none">Skriv inn navnet ditt for å starte</p>
      <button class="spill-start-knapp" id="spill-start-knapp">▶ Start spill</button>
    </div>
    <div class="leaderboard">
      <h3>🏆 Denne ukens tavle</h3>
      ${renderLeaderboardListe(liste)}
    </div>
  `;
}

function renderSpillRunde() {
  const t = spillTilstand;
  const sp = t.pool[t.i];
  const pct = Math.max(0, (t.tidIgjen / SPILL_MAKSTID) * 100);
  const knapper = sp.alternativer.map((alt, idx) =>
    `<button class="spill-alt-knapp" data-idx="${idx}">${alt}</button>`
  ).join("");

  return `
    <div class="spill-topplinje">
      <span class="spill-poeng">⭐ ${t.poeng} poeng</span>
      <span class="spill-klokke" id="spill-klokke">${Math.ceil(t.tidIgjen / 1000)}s</span>
    </div>
    <div class="timer-bar"><div class="timer-fyll" id="timer-fyll" style="width:${pct}%"></div></div>
    <p class="spill-sporsmal">${sp.sporsmal}</p>
    <div class="spill-alternativer">${knapper}</div>
  `;
}

function renderSpillResultat(liste) {
  const t = spillTilstand;
  const erFørst = liste.length > 0 && liste[0].navn === t.navn && liste[0].poeng === t.poeng;
  return `
    <div class="spill-resultat">
      <p class="spill-resultat-poeng">${t.poeng} poeng</p>
      ${erFørst ? `<span class="spill-ny-rekord">🏆 Du topper tavla denne uken!</span>` : ""}
      <button class="spill-start-knapp" id="spill-igjen-knapp">🔄 Spill igjen</button>
    </div>
    <div class="leaderboard">
      <h3>🏆 Denne ukens tavle</h3>
      ${renderLeaderboardListe(liste)}
    </div>
  `;
}

async function renderSpillOmrade(data) {
  const wrap = document.getElementById("spill-omrade");
  if (!wrap) return;
  const t = spillTilstand;

  if (t.status === "intro") {
    wrap.innerHTML = `<p class="leaderboard-laster">Laster tavle …</p>`;
    const liste = await hentLeaderboard(gjeldendeUkeId);
    if (spillTilstand.status !== "intro" || !document.getElementById("spill-omrade")) return;
    wrap.innerHTML = renderSpillIntro(liste);
    const navnInput = document.getElementById("spiller-navn-input");
    navnInput.value = hentLagretNavn();
    navnInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") startSpill(data);
    });
    document.getElementById("spill-start-knapp").addEventListener("click", () => startSpill(data));
  } else if (t.status === "spor") {
    wrap.innerHTML = renderSpillRunde();
    wrap.querySelectorAll(".spill-alt-knapp").forEach(btn => {
      btn.addEventListener("click", () => svarValgt(data, parseInt(btn.dataset.idx, 10)));
    });
  } else {
    wrap.innerHTML = `<div class="spill-resultat"><p class="spill-resultat-poeng">${t.poeng} poeng</p><p class="leaderboard-laster">Lagrer poengsum …</p></div>`;
    await lagreTilLeaderboard(gjeldendeUkeId, t.navn, t.poeng);
    const liste = await hentLeaderboard(gjeldendeUkeId);
    if (spillTilstand.status !== "resultat" || !document.getElementById("spill-omrade")) return;
    wrap.innerHTML = renderSpillResultat(liste);
    document.getElementById("spill-igjen-knapp").addEventListener("click", () => startSpill(data));
  }
}

function oppdaterKlokkevisning() {
  const t = spillTilstand;
  const fyll = document.getElementById("timer-fyll");
  const klokke = document.getElementById("spill-klokke");
  const pct = Math.max(0, (t.tidIgjen / SPILL_MAKSTID) * 100);
  if (fyll) {
    fyll.style.width = pct + "%";
    fyll.classList.toggle("lav", t.tidIgjen < 10000);
  }
  if (klokke) klokke.textContent = Math.max(0, Math.ceil(t.tidIgjen / 1000)) + "s";
}

function startKlokke(data) {
  clearInterval(spillTilstand.timerId);
  spillTilstand.timerId = setInterval(() => {
    spillTilstand.tidIgjen -= 100;
    oppdaterKlokkevisning();
    if (spillTilstand.tidIgjen <= 0) {
      clearInterval(spillTilstand.timerId);
      avsluttSpill(data);
    }
  }, 100);
}

function beregnSpillBonus(antallRiktige) {
  if (antallRiktige <= SPILL_BONUS_FLATE_ANTALL) return SPILL_BONUS_START;
  const reduksjon = (antallRiktige - SPILL_BONUS_FLATE_ANTALL) * SPILL_BONUS_STEG;
  return Math.max(0, SPILL_BONUS_START - reduksjon);
}

function svarValgt(data, idx) {
  const t = spillTilstand;
  if (t.status !== "spor") return;
  const sp = t.pool[t.i];
  const knapper = document.querySelectorAll(".spill-alt-knapp");
  knapper.forEach(b => (b.disabled = true));

  if (idx === sp.riktig) {
    knapper[idx].classList.add("riktig");
    t.poeng++;
    t.tidIgjen = Math.min(t.tidIgjen + beregnSpillBonus(t.poeng), SPILL_MAKSTID);
    t.i++;
    if (t.i >= t.pool.length) t.pool = t.pool.concat(byggSpillPool(data));
    setTimeout(() => renderSpillOmrade(data), 300);
  } else {
    knapper[idx].classList.add("feil");
    knapper[sp.riktig].classList.add("riktig");
    clearInterval(t.timerId);
    setTimeout(() => avsluttSpill(data), 700);
  }
}

function avsluttSpill(data) {
  clearInterval(spillTilstand.timerId);
  spillTilstand.status = "resultat";
  renderSpillOmrade(data);
}

function startSpill(data) {
  if (spillTilstand.status === "spor") return;
  const navnInput = document.getElementById("spiller-navn-input");
  const navn = navnInput ? navnInput.value.trim() : spillTilstand.navn;
  if (!navn) {
    const feil = document.getElementById("spill-navn-feil");
    if (feil) feil.style.display = "block";
    if (navnInput) navnInput.focus();
    return;
  }
  lagreNavn(navn);
  spillTilstand.navn = navn;

  clearInterval(spillTilstand.timerId);
  spillTilstand.pool = byggSpillPool(data);
  spillTilstand.i = 0;
  spillTilstand.poeng = 0;
  spillTilstand.tidIgjen = SPILL_STARTTID;
  spillTilstand.status = "spor";
  renderSpillOmrade(data);
  startKlokke(data);
}

function renderSpillSeksjon(data) {
  return `
    ${renderOverskrift("spill", data)}
    <div id="spill-omrade"></div>
  `;
}

function renderKapitlerSeksjon(data) {
  return `
    ${renderOverskrift("kapitler", data)}
    <div id="kapitler-omrade"></div>
  `;
}

function renderKapittelListe() {
  const rader = kapittelIndeks.map(k => {
    const rekord = hentKapittelRekord(k.id);
    return `
      <button class="kapittel-rad" data-h="apneKapittel" data-id="${k.id}">
        <span class="kapittel-nr">${k.nummer}</span>
        <span class="kapittel-midt">
          <span class="kapittel-navn">${k.navn}</span>
          <span class="kapittel-tittel">${k.tittel}</span>
        </span>
        <span class="kapittel-rekord">${rekord > 0 ? `⭐ ${rekord}` : "Ikke spilt"}</span>
      </button>
    `;
  }).join("");
  return `
    <p class="kapitler-intro">Lær «Vær modig – stol på Jehova» bit for bit – ingen forkunnskap nødvendig.
      Velg et kapittel, og bygg din personlige rekord.</p>
    <div class="kapittel-liste">${rader}</div>
  `;
}

function renderKapittelIntro() {
  const k = kapittelTilstand.kapittelData;
  const rekord = hentKapittelRekord(k.id);
  return `
    <button class="tilbake-knapp" data-h="kapittelTilbake">← Alle kapitler</button>
    <div class="kapittel-intro-kort">
      <div class="mikro-kapittel">Kapittel ${k.nummer} · ${k.navn}</div>
      <h2>${k.tittel}</h2>
      <p>${k.biter.length} biter å lære, etterfulgt av en bomberunde. ${rekord > 0 ? `Din rekord: <strong>${rekord} poeng</strong>.` : "Ingen rekord ennå – bli den første!"}</p>
      <button class="spill-start-knapp" data-h="startLaering">▶ Start kapittelet</button>
    </div>
  `;
}

function renderKapittelPrikker() {
  const t = kapittelTilstand;
  const antall = t.kapittelData.biter.length;
  let html = "";
  for (let i = 0; i < antall; i++) {
    let cls = "prikk";
    if (i < t.biteIndex) cls += " gjort";
    if (i === t.biteIndex) cls += " na";
    html += `<span class="${cls}"></span>`;
  }
  return html;
}

function renderLaerBit() {
  const t = kapittelTilstand;
  const bit = t.kapittelData.biter[t.biteIndex];
  const ferdig = t.valgt !== null;
  const knapper = bit.alternativer.map((alt, idx) => {
    let cls = "alt-knapp";
    if (ferdig && idx === bit.riktig) cls += " riktig";
    else if (ferdig && idx === t.valgt) cls += " feil";
    return `<button class="${cls}" data-h="svarLaer" data-idx="${idx}" ${ferdig ? "disabled" : ""}>${alt}</button>`;
  }).join("");
  const sisteBit = t.biteIndex === t.kapittelData.biter.length - 1;
  return `
    <div class="quiz-header">
      <h3>Lær og test</h3>
      <div class="prikker" style="color:var(--rust)">${renderKapittelPrikker()}</div>
    </div>
    <div class="fakta-kort">
      <span class="mikro-kapittel">Visste du dette?</span>
      <p>${bit.fakta}</p>
    </div>
    <div class="quizkort">
      <div class="sporsmal">${bit.sporsmal}</div>
      <div class="alternativer">${knapper}</div>
      <div class="quiz-knapper">
        <button class="${ferdig ? "synlig" : ""}" data-h="nesteBit">${sisteBit ? "Gå til bomberunden →" : "Neste →"}</button>
      </div>
    </div>
  `;
}

function byggBombePool() {
  const t = kapittelTilstand;
  const resten = t.kapittelData.biter.filter(b => !t.feilBiter.includes(b));
  return stokk(t.feilBiter).concat(stokk(resten));
}

function renderBombeIntro() {
  const t = kapittelTilstand;
  return `
    <div class="bombe-intro">
      <div class="bombe-emoji">💣</div>
      <h2>Bomberunden</h2>
      <p>${t.feilBiter.length ? `Du bommet på ${t.feilBiter.length} spørsmål – de kommer først. ` : ""}Svar så mange riktig du klarer før tiden er ute!</p>
      <button class="spill-start-knapp" data-h="startBombe">💣 Start bomberunden</button>
    </div>
  `;
}

function renderBombeRunde() {
  const t = kapittelTilstand;
  const bit = t.bombePool[t.bombeIndex];
  const ferdig = t.bombeValgt !== null;
  const pct = Math.max(0, (t.bombeTidIgjen / BOMBE_TID) * 100);
  const knapper = bit.alternativer.map((alt, idx) => {
    let cls = "alt-knapp";
    if (ferdig && idx === bit.riktig) cls += " riktig";
    else if (ferdig && idx === t.bombeValgt) cls += " feil";
    return `<button class="${cls}" data-h="svarBombe" data-idx="${idx}" ${ferdig ? "disabled" : ""}>${alt}</button>`;
  }).join("");
  return `
    <div class="spill-topplinje">
      <span class="spill-poeng">💣 ${t.bombePoeng} poeng</span>
      <span class="spill-klokke bombe-klokke">${Math.ceil(t.bombeTidIgjen / 1000)}s</span>
    </div>
    <div class="timer-bar"><div class="timer-fyll bombe-fyll" style="width:${pct}%"></div></div>
    <div class="quizkort">
      <div class="sporsmal">${bit.sporsmal}</div>
      <div class="alternativer">${knapper}</div>
    </div>
  `;
}

function renderKapittelResultat() {
  const t = kapittelTilstand;
  const total = t.laerPoeng + t.bombePoeng;
  const nyRekord = lagreKapittelRekord(t.kapittelData.id, total);
  const rekord = hentKapittelRekord(t.kapittelData.id);
  return `
    <div class="spill-resultat">
      <p class="spill-resultat-poeng">${total} poeng</p>
      <p class="bombe-delsum">${t.laerPoeng} fra læring + ${t.bombePoeng} fra bomberunden</p>
      ${nyRekord ? `<span class="spill-ny-rekord">🏆 Ny personlig rekord!</span>` : `<p class="bombe-rekord-info">Din rekord for dette kapittelet: ${rekord} poeng</p>`}
      <button class="spill-start-knapp" data-h="startLaering">🔄 Spill igjen</button>
      <button class="tilbake-knapp" data-h="kapittelTilbake">← Alle kapitler</button>
    </div>
  `;
}

async function renderKapitlerOmrade() {
  const wrap = document.getElementById("kapitler-omrade");
  if (!wrap) return;
  const t = kapittelTilstand;
  if (t.status === "liste") {
    wrap.innerHTML = renderKapittelListe();
  } else if (t.status === "intro") {
    wrap.innerHTML = renderKapittelIntro();
  } else if (t.status === "laer") {
    wrap.innerHTML = renderLaerBit();
  } else if (t.status === "bombeIntro") {
    wrap.innerHTML = renderBombeIntro();
  } else if (t.status === "bombe") {
    wrap.innerHTML = renderBombeRunde();
  } else if (t.status === "resultat") {
    clearInterval(t.bombeTimerId);
    wrap.innerHTML = renderKapittelResultat();
  }
}

async function apneKapittel(id) {
  const t = kapittelTilstand;
  t.kapittelData = await fetch(`kapitler/${id}.json`).then(r => r.json());
  t.kapittelId = id;
  t.status = "intro";
  renderKapitlerOmrade();
}

function kapittelTilbake() {
  clearInterval(kapittelTilstand.bombeTimerId);
  kapittelTilstand.status = "liste";
  renderKapitlerOmrade();
}

function startLaering() {
  const t = kapittelTilstand;
  t.biteIndex = 0;
  t.valgt = null;
  t.laerPoeng = 0;
  t.feilBiter = [];
  t.status = "laer";
  renderKapitlerOmrade();
}

function svarLaer(idx) {
  const t = kapittelTilstand;
  if (t.valgt !== null) return;
  const bit = t.kapittelData.biter[t.biteIndex];
  t.valgt = idx;
  if (idx === bit.riktig) t.laerPoeng++;
  else t.feilBiter.push(bit);
  renderKapitlerOmrade();
}

function nesteBit() {
  const t = kapittelTilstand;
  if (t.biteIndex < t.kapittelData.biter.length - 1) {
    t.biteIndex++;
    t.valgt = null;
    t.status = "laer";
  } else {
    t.status = "bombeIntro";
  }
  renderKapitlerOmrade();
}

function startBombe() {
  const t = kapittelTilstand;
  t.bombePool = byggBombePool();
  t.bombeIndex = 0;
  t.bombePoeng = 0;
  t.bombeValgt = null;
  t.bombeTidIgjen = BOMBE_TID;
  t.status = "bombe";
  renderKapitlerOmrade();
  clearInterval(t.bombeTimerId);
  t.bombeTimerId = setInterval(() => {
    t.bombeTidIgjen -= 100;
    const klokke = document.querySelector(".bombe-klokke");
    const fyll = document.querySelector(".bombe-fyll");
    if (klokke) klokke.textContent = Math.max(0, Math.ceil(t.bombeTidIgjen / 1000)) + "s";
    if (fyll) fyll.style.width = Math.max(0, (t.bombeTidIgjen / BOMBE_TID) * 100) + "%";
    if (t.bombeTidIgjen <= 0) {
      clearInterval(t.bombeTimerId);
      t.status = "resultat";
      renderKapitlerOmrade();
    }
  }, 100);
}

function svarBombe(idx) {
  const t = kapittelTilstand;
  if (t.status !== "bombe" || t.bombeValgt !== null) return;
  const bit = t.bombePool[t.bombeIndex];
  t.bombeValgt = idx;
  if (idx === bit.riktig) t.bombePoeng++;
  renderKapitlerOmrade();
  setTimeout(() => {
    if (t.status !== "bombe") return;
    t.bombeIndex++;
    if (t.bombeIndex >= t.bombePool.length) t.bombePool = t.bombePool.concat(byggBombePool());
    t.bombeValgt = null;
    renderKapitlerOmrade();
  }, 500);
}

document.addEventListener("click", e => {
  const btn = e.target.closest("[data-h]");
  if (!btn) return;
  const h = btn.dataset.h;
  if (h === "apneKapittel") apneKapittel(btn.dataset.id);
  else if (h === "kapittelTilbake") kapittelTilbake();
  else if (h === "startLaering") startLaering();
  else if (h === "svarLaer") svarLaer(parseInt(btn.dataset.idx, 10));
  else if (h === "nesteBit") nesteBit();
  else if (h === "startBombe") startBombe();
  else if (h === "svarBombe") svarBombe(parseInt(btn.dataset.idx, 10));
});

function knyttKvizHendelser(seksjonId, data) {
  const wrap = document.getElementById(`quizwrap-${seksjonId}`);
  wrap.querySelectorAll(".alt-knapp").forEach(btn => {
    btn.addEventListener("click", () => {
      const t = kvizTilstand[seksjonId];
      if (t.valgt !== null) return;
      const idx = parseInt(btn.dataset.idx, 10);
      t.valgt = idx;
      const sp = t.sporsmalListe[t.i];
      if (idx === sp.riktig) t.riktigeSvar++;
      else t.feilListe.push(sp);
      wrap.innerHTML = renderKvizkort(seksjonId, data);
      knyttKvizHendelser(seksjonId, data);
    });
  });
  const nesteBtn = document.getElementById(`neste-${seksjonId}`);
  if (nesteBtn) {
    nesteBtn.addEventListener("click", () => {
      const t = kvizTilstand[seksjonId];
      if (t.i < t.sporsmalListe.length - 1) {
        t.i++;
        t.valgt = null;
      } else {
        t.ferdigVist = true;
      }
      wrap.innerHTML = renderKvizkort(seksjonId, data);
      knyttKvizHendelser(seksjonId, data);
    });
  }
  const provIgjenBtn = document.getElementById(`prov-igjen-${seksjonId}`);
  if (provIgjenBtn) {
    provIgjenBtn.addEventListener("click", () => {
      const t = kvizTilstand[seksjonId];
      kvizTilstand[seksjonId] = {
        sporsmalListe: t.feilListe,
        i: 0,
        valgt: null,
        riktigeSvar: 0,
        ferdigVist: false,
        feilListe: [],
      };
      wrap.innerHTML = renderKvizkort(seksjonId, data);
      knyttKvizHendelser(seksjonId, data);
    });
  }
}

function renderSporSeksjon(id, data) {
  kvizTilstand[id] = kvizTilstand[id] || {
    sporsmalListe: data[id].sporsmal,
    i: 0,
    valgt: null,
    riktigeSvar: 0,
    ferdigVist: false,
    feilListe: [],
  };
  return `
    ${renderOverskrift(id, data)}
    <div class="sammendrag"><p>${data[id].sammendrag}</p></div>
    <div id="quizwrap-${id}">${renderKvizkort(id, data)}</div>
  `;
}

function renderPerleDetalj(data) {
  const p = data.andelige_perler.perler[perleTilstand.valgt];
  return `
    <div class="perlekort">
      <blockquote>${p.sitat}</blockquote>
      <div class="del">
        <span class="del-tittel">Hva lærer dette oss om Jehova?</span>
        ${p.om_jehova}
      </div>
      <div class="del">
        <span class="del-tittel">Hvordan kan vi bruke dette?</span>
        ${p.bruk_i_livet}
      </div>
    </div>
  `;
}

function renderAndeligePerlerSeksjon(data) {
  const perler = data.andelige_perler.perler;
  const chips = perler.map((p, idx) => `
    <button class="vers-chip${idx === perleTilstand.valgt ? " valgt" : ""}" data-idx="${idx}">${p.vers}</button>
  `).join("");
  return `
    ${renderOverskrift("andelige_perler", data)}
    <p class="perle-intro">${data.andelige_perler.innledning}</p>
    <div class="vers-rad">${chips}</div>
    <div id="perle-detalj">${renderPerleDetalj(data)}</div>
  `;
}

function knyttPerleHendelser(data) {
  document.querySelectorAll(".vers-chip").forEach(chip => {
    chip.addEventListener("click", () => {
      perleTilstand.valgt = parseInt(chip.dataset.idx, 10);
      document.getElementById("seksjon-andelige_perler").innerHTML = renderAndeligePerlerSeksjon(data);
      knyttPerleHendelser(data);
    });
  });
}

function byttFane(nyId) {
  document.querySelectorAll(".fane").forEach(f =>
    f.classList.toggle("aktiv", f.dataset.seksjon === nyId));
  document.querySelectorAll(".seksjon").forEach(s =>
    s.classList.toggle("aktiv", s.id === "seksjon-" + nyId));
}

function lokalDatoStr(d) {
  const aar = d.getFullYear();
  const mnd = String(d.getMonth() + 1).padStart(2, "0");
  const dag = String(d.getDate()).padStart(2, "0");
  return `${aar}-${mnd}-${dag}`;
}

function finnDagensUkeId() {
  const naa = new Date();
  // Midtukemøtet er på tirsdager. Fra og med onsdag viser vi derfor
  // automatisk neste ukes program, ikke uken som nettopp er "ferdig".
  const isoUkedag = ((naa.getDay() + 6) % 7) + 1; // 1 = mandag ... 7 = søndag
  if (isoUkedag >= 3) naa.setDate(naa.getDate() + 7);

  const dato = lokalDatoStr(naa);
  const treff = ukeIndeks.find(u => u.start <= dato && dato <= u.slutt);
  return treff ? treff.id : ukeIndeks[0].id;
}

function renderArkivListe(gjeldendeId) {
  return ukeIndeks.map(u => `
    <button class="arkiv-rad${u.id === gjeldendeId ? " gjeldende" : ""}" data-id="${u.id}">
      <span>${u.dato}</span>
      ${u.id === gjeldendeId ? "<span class=\"arkiv-tag\">Nåværende</span>" : ""}
    </button>
  `).join("");
}

async function lastUke(id) {
  gjeldendeUkeId = id;
  const data = await fetch(`uker/${id}.json`).then(r => r.json());
  data.bibelkort = {
    sammendrag: bibelkortData.sammendrag,
    sporsmal: stokk(bibelkortData.sporsmal).slice(0, BIBELKORT_ANTALL),
  };
  const aktivFaneId = (document.querySelector(".fane.aktiv") || {}).dataset?.seksjon || "bibellesning";

  document.getElementById("dato").textContent = data.dato;
  document.getElementById("kildelenke").href = data.kilde;

  Object.keys(kvizTilstand).forEach(k => delete kvizTilstand[k]);
  perleTilstand.valgt = 0;
  clearInterval(spillTilstand.timerId);
  spillTilstand.status = "intro";
  clearInterval(kapittelTilstand.bombeTimerId);
  kapittelTilstand.status = "liste";

  document.getElementById("innhold").innerHTML = SEKSJONER.map(s => `
    <section class="seksjon${s.id === aktivFaneId ? " aktiv" : ""}" data-tema="${s.id}" id="seksjon-${s.id}"></section>
  `).join("");

  SEKSJONER.forEach(s => {
    const el = document.getElementById(`seksjon-${s.id}`);
    if (s.id === "andelige_perler") {
      el.innerHTML = renderAndeligePerlerSeksjon(data);
    } else if (s.id === "spill") {
      el.innerHTML = renderSpillSeksjon(data);
      renderSpillOmrade(data);
    } else if (s.id === "kapitler") {
      el.innerHTML = renderKapitlerSeksjon(data);
      renderKapitlerOmrade();
    } else {
      el.innerHTML = renderSporSeksjon(s.id, data);
      knyttKvizHendelser(s.id, data);
    }
  });
  knyttPerleHendelser(data);

  document.getElementById("arkiv-panel").innerHTML = renderArkivListe(id);
  knyttArkivHendelser();
  document.getElementById("arkiv-panel").classList.remove("apen");
}

function knyttArkivHendelser() {
  document.querySelectorAll(".arkiv-rad").forEach(btn => {
    btn.addEventListener("click", () => lastUke(btn.dataset.id));
  });
}

async function main() {
  ukeIndeks = await fetch("uker/indeks.json").then(r => r.json());
  bibelkortData = await fetch("bibelkort.json").then(r => r.json());
  kapittelIndeks = await fetch("kapitler/indeks.json").then(r => r.json());
  const startId = finnDagensUkeId();

  document.getElementById("faner").innerHTML = SEKSJONER.map((s, idx) => `
    <button class="fane${idx === 0 ? " aktiv" : ""}" data-seksjon="${s.id}">
      ${IKONER[s.id]}<span>${s.navn}</span>
    </button>
  `).join("");

  document.querySelectorAll(".fane").forEach(f => {
    f.addEventListener("click", () => byttFane(f.dataset.seksjon));
  });

  document.getElementById("arkiv-knapp").addEventListener("click", () => {
    document.getElementById("arkiv-panel").classList.toggle("apen");
  });

  await lastUke(startId);

  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("sw.js").catch(() => {});
  }
}

main();
