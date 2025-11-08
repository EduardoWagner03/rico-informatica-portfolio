import { useEffect } from 'react';

const useScrollAnimation = () => {
    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.15 // Elemento precisa estar 15% visível para animar
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        // Seleciona todos os elementos com classes de animação
        const animateElements = document.querySelectorAll(
            '.scroll-animate, .scroll-animate-left, .scroll-animate-right, .scroll-animate-scale'
        );

        animateElements.forEach((el) => observer.observe(el));

        // Cleanup
        return () => {
            animateElements.forEach((el) => observer.unobserve(el));
        };
    }, []);
};

export default useScrollAnimation;
