///-------------------------------------------------------------------------------///
///--------------------------/// GESTION DES ANCRES ///--------------------------///
///-----------------------------------------------------------------------------///

document.addEventListener("DOMContentLoaded", function () {
    const offset = 90; // Hauteur du menu fixe

    function smoothScroll(targetId) {
        const target = document.getElementById(targetId);
        if (target) {
            setTimeout(() => {
                window.scrollTo({
                    top: target.offsetTop - offset,
                    behavior: 'smooth'
                });
            }, 200); // Délai pour garantir que le DOM est prêt
        }
    }

    function handleAnchorClick(e) {
        const href = this.getAttribute("href");

        if (href.startsWith("#")) {
            e.preventDefault();
            smoothScroll(href.substring(1));
        } else if (href.includes(".html#")) {
            e.preventDefault();
            const [page, anchor] = href.split("#");
            localStorage.setItem("scrollTarget", anchor);
            window.location.href = page;
        }
    }

    function attachAnchorEvents() {
        document.querySelectorAll('a[href*="#"]').forEach(link => {
            link.addEventListener('click', handleAnchorClick);
        });
    }

    // Attente de l'insertion du menu pour attacher les événements
    const menuContainer = document.getElementById("menu-container");
    if (menuContainer) {
        const observer = new MutationObserver(() => {
            attachAnchorEvents();
            observer.disconnect(); // Stoppe l'observation après ajout
        });
        observer.observe(menuContainer, { childList: true });
    }

    // Gestion des ancres après chargement de la page
    window.addEventListener("load", function () {
        const storedAnchor = localStorage.getItem("scrollTarget") || window.location.hash.substring(1);
        if (storedAnchor) {
            localStorage.removeItem("scrollTarget");
            smoothScroll(storedAnchor);
        }
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