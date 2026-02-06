const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById('nav-close');
const navMenu = document.getElementById("nav-menu");

if(navToggle){
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('active');
  });
}

if(navClose){
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('active');
  });
}