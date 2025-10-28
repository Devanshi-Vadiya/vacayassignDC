const menuBtn = document.getElementById('menu-btn');
const navList = document.querySelector('.nav-links');

menuBtn.addEventListener('click', () => {
  navList.classList.toggle('active');
});
