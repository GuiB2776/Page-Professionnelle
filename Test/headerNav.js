///--------------------------/// LIENS AUTOMATIQUES ///--------------------------///

const menuItems = {
    "À propos": {
        "Formations": {
            "Formation1": "#formation1",
            "Formation2": "#formation2",
            "Formation3": "#formation3",
        },
        "Expériences": {
            "Job1": "#job1",
            "Job2": "#job2",
            "Job3": "#job3",
            "Job4": "#job4",
            "Job5": "#job5",
        },
    },
    "Web Marketing": {
        "PageMarketing1": {
            "SousPageMarketing1-1": "#marketing1-1",
            "SousPageMarketing1-2": "#marketing1-2",
            "SousPageMarketing1-3": "#marketing1-3",
        },
        "PageMarketing2": {
            "SousPageMarketing2-1": "#marketing2-1",
            "SousPageMarketing2-2": "#marketing2-2",
            "SousPageMarketing2-3": "#marketing2-3",
        },
        "PageMarketing3": {
            "SousPageMarketing3-1": "#marketing3-1",
            "SousPageMarketing3-2": "#marketing3-2",
            "SousPageMarketing3-3": "#marketing3-3",
        },
    },
    "ExemplesSuivants": {
        "ExempleSuivant1": {
            "SousExempleSuivant1-1": "#suivant1-1",
            "SousExempleSuivant1-2": "#suivant1-2",
            "SousExempleSuivant1-3": "#suivant1-3",
        },
        "ExempleSuivant2": {
            "SousExempleSuivant2-1": "#suivant2-1",
            "SousExempleSuivant2-2": "#suivant2-2",
            "SousExempleSuivant2-3": "#suivant2-3",
        },
        "ExempleSuivant3": {
            "SousExempleSuivant3-1": "#suivant3-1",
            "SousExempleSuivant3-2": "#suivant3-2",
            "SousExempleSuivant3-3": "#suivant3-3",
        },
    },
};

// Fonction pour générer le menu HTML
function generateMenu(menuData, parentElement) {
    for (const [label, value] of Object.entries(menuData)) {
        const li = document.createElement("li");
        const a = document.createElement("a");

        if (typeof value === "string") {
            a.href = value;
        } else {
            a.href = "#"; // Liens parents sans action
        }

        a.textContent = label;
        li.appendChild(a);

        if (typeof value === "object") {
            const subMenu = document.createElement("ul");
            generateMenu(value, subMenu);
            li.appendChild(subMenu);
        }

        parentElement.appendChild(li);
    }
}

// Injecte le menu dans la page
const mainMenu = document.getElementById("mainMenu");
generateMenu(menuItems, mainMenu);