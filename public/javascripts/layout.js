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

var sticky = header.offsetTop;

function stickyHeader() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
