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
//<--Registration js-->
const signupButton = document.getElementById("signupButton");
const registrationModal = document.getElementById("registrationModal");
const closeModal = document.getElementById("closeModal");
const registrationForm = document.getElementById("registrationForm");
const message = document.getElementById("message");

// Open the registration modal when the "Sign Up" button is clicked
signupButton.addEventListener("click", () => {
    registrationModal.style.display = "block";
});

// Close the registration modal when the "X" button is clicked
closeModal.addEventListener("click", () => {
    registrationModal.style.display = "none";
});

// Close the registration modal when the user clicks outside of it
window.addEventListener("click", (e) => {
    if (e.target === registrationModal) 
        registrationModal.style.display = "none";
    });

// Handle registration form submission (similar to the previous example)
registrationForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    // ...
    // (Client-side validation and registration logic as before)
    // ...

    // Simulate a successful registration
    message.innerHTML = "Registration successful!";
});