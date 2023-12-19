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

            setupNavigationLinks();
        });
    }
    // addSmoothScrolling();
});
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
    // Get all elements
    var links = document.querySelectorAll('area');

    // Iterate over each anchor element
    links.forEach(function(link) {
        // Add mouseover event listener
        link.addEventListener('mouseover', function(e) {
            // Get the tooltip element using the data attribute
            let tooltipElement = document.getElementById('popup');

            // Calculate the position and display the tooltip
            tooltipElement.style.left = e.pageX + -127 + 'px';
            tooltipElement.style.top = e.pageY + -297 + 'px';
            tooltipElement.style.display = 'block';
        });

        // Add mouseout event listener
        link.addEventListener('mouseout', function() {
            // Get the tooltip element using the data attribute
            let tooltipElement = document.getElementById('popup');

            // Hide the tooltip
            tooltipElement.style.display = 'none';
        });
    });

    function calculateCalorie(obj)
    {
        const age = obj.form.age.value;
        const gender = obj.form.gender.value;
        const bodyFat = obj.form.bodyFat.value;
        const height = obj.form.height.value;
        const weight = obj.form.weight.value;
        const activity = obj.form.activity.value;
        const unit = obj.form.unit.value;
        const formula = obj.form.formula.value;

        let BMR = '';
        if(formula == 0) // Mifflin
        {
            BMR = Mifflin(gender, age, bodyFat, height, weight);
        }
        else if(formula == 1) // Harris
        {
            BMR = Harris(gender, age, bodyFat, height, weight);
        }
        else if(formula == 2) // Katch
        {
            BMR = Katch(bodyFat, weight);
        }

        let ret = parseFloat(BMR)*parseFloat(activity);
        if(unit == 'kilojoules')
        {
            ret = (ret*4.1868);
        }

        document.querySelector(".ans_calculate").innerHTML = '<div class="container"><h4 class="text-center form-control my-3 text-danger fs-4">You should consume <span class="text-white">'+Math.ceil(ret)+' '+unit+'/day </span> of calorie to maintain your weight.</h4></div>';
    }

    function Mifflin(gender, age, bodyFat, height, weight)
    {
        let BMR = (10*weight) + (6.25*height) - (5*age) + 5;
        if(gender == 1) // Female
        {
            BMR = (10*weight) + (6.25*height) - (5*age) - 161;
        }

        return BMR;
    }

    function Harris(gender, age, bodyFat, height, weight)
    {
        let BMR = (13.397*weight) + (4.799*height) - (5.677*age) + 88.362;
        if(gender == 1) // Female
        {
            BMR = (9.247*weight) + (3.098*height) - (4.330*age) + 447.593;
        }

        return BMR;
    }

    function Katch(bodyFat, weight)
    {
        let BMR = 370 + 21.6*(1 - (bodyFat/100))*weight;

        return BMR;
    }

    function openchatBox() {
        document.getElementById('chatBox').style.display = 'block';
        // document.getElementById('overlay').style.display = 'block';
    }
    
    // Function to close the chatBox
    function closechatBox() {
        document.getElementById('chatBox').style.display = 'none';
        // document.getElementById('overlay').style.display = 'none';
    }
    
    
    // Function to clear the chat
    function clearChat() {
        document.getElementById('chat-content').value = '';
    }
// function addAnnotation() {
//     var userNote = prompt('Add a note:');
//     // Store userNote and display it on the body map
//     // (Actual implementation may involve saving data to a database)
//     alert('Note added: ' + userNote);
// }
//     // Example using vanilla JavaScript
//     function addAnnotation() {
//         var userNote = prompt('Add a note:');
        
//         // Store userNote in local storage (you may want to use a database)
//         var storedNotes = localStorage.getItem('userNotes') || '[]';
//         var notesArray = JSON.parse(storedNotes);
//         notesArray.push(userNote);
//         localStorage.setItem('userNotes', JSON.stringify(notesArray));
        
//         alert('Note added: ' + userNote);
//     }
// // Function to fetch and display community forum posts
// function fetchCommunityPosts() {
//     fetch('/api/community/posts')  // Replace with your actual API endpoint
//         .then(response => response.json())
//         .then(posts => {
//             displayCommunityPosts(posts);
//         })
//         .catch(error => console.error('Error fetching community posts:', error));
// }

// // Function to display posts in the post-container
// function displayCommunityPosts(posts) {
//     var postContainer = document.getElementById('post-container');
//     postContainer.innerHTML = '';  // Clear existing posts

//     posts.forEach(post => {
//         var postElement = document.createElement('div');
//         postElement.innerHTML = `
//             <h4>${post.author}</h4>
//             <p>${post.content}</p>
//             <button onclick="showReplies(${post.id})">Show Replies</button>
//             <div id="replies-${post.id}"></div>
//             <textarea id="reply-content-${post.id}" placeholder="Write your reply..."></textarea>
//             <button onclick="submitReply(${post.id})">Reply</button>
//         `;

//         postContainer.appendChild(postElement);
//     });
// }

// // Function to fetch and display community forum posts from Local Storage
// function fetchCommunityPosts() {
//     var storedPosts = JSON.parse(localStorage.getItem('communityPosts')) || [];
//     displayCommunityPosts(storedPosts);
// }

