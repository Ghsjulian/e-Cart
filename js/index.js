"use strict";
function dom(tag) {
    return document.querySelector(tag);
}

dom("#mobile-btn").onclick = () => {
    var isOpen = dom("#close").getAttribute("open");
    if (isOpen === "false") {
        dom("#close").style.display = "block";
        dom("#close").setAttribute("open", "true");
    } else {
        dom("#close").style.display = "none";
        dom("#close").setAttribute("open", "false");
    }
};
