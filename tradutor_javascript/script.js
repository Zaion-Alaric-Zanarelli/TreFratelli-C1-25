const i18n = {
  it: {
    siteTitle: "Cantina e Ristorante Tre Fratelli — Tirano, Valtellina",
    headline: "Cantina e Ristorante Tre Fratelli",
    subhead: "Quattro generazioni di famiglia, tra i muretti a secco della Valtellina e i profumi della cucina di montagna.",
    nav: ["Storia", "Cantina", "Vini", "Ristorante", "Galleria", "Dove Siamo", "Contatti"],
    storiaTitle: "La nostra storia",
    storiaText: "La Tre Fratelli affonda le sue radici nel 1925, quando Giovanni decise di coltivare la Chiavennasca — il Nebbiolo di montagna — sui terrazzamenti che guardano Tirano. Tra crisi economiche, guerra e rinascita del turismo alpino, la famiglia ha custodito una tradizione semplice: vino, ospitalità, lavoro di pietra e pazienza. Negli anni difficili, le botti furono protette in una piccola 'cantina segreta' scavata nella roccia; negli anni della ripresa, i nipoti hanno unito sapere contadino e studio enologico, senza mai abbandonare i muretti a secco che tengono il monte. Oggi, la quarta generazione porta avanti la casa con la stessa idea: buon vino con buona cucina, in un luogo che profuma di legno, pane e valle.",
    cantinaTitle: "La cantina",
    cantinaText: "Piccola, essenziale, scavata nella pietra. Fermentazioni controllate, affinamento in botti di rovere e riposo lungo: la montagna chiede tempo e noi lo rispettiamo.",
    viniTitle: "I nostri vini",
    lineaClassicaTitle: "Linea Classica",
    lineaClassica1: "Valpolicella Tre Fratelli 2019 — Rosso agile e conviviale (edizione ispirata, produzione limitata).",
    lineaClassica2: "Tre Chardonnay 2022 — Bianco fresco, mela e fiori di montagna.",
    lineaClassica3: "Merlot Tre Fratelli 2020 — Frutto maturo, note di cacao, tannino morbido.",
    lineaClassicaText: "*Etichette storiche della casa, nate come esercizi di stile per la ristorazione.",
    tradizioneTitle: "Montagna & Tradizione",
    tradizioneText: "Produzioni artigianali ispirate al carattere valtellinese: uve locali, vendemmia manuale, affinamenti lenti. Ogni annata racconta il clima e il lavoro tra i terrazzamenti.",
    ristoranteTitle: "Il ristorante",
    ristoranteText: "La cucina è semplice e di valle: pizzoccheri, salumi e formaggi locali, selvaggina quando la stagione lo permette, dolci della nonna.",
    ristoranteSubtitle: "Menu base (indicativo):",
    ristoranteList: [
      "Piatto del giorno (primo o secondo) — € 12",
      "Tagliere valtellinese — € 10",
      "Pizzoccheri — € 11",
      "Torta rustica — € 5"
    ],
    galleriaTitle: "Galleria",
    doveTitle: "Dove siamo",
    doveText: "Indirizzo: Via S. Stefano, 55 — Tirano (SO), Italia.",
    doveSubtext: "A due passi dal centro storico e dai terrazzamenti. Parcheggio limitato in loco.",
    contattiTitle: "Contatti",
    contattiText: "Email: info@trefratelli.example · Telefono: +39 000 000 000",
    contattiSubtext: "Orari indicativi: Gio–Lun 12:00–15:00 / 19:00–22:00 · Mar–Mer chiuso",
    footer: "© 2025 Cantina e Ristorante Tre Fratelli · Sito dimostrativo non commerciale."
  },

  en: {
    siteTitle: "Tre Fratelli Winery & Restaurant — Tirano, Valtellina",
    headline: "Tre Fratelli Winery & Restaurant",
    subhead: "Four generations between the stone terraces of Valtellina and the aromas of mountain cooking.",
    nav: ["History", "Cellar", "Wines", "Restaurant", "Gallery", "Where We Are", "Contacts"],
    storiaTitle: "Our history",
    storiaText: "Tre Fratelli traces its roots back to 1925, when Giovanni decided to cultivate Chiavennasca — the mountain Nebbiolo — on the terraced slopes overlooking Tirano. Through economic crises, war, and the resurgence of Alpine tourism, the family has preserved a simple tradition: wine, hospitality, stonework, and patience. During difficult years, the barrels were kept safe in a small 'secret cellar' carved into the rock; in the years of recovery, the grandchildren combined peasant wisdom with oenological study, never abandoning the dry-stone walls that hold the mountain. Today, the fourth generation continues the legacy with the same vision: good wine with good food, in a place that smells of wood, bread, and the valley.",
    cantinaTitle: "The cellar",
    cantinaText: "Small, essential, carved into stone. Controlled fermentations, ageing in oak barrels, and long resting: the mountain demands time, and we respect it.",
    viniTitle: "Our wines",
    lineaClassicaTitle: "Classic Line",
    lineaClassica1: "Valpolicella Tre Fratelli 2019 — Lively and convivial red (inspired edition, limited production).",
    lineaClassica2: "Tre Chardonnay 2022 — Fresh white, apple and mountain flowers.",
    lineaClassica3: "Merlot Tre Fratelli 2020 — Ripe fruit, cocoa notes, soft tannins.",
    lineaClassicaText: "*Historic labels of the house, created as style exercises for the restaurant world.",
    tradizioneTitle: "Mountain & Tradition",
    tradizioneText: "Handcrafted wines from local grapes with natural fermentation.",
    ristoranteTitle: "The restaurant",
    ristoranteText: "The cuisine is simple and from the valley: pizzoccheri, local cured meats and cheeses, game when in season, and grandma's desserts.",
    ristoranteSubtitle: "Base menu (indicative):",
    ristoranteList: [
      "Dish of the day (first or main course) — € 12",
      "Valtellina platter — € 10",
      "Pizzoccheri — € 11",
      "Rustic cake — € 5"
    ],
    galleriaTitle: "Gallery",
    doveTitle: "Where we are",
    doveText: "Address: Via S. Stefano, 55 — Tirano (SO), Italy.",
    doveSubtext: "Just a short walk from the historic centre and the terraces. Limited parking on site.",
    contattiTitle: "Contacts",
    contattiText: "Email: info@trefratelli.example · Phone: +39 000 000 000",
    contattiSubtext: "Indicative hours: Thu–Mon 12:00–15:00 / 19:00–22:00 · Tue–Wed closed.",
    footer: "© 2025 Tre Fratelli Winery & Restaurant · Non-commercial demo site."
  }
};

