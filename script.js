const toggleBtn =
document.getElementById("theme-toggle");

toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
});

const text = [
    "Frontend Developer",
    "JavaScript Learner",
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