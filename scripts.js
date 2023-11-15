function showLoginPopup() {
    let form = document.getElementById("registration");
    form.classList.remove("form--hidden");
}

function toggleForm() {
    let form_2 = document.getElementById("combinedFormModal");
    if (window.getComputedStyle(form_2).display === 'block') {
        form_2.classList.remove("form--hidden");
    }
}

document.addEventListener("DOMContentLoaded", function () {
    function addSmoothScrolling() {
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
    }

    // Event listeners for navigation links
    function navigateTo(page) {
        window.location.href = `./${page}.html`;
    }

    function setupNavigationLinks() {
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
    }

    const toggleForms = () => {
        const registrationForm = document.getElementById("registration");
        const combinedFormModal = document.getElementById("combinedFormModal");

        registrationForm.classList.toggle("form--hidden");
        combinedFormModal.classList.toggle("form--hidden");
    };

    const closeModal = () => {
        const combinedFormModal = document.getElementById("combinedFormModal");
        combinedFormModal.style.display = "none";
    };

    const showCombinedForm = () => {
        const combinedFormModal = document.getElementById("combinedFormModal");
        combinedFormModal.style.display = "block";
    };

    // Handle click on Log In/Sign Up link
    const toggleFormLink = document.getElementById("toggleForm");
    toggleFormLink.addEventListener("click", function (e) {
        e.preventDefault();
        toggleForms();
    });

    // Handle click on close modal button
    const closeModalButton = document.getElementById("closeModal");
    closeModalButton.addEventListener("click", function () {
        closeModal();
    });

    // Handle click on show combined form button
    const toggleFormButton = document.getElementById("toggleForm");
    toggleFormButton.addEventListener("click", function () {
        showCombinedForm();
    });

    addSmoothScrolling();
    setupNavigationLinks();
});
