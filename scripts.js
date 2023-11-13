document.addEventListener("DOMContentLoaded", function () {
    // Add smooth scrolling to navigation links
    document.querySelectorAll('a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
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

    // Event listeners for navigation links
    const navigateTo = (page) => {
        window.location.href = `./${page}.html`;
    };

    document.getElementById("linkedin-Link").addEventListener("click", function () {
        navigateTo("https://www.linkedin.com/in/jovaun-henriques-37b61b195/");
    });

    document.getElementById("homePage").addEventListener("click", function () {
        navigateTo("index");
    });

    document.getElementById("aboutPage").addEventListener("click", function () {
        navigateTo("about page");
    });

    document.getElementById("contactPage").addEventListener("click", function () {
        navigateTo("contactpage");
    });

    // Toggle navigation menu for smaller screens
    const navbar = document.querySelector('.navbar');

    navbar.addEventListener('click', () => {
        navbar.classList.toggle('active');
    });

    // Toggle Log In and Sign Up forms
    const showLoginFormButton = document.getElementById("showLogin");
    const showCreateAccountFormButton = document.getElementById("showCreateAccount");
    const loginForm = document.getElementById("loginForm");
    const createAccountForm = document.getElementById("createAccountForm");

    showLoginFormButton.addEventListener("click", () => {
        loginForm.classList.remove("form--hidden");
        createAccountForm.classList.add("form--hidden");
    });

    showCreateAccountFormButton.addEventListener("click", () => {
        loginForm.classList.add("form--hidden");
        createAccountForm.classList.remove("form--hidden");
    });

    // Toggle combined form modal
    const toggleFormButton = document.getElementById("toggleForm");
    const combinedFormModal = document.getElementById("combinedFormModal");

    toggleFormButton.addEventListener("click", function () {
        if (combinedFormModal.style.display === "none" || combinedFormModal.style.display === "") {
            combinedFormModal.style.display = "block";
        } else {
            combinedFormModal.style.display = "none";
        }
    });

    // Handle click on login/sign-up button
    const loginSignupButton = document.getElementById("toggleForm");

    loginSignupButton.addEventListener("click", function (e) {
        e.preventDefault();
        // Add your logic for handling the click event here
        console.log("Login/Sign-up button clicked!");
        const registrationForm = document.getElementById("registration");
        registrationForm.classList.toggle("form--hidden");
    });
});
