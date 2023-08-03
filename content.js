chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        if (request.action === "foldElements") {
            foldElements();
        } else if (request.action === "unfoldElements") {
            unfoldElements();
        }
    }
);

function foldElements() {
    var elements = document.querySelectorAll('div.diff-file-box.diff-box.file-content');
    for (var i = 0; i < elements.length; i++) {
        elements[i].setAttribute('data-folded', 'true');
    }
}

function unfoldElements() {
    var elements = document.querySelectorAll('div.diff-file-box.diff-box.file-content');
    for (var i = 0; i < elements.length; i++) {
        elements[i].setAttribute('data-folded', 'false');
    }
}