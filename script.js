document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Intersection Observer for Fade-in Animations
    const faders = document.querySelectorAll('.fade-in');

    const appearOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('appear');
                appearOnScroll.unobserve(entry.target);
            }
        });
    }, appearOptions);

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });

    // 2. Smooth scrolling for anchor links (fallback for older browsers)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if(targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if(targetElement) {
                // Offset for fixed navbar
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
    
                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        });
    });
});

// =========================================
// CAROUSEL LOGIC
// =========================================
const carouselStates = {}; 

function moveSlide(trackId, direction) {
    const track = document.getElementById(trackId);
    if (!track) return;

    const images = track.querySelectorAll('.carousel-img');
    const totalImages = images.length;
    
    if (carouselStates[trackId] === undefined) {
        carouselStates[trackId] = 0;
    }

    carouselStates[trackId] += direction;

    if (carouselStates[trackId] >= totalImages) {
        carouselStates[trackId] = 0;
    } else if (carouselStates[trackId] < 0) {
        carouselStates[trackId] = totalImages - 1;
    }

    const offset = carouselStates[trackId] * -100; 
    track.style.transform = `translateX(${offset}%)`;
}