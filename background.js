
chrome.action.onClicked.addListener(function(tab) {
  chrome.windows.create({
    url: chrome.runtime.getURL("popup.html"),
    type: "popup",
    height: 900, width:1000
  });
});