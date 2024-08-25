// eslint-disable-next-line no-undef
chrome.runtime.onInstalled.addListener(() => {
    console.log("Extension installed and ready.");
});

// eslint-disable-next-line no-undef
chrome.commands.onCommand.addListener((command) => {
    if (command === "open_popup") {
        // eslint-disable-next-line no-undef
        chrome.action.openPopup();
    }
});
