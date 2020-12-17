console.log("[Barack Obama]:   I\'m the 44th!");
let images = document.images;
setInterval(function(){
	for (imgElement of images) {
		imgElement.src = chrome.extension.getURL("./obama.jpg");
	}
}, 2000)