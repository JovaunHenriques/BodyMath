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
const registrationForm = document.getElementById("registrationForm");
const message = document.getElementById("message");

registrationForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    // Get user input
    const username = registrationForm.username.value;
    const email = registrationForm.email.value;
    const password = registrationForm.password.value;

    // Perform client-side validation (you should also do server-side validation)
    if (username === "" || email === "" || password === "") {
        message.innerHTML = "Please fill in all fields.";
        return;
    }

    // You can now send this data to the server for server-side validation and registration.
    // Simulate a registration request (replace with actual AJAX request)
    message.innerHTML = "Registering...";

    // Simulate a successful registration
    setTimeout(() => {
        message.innerHTML = "Registration successful!";
    }, 2000);
});