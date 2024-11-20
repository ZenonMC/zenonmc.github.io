document.getElementById("auth-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const captcha = document.getElementById("captcha").value.trim();
    const authMessage = document.getElementById("auth-message");

    // Basic validation
    if (!username || !password || !captcha) {
        authMessage.textContent = "All fields are required.";
        authMessage.style.color = "red";
        return;
    }

    // CAPTCHA check
    if (captcha !== "7") {
        authMessage.textContent = "CAPTCHA is incorrect. Please try again.";
        authMessage.style.color = "red";
        return;
    }

    // Simulate success
    authMessage.textContent = `Welcome, ${username}! Authentication successful.`;
    authMessage.style.color = "green";
});
