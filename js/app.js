const i18n = {
      it: {
        titoloSito: "Cantina e Ristorante Tre Fratelli — Tirano, Valtellina",
        intestazione: "Cantina e Ristorante Tre Fratelli",
        sottotitolo: "Quattro generazioni di famiglia, tra i muretti a secco della Valtellina e i profumi della cucina di montagna.",
        navigazione: ["Storia", "Cantina", "Vini", "Ristorante", "Galleria", "Dove Siamo", "Contatti"],
        titoloStoria: "La nostra storia",
        testoStoria: "La Tre Fratelli affonda le sue radici nel 1925, quando Giovanni decise di coltivare la Chiavennasca — il Nebbiolo di montagna — sui terrazzamenti che guardano Tirano. Tra crisi economiche, guerra e rinascita del turismo alpino, la famiglia ha custodito una tradizione semplice: vino, ospitalità, lavoro di pietra e pazienza. Negli anni difficili, le botti furono protette in una piccola “cantina segreta” scavata nella roccia; negli anni della ripresa, i nipoti hanno unito sapere contadino e studio enologico, senza mai abbandonare i muretti a secco che tengono il monte. Oggi, la quarta generazione porta avanti la casa con la stessa idea: buon vino con buona cucina, in un luogo che profuma di legno, pane e valle.",
        titoloCantina: "La cantina",
        testoCantina: "Piccola, essenziale, scavata nella pietra. Fermentazioni controllate, affinamento in botti di rovere e riposo lungo: la montagna chiede tempo e noi lo rispettiamo.",
        titoloVini: "I nostri vini",
        titoloLineaClassica: "Linea Classica",
        lineaClassica1: "Valpolicella Tre Fratelli 2019 — Rosso agile e conviviale (edizione ispirata, produzione limitata).",
        lineaClassica2: "Tre Chardonnay 2022 — Bianco fresco, mela e fiori di montagna.",
        lineaClassica3: "Merlot Tre Fratelli 2020 — Frutto maturo, note di cacao, tannino morbido.",
        testoLineaClassica: "*Etichette storiche della casa, nate come esercizi di stile per la ristorazione.",
        titoloTradizione: "Montagna & Tradizione",
        testoTradizione: "Produzioni artigianali ispirate al carattere valtellinese: uve locali, vendemmia manuale, affinamenti lenti. Ogni annata racconta il clima e il lavoro tra i terrazzamenti.",
        titoloRistorante: "Il ristorante",
        testoRistorante: "La cucina è semplice e di valle: pizzoccheri, salumi e formaggi locali, selvaggina quando la stagione lo permette, dolci della nonna.",
        sottotitoloRistorante: "Menu base (indicativo):",
        listaRistorante: ["Piatto del giorno (primo o secondo) — € 12", "Tagliere valtellinese — € 10", "Pizzoccheri — € 11", "Torta rustica — € 5"],
        titoloGalleria: "Galleria",
        titoloDove: "Dove siamo",
        testoDove: "Indirizzo: Via S. Stefano, 55 — Tirano (SO), Italia.",
        sottotestoDove: "A due passi dal centro storico e dai terrazzamenti. Parcheggio limitato in loco.",
        titoloContatti: "Contatti",
        testoContatti: "Email: info@trefratelli.example · Telefono: +39 000 000 000",
        sottotestoContatti: "Orari indicativi: Gio–Lun 12:00–15:00 / 19:00–22:00 · Mar–Mer chiuso",
        pieDiPagina: "© 2025 Cantina e Ristorante Tre Fratelli · Sito dimostrativo non commerciale."

      },
      en: {
        titoloSito: "Tre Fratelli Winery & Restaurant — Tirano, Valtellina",
        intestazione: "Tre Fratelli Winery & Restaurant",
        sottotitolo: "Four generations between the stone terraces of Valtellina and the aromas of mountain cooking.",
        navigazione: ["History", "Cellar", "Wines", "Restaurant", "Gallery", "Where We Are", "Contacts"],
        titoloStoria: "Our history",
        testoStoria: "Tre Fratelli traces its roots back to 1925, when Giovanni decided to cultivate Chiavennasca — the mountain Nebbiolo — on the terraced slopes overlooking Tirano. Through economic crises, war, and the rebirth of Alpine tourism, the family has preserved a simple tradition: wine, hospitality, stonework, and patience. In the difficult years, the barrels were kept safe in a small “secret cellar” carved into the rock; in the years of recovery, the grandchildren combined peasant wisdom with oenological study, never abandoning the dry-stone walls that hold the mountain. Today, the fourth generation carries on the house with the same idea: good wine with good food, in a place that smells of wood, bread, and valley.",
        titoloCantina: "The cellar",
        testoCantina: "Small, essential, carved into stone. Controlled fermentations, aging in oak barrels, and long resting: the mountain asks for time, and we respect it.",
        titoloVini: "Our wines",
        titoloLineaClassica: "Classic Line",
        lineaClassica1: "Valpolicella Tre Fratelli 2019 — Lively and convivial red (inspired edition, limited production).",
        lineaClassica2: "Tre Chardonnay 2022 — Fresh white, apple and mountain flowers.",
        lineaClassica3: "Merlot Tre Fratelli 2020 — Ripe fruit, cocoa notes, soft tannins.",
        testoLineaClassica: "*Historic labels of the house, created as style exercises for the restaurant world.",
        titoloTradizione: "Mountain & Tradition",
        testoTradizione: "Handcrafted wines from local grapes with natural fermentation.",
        titoloRistorante: "The restaurant",
        testoRistorante: "The cuisine is simple and from the valley: pizzoccheri, local cured meats and cheeses, game when the season allows, and grandma’s desserts.",
        sottotitoloRistorante: "Base menu (indicative):",
        listaRistorante: ["Dish of the day (first or main course) — € 12", "Valtellina platter — € 10", "Pizzoccheri — € 11", "Rustic cake — € 5"],
        titoloGalleria: "Gallery",
        titoloDove: "Where we are",
        testoDove: "Address: Via S. Stefano, 55 — Tirano (SO), Italy.",
        sottotestoDove: "Just a short walk from the historic center and the terraces. Limited parking on site.",
        titoloContatti: "Contacts",
        testoContatti: "Email: info@trefratelli.example · Phone: +39 000 000 000",
        sottotestoContatti: "Indicative hours: Thu–Mon 12:00–15:00 / 19:00–22:00 · Tue–Wed closed.",
        pieDiPagina: "© 2025 Tre Fratelli Winery & Restaurant · Non-commercial demo site."

      }
    };

    function applyLang(lang) {
  const t = i18n[lang] || i18n.it;
  document.documentElement.lang = lang;

  document.getElementById('nav-storia').textContent = t.navigazione[0];
  document.getElementById('nav-cantina').textContent = t.navigazione[1];
  document.getElementById('nav-vini').textContent = t.navigazione[2];
  document.getElementById('nav-ristorante').textContent = t.navigazione[3];
  document.getElementById('nav-galleria').textContent = t.navigazione[4];
  document.getElementById('nav-dove').textContent = t.navigazione[5];
  document.getElementById('nav-contatti').textContent = t.navigazione[6];

  document.title = t.titoloSito;
  document.getElementById('site-title').textContent = t.titoloSito;

  intestazione.textContent = t.intestazione;
  sottotitolo.textContent = t.sottotitolo;

  titoloStoria.textContent = t.titoloStoria;
  testoStoria.textContent = t.testoStoria;

  titoloCantina.textContent = t.titoloCantina;
  testoCantina.textContent = t.testoCantina;

  titoloVini.textContent = t.titoloVini;
  titoloLineaClassica.textContent = t.titoloLineaClassica;
  lineaClassica1.textContent = t.lineaClassica1;
  lineaClassica2.textContent = t.lineaClassica2;
  lineaClassica3.textContent = t.lineaClassica3;
  testoLineaClassica.textContent = t.testoLineaClassica;

  titoloTradizione.textContent = t.titoloTradizione;
  testoTradizione.textContent = t.testoTradizione;

  titoloRistorante.textContent = t.titoloRistorante;
  testoRistorante.textContent = t.testoRistorante;
  sottotitoloRistorante.textContent = t.sottotitoloRistorante;

  document.getElementById('ristorante-list-0').textContent = t.listaRistorante[0];
  document.getElementById('ristorante-list-1').textContent = t.listaRistorante[1];
  document.getElementById('ristorante-list-2').textContent = t.listaRistorante[2];
  document.getElementById('ristorante-list-3').textContent = t.listaRistorante[3];

  titoloGalleria.textContent = t.titoloGalleria;

  titoloDove.textContent = t.titoloDove;
  testoDove.textContent = t.testoDove;
  sottotestoDove.textContent = t.sottotestoDove;

  titoloContatti.textContent = t.titoloContatti;
  testoContatti.textContent = t.testoContatti;
  sottotestoContatti.textContent = t.sottotestoContatti;

  testoPièDiPagina.textContent = t.pieDiPagina;

  [btn_en, btn_it].forEach(btn =>
    btn.classList.toggle('active', btn.id === 'btn-' + lang)
  );

  localStorage.setItem('lang', lang);
}



    const intestazione = document.getElementById('intestazione');
    const sottotitolo = document.getElementById('sottotitolo');
    const titoloStoria = document.getElementById('titolo-storia');
    const testoStoria = document.getElementById('testo-storia');
    const titoloCantina = document.getElementById('titolo-cantina');
    const testoCantina = document.getElementById('testo-cantina');
    const titoloVini = document.getElementById('titolo-vini');
    const titoloLineaClassica = document.getElementById('titolo-linea-classica');
    const lineaClassica1 = document.getElementById('linea-classica1');
    const lineaClassica2 = document.getElementById('linea-classica2');
    const lineaClassica3 = document.getElementById('linea-classica3');
    const testoLineaClassica = document.getElementById('testo-linea-classica');
    const titoloTradizione = document.getElementById('titolo-tradizione');
    const testoTradizione = document.getElementById('testo-tradizione');
    const titoloRistorante = document.getElementById('titolo-ristorante');
    const testoRistorante = document.getElementById('testo-ristorante');
    const sottotitoloRistorante = document.getElementById('sottotitolo-ristorante');
    const titoloGalleria = document.getElementById('titolo-galleria');
    const titoloDove = document.getElementById('titolo-dove');
    const testoDove = document.getElementById('testo-dove');
    const sottotestoDove = document.getElementById('sottotesto-dove');
    const titoloContatti = document.getElementById('titolo-contatti');
    const testoContatti = document.getElementById('testo-contatti');
    const sottotestoContatti = document.getElementById('sottotesto-contatti');
    const testoPièDiPagina = document.getElementById('testo-pie-di-pagina');
    const btn_en = document.getElementById('btn-en');
    const btn_it = document.getElementById('btn-it');


    btn_en.addEventListener('click', () => applyLang('en'));
    btn_it.addEventListener('click', () => applyLang('it'));

    const saved = localStorage.getItem('lang');
    applyLang(saved || 'it');