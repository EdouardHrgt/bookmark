const openMenu = document.querySelector('.open-menu');
const closeMenu = document.querySelector('.close-menu');
const navBar = document.querySelector('.navbar');

openMenu.addEventListener('click', () => {
  openMenu.classList.toggle('active');
  closeMenu.classList.toggle('active');
  navBar.style.display = 'block';
});

closeMenu.addEventListener('click', () => {
  openMenu.classList.toggle('active');
  closeMenu.classList.toggle('active');
  navBar.style.display = 'none';
});
