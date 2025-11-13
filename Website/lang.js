
// lang.js - simple i18n for Tre Fratelli (it / en)
const TRANSLATIONS = {
  it: {
    navHome: "Home",
    navStoria: "Storia",
    navCantina: "Cantina",
    navVini: "Vini",
    navRistorante: "Ristorante",
    navGalleria: "Galleria",
    navContatti: "Contatti",
    heroTitle: "Cantina e Ristorante Tre Fratelli",
    heroIntro: "Quattro generazioni di famiglia, tra i muretti a secco della Valtellina e i profumi della cucina di montagna.",
    storiaTitle: "La nostra storia",
    storiaText:"<p>La <strong>Tre Fratelli</strong> affonda le sue radici nel 1925, quando Giovanni decise di coltivare la <em>Chiavennasca</em> — il Nebbiolo di montagna — sui terrazzamenti che guardano Tirano. Tra crisi economiche, guerra e rinascita del turismo alpino, la famiglia ha custodito una tradizione semplice: <em>vino, ospitalità, lavoro di pietra e pazienza</em>.<br><br>Negli anni difficili, le botti furono protette in una piccola “cantina segreta” scavata nella roccia; negli anni della ripresa, i nipoti hanno unito sapere contadino e studio enologico, senza mai abbandonare i muretti a secco che tengono il monte.<br><br>Oggi, la quarta generazione porta avanti la casa con la stessa idea: buon vino con buona cucina, in un luogo che profuma di legno, pane e valle.<p>",
    storiaLegend:"Botti in legno sotto volte in mattoni nella cantina",
    cantinaTitle: "La cantina",
    cantinaText: "Piccola, essenziale, scavata nella pietra. Fermentazioni controllate, affinamento in botti di rovere e riposo lungo: la montagna chiede tempo e noi lo rispettiamo.",
    viniTitle: "I nostri vini",
    viniSub:"Montagna & Tradizione",
    viniIntro:"Produzioni artigianali ispirate al carattere valtellinese: uve locali, vendemmia manuale, affinamenti lenti. Ogni annata racconta il clima e il lavoro tra i terrazzamenti.",
    viniMenutitle:"Linea Classica",
    viniListTitle1: "Valpolicella Tre Fratelli 2019",
    viniListText1: "Rosso agile e conviviale — edizione ispirata, produzione limitata.",
    viniListTitle2: "Tre Chardonnay 2022",
    viniListText2: "Bianco fresco, mela e fiori di montagna.",
    viniListTitle3: "Merlot Tre Fratelli 2020",
    viniListText3: "Frutto maturo, note di cacao, tannino morbido.",
    viniObs: "*Etichette storiche della casa, nate come esercizi di stile per la ristorazione.",
    ristoranteTitle: "Il ristorante",
    ristoranteIntro: "La cucina è semplice e di valle: pizzoccheri, salumi e formaggi locali, selvaggina quando la stagione lo permette, dolci della nonna.",
    ristoranteMenutitle:"Menu base (indicativo):",
    menuItem1: "Piatto del giorno",
    menuObs: "(primo o secondo)",
    menuItem2: "Tagliere valtellinese",
    menuItem3: "Pizzoccheri",
    menuItem4: "Torta rustica",
    galleryTitle: "Galleria",
    footerLinks: "Link utili",
    navHomeu: "Home",
    navStoriau: "Storia",
    navGalleriau: "Galleria",
    footerContato: "Contatti",
    footerDove: "Dove siamo",
    endeText: "A due passi dal centro storico e dai terrazzamenti. Parcheggio limitato in loco.",
    footerHora: "🕑 Orari indicativi: Gio–Lun 12:00–15:00 / 19:00–22:00 · Mar–Mer chiuso.",
    footerText: "© 2025 Tre Fratelli — Tirano. Tutti i diritti riservati • Maria Luisa & Nathan Gabriel"
  },
  en: {
    navHome: "Home",
    navStoria: "History",
    navCantina: "Cellar",
    navVini: "Wines",
    navRistorante: "Restaurant",
    navGalleria: "Gallery",
    navContatti: "Contacts",
    heroTitle: "Tre Fratelli Winery & Restaurant",
    heroIntro: "Four generations of family, among the dry-stone walls of Valtellina and the scents of mountain cuisine.",
    storiaTitle: "Our history",
    storiaText:"<p>The <strong>Tre Fratelli</strong> roots go back to 1925, when Giovanni began cultivating <em>Chiavennasca</em> — the mountain Nebbiolo — on the terraces overlooking Tirano. Through hardship, war and the revival of alpine tourism, the family preserved a simple tradition: wine, hospitality, hard stonework and patience.<br><br>In the difficult years, the barrels were safeguarded in a small “secret cellar” carved into the rock; in the years of recovery, the grandchildren combined traditional farming knowledge with oenological study, never abandoning the dry-stone walls that hold up the mountain.<br><br>Today, the fourth generation carries the house forward with the same idea: good wine with good food, in a place that smells of wood, bread, and valley.</p>",
    storiaLegend:"Wooden barrels beneath brick vaults in the cellar.",
    cantinaTitle: "The cellar",
    cantinaText: "Small, essential, carved into the rock. Controlled fermentations, oak aging and long rest: the mountain asks time and we respect it.",
    viniTitle: "Our wines",
    viniSub:"Mountain & Tradition",
    viniIntro:"Artisan productions inspired by the Valtellina character: local grapes, hand harvesting, slow ageing. Each vintage tells the story of the climate and the work among the terraced vineyards.",
    viniMenutitle:"Classic Range",
    viniListTitle1: "Valpolicella Tre Fratelli 2019",
    viniListText1: "A lively, convivial red — limited edition.",
    viniListTitle2: "Tre Chardonnay 2022",
    viniListText2: "Fresh white with apple and mountain flowers.",
    viniListTitle3: "Merlot Tre Fratelli 2020",
    viniListText3: "Ripe fruit, cocoa notes, soft tannin.",
    viniObs: "*House labels born as style exercises for the restaurant.",
    ristoranteTitle: "The restaurant",
    ristoranteIntro: "The cuisine is simple and valley-based: pizzoccheri, local cured meats and cheeses, game when in season, grandmother's desserts.",
    ristoranteMenutitle:"Sample menu (indicative):",
    menuItem1: "Dish of the day",
    menuObs: "(starter or main)",
    menuItem2: "Valtellina board",
    menuItem3: "Pizzoccheri",
    menuItem4: "Rustic cake",
    galleryTitle: "Gallery",
    footerLinks:"Useful links",
    navHomeu: "Home",
    navStoriau: "History",
    navGalleriau: "Gallery",
    footerContato: "Contact",
    footerDove: "Where to find us",
    endeText:"Just a short walk from the historic centre and the terraced vineyards. Limited parking on site.",
    footerHora:"🕑 Approximate opening hours: Thu–Mon 12:00–15:00 / 19:00–22:00 · Tue–Wed closed.",
    footerText: "© 2025 Tre Fratelli — Tirano. All rights reserved • Maria Luisa & Nathan Gabriel"
  }
};

