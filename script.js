function toggleMenu() {
  const menu = document.getElementById('dropdown-menu');
  menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
}
let slideIndex = 0;
const slides = document.querySelectorAll('.slider img');
function showSlides() {
  slides.forEach(slide => slide.classList.remove('active'));
  slideIndex = (slideIndex + 1) % slides.length;
  slides[slideIndex].classList.add('active');
}
setInterval(showSlides, 3000);
window.onload = () => slides[0].classList.add('active');
