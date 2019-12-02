// JavaScript source code
window.onscroll = function () {
    dontScroll()
};

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function dontScroll() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}