function applyTranslations(lang){
  const t = TRANSLATIONS[lang] || TRANSLATIONS.it;
  document.documentElement.lang = (lang === 'en') ? 'en' : 'it';
  // mapA DE ids PARA "translation keys"
  const map = {
    "nav-home":"navHome","nav-storia":"navStoria","nav-cantina":"navCantina","nav-vini":"navVini","nav-ristorante":"navRistorante","nav-galleria":"navGalleria","nav-contatti":"navContatti",
    "hero-title":"heroTitle","hero-intro":"heroIntro",
    "storia-title":"storiaTitle","storia-text":"storiaText","storia-legend":"storiaLegend",
    "cantina-title":"cantinaTitle","cantina-text":"cantinaText",
    "vini-title":"viniTitle", "vini-sub":"viniSub","vini-intro":"viniIntro","vini-menutitle":"viniMenutitle", "vini-1-title":"viniListTitle1","vini-1-text":"viniListText1",
    "vini-2-title":"viniListTitle2","vini-2-text":"viniListText2","vini-3-title":"viniListTitle3","vini-3-text":"viniListText3",
    "vini-obs":"viniObs",
    "ristorante-title":"ristoranteTitle","ristorante-intro":"ristoranteIntro","ristorante-menutitle":"ristoranteMenutitle","menu-title":"menuSampleTitle",
    "menu-item-1":"menuItem1","menu-obs":"menuObs", "menu-item-2":"menuItem2","menu-item-3":"menuItem3","menu-item-4":"menuItem4",
    "gallery-title":"galleryTitle",
    "footer-links":"footerLinks",
    "nav-homeu":"navHomeu","nav-storiau":"navStoriau","nav-galleriau":"navGalleriau",
    "footer-dove":"footerDove","ende-text":"endeText",
    "footer-contato":"footerContato","footer-hora":"footerHora","footer-text":"footerText"
  };
  Object.keys(map).forEach(id=>{
    const el=document.getElementById(id);
    if(!el) return;
    const key=map[id];
    // allow HTML in some elements (e.g., storia-text)
    if(id.endsWith("-text") || id==="storia-text"){
      el.innerHTML = t[key];
    } else {
      el.textContent = t[key];
    }
  });
  // BOTOES DO LANG (PARA TROCA DE IDIOMA)
  const btnIt = document.querySelector('[data-lang="it"]');
  const btnEn = document.querySelector('[data-lang="en"]');
  if(btnIt) btnIt.classList.toggle('active', lang==='it');
  if(btnEn) btnEn.classList.toggle('active', lang==='en');
  localStorage.setItem('site_lang', lang);
}

// iniCIALIZA
document.addEventListener('DOMContentLoaded',()=>{
  const saved = localStorage.getItem('site_lang') || 'it';
  applyTranslations(saved);
  document.querySelectorAll('[data-lang]').forEach(btn=>{
    btn.addEventListener('click', ()=> applyTranslations(btn.getAttribute('data-lang')));
  });
});



/*GALERIA JS---*/

const images = document.querySelectorAll('.gallery img');
const modal = document.getElementById('modal');
const modalImage = document.getElementById('modalImage');
let currentIndex = 0;

images.forEach((img, index) => {
  img.addEventListener('click', () => {
    currentIndex = index;
    openModal(img.src);
  });
});

function openModal(src) {
  modal.style.display = 'flex';
  modalImage.src = src;
}

function closeModal() {
  modal.style.display = 'none';
}

function changeImage(direction) {
  currentIndex = (currentIndex + direction + images.length) % images.length;
  modalImage.src = images[currentIndex].src;
}

modal.addEventListener('click', (e) => {
  if (e.target === modal) closeModal();
});

document.addEventListener('keydown', (e) => {
  if (modal.style.display === 'flex') {
    if (e.key === 'ArrowRight') changeImage(1);
    if (e.key === 'ArrowLeft') changeImage(-1);
    if (e.key === 'Escape') closeModal();
  }
});
