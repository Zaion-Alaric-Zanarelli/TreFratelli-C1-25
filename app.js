const dict = {
  it: {
    nav_storia: "Storia",
    nav_cantina: "Cantina",
    nav_vini: "Vini",
    nav_ristorante: "Ristorante",
    nav_galleria: "Galleria",
    nav_dove: "Dove Siamo",
    nav_contatti: "Contatti",
    hero_title: "Cantina e Ristorante Tre Fratelli",
    hero_sub: "Quattro generazioni di famiglia, tra i muretti a secco della Valtellina e i profumi della cucina di montagna.",
    storia_title: "La nostra storia",
    storia_text1: "La Tre Fratelli affonda le sue radici nel 1925, quando Giovanni decise di coltivare la Chiavennasca — il Nebbiolo di montagna — sui terrazzamenti che guardano Tirano.",
    storia_text2: "Tra crisi economiche, guerra e rinascita del turismo alpino, la famiglia ha custodito una tradizione semplice: vino, ospitalità, lavoro di pietra e pazienza.",
    storia_text3: "Oggi, la quarta generazione porta avanti la casa con la stessa idea: buon vino con buona cucina, in un luogo che profuma di legno, pane e valle.",
    cantina_title: "La cantina",
    cantina_text: "Piccola, essenziale, scavata nella pietra. Fermentazioni controllate, affinamento in botti di rovere e riposo lungo: la montagna chiede tempo e noi lo rispettiamo.",
    vini_title: "I nostri vini",
    vini_classic: "Linea Classica",
    vini_classic_item1: "Valpolicella Tre Fratelli 2019 — Rosso agile e conviviale (edizione ispirata, produzione limitata).",
    vini_classic_item2: "Tre Chardonnay 2022 — Bianco fresco, mela e fiori di montagna.",
    vini_classic_item3: "Merlot Tre Fratelli 2020 — Frutto maturo, note di cacao, tannino morbido.",
    vini_note: "*Etichette storiche della casa, nate come esercizi di stile per la ristorazione.",
    vini_montagna_title: "Montagna & Tradizione",
    vini_montagna_text: "Produzioni artigianali ispirate al carattere valtellinese: uve locali, vendemmia manuale, affinamenti lenti. Ogni annata racconta il clima e il lavoro tra i terrazzamenti.",
    ristorante_title: "Il ristorante",
    ristorante_text1: "La cucina è semplice e di valle: pizzoccheri, salumi e formaggi locali, selvaggina quando la stagione lo permette, dolci della nonna.",
    ristorante_menu: "Menu base (indicativo)",
    ristorante_item1: "Piatto del giorno (primo o secondo) — € 12",
    ristorante_item2: "Tagliere valtellinese — € 10",
    ristorante_item3: "Pizzoccheri — € 11",
    ristorante_item4: "Torta rustica — € 5",
    galleria_title: "Galleria",
    dove_title: "Dove siamo",
    dove_address: "Via S. Stefano, 55 — 28087 Tirano (SO), Italia",
    dove_note: "A due passi dal centro storico e dai terrazzamenti. Parcheggio limitato in loco.",
    contatti_title: "Contatti",
    contatti_email: "Email: info@trefratelli.example · Telefono: +39 000 000 000",
    contatti_hours: "Orari indicativi: Gio–Lun 12:00–15:00 / 19:00–22:00 · Mar–Mer chiuso.",
    footer: "© 2025 Cantina e Ristorante Tre Fratelli · Sito dimostrativo non commerciale."
  },

  en: {
    nav_storia: "History",
    nav_cantina: "Cellar",
    nav_vini: "Wines",
    nav_ristorante: "Restaurant",
    nav_galleria: "Gallery",
    nav_dove: "Where We Are",
    nav_contatti: "Contacts",
    hero_title: "Tre Fratelli Winery & Restaurant",
    hero_sub: "Four generations of family, among Valtellina’s stone terraces and the aromas of mountain cuisine.",
    storia_title: "Our Story",
    storia_text1: "Tre Fratelli traces its roots back to 1925, when Giovanni decided to grow Chiavennasca — the mountain Nebbiolo — on the terraces overlooking Tirano.",
    storia_text2: "Through economic hardship, war, and the rebirth of Alpine tourism, the family has kept a simple tradition: wine, hospitality, stonework and patience.",
    storia_text3: "Today, the fourth generation carries on with the same idea: good wine and good food, in a place scented with wood, bread and valley air.",
    cantina_title: "The Cellar",
    cantina_text: "Small, essential, carved into the rock. Controlled fermentations, oak barrel ageing and long resting — the mountain asks for time, and we respect it.",
    vini_title: "Our Wines",
    vini_classic: "Classic Line",
    vini_classic_item1: "Valpolicella Tre Fratelli 2019 — Lively, convivial red (inspired edition, limited production).",
    vini_classic_item2: "Tre Chardonnay 2022 — Fresh white, apple and mountain flowers.",
    vini_classic_item3: "Merlot Tre Fratelli 2020 — Ripe fruit, cocoa notes, soft tannins.",
    vini_note: "*Historic house labels, created as style exercises for the restaurant.",
    vini_montagna_title: "Mountain & Tradition",
    vini_montagna_text: "Handcrafted productions inspired by Valtellina’s character: local grapes, manual harvest, slow ageing. Each vintage tells of climate and terrace work.",
    ristorante_title: "The Restaurant",
    ristorante_text1: "Simple mountain cuisine: pizzoccheri, local cured meats and cheeses, game in season, and grandma’s desserts.",
    ristorante_menu: "Basic menu (indicative)",
    ristorante_item1: "Dish of the day (first or main) — € 12",
    ristorante_item2: "Valtellina board — € 10",
    ristorante_item3: "Pizzoccheri — € 11",
    ristorante_item4: "Rustic tart — € 5",
    galleria_title: "Gallery",
    dove_title: "Where We Are",
    dove_address: "Via S. Stefano, 55 — 28087 Tirano (SO), Italy",
    dove_note: "A short walk from the historic centre and the terraces. Limited parking on site.",
    contatti_title: "Contacts",
    contatti_email: "Email: info@trefratelli.example · Phone: +39 000 000 000",
    contatti_hours: "Indicative hours: Thu–Mon 12:00–15:00 / 19:00–22:00 · Tue–Wed closed.",
    footer: "© 2025 Tre Fratelli Winery & Restaurant · Non-commercial demo site."
  }
};


