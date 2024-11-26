// Smooth Scrolling
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// script.js

let currentSlide = 0;

function moveSlide(direction) {
    const track = document.querySelector('.carousel-track');
    const slides = document.querySelectorAll('.carousel-slide');
    const totalSlides = slides.length;

    currentSlide += direction;

    // Ciclo do carrossel (volta ao início ou ao fim)
    if (currentSlide < 0) {
        currentSlide = totalSlides - 1;
    } else if (currentSlide >= totalSlides) {
        currentSlide = 0;
    }

    // Mover o carrossel
    const offset = -currentSlide * slides[0].clientWidth;
    track.style.transform = `translateX(${offset}px)`;
}
