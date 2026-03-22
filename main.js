// Initialize AOS
AOS.init({
    duration: 1000,
    once: true,
    offset: 100
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Navbar background change on scroll
const nav = document.querySelector('.glass-nav');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        nav.style.background = 'rgba(10, 10, 12, 0.95)';
        nav.style.height = '70px';
    } else {
        nav.style.background = 'rgba(10, 10, 12, 0.7)';
        nav.style.height = '80px';
    }
});

// Cursor animation (optional but premium)
const createCursor = () => {
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    document.body.appendChild(cursor);

    document.addEventListener('mousemove', e => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });
};

// Add custom styles for cursor dynamicly
const style = document.createElement('style');
style.textContent = `
    .custom-cursor {
        width: 20px;
        height: 20px;
        background: var(--primary-glow);
        border-radius: 50%;
        position: fixed;
        pointer-events: none;
        z-index: 9999;
        transform: translate(-50%, -50%);
        transition: transform 0.1s ease;
    }
`;
// document.head.appendChild(style);
// createCursor(); // Uncomment to enable custom cursor