// Funzione per applicare la lingua selezionata
function applyLang(lang) {
  const t = i18n[lang] || i18n.it;
  document.documentElement.lang = lang;

  // Navigazione
  document.getElementById('nav-storia').textContent = t.nav[0];
  document.getElementById('nav-cantina').textContent = t.nav[1];
  document.getElementById('nav-vini').textContent = t.nav[2];
  document.getElementById('nav-ristorante').textContent = t.nav[3];
  document.getElementById('nav-galleria').textContent = t.nav[4];
  document.getElementById('nav-dove').textContent = t.nav[5];
  document.getElementById('nav-contatti').textContent = t.nav[6];

  // Titoli e testi principali
  document.title = t.siteTitle;
  document.getElementById('site-title').textContent = t.siteTitle;
  headline.textContent = t.headline;
  subhead.textContent = t.subhead;
  storiaTitle.textContent = t.storiaTitle;
  storiaText.textContent = t.storiaText;
  cantinaTitle.textContent = t.cantinaTitle;
  cantinaText.textContent = t.cantinaText;
  viniTitle.textContent = t.viniTitle;
  lineaClassicaTitle.textContent = t.lineaClassicaTitle;
  lineaClassica1.textContent = t.lineaClassica1;
  lineaClassica2.textContent = t.lineaClassica2;
  lineaClassica3.textContent = t.lineaClassica3;
  lineaClassicaText.textContent = t.lineaClassicaText;
  tradizioneTitle.textContent = t.tradizioneTitle;
  tradizioneText.textContent = t.tradizioneText;
  ristoranteTitle.textContent = t.ristoranteTitle;
  ristoranteText.textContent = t.ristoranteText;
  ristoranteSubtitle.textContent = t.ristoranteSubtitle;

  // Lista menu ristorante
  document.getElementById('ristorante-list-0').textContent = t.ristoranteList[0];
  document.getElementById('ristorante-list-1').textContent = t.ristoranteList[1];
  document.getElementById('ristorante-list-2').textContent = t.ristoranteList[2];
  document.getElementById('ristorante-list-3').textContent = t.ristoranteList[3];

  // Altri testi
  galleriaTitle.textContent = t.galleriaTitle;
  doveTitle.textContent = t.doveTitle;
  doveText.textContent = t.doveText;
  doveSubtext.textContent = t.doveSubtext;
  contattiTitle.textContent = t.contattiTitle;
  contattiText.textContent = t.contattiText;
  contattiSubtext.textContent = t.contattiSubtext;
  footerText.textContent = t.footer;

  // Pulsanti lingua
  [btn_en, btn_it].forEach(btn => btn.classList.toggle('active', btn.id === 'btn-' + lang));

  // Memorizza preferenza lingua
  localStorage.setItem('lang', lang);
}

// Riferimenti agli elementi
const headline = document.getElementById('headline');
const subhead = document.getElementById('subhead');
const storiaTitle = document.getElementById('storia-title');
const storiaText = document.getElementById('storia-text');
const cantinaTitle = document.getElementById('cantina-title');
const cantinaText = document.getElementById('cantina-text');
const viniTitle = document.getElementById('vini-title');
const lineaClassicaTitle = document.getElementById('linea-classica-title');
const lineaClassica1 = document.getElementById('linea-classica1');
const lineaClassica2 = document.getElementById('linea-classica2');
const lineaClassica3 = document.getElementById('linea-classica3');
const lineaClassicaText = document.getElementById('linea-classica-text');
const tradizioneTitle = document.getElementById('tradizione-title');
const tradizioneText = document.getElementById('tradizione-text');
const ristoranteTitle = document.getElementById('ristorante-title');
const ristoranteText = document.getElementById('ristorante-text');
const ristoranteSubtitle = document.getElementById('ristorante-subtitle');
const galleriaTitle = document.getElementById('galleria-title');
const doveTitle = document.getElementById('dove-title');
const doveText = document.getElementById('dove-text');
const doveSubtext = document.getElementById('dove-subtext');
const contattiTitle = document.getElementById('contatti-title');
const contattiText = document.getElementById('contatti-text');
const contattiSubtext = document.getElementById('contatti-subtext');
const footerText = document.getElementById('footer-text');
const btn_en = document.getElementById('btn-en');
const btn_it = document.getElementById('btn-it');

// Eventi pulsanti lingua
btn_en.addEventListener('click', () => applyLang('en'));
btn_it.addEventListener('click', () => applyLang('it'));

// Imposta lingua salvata o italiano di default
const saved = localStorage.getItem('lang');
applyLang(saved || 'it');
