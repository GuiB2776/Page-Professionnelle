window.addEventListener('DOMContentLoaded', function() 
{
    // Changer les textes et liens du footer
    document.getElementById('site-name').textContent = "Guillaume BULLET";
    document.getElementById('copyright').textContent = new Date().getFullYear();
    document.getElementById('cgu-link').href = "cgu.html";
    document.getElementById('rgpd-link').href = "rgpd.html";
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

