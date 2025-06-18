// Menu fixo com scroll
window.addEventListener('scroll', () => {
  const header = document.getElementById('mainHeader');
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// Carrossel
let slideIndex = 0;
const slides = document.querySelectorAll('.carousel-slide');
const carouselSlides = document.getElementById('carouselSlides');
const dotsContainer = document.getElementById('carouselDots');

slides.forEach((_, i) => {
  const dot = document.createElement('span');
  dot.classList.add('dot');
  dot.setAttribute('data-index', i);
  dot.onclick = () => currentSlide(i);
  dotsContainer.appendChild(dot);
});
const dots = document.querySelectorAll('.dot');

function showSlides() {
  if (slideIndex >= slides.length) slideIndex = 0;
  if (slideIndex < 0) slideIndex = slides.length - 1;
  carouselSlides.style.transform = `translateX(-${slideIndex * 100}%)`;
  dots.forEach((d, i) => d.classList.toggle('active', i === slideIndex));
}
function moveSlide(n) {
  slideIndex += n;
  showSlides();
}
function currentSlide(n) {
  slideIndex = n;
  showSlides();
}
showSlides();

// Menu mobile
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});
