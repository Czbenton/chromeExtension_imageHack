// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
  // Send a message to the active tab
  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {
      message: "clicked_browser_action"
    });
  });
});

document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("button1").addEventListener("click", popup);
});

document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("button2").addEventListener("click", popup2);
});

function popup() {
  let input = document.getElementById("input");

  chrome.tabs.query({ currentWindow: true, active: true }, function(tabs) {
    var activeTab = tabs[0];
    chrome.tabs.sendMessage(activeTab.id, {
      message: "clicked_browser_action",
      data: input.value
    });
  });
}

function popup2() {
  let input = document.getElementById("input");

  chrome.tabs.query({ currentWindow: true, active: true }, function(tabs) {
    var activeTab = tabs[0];
    chrome.tabs.sendMessage(activeTab.id, {
      message: "clicked_browser_action",
      data: "http://list.lisimg.com/image/2432547/500full.jpg"
    });
  });
}
