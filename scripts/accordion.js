const accordion = document.querySelector('.header__more-accordion');
const chevron = document.querySelector('#chevron');

function accordionOnClick() {
    if(accordion.style.display === "none") {
        accordion.style.display = "block";
        chevron.style.transform = 'rotate(180deg)';
    }
    else {
        accordion.style.display = "none";
        chevron.style.transform = 'none';
    }
}