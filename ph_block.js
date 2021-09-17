function removeAds() 
{
    let container = document.getElementById("age-verification-container");
    let wraper = document.getElementById("age-verification-wrapper");

            // Удаляет рекламу!
            container.setAttribute("style", "display: none !important;");
            wraper.setAttribute("style", "display: none !important;");
}


removeAds();
