import ScrollReveal from 'ScrollReveal';

const scrollContainer = '[data-fade-on-scroll]';
const scrollLine = '[data-fade-line]';
const scrollZoom = '[data-fade-zoom]';
const scrollDelay = '[data-fade-delay]';
const scrollLeft = '[data-fade-left]';
const scrollRight = '[data-fade-right]';

window.sr = ScrollReveal();
sr.reveal(scrollContainer, { scale: 1, distance: '70px', duration: 1000, easing: 'ease-out' });
sr.reveal(scrollLine, { distance: '70px', easing: 'linear', duration: 1000 });
sr.reveal(scrollZoom, { duration: 1200 });
sr.reveal(scrollDelay, { duration: 1000, distance: '200px' }, 100);