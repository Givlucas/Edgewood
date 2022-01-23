const menubtn = document.querySelector('.hamburger');
const dropbtn = document.querySelector('.dropbutton');
let menuOpen = false;

menubtn.addEventListener('click', () => {
  if(!menuOpen) {
    menubtn.classList.add('open');
    dropbtn.classList.add('open');
    menuOpen = true;
  } else {
    menubtn.classList.remove('open');
    dropbtn.classList.remove('open');
    menuOpen = false;
  }
});

window.onscroll = function() {stickyHeader()};

var header = document.getElementById("head");
var buffer = document.getElementById("buff");
var img = document.getElementById("img");
var title = document.getElementById("title");

var sticky = header.offsetTop;

function stickyHeader() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
    header.classList.add("shrink-txt");
    buffer.classList.add("shrink");
    title.classList.add("grow");
    img.classList.add("shrink");
  } else {
    header.classList.remove("sticky");
    header.classList.remove("shrink-txt");
    buffer.classList.remove("shrink");
    title.classList.remove("grow");
    img.classList.remove("shrink");
  }
}
