const scrollDuration = getComputedStyle(document.documentElement).getPropertyValue('--scroll-duration')
const sections = document.querySelectorAll('.section');
let currentSection = 0;
let isScrolling = false;

function scrollToSection(index) {
    if (index >= 0 && index < sections.length) {
        isScrolling = true;
        sections[index].scrollIntoView({ behavior: 'smooth' });
        setTimeout(() => {
            isScrolling = false;
        }, parseInt(scrollDuration)); // Espera a que termine el scroll
    }
}

// Ruedita
window.addEventListener('wheel', (event) => {
    if (isScrolling) return;

    if (event.deltaY > 0) {
        // Scrolling down
        if (currentSection < sections.length - 1) {
            currentSection++;
            scrollToSection(currentSection);
        }
    } else {
        // Scrolling up
        if (currentSection > 0) {
            currentSection--;
            scrollToSection(currentSection);
        }
    }
});

// Felechas
window.addEventListener('keydown', (event) => {
    if (isScrolling) return;

    if (event.key === 'ArrowDown') {
        if (currentSection < sections.length - 1) {
            currentSection++;
            scrollToSection(currentSection);
        }
    } else if (event.key === 'ArrowUp') {
        if (currentSection > 0) {
            currentSection--;
            scrollToSection(currentSection);
        }
    }
});