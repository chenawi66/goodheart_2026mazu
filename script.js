document.addEventListener('DOMContentLoaded', () => {
    // Scroll Reveal Animation
    const revealElements = document.querySelectorAll('.scroll-reveal');

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, {
        root: null,
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    });

    revealElements.forEach(el => revealObserver.observe(el));

    // Navbar Scroll Effect
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(253, 251, 247, 0.95)';
            navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.05)';
        } else {
            navbar.style.background = 'rgba(253, 251, 247, 0.8)';
            navbar.style.boxShadow = 'none';
        }
    });

    // Mobile specific: Make sure hero visual floats correctly
    // (CSS Animation takes care of this, no JS needed)
});
