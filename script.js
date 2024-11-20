// Sidebar Toggle
function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    sidebar.style.width = sidebar.style.width === "250px" ? "0" : "250px";
}

// Form Toggle
function showLogin() {
    document.getElementById("login-form").classList.remove("hidden");
    document.getElementById("register-form").classList.add("hidden");
}

function showRegister() {
    document.getElementById("register-form").classList.remove("hidden");
    document.getElementById("login-form").classList.add("hidden");
}

// CAPTCHA
function generateCaptcha() {
    const captcha = Math.random().toString(36).substr(2, 6).toUpperCase();
    document.getElementById("captcha-text").textContent = captcha;
}

document.addEventListener("DOMContentLoaded", () => {
    generateCaptcha();
});
