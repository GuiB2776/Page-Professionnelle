// Importez le script EmailJS (à placer dans le <head> ou directement ici)
const emailJsCdn = document.createElement('script');
emailJsCdn.src = "https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js";
document.head.appendChild(emailJsCdn);

emailJsCdn.onload = () => {
    // Initialisation EmailJS
    emailjs.init("c27ZuOzyFM1_RwVwJ"); // Remplacez "YOUR_PUBLIC_KEY" par votre clé publique EmailJS
};

// Gestion de l'envoi du formulaire
document.getElementById("contactForm").addEventListener("submit", async function (e) {
    e.preventDefault(); // Empêche le rechargement de la page

    const form = e.target;

    // Préparation des données du formulaire
    const formData = {
        name: form.name.value,
        email: form.email.value,
        subject: form.subject.value,
        message: form.message.value,
    };

    // Informations techniques
    const userAgent = navigator.userAgent; // Détails de l'appareil et du navigateur
    const platform = navigator.platform; // Système d'exploitation
    const language = navigator.language; // Langue du navigateur
    const screenResolution = `${screen.width}x${screen.height}`; // Résolution d'écran

    // Obtenir l'adresse IP (ajoutée de manière asynchrone)
    let ipAddress = "Inconnue";
    try {
        const response = await fetch("https://api.ipify.org?format=json");
        const data = await response.json();
        ipAddress = data.ip;
    } catch (error) {
        console.error("Erreur lors de la récupération de l'adresse IP :", error);
    }

    // Ajout des informations techniques aux données
    formData.user_agent = userAgent;
    formData.platform = platform;
    formData.language = language;
    formData.screen_resolution = screenResolution;
    formData.ip_address = ipAddress;

    // Envoi via EmailJS
    emailjs.send("service_659n0qf", "template_vxqwgvh", formData)
        .then(response => {
            alert("Message envoyé avec succès !");
            form.reset(); // Réinitialise le formulaire
        })
        .catch(error => {
            alert("Une erreur est survenue lors de l'envoi du message.");
            console.error("Erreur EmailJS :", error);
        });
});
