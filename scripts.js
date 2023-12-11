document.addEventListener("DOMContentLoaded", function () {
    scaleMap();
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

            setupNavigationLinks();
        });
    }


    // addSmoothScrolling();
});

window.addEventListener("resize", scaleMap);
// Handle click on show combined form button
function showRegistration() {
    let registrationform = document.getElementById("registration");
    registrationform.classList.remove("form--hidden");
}
function hideRegistrastion() {
    let registrationform = document.getElementById("registration");
    registrationform.classList.add("form--hidden");
}
function showLogin() {
    let loginform = document.getElementById("combinedFormModal");
    loginform.classList.remove("form--hidden");
}
function hideLogin() {
    let loginform = document.getElementById("combinedFormModal");
    loginform.classList.add("form--hidden");
}
function toggleRegistration() {
    let flipRegistragtion = document.getElementById("registration");
    if (flipRegistragtion.classList.contains("form--hidden")) {
        showRegistration();
    } else {
        hideRegistrastion();
    }
}
function toggleForms() {
    const registrationForm = document.getElementById("combinedFormModal");
    if (registrationForm.classList.contains("form--hidden")) {
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

function validateForm() {
    // Get form elements
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;

    // Reset error messages
    document.getElementById("usernameError").innerText = "";
    document.getElementById("emailError").innerText = "";
    document.getElementById("passwordError").innerText = "";
    document.getElementById("confirmPasswordError").innerText = "";

    // Validate username
    if (username.length < 5 || username.length > 15) {
        document.getElementById("usernameError").innerText = "Username should be between 5 and 15 characters.";
        return;
    }

    // Validate email
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        document.getElementById("emailError").innerText = "Invalid email address.";
        return;
    }

    // Validate password
    if (password.length < 8) {
        document.getElementById("passwordError").innerText = "Password should be at least 8 characters.";
        return;
    }

    // Validate confirm password
    if (password !== confirmPassword) {
        document.getElementById("confirmPasswordError").innerText = "Passwords do not match.";
        return;
    }

    // If all validations pass, you can submit the form or perform other actions.
    console.log("Form submitted successfully!")
    alert("Form submitted successfully!");
}

function bodyFunction() {
    const diagramImages = document.querySelectorAll('#image_map');

    diagramImages.forEach(image => {
        image.addEventListener('click', function () {
            // Handle click event for each image
            const imageId = this.id;
            alert(`You clicked on ${imageId}`);
            // Add more interactive functionality here
        });
    });
}

const resizeObserver = new ResizeObserver((entries) => {
    for (const entry of entries) {
        // let rawPoints = entry.target.getAttribute("coords");
        let image = document.getElementById(entry.target.id)
        let map = document.getElementById(`${entry.target.id}Map`)
        scaleMap(image, map);
    }
});

let limbs = document.getElementsByClassName("limbs");
for (const limb of limbs) {
    resizeObserver.observe(limb);
}

function scaleMap(image, map) {
    let oldHeight = image.naturalHeight;
    let oldWidth = image.naturalWidth;
    let newHeight = image.clientHeight;
    let newWidth = image.clientWidth;

    let heightRatio = newHeight / oldHeight;
    let widthRatio = newWidth / oldWidth;

    for (let i = 0; i < map.childElementCount; i++) {
        let rawCoords = map.children[i].getAttribute("originalCoords");
        let rawPoints = rawCoords.split(",")
        let scaledCoords = ""
        for (let j = 0; j < rawPoints.length; j += 2) {
            let point = { x: '0', y: '0' };
            point.x = rawPoints[j];
            point.y = rawPoints[j + 1];
            let scaledPoint = {
                "x": Math.floor(point.x * heightRatio),
                "y": Math.floor(point.y * widthRatio)
            }
            scaledCoords += `${scaledPoint.x},${scaledPoint.y},`;
        }
        scaledCoords = scaledCoords.slice(0, -1);
        map.children[i].setAttribute("coords", scaledCoords);
        console.log(`Raw Coordinates: ${rawCoords}`);
        console.log(`Scaled Coordinates: ${scaledCoords}`);
    }
}
 // Function to show the pop-up
 function showPopup() {
    var popup = document.getElementById("popup");
    popup.style.display = "block";
}

// Function to hide the pop-up
function hidePopup() {
    var popup = document.getElementById("popup");
    popup.style.display = "none";
}
// for (const area of areaElements) {
//     area.classList.remove("glow");

//     // Add event listeners for hover effect
//     area.addEventListener("mouseenter", function () {
//         this.classList.add("glow");
//     });

//     area.addEventListener("mouseleave", function () {
//         this.classList.remove("glow");
//     });
// }