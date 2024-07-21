document.addEventListener('DOMContentLoaded', () => {
    let currentSlide = 0;

    function moveSlide(direction) {
        const slides = document.querySelectorAll('.carousel-item');
        const totalSlides = slides.length;

        console.log('Current Slide Before:', currentSlide);
        slides[currentSlide].classList.remove('active');

        currentSlide = (currentSlide + direction + totalSlides) % totalSlides;

        console.log('Current Slide After:', currentSlide);
        slides[currentSlide].classList.add('active');
    }

    document.querySelector('.prev').addEventListener('click', function() {
        moveSlide(-1);
    });

    document.querySelector('.next').addEventListener('click', function() {
        moveSlide(1);
    });

    const slides = document.querySelectorAll('.carousel-item');
    slides[currentSlide].classList.add('active');
    console.log('Initial Load: Slide 0 Active');
});
