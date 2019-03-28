// listen to the arbitrary JSON payload from background.js
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
        let id = "stylescss";
        if (request.message === "clicked_browser_action_event") {
            // if styles.css is active, toggle it.
            let element = document.getElementById(id);
            if (element) {
                element.parentNode.removeChild(element);
                sendResponse({status: "show_disabled_icon"});
            } else {
                let link = document.createElement("link");
                link.rel = "stylesheet";
                link.href = request.url;
                link.id = id;
                document.getElementsByTagName("head")[0].appendChild(link);
                sendResponse({status: "show_enabled_icon"});
            }
        }
});