document.addEventListener("DOMContentLoaded", function () {
    const mobileMenu = `
        <div id="burger-icon" onclick="toggleMobileMenu()">
            <div class="bar"></div>
            <div class="bar"></div>
            <div class="bar"></div>
        </div>
        <nav id="mobile-nav">
            <ul class="mobile-navigation">
               <li><a href="index.html"> Accueil </a></li> <!-- Page D'Accueil -->
                <li><a href="#"> Marketing Digital </a> <!-- Menu : Marketing Digital -->
                    <ul>
                        <li><a href="se-former-au-marketing-digital.html"> Apprendre le Marketing Digital </a>
                            <ul>
                                <li><a href="introduction-au-marketing-digital.html"> Module 1 : Introduction </a></li>
                                <li><a href="introduction-au-marketing-digital.html"> Module 2 : Création et Optimisation de la Présence en Ligne </a></li>
                                <li><a href="introduction-au-marketing-digital.html"> Module 3 : Publicité en Ligne </a></li>
                                <li><a href="introduction-au-marketing-digital.html"> Module 4 : Marketing de Contenu </a></li>
                                <li><a href="introduction-au-marketing-digital.html"> Module 5 : Email Marketing et Automatisation </a></li>
                                <li><a href="introduction-au-marketing-digital.html"> Module 6 : Réseaux Sociaux et Community Management </a></li>
                                <li><a href="introduction-au-marketing-digital.html"> Module 7 : Analyse de Données et ROI </a></li>
                                <li><a href="introduction-au-marketing-digital.html"> Module 8 : Tendances et Innovations en Marketing Digital </a></li>
                            </ul>
                        </li>
                        <li><a href="#"> Bonnes Pratiques & Conseils </a>
                            <ul>
                                <li><a href="nommer-ses-pages-html.html"> - Nommer ses pages </a></li>
                                <li><a href="optimisation-on-page.html"> - L'Optimisation On-Page </a></li>
                            </ul>
                        </li>
                        <li><a href="#"> CMS & CRM</a>
                            <ul>
                                <li><a href="#"> ⚠️ En préparation ⚠️ </a></li>
                            </ul>
                        </li>
                        <li><a href="outils-de-marketing-digital.html"> Outils Marketing</a>
                            <ul>
                                <li><a href="analyseur-de-texte-seo.html"> Analyseur de Score de Lisibilité </a></li>
                                <li><a href="generateur-utm.html"> Générateur d'URL UTM </a></li>
                                <li><a href="simulateur-SERP.html"> Simulateur de SERP </a></li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li><a href="#"> HTML - CSS - JavaScript </a> <!-- Menu : HTML - CSS - JavaScript -->
                    <ul>
                        <li><a href="#">HTML</a>
                            <ul>
                                <li><a href="#"> ⚠️ En préparation ⚠️ </a></li>
                            </ul>
                        </li>
                        <li><a href="#">CSS</a>
                            <ul>
                                <li><a href="#"> ⚠️ En préparation ⚠️ </a></li>
                            </ul>
                        </li>
                        <li><a href="#">JavaScript</a>
                            <ul>
                                <li><a href="#"> ⚠️ En préparation ⚠️ </a></li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li><a href="#"> IA & OSINT </a> <!-- Menu : IA & OSINT -->
                    <ul>
                        <li><a href="#">Intelligences Artificielles</a>
                            <ul>
                                <li><a href="#"> ⚠️ En préparation ⚠️ </a></li>
                            </ul>
                        </li>
                        <li><a href="#">Open Source Intelligence</a>
                            <ul>
                                <li><a href="#"> ⚠️ En préparation ⚠️ </a></li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li><a href="#"> À Propos De Moi </a> <!-- Menu : A Propos -->
                    <ul>
                        <li><a href="a-propos-de-moi.html#apropos">À propos de moi</a></li>
                        <li><a href="a-propos-de-moi.html#formations">Formations</a>
                            <ul>
                                <li><a href="a-propos-de-moi.html#m2">M2</a></li>
                                <li><a href="a-propos-de-moi.html#bachelor">Bachelor</a></li>
                                <li><a href="a-propos-de-moi.html#bts">BTS</a></li>
                            </ul>
                        </li>
                        <li><a href="a-propos-de-moi.html#experiences">Expériences</a>
                            <ul>
                                <li><a href="a-propos-de-moi.html#flornitur">Flornitur (ELONIX)</a></li>
                                <li><a href="a-propos-de-moi.html#akutiga">AKUTIGA</a></li>
                                <li><a href="a-propos-de-moi.html#alternativecontainer">Alternative Container</a></li>
                                <li><a href="a-propos-de-moi.html#lubrizolfrance">Lubrizol France</a></li>
                                <li><a href="a-propos-de-moi.html#islandproperties">Island Properties</a></li>
                            </ul>
                        </li>
                        <li><a href="a-propos-de-moi.html#cv">Mon CV</a></li>
                        <li><a href="a-propos-de-moi.html#contact">Me Contacter</a></li>
                    </ul>
                </li>
                <li><a href="#"> Exemples </a> <!-- Menu : Projets -->
                    <ul>
                        <li><a href="exemple-de-qcm-personnalise.html">QCM personnalisé </a></li>
                        <li><a href="outil-de-gestion-de-projet.html"> Outil de Gestion de Projet </a></li>
                        <li><a href="#"> Templates : HTML CSS JavaScript </a>
                            <ul>
                                <li><a href="#"> ⚠️ En préparation ⚠️ </a></li>
                                <li><a href="#"> ⚠️ En préparation ⚠️ </a></li>
                                <li><a href="#"> ⚠️ En préparation ⚠️ </a></li>
                            </ul>
                        </li>
                        <li><a href="/games/mini-jeux.html"> Mini-Jeux </a></li>
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