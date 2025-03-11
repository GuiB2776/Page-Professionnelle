function updatePreview() 
{
    let site = document.getElementById('site').value;
    let title = document.getElementById('title').value;
    let url = document.getElementById('url').value;
    let description = document.getElementById('description').value;

    let siteGroup = document.getElementById('site-group');
    let titleGroup = document.getElementById('title-group');
    let descriptionGroup = document.getElementById('description-group');
    let urlGroup = document.getElementById('url-group');

    let siteAdvice = document.getElementById('site-advice');
    let titleAdvice = document.getElementById('title-advice');
    let descriptionAdvice = document.getElementById('description-advice');
    let urlAdvice = document.getElementById('url-advice');

    let truncatedSite = site.length > 60 ? title.substring(0, 60) + "..." : site;
    let truncatedTitle = title.length > 60 ? title.substring(0, 60) + "..." : title;
    let truncatedDescription = description.length > 160 ? description.substring(0, 160) + "..." : description;

    let siteCount = document.getElementById('site-count');
    let titleCount = document.getElementById('title-count');
    let descriptionCount = document.getElementById('description-count');

    siteCount.textContent = site.length + " / 60";
    titleCount.textContent = title.length + " / 60";
    descriptionCount.textContent = description.length + " / 160";

    document.getElementById('preview-site').textContent = truncatedSite|| "Nom du site";
    document.getElementById('preview-url').innerHTML = `<span>${url || "https://exemple.com"}</span>`;
    document.getElementById('preview-title').textContent = truncatedTitle || "Titre de la page";
    document.getElementById('preview-description').textContent = truncatedDescription || "Description de la page";

    site.className = site.length > 60 ? "input-group error" : "input-group valid";
    siteAdvice.innerHTML = site.length > 60 ? "❌ Nom du site trop long." : "✅ Nom du site.";

    titleGroup.className = title.length < 50 ? "input-group warning" : (title.length > 60 ? "input-group error" : "input-group valid");
    titleAdvice.innerHTML = title.length < 50 ? "⚠️ Titre trop court." : (title.length > 60 ? "❌ Titre trop long." : "✅ Titre optimisé.");

    descriptionGroup.className = description.length < 140 ? "input-group warning" : (description.length > 160 ? "input-group error" : "input-group valid");
    descriptionAdvice.innerHTML = description.length < 140 ? "⚠️ Description trop courte." : (description.length > 160 ? "❌ Description trop longue." : "✅ Description optimisée.");

    urlGroup.className = url.startsWith("http://") || url.startsWith("https://") ? "input-group valid" : "input-group error";
    urlAdvice.innerHTML = url.startsWith("http://") || url.startsWith("https://") ? "✅ URL correcte." : "❌ L'URL doit commencer par 'http://' ou 'https://'.";
}