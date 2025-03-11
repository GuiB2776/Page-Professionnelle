document.addEventListener("DOMContentLoaded", function () {
    const mobileMenu = `
        <div id="burger-icon" onclick="toggleMobileMenu()">
            <div class="bar"></div>
            <div class="bar"></div>
            <div class="bar"></div>
        </div>
        <nav id="mobile-nav">
            <ul class="mobile-navigation">
                <li><a href="#"> À Propos De Moi</a>
                    <ul>
                        <li><a href="index.html#apropos">À propos de moi</a></li>
                        <li><a href="index.html#formations">Formations</a>
                            <ul>
                                <li><a href="index.html#m2">M2</a></li>
                                <li><a href="index.html#bachelor">Bachelor</a></li>
                                <li><a href="index.html#bts">BTS</a></li>
                            </ul>
                        </li>
                        <li><a href="index.html#experiences">Expériences</a>
                            <ul>
                                <li><a href="index.html#flornitur">Flornitur (ELONIX)</a></li>
                                <li><a href="index.html#akutiga">AKUTIGA</a></li>
                                <li><a href="index.html#alternativecontainer">Alternative Container</a></li>
                                <li><a href="index.html#lubrizolfrance">Lubrizol France</a></li>
                                <li><a href="index.html#islandproperties">Island Properties</a></li>
                            </ul>
                        </li>
                        <li><a href="index.html#cv">Mon CV</a></li>
                        <li><a href="index.html#contact">Me Contacter</a></li>
                    </ul>
                </li>
                <li><a href="#"> Marketing Digital </a>
                    <ul>
                        <li><a href="marketingDigital.html"> Qu'est ce que le Marketing Digital ?</a></li>
                        <li><a href="simulateurSERP.html">Simulateur SERP</a></li>
                        <li><a href="#">JavaScript</a>
                            <ul>
                                <li><a href="#">Ajax</a></li>
                                <li><a href="#">jQuery</a></li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li><a href="#"> Projets </a>
                    <ul>
                        <li><a href="#">HTML</a></li>
                        <li><a href="#">CSS</a>
                            <ul>
                                <li><a href="#">Resets</a></li>
                                <li><a href="#">Grids</a></li>
                                <li><a href="#">Frameworks</a></li>
                            </ul>
                        </li>
                        <li><a href="#">JavaScript</a>
                            <ul>
                                <li><a href="#">Ajax</a></li>
                                <li><a href="#">jQuery</a></li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>
        </nav>
    `;

    // Insère le menu mobile dans l'élément avec l'ID "mobile-menu-container"
    document.getElementById("mobile-menu-container").innerHTML = mobileMenu;
});

// Fonction pour afficher/cacher le menu burger
function toggleMobileMenu() {
    const nav = document.getElementById("mobile-nav");
    const icon = document.getElementById("burger-icon");

    nav.classList.toggle("active");
    icon.classList.toggle("open");
}