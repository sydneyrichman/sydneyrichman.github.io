// Simple scroll revealing effect for sections
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, observerOptions);

document.querySelectorAll('section').forEach(section => {
    section.style.opacity = "0";
    section.style.transform = "translateY(20px)";
    section.style.transition = "all 0.6s ease-out";
    observer.observe(section);
});

// A fun console message for recruiters who inspect the page
console.log("%cHey recruiter! You found the secret LEGO brick. 🧱", "color: #ffcf00; font-size: 20px; font-weight: bold;");
console.log("Looking for a PM-minded SWE? Let's chat.");