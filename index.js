// Initialize Lucide icons
lucide.createIcons();

document.addEventListener('DOMContentLoaded', () => {
    // Carrusel functionality for each burger
    const carousels = {
        clasica: {
            container: document.getElementById('carousel-clasica'),
            currentSlide: 0,
            totalSlides: 3
        },
        bbq: {
            container: document.getElementById('carousel-bbq'),
            currentSlide: 0,
            totalSlides: 3
        },
        mexicana: {
            container: document.getElementById('carousel-mexicana'),
            currentSlide: 0,
            totalSlides: 3
        }
    };

    // Update carousel position
    const updateCarousel = (id) => {
        const carousel = carousels[id];
        const slideWidth = carousel.container.offsetWidth;
        carousel.container.style.transform = `translateX(-${carousel.currentSlide * slideWidth}px)`;
    };

    // Previous button click handler
    document.querySelectorAll('.carousel-button.prev').forEach(button => {
        button.addEventListener('click', () => {
            const id = button.dataset.carousel;
            if (carousels[id].currentSlide > 0) {
                carousels[id].currentSlide--;
                updateCarousel(id);
            }
        });
    });

    // Next button click handler
    document.querySelectorAll('.carousel-button.next').forEach(button => {
        button.addEventListener('click', () => {
            const id = button.dataset.carousel;
            if (carousels[id].currentSlide < carousels[id].totalSlides - 1) {
                carousels[id].currentSlide++;
                updateCarousel(id);
            }
        });
    });

    // Initialize all carousels
    Object.keys(carousels).forEach(id => {
        updateCarousel(id);
    });

    // Update carousels on window resize
    window.addEventListener('resize', () => {
        Object.keys(carousels).forEach(id => {
            carousels[id].currentSlide = 0;
            updateCarousel(id);
        });
    });

    // Mobile menu functionality
    const menuIcon = document.querySelector('.logo i');
    const nav = document.querySelector('nav');
    
    menuIcon?.addEventListener('click', () => {
        nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
    });

    // Hide menu on window resize (above mobile breakpoint)
    window.addEventListener('resize', () => {
        if (window.innerWidth >= 768) {
            nav.style.display = 'flex';
        } else {
            nav.style.display = 'none';
        }
    });
});