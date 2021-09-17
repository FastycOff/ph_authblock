chrome.webNavigation.onCommitted.addListener(function (tab) {
    // Запрещает запуск скрипта во время загрузки других фреймов
    if (tab.frameId == 0) {
        chrome.tabs.query({ active: true, lastFocusedWindow: true }, tabs => {

            // Получает URL страницы
            let url = tabs[0].url;
            // Удаляет из URL необязательные определения протоколов и поддомен www
            let parsedUrl = url.replace("https://", "")
                .replace("http://", "")
                .replace("www.", "")

            let domain = parsedUrl.slice(0, parsedUrl.indexOf('/') == -1 ? parsedUrl.length : parsedUrl.indexOf('/'))
                .slice(0, parsedUrl.indexOf('?') == -1 ? parsedUrl.length : parsedUrl.indexOf('?'));

            try {
                if (domain.length < 1 || domain === null || domain === undefined) {
                    return;
                } else if (domain == "rt.pornhub.com") {
                    runBlockScript();
                    return;
                }
            } catch (err) {
                throw err;
            }

        });
    }
});
function runBlockScript() {
    // Встраивает в страницу скрипт из файла
    chrome.tabs.executeScript({
        file: 'PhBlock.js'
    });
    return true;
}
