function generateUTM() 
{
    let baseUrl = document.getElementById('utm-base-url').value.trim();
    if (!baseUrl) {
        alert('Veuillez entrer une URL de base.');
        return;
    }
    
    try {
        let url = new URL(baseUrl);
        let params = new URLSearchParams();
        
        let utmSource = document.getElementById('utm-source').value.trim();
        let utmMedium = document.getElementById('utm-medium').value.trim();
        let utmCampaign = document.getElementById('utm-campaign').value.trim();
        let utmTerm = document.getElementById('utm-term').value.trim();
        let utmContent = document.getElementById('utm-content').value.trim();
        
        if (utmSource) params.append('utm_source', utmSource);
        if (utmMedium) params.append('utm_medium', utmMedium);
        if (utmCampaign) params.append('utm_campaign', utmCampaign);
        if (utmTerm) params.append('utm_term', utmTerm);
        if (utmContent) params.append('utm_content', utmContent);
        
        document.getElementById('utm-generated-url').textContent = url.origin + url.pathname + '?' + params.toString();
    } catch (error) {
        alert("L'URL de base est invalide. Assurez-vous qu'elle commence par http:// ou https://");
    }
}

function copyURL() {
    let urlText = document.getElementById('utm-generated-url').textContent;
    if (!urlText) {
        alert("Veuillez d'abord générer une URL.");
        return;
    }
    
    navigator.clipboard.writeText(urlText).then(() => {
        alert('URL copiée dans le presse-papiers !');
    }).catch(err => {
        console.error('Erreur lors de la copie : ', err);
    });
}