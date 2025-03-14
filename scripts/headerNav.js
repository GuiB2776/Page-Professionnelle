///--------------------------/// LIENS AUTOMATIQUES ///--------------------------///

document.addEventListener("DOMContentLoaded", function() {
    const navMenu = `
        <div id="mainNavMenu">
            <ul class="main-navigation">
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
                        <li><a href="marketingDigital.html"> Qu'est ce que le Marketing Digital ?</a>
                            <ul>
                                <li><a href="seFormerAuMarketingDigital.html">Se Former au Marketing Digital</a></li>
                            </ul>
                        </li>
                        <li><a href="outilsDeMarketingDigital.html"> Outils </a>
                            <ul>
                                <li><a href="simulateurSERP.html"> Simulateur de SERP </a></li>
                                <li><a href="generateurUTM.html"> Générateur d'URL UTM </a></li>
                                <li><a href="simulateurSERP.html"> Simulateur de SERP</a></li>
                            </ul>
                        </li>
                        <li><a href="qcm.html">Exemple de QCM</a>
                            <ul>
                                <li><a href="#">-</a></li>
                                <li><a href="#">-</a></li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li><a href="#"> HTML CSS JavaScript </a> <!-- Menu : HTML CSS JavaScript -->
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
                <li><a href="#"> Projets </a> <!-- Menu : Projets -->
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