///-------------------------------------------------------------------------------///
///------------------------------/// MENU BURGER///------------------------------///
///-----------------------------------------------------------------------------///





///------------------------------------------------------------------------------///
///------------------------------/// ACCORDÉON ///------------------------------///
///----------------------------------------------------------------------------///

document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
        const body = header.nextElementSibling;
        const arrow = header.querySelector('.arrow');

        // Toggle visibility of the body
        body.classList.toggle('open');

        // Toggle arrow rotation
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
    if (window.scrollY > 300) { // Affiche si l'utilisateur descend de 300px
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