///------------------------------------------------------------------------------///
///--------------------------------/// SCORE ///--------------------------------///
///----------------------------------------------------------------------------///

    // Sélectionne le bouton "Retour en haut"
    const scoreFollowsScreen = document.getElementById("qcm-scoreFollowsScreen");

    // Affiche/masque le bouton en fonction de la position de défilement
    window.addEventListener("scroll", () => {
        if (window.scrollY > 30) { // Affiche si l'utilisateur descend de 30px
            scoreFollowsScreen.classList.add("show");
        } else {
            scoreFollowsScreen.classList.remove("show");
        }
    });

    // Rendre la div #qcm-scoreFollowsScreen déplaçable par l'utilisateur
    let isDragging = false;
    let startX, startY, initialX, initialY;

    // Fonction appelée au démarrage du déplacement (pour desktop et mobile)
    function dragStart(e) {
    isDragging = true;
    // Pour différencier les événements desktop et mobile
    if (e.type === "mousedown") {
        startX = e.clientX;
        startY = e.clientY;
    } else if (e.type === "touchstart") {
        startX = e.touches[0].clientX;
        startY = e.touches[0].clientY;
    }
    // Supprime les contraintes définies en CSS (bottom/right) pour permettre le positionnement par left/top
    scoreFollowsScreen.style.bottom = 'auto';
    scoreFollowsScreen.style.right = 'auto';
    // Récupère la position initiale de l'élément
    initialX = scoreFollowsScreen.offsetLeft;
    initialY = scoreFollowsScreen.offsetTop;
    // Empêche le comportement par défaut (important pour les appareils tactiles)
    e.preventDefault();
    }

    // Fonction qui met à jour la position pendant le déplacement
    function dragMove(e) {
    if (!isDragging) return;
    let currentX, currentY;
    if (e.type === "mousemove") {
        currentX = e.clientX;
        currentY = e.clientY;
    } else if (e.type === "touchmove") {
        currentX = e.touches[0].clientX;
        currentY = e.touches[0].clientY;
    }
    const dx = currentX - startX;
    const dy = currentY - startY;
    scoreFollowsScreen.style.left = (initialX + dx) + "px";
    scoreFollowsScreen.style.top = (initialY + dy) + "px";
    // Empêche le scroll pendant le déplacement sur mobile
    e.preventDefault();
    }

    // Fonction appelée à la fin du déplacement
    function dragEnd(e) {
    isDragging = false;
    }

    // Événements pour desktop
    scoreFollowsScreen.addEventListener("mousedown", dragStart);
    document.addEventListener("mousemove", dragMove);
    document.addEventListener("mouseup", dragEnd);

    // Événements pour mobile (avec {passive: false} pour permettre preventDefault)
    scoreFollowsScreen.addEventListener("touchstart", dragStart, {passive: false});
    document.addEventListener("touchmove", dragMove, {passive: false});
    document.addEventListener("touchend", dragEnd);

