// Show Menu

const showmenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('show');
    });
  }
};
showmenu('nav_toggle', 'nav_menu');

//Active & Remove Active
const navLink = document.querySelectorAll('.nav_link');
navLink.forEach((n) => n.classList.remove('active'));
function linkAction() {
  navLink.forEach((n) => n.classList.remove('active'));
  this.classList.add('active');

  const navMenu = document.getElementaryById('nav_menu');
  navMenu.classList.remove('show');
}

navLink.forEach((n) => n.addEventListener('click', linkAction));
