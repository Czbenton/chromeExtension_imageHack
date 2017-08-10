chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.message === "clicked_browser_action") {
    startImageHack(document.body, request.data);
  }
});

function startImageHack(startingElement, imageSource) {
  for (var i = 0; i < startingElement.children.length; i++) {
    var element = startingElement.children[i];
    if (!element.children.length) {
      let img = `<img src = ${imageSource} style="width: 10rem;">`;
      element.innerHTML = img;
    } else {
      startImageHack(element, imageSource);
    }
  }
}
