document.addEventListener("DOMContentLoaded", function () {
    // function addSmoothScrolling() {
    //     document.querySelectorAll('a').forEach(anchor => {
    //         anchor.addEventListener('click', function (e) {
    //             e.preventDefault();

    //             const targetId = this.getAttribute('href').substring(1);
    //             const targetElement = document.getElementById(targetId);

    //             if (targetElement) {
    //                 window.scrollTo({
    //                     top: targetElement.offsetTop - 50,
    //                     behavior: 'smooth'
    //                 });
    //             }
    //         });
    //     });
    // }

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
            
            setupNavigationLinks();
        });
    }


    // addSmoothScrolling();
});
// Handle click on show combined form button
function showRegistration(){
    let registrationform = document.getElementById("registration");
    registrationform.classList.remove("form--hidden");
}
function hideRegistrastion(){
    let registrationform = document.getElementById("registration");
    registrationform.classList.add("form--hidden");
}
function showLogin (){
    let loginform = document.getElementById("combinedFormModal");
    loginform.classList.remove("form--hidden");
}
function hideLogin (){
    let loginform = document.getElementById("combinedFormModal");
    loginform.classList.add("form--hidden");
}
function toggleRegistration (){
    let flipRegistragtion = document.getElementById("registration");
     if (flipRegistragtion.classList.contains("form--hidden")){
        
     }
}
function toggleForms () {
    const registrationForm = document.getElementById("combinedFormModal");
    if (registrationForm.classList.contains("form--hidden")){
        console.log("hiding registrationForm");
        hideRegistrastion();
        showLogin();
        
        }
        else {
            console.log("showing registrationForm");
            showRegistration();
            hideLogin();
        }
    
};

// Handle click on Log In/Sign Up link
 
    // Handle click on close modal button
    const closeModalButton = document.getElementById("closeModal");
    closeModalButton.addEventListener("click", function () {
        toggleForms();
    });

// function setInputError(inputElement, message) {
//     inputElement.classList.add("form__input--error");
//     inputElement.parentElement.querySelector(".form__input-error-message").textContent = message;
// }

// function clearInputError(inputElement) {
//     inputElement.classList.remove("form__input--error");
//     inputElement.parentElement.querySelector(".form__input-error-message").textContent = "";
// }