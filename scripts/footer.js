window.addEventListener('DOMContentLoaded', function() 
{
    // Changer les textes et liens du footer
    document.getElementById('site-name').textContent = "Guillaume BULLET";
    document.getElementById('copyright').textContent = new Date().getFullYear();
    document.getElementById('cgu-link').href = "CGU.html";
    document.getElementById('rgpd-link').href = "RGPD.html";
});

//    function reloadPageOnLoad() 
//    {
//        window.addEventListener("load", function() 
//        {
//            location.reload();
//        });
//    }


//    function reloadPageOnLoad() 
//    {
//        var isReloaded = false;
//    
//        window.addEventListener("load", function() {
//       if (!isReloaded) {
//            location.reload();
//            isReloaded = true;
//        }
//        });
//    }

