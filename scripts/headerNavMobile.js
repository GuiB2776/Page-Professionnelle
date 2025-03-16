document.addEventListener("DOMContentLoaded", function () {
    const mobileMenu = `
        <div id="burger-icon" onclick="toggleMobileMenu()">
            <div class="bar"></div>
            <div class="bar"></div>
            <div class="bar"></div>
        </div>
        <nav id="mobile-nav">
            <ul class="mobile-navigation">
                <li><a href="#"> À Propos De Moi</a> <!-- Menu : A Propos -->
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
                <li><a href="#"> Marketing Digital </a> <!-- Menu : Marketing Digital -->
                    <ul>
                        <li><a href="marketing-digital.html"> Qu'est ce que le Marketing Digital ?</a>
                            <ul>
                                <li><a href="introduction-au-marketing-digital.html"> Chapitre 1 : Introduction </a></li>
                                <li><a href="introduction-au-marketing-digital.html"> Chapitre 2 : Création et Optimisation de la Présence en Ligne </a></li>
                                <li><a href="introduction-au-marketing-digital.html"> Chapitre 3 : Publicité en Ligne </a></li>
                                <li><a href="introduction-au-marketing-digital.html"> Chapitre 4 : Marketing de Contenu </a></li>
                                <li><a href="introduction-au-marketing-digital.html"> Chapitre 5 : Email Marketing et Automatisation </a></li>
                                <li><a href="introduction-au-marketing-digital.html"> Chapitre 6 : Réseaux Sociaux et Community Management </a></li>
                                <li><a href="introduction-au-marketing-digital.html"> Chapitre 7 : Analyse de Données et ROI </a></li>
                                <li><a href="introduction-au-marketing-digital.html"> Chapitre 8 : Tendances et Innovations en Marketing Digital </a></li>
                            </ul>
                        </li>
                        <li><a href="#"> Bonnes Pratiques & Conseils </a>
                            <ul>
                                <li><a href="nommer-ses-pages-html.html"> Nommer ses pages </a></li>
                                <li><a href="optimisation-on-page.html"> - L'Optimisation On-Page </a></li>
                            </ul>
                        </li>
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
                        <li><a href="outils-de-marketing-digital.html"> Outils Marketing</a>
                            <ul>
                                <li><a href="analyseur-de-texte-seo.html"> Analyseur de Score de Lisibilité </a></li>
                                <li><a href="exemple-de-qcm-personnalise.html">Exemple de QCM personnalisé </a></li>
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
                                <li><a href="introduction-au-marketing-digital.html"> Module 1 : Introduction </a></li>
                                <li><a href="introduction-au-marketing-digital.html"> Module 2 : Création et Optimisation de la Présence en Ligne </a></li>
                                <li><a href="introduction-au-marketing-digital.html"> Module 3 : Publicité en Ligne </a></li>
                                <li><a href="introduction-au-marketing-digital.html"> Module 4 : Marketing de Contenu </a></li>
                                <li><a href="introduction-au-marketing-digital.html"> Module 5 : Email Marketing et Automatisation </a></li>
                                <li><a href="introduction-au-marketing-digital.html"> Module 6 : Réseaux Sociaux et Community Management </a></li>
                                <li><a href="introduction-au-marketing-digital.html"> Module 7 : Analyse de Données et ROI </a></li>
                                <li><a href="introduction-au-marketing-digital.html"> Module 8 : Tendances et Innovations en Marketing Digital </a></li>
                                <li><a href="introduction-au-marketing-digital.html"> Module 9 : Tendances et Innovations en Marketing Digital </a></li>
                                <li><a href="introduction-au-marketing-digital.html"> Module 10 : Tendances et Innovations en Marketing Digital </a></li>
                            </ul>
                        </li>
                        <li><a href="#">CSS</a>
                            <ul>
                                <li><a href="introduction-au-marketing-digital.html"> Module 1 : Introduction </a></li>
                                <li><a href="introduction-au-marketing-digital.html"> Module 2 : Création et Optimisation de la Présence en Ligne </a></li>
                                <li><a href="introduction-au-marketing-digital.html"> Module 3 : Publicité en Ligne </a></li>
                                <li><a href="introduction-au-marketing-digital.html"> Module 4 : Marketing de Contenu </a></li>
                                <li><a href="introduction-au-marketing-digital.html"> Module 5 : Email Marketing et Automatisation </a></li>
                                <li><a href="introduction-au-marketing-digital.html"> Module 6 : Réseaux Sociaux et Community Management </a></li>
                                <li><a href="introduction-au-marketing-digital.html"> Module 7 : Analyse de Données et ROI </a></li>
                                <li><a href="introduction-au-marketing-digital.html"> Module 8 : Tendances et Innovations en Marketing Digital </a></li>
                                <li><a href="introduction-au-marketing-digital.html"> Module 9 : Tendances et Innovations en Marketing Digital </a></li>
                                <li><a href="introduction-au-marketing-digital.html"> Module 10 : Tendances et Innovations en Marketing Digital </a></li>
                            </ul>
                        </li>
                        <li><a href="#">JavaScript</a>
                            <ul>
                                <li><a href="introduction-au-marketing-digital.html"> Module 1 : Introduction </a></li>
                                <li><a href="introduction-au-marketing-digital.html"> Module 2 : Création et Optimisation de la Présence en Ligne </a></li>
                                <li><a href="introduction-au-marketing-digital.html"> Module 3 : Publicité en Ligne </a></li>
                                <li><a href="introduction-au-marketing-digital.html"> Module 4 : Marketing de Contenu </a></li>
                                <li><a href="introduction-au-marketing-digital.html"> Module 5 : Email Marketing et Automatisation </a></li>
                                <li><a href="introduction-au-marketing-digital.html"> Module 6 : Réseaux Sociaux et Community Management </a></li>
                                <li><a href="introduction-au-marketing-digital.html"> Module 7 : Analyse de Données et ROI </a></li>
                                <li><a href="introduction-au-marketing-digital.html"> Module 8 : Tendances et Innovations en Marketing Digital </a></li>
                                <li><a href="introduction-au-marketing-digital.html"> Module 9 : Tendances et Innovations en Marketing Digital </a></li>
                                <li><a href="introduction-au-marketing-digital.html"> Module 10 : Tendances et Innovations en Marketing Digital </a></li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li><a href="#"> Exemples </a> <!-- Menu : Projets -->
                    <ul>
                        <li><a href="#"> Sites : HTML CSS JavaScript </a>
                            <ul>
                                <li><a href="#"> Template 1 </a></li>
                                <li><a href="#"> Template 2 </a></li>
                                <li><a href="#"> Template 3 </a></li>
                            </ul>
                        </li>

                        <li><a href="#"> CMS & CRM</a>
                            <ul>
                                <li><a href="#">WordPress</a></li>
                                <li><a href="#">Grids</a></li>
                                <li><a href="#">Frameworks</a></li>
                            </ul>
                        </li>
                        <li><a href="#"> IA et OSINT </a>
                            <ul>
                                <li><a href="#"> Chat GPT </a></li>
                                <li><a href="#"> OSINT </a></li>
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