// Get the <a> elements by their respective IDs
const home = document.getElementById("home");
const about = document.getElementById("about");
let contact = document.getElementById("contact");
let services = document.getElementById("services");
let = document.getElementById("");
let = document.getElementById("");

const muscles = document.getElementById('muscles');
const highlight = document.getElementById('highlight');
const resources = document.getElementById('resources');

muscles.addEventListener('mouseenter', () => {
    highlight.style.opacity = 0.6;
    resources.style.display = 'block';
});

muscles.addEventListener('mouseleave', () => {
    highlight.style.opacity = 0;
    resources.style.display = 'none';
});
