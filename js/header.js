window.onscroll = function () {
  sticky_header();
};

var header = document.getElementById("header");
var sticky = header.offsetTop;

function sticky_header() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
