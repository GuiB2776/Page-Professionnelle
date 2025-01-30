///-------------------------------------------------------------------------------///
///------------------------------/// MENU BURGER///------------------------------///
///-----------------------------------------------------------------------------///








///-------------------------------------------------------------------------------///
///-------------------------/// HAUTEUR SCROLL ANCRES///-------------------------///
///-----------------------------------------------------------------------------///

// améliore la hauteur du scroll pour les ancres de ??px de hauteur du Menu de Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Empêche le comportement par défaut
        const target = document.querySelector(this.getAttribute('href'));
        const offset = 90; // Hauteur du menu fixe

        window.scrollTo({
            top: target.offsetTop - offset, // Scroll ajusté
            behavior: 'smooth' // Animation fluide
        });
    });
});


///------------------------------------------------------------------------------///
///------------------------------/// ACCORDÉON ///------------------------------///
///----------------------------------------------------------------------------///

document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
        const body = header.nextElementSibling;
        const arrow = header.querySelector('.arrow');
        // Rend visible le corps de l'accordéon
        body.classList.toggle('open');
        // Rotation de la flèche
        arrow.classList.toggle('rotate');
    });
});


///------------------------------------------------------------------------------///
///--------------------------/// SCROLL TOP BUTTON ///--------------------------///
///----------------------------------------------------------------------------///

// Sélectionne le bouton "Retour en haut"
const scrollToTopButton = document.getElementById("scrollToTop");

// Affiche/masque le bouton en fonction de la position de défilement
window.addEventListener("scroll", () => {
    if (window.scrollY > 30) { // Affiche si l'utilisateur descend de 30px
        scrollToTopButton.classList.add("show");
    } else {
        scrollToTopButton.classList.remove("show");
    }
});

// Ajoute un événement au clic pour remonter en haut de la page
scrollToTopButton.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth", // Défilement fluide
    });
});