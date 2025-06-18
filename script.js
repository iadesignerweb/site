// Menu fixo
window.addEventListener("scroll", () => {
  const header = document.getElementById("mainHeader");
  if (window.scrollY > 50) header.classList.add("scrolled");
  else header.classList.remove("scrolled");
});

// Slides
let slideIndex = 0;
const slides = document.querySelectorAll(".carousel-slide");
const carouselSlides = document.getElementById("carouselSlides");
const dotsContainer = document.getElementById("carouselDots");

slides.forEach((_, i) => {
  const dot = document.createElement("span");
  dot.className = "dot";
  dot.onclick = () => currentSlide(i);
  dotsContainer.appendChild(dot);
});

function showSlides() {
  if (slideIndex >= slides.length) slideIndex = 0;
  if (slideIndex < 0) slideIndex = slides.length - 1;
  carouselSlides.style.transform = `translateX(-${slideIndex * 100}%)`;
  const dots = document.querySelectorAll(".dot");
  dots.forEach((d, i) => d.classList.toggle("active", i === slideIndex));
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
document.getElementById("hamburger").addEventListener("click", () => {
  document.getElementById("navMenu").classList.toggle("active");
});