///------------------------------------------------------------------------------///
///---------------------------------/// QCM ///---------------------------------///
///----------------------------------------------------------------------------///
    
    // Tableau des 20 questions
    // Chaque question possède un texte, des options (avec la propriété "correct") et une explication
    const questions = 
    [
        {
            question: "Question 1 : Quel est le langage utilisé pour structurer une page web ?",
            options: [
            { text: "HTML", correct: true },
            { text: "CSS", correct: false },
            { text: "JavaScript", correct: false },
            { text: "SQL", correct: false }
            ],
            explanation: "HTML (HyperText Markup Language) permet de structurer le contenu d'une page web."
        },
        {
            question: "Question 2 : Quel est le rôle de CSS dans une page web ?",
            options: [
            { text: "Structurer le contenu", correct: false },
            { text: "Ajouter du style", correct: true },
            { text: "Gérer les interactions", correct: false },
            { text: "Gérer la base de données", correct: false }
            ],
            explanation: "CSS (Cascading Style Sheets) est utilisé pour styliser le contenu d'une page web (couleurs, tailles, disposition, etc.)."
        },
        {
            question: "Question 3 : Quel langage est utilisé pour rendre une page web interactive ?",
            options: [
            { text: "HTML", correct: false },
            { text: "CSS", correct: false },
            { text: "JavaScript", correct: true },
            { text: "PHP", correct: false }
            ],
            explanation: "JavaScript est un langage de programmation utilisé pour rendre une page web interactive."
        },
        {
            question: "Question 4 : Quel est le rôle de PHP ?",
            options: [
            { text: "Créer des bases de données", correct: false },
            { text: "Gérer le côté client d'une page", correct: false },
            { text: "Générer du contenu dynamique côté serveur", correct: true },
            { text: "Styliser la page", correct: false }
            ],
            explanation: "PHP (Hypertext Preprocessor) est un langage côté serveur utilisé pour générer du contenu dynamique et interagir avec une base de données."
        },
        {
            question: "Question 5 : Comment inclure une feuille de style CSS dans un fichier HTML ?",
            options: [
            { text: "<style>...</style>", correct: false },
            { text: "<link rel='stylesheet' href='style.css'>", correct: true },
            { text: "<css>...</css>", correct: false },
            { text: "<style src='style.css'>", correct: false }
            ],
            explanation: "La bonne méthode pour inclure une feuille de style CSS dans HTML est d'utiliser la balise <link>."
        },
        {
            question: "Question 6 : Quelle balise HTML permet de définir un lien hypertexte ?",
            options: [
            { text: "<a>", correct: true },
            { text: "<link>", correct: false },
            { text: "<button>", correct: false },
            { text: "<div>", correct: false }
            ],
            explanation: "La balise <a> est utilisée pour définir des liens hypertextes dans une page web."
        },
        {
            question: "Question 7 : Quel attribut est utilisé pour spécifier l'adresse URL d'un lien ?",
            options: [
            { text: "src", correct: false },
            { text: "href", correct: true },
            { text: "link", correct: false },
            { text: "url", correct: false }
            ],
            explanation: "L'attribut 'href' est utilisé dans la balise <a> pour spécifier l'adresse URL du lien."
        },
        {
            question: "Question 8 : Quel est l'élément HTML utilisé pour créer une liste non ordonnée ?",
            options: [
            { text: "<ul>", correct: true },
            { text: "<ol>", correct: false },
            { text: "<li>", correct: false },
            { text: "<dl>", correct: false }
            ],
            explanation: "La balise <ul> est utilisée pour créer une liste non ordonnée (sans numéros)."
        },
        {
            question: "Question 9 : Quelle est la balise HTML utilisée pour insérer une image ?",
            options: [
            { text: "<image>", correct: false },
            { text: "<img>", correct: true },
            { text: "<src>", correct: false },
            { text: "<picture>", correct: false }
            ],
            explanation: "La balise <img> est utilisée pour insérer une image dans une page HTML."
        },
        {
            question: "Question 10 : Comment définir une couleur de texte en CSS ?",
            options: [
            { text: "color: red;", correct: true },
            { text: "background-color: red;", correct: false },
            { text: "font-color: red;", correct: false },
            { text: "text-color: red;", correct: false }
            ],
            explanation: "En CSS, on utilise la propriété 'color' pour définir la couleur du texte."
        },
        {
            question: "Question 11 : Quel type de langage est JavaScript ?",
            options: [
            { text: "Langage de balisage", correct: false },
            { text: "Langage de programmation", correct: true },
            { text: "Langage de style", correct: false },
            { text: "Langage de base de données", correct: false }
            ],
            explanation: "JavaScript est un langage de programmation utilisé pour rendre une page web interactive."
        },
        {
            question: "Question 12 : Quelle propriété CSS permet d'ajuster la taille du texte ?",
            options: [
            { text: "font-size", correct: true },
            { text: "text-size", correct: false },
            { text: "font-style", correct: false },
            { text: "text-height", correct: false }
            ],
            explanation: "La propriété 'font-size' permet de définir la taille du texte en CSS."
        },
        {
            question: "Question 13 : Quel est le rôle principal de PHP dans le développement web ?",
            options: [
            { text: "Gérer le contenu dynamique côté serveur", correct: true },
            { text: "Styliser la page côté client", correct: false },
            { text: "Faire des calculs côté client", correct: false },
            { text: "Écrire des scripts d'interaction avec l'utilisateur", correct: false }
            ],
            explanation: "PHP est utilisé pour générer du contenu dynamique côté serveur, comme des pages web personnalisées selon les requêtes de l'utilisateur."
        },
        {
            question: "Question 14 : Quelle méthode JavaScript est utilisée pour afficher un message dans la console ?",
            options: [
            { text: "console.print()", correct: false },
            { text: "console.log()", correct: true },
            { text: "alert()", correct: false },
            { text: "log.console()", correct: false }
            ],
            explanation: "La méthode 'console.log()' est utilisée en JavaScript pour afficher un message dans la console du navigateur."
        },
        {
            question: "Question 15 : Quelle est la différence entre une balise <div> et une balise <span> ?",
            options: [
            { text: "<div> est un élément de bloc, tandis que <span> est un élément en ligne", correct: true },
            { text: "<div> et <span> sont les mêmes", correct: false },
            { text: "<div> est utilisé pour le texte et <span> pour les images", correct: false },
            { text: "<div> est un conteneur pour les scripts et <span> pour le texte", correct: false }
            ],
            explanation: "<div> est un élément de bloc, tandis que <span> est un élément en ligne utilisé pour styliser des portions spécifiques de texte."
        },
        {
            question: "Question 16 : Quel est l'attribut pour ajouter un identifiant unique à un élément HTML ?",
            options: [
            { text: "id", correct: true },
            { text: "class", correct: false },
            { text: "name", correct: false },
            { text: "data", correct: false }
            ],
            explanation: "L'attribut 'id' permet d'ajouter un identifiant unique à un élément HTML."
        },
        {
            question: "Question 17 : Quelle propriété CSS est utilisée pour ajouter une bordure autour d'un élément ?",
            options: [
            { text: "border", correct: true },
            { text: "outline", correct: false },
            { text: "margin", correct: false },
            { text: "padding", correct: false }
            ],
            explanation: "La propriété 'border' en CSS permet d'ajouter une bordure autour d'un élément."
        },
        {
            question: "Question 18 : Comment insérer un commentaire en JavaScript ?",
            options: [
            { text: "// Ceci est un commentaire", correct: true },
            { text: "# Ceci est un commentaire", correct: false },
            { text: "<!-- Ceci est un commentaire -->", correct: false },
            { text: "/* Ceci est un commentaire */", correct: true }
            ],
            explanation: "En JavaScript, on utilise les symboles // pour un commentaire sur une ligne ou /* pour un commentaire multi-lignes."
        },
        {
            question: "Question 19 : Quelle est la syntaxe correcte pour déclarer une variable en JavaScript ?",
            options: [
            { text: "var x;", correct: true },
            { text: "let x;", correct: true },
            { text: "int x;", correct: false },
            { text: "x := 10;", correct: false }
            ],
            explanation: "En JavaScript, on utilise les mots-clés 'var' ou 'let' pour déclarer des variables."
        },
        {
            question: "Question 20 : Quelle est la méthode pour envoyer des données à un serveur avec JavaScript ?",
            options: [
            { text: "HTTP.send()", correct: false },
            { text: "fetch()", correct: true },
            { text: "post()", correct: false },
            { text: "ajax()", correct: false }
            ],
            explanation: "La méthode 'fetch()' est utilisée en JavaScript pour envoyer des requêtes HTTP et récupérer des données du serveur."
        }
    ];

    let totalScore = 0;
    let answeredQuestions = 0;

    // Mise à jour du score affiché
    function updateScore() {
    document.getElementById('qcm-score').textContent = "Score : " + totalScore + "/20";
    document.getElementById('qcm-scoreFollowsScreen').textContent = "Score : " + totalScore + "/20";
    }

    function checkAllAnswered() 
    {
        const nextLessonButton = document.getElementById('qcm-nextLessonButton');
        // Si toutes les questions ne sont pas encore répondues, on cache le bouton
        if (answeredQuestions < questions.length) {
            nextLessonButton.style.display = 'none';
            return;
        }
        // Toutes les questions ont été répondues
        if (totalScore >= 16) {
            nextLessonButton.style.display = 'block';
        } else {
            nextLessonButton.style.display = 'none';
            alert("Votre score final est de " + totalScore + ". Vous devez obtenir au moins 16 points pour accéder à la leçon suivante.");
        }
    }

    // Fonction de validation d'une question (qIndex correspond à l'indice de la question)
    function validateQuestion(qIndex) {
    const questionDiv = document.getElementById('qcm-question-' + qIndex);
    const checkboxes = questionDiv.querySelectorAll('input[type="checkbox"]');
    const selected = [];
    checkboxes.forEach((cb, index) => {
        if (cb.checked) {
        selected.push(index.toString());
        }
    });

    // Désactive les options et le bouton de validation pour éviter toute modification après réponse
    checkboxes.forEach(cb => cb.disabled = true);
    const validateBtn = questionDiv.querySelector('button');
    validateBtn.disabled = true;

    // Récupère les indices des bonnes réponses pour cette question
    const correctAnswers = questions[qIndex].options
                            .map((opt, index) => opt.correct ? index.toString() : null)
                            .filter(v => v !== null);

    let pointsAwarded = 0;
    let resultClass = "";
    let resultText = "";
    const selectedCorrect = selected.filter(val => correctAnswers.includes(val));

    if (selectedCorrect.length === 0) {
        // Aucune bonne réponse cochée
        resultClass = "qcm-incorrect";
        resultText = "Mauvaise réponse. " + questions[qIndex].explanation;
        pointsAwarded = 0;
    } else if (
        selected.length === correctAnswers.length &&
        selected.every(val => correctAnswers.includes(val))
    ) {
        // Toutes les bonnes réponses (et uniquement celles-ci) sont cochées
        resultClass = "qcm-correct";
        resultText = "Bonne réponse ! " + questions[qIndex].explanation;
        pointsAwarded = 1;
    } else {
        // Réponse partielle
        resultClass = "qcm-partial";
        const bonnesReponses = correctAnswers.map(i => questions[qIndex].options[i].text).join(", ");
        resultText = "Réponse partielle. Les bonnes réponses sont : " + bonnesReponses + ". " + questions[qIndex].explanation;
        pointsAwarded = 0.5;
    }

    totalScore += pointsAwarded;
    answeredQuestions++;
    updateScore();

    // Ajoute la classe de résultat et affiche l'explication
    questionDiv.classList.add(resultClass);
    const explanationDiv = document.createElement('div');
    explanationDiv.className = 'qcm-explanation';
    explanationDiv.textContent = resultText;
    questionDiv.appendChild(explanationDiv);

    checkAllAnswered();
    }

    // Charge les questions dans le conteneur
    function loadQuestions() {
    const container = document.getElementById('qcm-questionsContainer');
    questions.forEach((q, index) => {
        const qDiv = document.createElement('div');
        qDiv.className = 'qcm-question';
        qDiv.id = 'qcm-question-' + index;

        const qText = document.createElement('p');
        qText.textContent = q.question;
        qDiv.appendChild(qText);

        // Création des options sous forme de cases à cocher
        q.options.forEach((opt, i) => {
        const label = document.createElement('label');
        label.className = "qcm-option-label";
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.value = i;
        label.appendChild(checkbox);
        label.appendChild(document.createTextNode(" " + opt.text));
        qDiv.appendChild(label);
        });

        // Bouton de validation pour la question
        const btn = document.createElement('button');
        btn.textContent = "Valider";
        btn.addEventListener('click', function() {
        validateQuestion(index);
        });
        qDiv.appendChild(btn);

        container.appendChild(qDiv);
    });
    }

    // Redirige vers la page de la leçon suivante
    function goToNextLesson() {
    window.location.href = "lecon_suivante.html";
    }

    // Initialisation du QCM
    loadQuestions();
    updateScore();