// // Function to display posts in the post-container
// function displayCommunityPosts(posts) {
//     var postContainer = document.getElementById('post-container');
//     postContainer.innerHTML = '';  // Clear existing posts

//     posts.forEach(post => {
//         var postElement = document.createElement('div');
//         postElement.innerHTML = `
//             <h4>${post.author}</h4>
//             <p>${post.content}</p>
//             <button onclick="showReplies(${post.id})">Show Replies</button>
//             <div id="replies-${post.id}"></div>
//             <textarea id="reply-content-${post.id}" placeholder="Write your reply..."></textarea>
//             <button onclick="submitReply(${post.id})">Reply</button>
//         `;

//         postContainer.appendChild(postElement);
//     });
// }

// // Function to submit a new post
// function submitPost() {
//     var postContent = document.getElementById('post-content').value;

//     // Generate a unique post ID (this is a simplified method)
//     var postId = new Date().getTime();

//     var newPost = {
//         id: postId,
//         author: "User",  // You can replace this with the actual user's name
//         content: postContent,
//         replies: []
//     };

//     // Retrieve existing posts from Local Storage
//     var storedPosts = JSON.parse(localStorage.getItem('communityPosts')) || [];

//     // Add the new post
//     storedPosts.push(newPost);

//     // Save the updated posts back to Local Storage
//     localStorage.setItem('communityPosts', JSON.stringify(storedPosts));

//     // Display the updated posts
//     fetchCommunityPosts();
// }

// // Function to show replies for a post
// function showReplies(postId) {
//     var repliesContainer = document.getElementById(`replies-${postId}`);
//     repliesContainer.innerHTML = '';

//     var storedPosts = JSON.parse(localStorage.getItem('communityPosts')) || [];
//     var post = storedPosts.find(p => p.id === postId);

//     if (post && post.replies.length > 0) {
//         post.replies.forEach(reply => {
//             var replyElement = document.createElement('div');
//             replyElement.innerHTML = `<p>${reply.author}: ${reply.content}</p>`;
//             repliesContainer.appendChild(replyElement);
//         });
//     }
// }

// // Function to submit a reply to a post
// function submitReply(postId) {
//     var replyContent = document.getElementById(`reply-content-${postId}`).value;

//     var storedPosts = JSON.parse(localStorage.getItem('communityPosts')) || [];
//     var post = storedPosts.find(p => p.id === postId);

//     if (post) {
//         var newReply = {
//             author: "User",  // Replace with the actual user's name
//             content: replyContent
//         };

//         // Add the new reply to the post
//         post.replies.push(newReply);

//         // Save the updated posts back to Local Storage
//         localStorage.setItem('communityPosts', JSON.stringify(storedPosts));

//         // Display the updated replies
//         showReplies(postId);
//     }
// }

// // Initial fetch of community posts when the page loads
// fetchCommunityPosts();

window.onload = () => {
    let button = document.querySelector("#btn");
 
    // Function for calculating BMI
    button.addEventListener("click", calculateBMI);
};
 
function calculateBMI() {
 
    /* Getting input from user into height variable.
    Input is string so typecasting is necessary. */
    let height = parseInt(document
            .querySelector("#height").value);
 
    /* Getting input from user into weight variable. 
    Input is string so typecasting is necessary.*/
    let weight = parseInt(document
            .querySelector("#weight").value);
 
    let result = document.querySelector("#result");
 
    // Checking the user providing a proper
    // value or not
    if (height === "" || isNaN(height)) 
        result.innerHTML = "Provide a valid Height!";
 
    else if (weight === "" || isNaN(weight)) 
        result.innerHTML = "Provide a valid Weight!";
 
    // If both input is valid, calculate the bmi
    else {
 
        // Fixing upto 2 decimal places
        let bmi = (weight / ((height * height) 
                            / 10000)).toFixed(2);
 
        // Dividing as per the bmi conditions
        if (bmi < 18.6) result.innerHTML =
            `Under Weight : <span>${bmi}</span>`;
 
        else if (bmi >= 18.6 && bmi < 24.9) 
            result.innerHTML = 
                `Normal : <span>${bmi}</span>`;
 
        else result.innerHTML =
            `Over Weight : <span>${bmi}</span>`;
    }
}
// Function to open the BMI calculator pop-up
function openBMICalculator() {
    var popup = document.getElementById('bmiPopup');
    popup.style.display = 'block';
}

// Function to close the BMI calculator pop-up
function closeBMICalculator() {
    var popup = document.getElementById('bmiPopup');
    popup.style.display = 'none';
}

// Function to calculate BMI
function calculateBMI() {
    var height = parseFloat(document.getElementById('height').value);
    var weight = parseFloat(document.getElementById('weight').value);

    if (isNaN(height) || isNaN(weight)) {
        document.getElementById('result').innerHTML = 'Please enter valid height and weight.';
        return;
    }

    var bmi = (weight / Math.pow(height / 100, 2)).toFixed(2);
    document.getElementById('result').innerHTML = 'Your BMI is: ' + bmi;
}