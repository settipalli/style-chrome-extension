// when the user clicks the extension icon on the toolbar
chrome.browserAction.onClicked.addListener(function (tab) {
    // send a message to the active tab
    chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
        var activeTab = tabs[0];
        chrome.tabs.sendMessage(
            activeTab.id,
            {
                "message": "clicked_browser_action_event",
                "url": chrome.extension.getURL("styles.css")
            },
            function(response) {
                if (response.status == "show_enabled_icon") {
                    chrome.browserAction.setIcon({path: "icons/icon_128.png"});
                } else {
                    chrome.browserAction.setIcon({path: "icons/icon_128_disabled.png"});
                }
            }
        );
    });
});