function applyLang(lang){
  const t = dict[lang] || dict.it;
  document.documentElement.lang = lang === 'en' ? 'en' : 'it';
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (!key) return;
    if (el.tagName === "TEXTAREA" || el.tagName === "INPUT" || el.tagName === "CODE" || el.tagName === "PRE"){
      el.textContent = t[key] || el.textContent;
    } else {
      el.textContent = t[key] || el.textContent;
    }
  });
  // Code blocks
  document.getElementById("nav_storia").textContent = t.nav_storia;
  document.getElementById("nav_cantina").textContent = t.nav_cantina;
  document.getElementById("nav_vini").textContent = t.nav_vini;
  document.getElementById("nav_ristorante").textContent = t.nav_ristorante;
  document.getElementById("nav_galleria").textContent = t.nav_galleria;
  document.getElementById("nav_dove").textContent = t.nav_dove;
  document.getElementById("nav_contatti").textContent = t.nav_contatti;
  document.getElementById("hero_title").textContent = t.hero_title;
  document.getElementById("hero_sub").textContent = t.hero_sub;
  document.getElementById("storia_title").textContent = t.storia_title;
  document.getElementById("storia_text1").textContent = t.storia_text1;
  document.getElementById("storia_text2").textContent = t.storia_text2;
  document.getElementById("storia_text3").textContent = t.storia_text3;
  document.getElementById("cantina_title").textContent = t.cantina_title;
  document.getElementById("cantina_text").textContent = t.cantina_text;
  document.getElementById("vini_title").textContent = t.vini_title;
  document.getElementById("vini_classic").textContent = t.vini_classic;
  document.getElementById("vini_note").textContent = t.vini_note;
  document.getElementById("vini_montagna_title").textContent = t.vini_montagna_title;
  document.getElementById("vini_montagna_text").textContent = t.vini_montagna_text;
  document.getElementById("ristorante_title").textContent = t.ristorante_title;
  document.getElementById("ristorante_text1").textContent = t.ristorante_text1;
  document.getElementById("ristorante_menu").textContent = t.ristorante_menu;
  document.getElementById("vini_classic_item1").textContent = t.vini_classic_item1;
  document.getElementById("vini_classic_item2").textContent = t.vini_classic_item2;
  document.getElementById("vini_classic_item3").textContent = t.vini_classic_item3;
  document.getElementById("ristorante_item1").textContent = t.ristorante_item1;
  document.getElementById("ristorante_item2").textContent = t.ristorante_item2;
  document.getElementById("ristorante_item3").textContent = t.ristorante_item3;
  document.getElementById("ristorante_item4").textContent = t.ristorante_item4;
  document.getElementById("galleria_title").textContent = t.galleria_title;
  document.getElementById("dove_title").textContent = t.dove_title;
  document.getElementById("dove_address").textContent = t.dove_address;
  document.getElementById("dove_note").textContent = t.dove_note;
  document.getElementById("contatti_title").textContent = t.contatti_title;
  document.getElementById("contatti_email").textContent = t.contatti_email;
  document.getElementById("contatti_hours").textContent = t.contatti_hours;
  document.getElementById("footer").textContent = t.footer;
}




document.getElementById("btn-it").addEventListener("click", () => applyLang("it"));
document.getElementById("btn-en").addEventListener("click", () => applyLang("en"));

applyLang(localStorage.getItem("lang") === "en" ? "en" : "it");