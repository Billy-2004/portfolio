const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    const icon = menuBtn.querySelector("i");
    
    if(navLinks.classList.contains("active")){
        icon.setAttribute("data-lucide","x");
    }else{
        icon.setAttribute("data-lucide", "menu");
    }
    lucide.createIcons();
});

const toggleBtn =
document.getElementById("theme-toggle");

toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
});

const text = [
    "Frontend Developer",
    "JavaScript Developer",
    "Django Developer",
    "Web Designer"
];

let index = 0;
let charIndex = 0;
let currentText = "";
let isDeleting = false;

function type() {

    currentText = text[index];

    if (!isDeleting) {
        document.getElementById("typing").textContent =
            currentText.substring(0, charIndex++);

        if (charIndex > currentText.length) {
            isDeleting = true;
            setTimeout(type, 1500);
            return;
        }
    } else {

        document.getElementById("typing").textContent =
            currentText.substring(0, charIndex--);

        if (charIndex < 0) {
            isDeleting = false;
            index = (index + 1) % text.length;
        }
    }

    setTimeout(type, isDeleting ? 50 : 100);
}

type();

console.log("Portfolio Loaded Succesfully");