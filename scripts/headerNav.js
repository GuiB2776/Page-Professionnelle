///--------------------------/// LIENS AUTOMATIQUES ///--------------------------///

document.addEventListener("DOMContentLoaded", function() {
    const navMenu = `
        <div id="mainNavMenu">
            <ul class="main-navigation">
                <li><a href="index.html"> Accueil </a></li> <!-- Page D'Accueil -->
                <li><a href="#"> Marketing Digital </a> <!-- Menu : Marketing Digital -->
                    <ul>
                        <li><a href="marketing-digital.html"> Apprendre le Marketing Digital </a>
                            <ul>
                                <li><a href="introduction-au-marketing-digital.html"> - Module 1 : ⚠️ En préparation ⚠️ </a></li>
                                <li><a href="introduction-au-marketing-digital.html"> - Module 2 : ⚠️ En préparation ⚠️ </a></li>
                                <li><a href="introduction-au-marketing-digital.html"> - Module 3 : ⚠️ En préparation ⚠️ </a></li>
                                <li><a href="introduction-au-marketing-digital.html"> - Module 4 : ⚠️ En préparation ⚠️ </a></li>
                                <li><a href="introduction-au-marketing-digital.html"> - Module 5 : ⚠️ En préparation ⚠️ </a></li>
                                <li><a href="introduction-au-marketing-digital.html"> - Module 6 : ⚠️ En préparation ⚠️ </a></li>
                                <li><a href="introduction-au-marketing-digital.html"> - Module 7 : ⚠️ En préparation ⚠️ </a></li>
                                <li><a href="introduction-au-marketing-digital.html"> - Module 8 : ⚠️ En préparation ⚠️ </a></li>
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
                                <li><a href="analyseur-de-texte-seo.html"> - Analyseur de Score de Lisibilité </a></li>
                                <li><a href="generateur-utm.html"> - Générateur d'URL UTM </a></li>
                                <li><a href="simulateur-SERP.html"> - Simulateur de SERP </a></li>
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
        </div>
    `;

    // Insère le menu dans l'élément avec l'ID "menu-container"
    document.getElementById("menu-container").innerHTML = navMenu;
});

// Mettre en surbrillance le lien actif
highlightActiveLink();

// Fonction pour surligner le lien actif
function highlightActiveLink() {
    const links = document.querySelectorAll("nav ul li a");
    const currentPage = window.location.pathname.split("/").pop(); // Récupère le nom du fichier actuel

    links.forEach(link => {
        if (link.getAttribute("href") === currentPage) {
            link.classList.add("active");
        }
    });
}