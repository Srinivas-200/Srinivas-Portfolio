// Portfolio loaded successfully
console.log("Welcome to Srinivas Yadagiri's Portfolio!");

const links = document.querySelectorAll(".nav-links a");

links.forEach(link => {
    link.addEventListener("click", () => {
        console.log("Opening:", link.textContent);
    });
});
