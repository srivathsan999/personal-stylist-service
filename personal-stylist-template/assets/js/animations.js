/* 
 * ANTIGRAVITY - Personal Stylist Template
 * GSAP Animations
 */

document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(ScrollTrigger);

    // Hero Animation (Fade in Staggered)
    const tl = gsap.timeline();
    tl.from(".hero-content > *", {
        y: 50,
        opacity: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: "power2.out"
    })
        .from(".hero-image", {
            scale: 0.9,
            opacity: 0,
            duration: 1.5,
            ease: "power2.out"
        }, "-=1");

    // Section Headers
    gsap.utils.toArray(".section-header").forEach(header => {
        gsap.from(header, {
            scrollTrigger: {
                trigger: header,
                start: "top 80%",
                toggleActions: "play none none reverse"
            },
            y: 30,
            opacity: 0,
            duration: 1,
            ease: "power2.out"
        });
    });

    // Service Cards (Staggered)
    gsap.from(".service-card", {
        scrollTrigger: {
            trigger: ".services-grid",
            start: "top 80%"
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out"
    });

    // Portfolio Items
    gsap.from(".portfolio-item", {
        scrollTrigger: {
            trigger: ".portfolio-grid",
            start: "top 80%"
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out"
    });

    // Intersection Observer for .fade-up elements
    const fadeObservers = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-up').forEach(el => {
        fadeObservers.observe(el);
    });
});
