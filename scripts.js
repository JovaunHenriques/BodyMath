// Add smooth scrolling to navigation links
document.querySelectorAll('a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 50,
                behavior: 'smooth'
            });
        }
    });
});

// Toggle navigation menu for smaller screens
const navbar = document.querySelector('.navbar');

navbar.addEventListener('click', () => {
    navbar.classList.toggle('active');
});
