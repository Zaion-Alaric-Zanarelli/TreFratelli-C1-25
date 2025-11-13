// ...existing code...
// New, robust translation loader

document.addEventListener("DOMContentLoaded", () => {
const translations = {
  "it": {
    nav_storia: "Storia",
    nav_cantina: "Cantina",
    nav_vini: "Vini",
    nav_ristorante: "Ristorante",
    nav_galleria: "Galleria",
    nav_dove_siamo: "Dove Siamo",
    nav_contatti: "Contatti",
    title: "Cantina e Ristorante Tre Fratelli",
    subtitle: "Quattro generazioni di famiglia, tra i muretti a secco della Valtellina e i profumi della cucina di montagna.",
    storia_title: "La nostra storia",
    storia_p1: "La Tre Fratelli affonda le sue radici nel 1925, quando Giovanni decise di coltivare la Chiavennasca — il Nebbiolo di montagna — sui terrazzamenti che guardano Tirano. Tra crisi economiche, guerra e rinascita del turismo alpino, la famiglia ha custodito una tradizione semplice: vino, ospitalità, lavoro di pietra e pazienza.",
    storia_p2: "Negli anni difficili, le botti furono protette in una piccola cantina scavata nella roccia; negli anni della ripresa, i nipoti hanno unito sapere contadino e studio enologico, senza mai abbandonare i muretti a secco che tengono il monte.",
    storia_p3: "Oggi, la quarta generazione porta avanti la casa con la stessa idea: buon vino con buona cucina, in un luogo che profuma di legno, pane e valle.",
    cantina_title: "La cantina",
    cantina_desc: "Piccola, essenziale, scavata nella pietra. Fermentazioni controllate, affinamento in botti di rovere e riposo lungo: la montagna chiede tempo e noi lo rispettiamo.",
    vini_title: "I nostri vini",
    vini_classica_title: "Linea Classica",
    vini_classica_1: "<strong>Valpolicella Tre Fratelli 2019</strong> — Rosso agile e conviviale (edizione ispirata, produzione limitata).",
    vini_classica_2: "<strong>Tre Chardonnay 2022</strong> — Bianco fresco, mela e fiori di montagna.",
    vini_classica_3: "<strong>Merlot Tre Fratelli 2020</strong> — Frutto maturo, note di cacao, tannino morbido.",
    vini_classica_note: "*Etichette storiche della casa, nate come esercizi di stile per la ristorazione.",
    vini_tradizione_title: "Montagna & Tradizione",
    vini_tradizione_desc: "Produzioni artigianali ispirate al carattere valtellinese: uve locali, vendemmia manuale, affinamenti lenti. Ogni annata racconta il clima e il lavoro tra i terrazzamenti.",
    ristorante_title: "Il ristorante",
    ristorante_desc: "La cucina è semplice e di valle: pizzoccheri, salumi e formaggi locali, selvaggina quando la stagione lo permette, dolci della nonna.",
    ristorante_menu: "<em>Menu base (indicativo)</em>:",
    ristorante_menu_1: "Piatto del giorno (primo o secondo) — € 12",
    ristorante_menu_2: "Tagliere valtellinese — € 10",
    ristorante_menu_3: "Pizzoccheri — € 11",
    ristorante_menu_4: "Torta rustica — € 5",
    galleria_title: "Galleria",
    dove_siamo_title: "Dove siamo",
    dove_siamo_address: "<strong>Indirizzo:</strong> Via S. Stefano, 55 — 28087 Tirano (SO), Italia",
    dove_siamo_note: "A due passi dal centro storico e dai terrazzamenti. Parcheggio limitato in loco.",
    contatti_title: "Contatti",
    contatti_info: "Email: <a href='mailto:info@trefratelli.example'>info@trefratelli.example</a> · Telefono: +39 000 000 000",
    contatti_orari: "Orari indicativi: Gio–Lun 12:00–15:00 / 19:00–22:00 · Mar–Mer chiuso.",
    footer: "© 2025 Cantina e Ristorante Tre Fratelli · Sito dimostrativo non commerciale."
  },

  "en-gb": {
    nav_storia: "History",
    nav_cantina: "Cellar",
    nav_vini: "Wines",
    nav_ristorante: "Restaurant",
    nav_galleria: "Gallery",
    nav_dove_siamo: "Where We Are",
    nav_contatti: "Contacts",
    title: "Tre Fratelli Winery and Restaurant",
    subtitle: "Four generations of the family, among Valtellina's dry stone walls and the scents of mountain cuisine.",
    storia_title: "Our story",
    storia_p1: "Tre Fratelli traces its roots back to 1925 when Giovanni decided to grow the local Nebbiolo on terraces overlooking Tirano.",
    storia_p2: "Through hard times the barrels were hidden in a small cellar carved into the rock; later generations combined farming know-how with enology.",
    storia_p3: "Today the fourth generation runs the house with the same idea: great wine and good food.",
    cantina_title: "The Cellar",
    cantina_desc: "Small, essential, carved into the stone. Controlled fermentations and ageing in oak barrels.",
    vini_title: "Our wines",
    vini_classica_title: "Classic Line",
    vini_classica_1: "<strong>Valpolicella Tre Fratelli 2019</strong> — A lively red, convivial and limited production.",
    vini_classica_2: "<strong>Tre Chardonnay 2022</strong> — Fresh white, apple and mountain flowers.",
    vini_classica_3: "<strong>Merlot Tre Fratelli 2020</strong> — Ripe fruit, cocoa notes, soft tannins.",
    vini_classica_note: "*House labels born as stylistic exercises for the restaurant.",
    vini_tradizione_title: "Mountain & Tradition",
    vini_tradizione_desc: "Hand-harvested local grapes and slow ageing — each vintage tells the story of the terraces.",
    ristorante_title: "The Restaurant",
    ristorante_desc: "Simple valley cuisine: pizzoccheri, local cured meats and cheeses, seasonal game, and grandma's desserts.",
    ristorante_menu: "<em>Sample menu</em>:",
    ristorante_menu_1: "Dish of the day — € 12",
    ristorante_menu_2: "Valtellina platter — € 10",
    ristorante_menu_3: "Pizzoccheri — € 11",
    ristorante_menu_4: "Rustic cake — € 5",
    galleria_title: "Gallery",
    dove_siamo_title: "Where we are",
    dove_siamo_address: "<strong>Address:</strong> Via S. Stefano, 55 — 28087 Tirano (SO), Italy",
    dove_siamo_note: "A short walk from the historic center and the terraces. Limited parking on site.",
    contatti_title: "Contacts",
    contatti_info: "Email: <a href=\"mailto:info@trefratelli.example\">info@trefratelli.example</a> · Phone: +39 000 000 000",
    contatti_orari: "Opening hours (indicative): Thu–Mon 12:00–15:00 / 19:00–22:00 · Tue–Wed closed.",
    footer: "© 2025 Tre Fratelli Winery and Restaurant · Non-commercial demonstration site."
  },

  "pt": {
    nav_storia: "História",
    nav_cantina: "Adega",
    nav_vini: "Vinhos",
    nav_ristorante: "Restaurante",
    nav_galleria: "Galeria",
    nav_dove_siamo: "Onde Estamos",
    nav_contatti: "Contactos",
    title: "Cantina e Restaurante Tre Fratelli",
    subtitle: "Quatro gerações da família entre os muros secos da Valtellina e os aromas da cozinha de montanha.",
    storia_title: "Nossa história",
    storia_p1: "A Tre Fratelli tem raízes em 1925, quando Giovanni começou a cultivar Chiavennasca nos terraços perto de Tirano.",
    storia_p2: "Em tempos difíceis, as barricas foram protegidas numa pequena adega cavada na rocha; gerações posteriores uniram agricultura e enologia.",
    storia_p3: "Hoje, a quarta geração mantém a casa com a mesma ideia: bom vinho e boa comida.",
    cantina_title: "A adega",
    cantina_desc: "Pequena, essencial, cavada na pedra. Fermentações controladas e envelhecimento em carvalho.",
    vini_title: "Os nossos vinhos",
    vini_classica_title: "Linha Clássica",
    vini_classica_1: "<strong>Valpolicella Tre Fratelli 2019</strong> — Vinho tinto alegre e conviviale.",
    vini_classica_2: "<strong>Tre Chardonnay 2022</strong> — Branco fresco, maçã e flores de montanha.",
    vini_classica_3: "<strong>Merlot Tre Fratelli 2020</strong> — Fruta madura, notas de cacau, tanino suave.",
    vini_classica_note: "*Rótulos da casa.",
    vini_tradizione_title: "Montanha & Tradição",
    vini_tradizione_desc: "Produção artesanal com uvas locais e vinificações lentas.",
    ristorante_title: "O restaurante",
    ristorante_desc: "Cozinha simples: pizzoccheri, enchidos e queijos locais, caça sazonal e sobremesas caseiras.",
    ristorante_menu: "<em>Menu base (indicativo)</em>:",
    ristorante_menu_1: "Prato do dia — € 12",
    ristorante_menu_2: "Tabuleiro Valtellina — € 10",
    ristorante_menu_3: "Pizzoccheri — € 11",
    ristorante_menu_4: "Torta rústica — € 5",
    galleria_title: "Galeria",
    dove_siamo_title: "Onde estamos",
    dove_siamo_address: "<strong>Endereço:</strong> Via S. Stefano, 55 — 28087 Tirano (SO), Itália",
    dove_siamo_note: "Perto do centro histórico e dos terrazzamentos. Estacionamento limitado.",
    contatti_title: "Contactos",
    contatti_info: "Email: <a href=\"mailto:info@trefratelli.example\">info@trefratelli.example</a> · Telefone: +39 000 000 000",
    contatti_orari: "Horário (indicativo): Qui–Seg 12:00–15:00 / 19:00–22:00 · Ter–Qua fechado.",
    footer: "© 2025 Cantina e Restaurante Tre Fratelli · Site demonstrativo não comercial."
  }
};



  function applyLang(lang) {
    const t = translations[lang] || {};
    // set html lang attribute (map en-gb to en)
    document.documentElement.lang = lang === "en-gb" ? "en" : lang;

    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      if (!key) return;
      if (t[key]) {
        el.innerHTML = t[key]; // innerHTML keeps markup like <strong>
      }
      // if no translation found, keep existing content
    });

    // toggle active class for the three language buttons
    const btnIt = document.getElementById("btn-it");
    const btnEn = document.getElementById("btn-en-gb");
    const btnPt = document.getElementById("btn-pt");
    if (btnIt) btnIt.classList.toggle("active", lang === "it");
    if (btnEn) btnEn.classList.toggle("active", lang === "en-gb");
    if (btnPt) btnPt.classList.toggle("active", lang === "pt");

    localStorage.setItem("lang", lang);

    // set document title if available
    if (t.title) document.title = t.title;
  }

  // wire buttons (use IDs from the HTML)
  const bIt = document.getElementById("btn-it");
  const bEn = document.getElementById("btn-en-gb");
  const bPt = document.getElementById("btn-pt");

  if (bIt) bIt.addEventListener("click", () => applyLang("it"));
  if (bEn) bEn.addEventListener("click", () => applyLang("en-gb"));
  if (bPt) bPt.addEventListener("click", () => applyLang("pt"));

  // initial language
  const saved = localStorage.getItem("lang") || "it";
  applyLang(saved);
});
// ...existing code...