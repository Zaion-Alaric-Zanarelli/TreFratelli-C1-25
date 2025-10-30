const ita_tra = document.querySelector("#it");
const eng_tra = document.querySelector("#en_uk");

// girare la freccia del dropdown
const dropdown_link = document.querySelector('.nav-link-b');
const dropdown_toggle = document.querySelector('.dropdown-toggle-b');

dropdown_link.addEventListener('click', () => {
    dropdown_toggle.classList.toggle('rotate');
});

document.addEventListener('click', (e) => {
    if (!dropdown_link.contains(e.target)) {
        dropdown_toggle.classList.remove('rotate');
    }
});