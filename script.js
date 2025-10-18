// Hero slider
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    if (i === index) {
      slide.classList.add('active');
    }
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

// Start slider
window.addEventListener('load', () => {
  showSlide(currentSlide);
  setInterval(nextSlide, 5000);
});

// Simple add-to-cart alert
function addToCart(productName) {
  alert(productName + " added to cart!");
}

// Contact form (demo submission)
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert("Thank you for your message! We'll get back to you soon.");
    contactForm.reset();
  });
}
