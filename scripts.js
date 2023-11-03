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
    const closeModal = document.getElementById("closeModal");

    toggleFormButton.addEventListener("click", function () {
        combinedFormModal.style.display = "block";
    });

    closeModal.addEventListener("click", function () {
        combinedFormModal.style.display = "none";
    });
});
