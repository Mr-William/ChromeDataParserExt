// background.js

// Called when the user clicks on the browser action. This will get data from the page
chrome.action.onClicked.addListener((tabs) => {
  // Send a message to the active tab
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    var activeTab = tabs[0];
    chrome.tabs.sendMessage(activeTab.id, {"message": "clicked_browser_action"});
  });
});

chrome.runtime.onMessage.addListener();