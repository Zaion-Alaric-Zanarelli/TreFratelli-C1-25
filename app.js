const dict = {
    it: {
     nav_storia:"Storia",
     nav_cantina:"Cantina",
     nav_vini:"Vini",
     nav_ristorante:"Ristorante",
     nav_galleria: "Galleria",
     nav_dove:"Dove Siamo",
     nav_contatti:"Contatti",
     tl_cantinaristorante:"Cantina e Ristorante Tre Fratelli",
     tl_storia:"La nostra storia",
     tl_cantina:"La cantina",
     tl_vini:"I nostri vini",
     tl_ristorante:"Il ristorante",
     tl_galleria:"Galleria",
     tl_dove:"Dove siamo",
     tl_contatti:"Contatti",
     footer:"© 2025 Cantina e Ristorante Tre Fratelli · Sito dimostrativo non commerciale."
    },

    en: {
        nav_storia: "Our Story",
       nav_cantina: "Winery",
       nav_vini: "Wines",
       nav_ristorante: "Restaurant",
       nav_galleria: "Gallery",
       nav_dove: "Where We Are",
       nav_contatti: "Contact",
       tl_cantinaristorante: "Tre Fratelli Winery and Restaurant",
       tl_storia: "Our Story",
       tl_cantina: "The Winery",
       tl_vini: "Our Wines",
       tl_ristorante: "The Restaurant",
       tl_galleria: "Gallery",
       tl_dove: "Where We Are",
       tl_contatti: "Contact",
       footer: "© 2025 Tre Fratelli Winery and Restaurant · Non-commercial demonstration site."
    }
}
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
    // Buttons active state
    document.getElementById("btn-pt").classList.toggle("active", lang === "it");
    document.getElementById("btn-en").classList.toggle("active", lang === "en");
    localStorage.setItem("lang", lang);
    document.title = t.nav_title + " — Bootstrap";
  }
  
  document.getElementById("btn-it").addEventListener("click", () => applyLang("it"));
  document.getElementById("btn-en").addEventListener("click", () => applyLang("en"));
  
  applyLang(localStorage.getItem("lang") === "en" ? "en" : "it");
  