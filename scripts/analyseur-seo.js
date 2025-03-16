document.getElementById("text-input").addEventListener("input", analyzeText);

function analyzeText() {
    let text = document.getElementById("text-input").value;
    let wordCount = countWords(text);
    let sentenceCount = countSentences(text);
    let syllableCount = countSyllables(text);
    let fleschScore = calculateFleschReadingEase(wordCount, sentenceCount, syllableCount);
    let gradeLevel = calculateFleschKincaidGradeLevel(wordCount, sentenceCount, syllableCount);

    // Mise à jour des valeurs affichées
    document.getElementById("char-count").textContent = text.length;
    document.getElementById("word-count").textContent = wordCount;
    document.getElementById("sentence-count").textContent = sentenceCount;
    document.getElementById("syllable-count").textContent = syllableCount;
    document.getElementById("flesch-score").textContent = fleschScore.toFixed(2);
    document.getElementById("grade-level").textContent = gradeLevel.toFixed(2);

    generateReadabilityAdvice(wordCount, sentenceCount, syllableCount, fleschScore, gradeLevel);
}

// Compte le nombre de mots
function countWords(text) {
    let words = text.match(/\b\w+\b/g);
    return words ? words.length : 0;
}

// Compte le nombre de phrases
function countSentences(text) {
    let sentences = text.split(/[.!?]+/);
    return sentences.filter(s => s.trim().length > 0).length;
}

// Compte le nombre de syllabes (approximation basée sur les voyelles)
function countSyllables(text) {
    let words = text.match(/\b\w+\b/g);
    if (!words) return 0;

    let syllableCount = 0;

    words.forEach(word => {
        // Retirer les lettres muettes à la fin (ex: "parle", "mange", "aime")
        word = word.toLowerCase().replace(/(?:es|ed|e)$/, '');

        // Compter les séquences de voyelles comme syllabes
        let matches = word.match(/[aeiouyàâäéèêëîïôöùûü]+/g);
        let count = matches ? matches.length : 0;

        // Gérer les mots courts qui contiennent une seule voyelle mais sont longs
        if (count === 0) count = 1; // Ex: "peu", "haut"

        // Ajout de corrections spécifiques au français
        if (word.length <= 3) count = 1; // Ex: "un", "le", "tu"

        syllableCount += count;
    });

    return syllableCount;
}

// Calcul du Score de Lisibilité Flesch (FRE)
function calculateFleschReadingEase(words, sentences, syllables) {
    if (words === 0 || sentences === 0) return 0;
    return 206.835 - (1.015 * (words / sentences)) - (84.6 * (syllables / words));
}

// Calcul du niveau scolaire requis (FKGL)
function calculateFleschKincaidGradeLevel(words, sentences, syllables) {
    if (words === 0 || sentences === 0) return 0;
    return (0.39 * (words / sentences)) + (11.8 * (syllables / words)) - 15.59;
}

// Génère les conseils d'amélioration
function generateReadabilityAdvice(words, sentences, syllables, fleschScore, gradeLevel) {
    let adviceList = document.getElementById("readability-advice");
    adviceList.innerHTML = ""; // Réinitialisation des conseils

    if (words < 50) {
        addAdvice("• ❌ Votre texte est trop court. Ajoutez plus de contenu pertinent.");
    }
    if (words > 800) {
        addAdvice("• ⚠️ Votre texte est trop long. Retirez du contenu moins pertinent.");
    }
    if (fleschScore < 50) {
        addAdvice("• ❌ Le texte est difficile à lire. Simplifiez les phrases et utilisez des mots plus courts.");
    }
    if (sentences > 0 && (words / sentences) > 20) {
        addAdvice("• ⚠️ Vos phrases sont trop longues. Essayez de les raccourcir pour améliorer la lisibilité.");
    }
    if ((syllables / words) > 1.5) {
        addAdvice("• ⚠️ Vous utilisez trop de mots complexes. Remplacez-les par des termes plus simples.");
    }
    if (fleschScore > 90) {
        addAdvice("• ⚠️ Le texte est peut-être trop simple. Ajoutez des détails ou des termes plus précis. (FRE)");
    }
    if (gradeLevel > 12) {
        addAdvice("• ❌ Le niveau de lecture est trop avancé. Simplifiez vos explications. (FKGL)");
    }
    if (gradeLevel < 5) {
        addAdvice("• ⚠️ Le texte est très basique. Ajoutez des informations plus détaillées. (FKGL)");
    }
}

// Ajoute un conseil à la liste
function addAdvice(text) {
    let li = document.createElement("li");
    li.textContent = text;
    document.getElementById("readability-advice").appendChild(li);
}

