function removeAds() 
{
    let container = document.getElementById("age-verification-container");
    let wraper = document.getElementById("age-verification-wrapper");
    let welcome = document.getElementById("welcome");
    let header = document.getElementById("headerMenuContainer");
    let mainmenu = document.getElementById("headerMainMenuInner");
    let menu = document.getElementById("js-networkBar");
    let ad = document.getElementsByClassName("alpha");
    let Titles = document.getElementsByClassName("sectionTitle");
    let adallert = document.getElementsByClassName("abAlertInner");


            // Удаляет рекламу!
            container.setAttribute("style", "display: none !important;");
            wraper.setAttribute("style", "display: none !important;");
            welcome.setAttribute("style", "display: none !important;");
            header.setAttribute("style", "display: none !important;");
            menu.setAttribute("style", "display: none !important;");
            mainmenu.setAttribute("style", "display: none !important;");  
            for (let index = 0; index < ad.length; index++) 
            {
                ad[index].setAttribute("style", "display: none !important;");
            }
            for (let index = 0; index < adallert.length; index++) 
            {
                adallert[index].setAttribute("style", "display: none !important;");
            }
            for (let index = 0; index < Titles.length; index++) 
            {
                Titles[index].setAttribute("style", "display: none !important;");
            }
}


removeAds();
