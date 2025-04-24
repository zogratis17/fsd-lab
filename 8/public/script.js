// Signup form submission
document.getElementById("signup-form").addEventListener("submit", async (e) => {
    e.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    try {
        const response = await fetch("/signup", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password }),
        });

        const result = await response.json();
        alert(result.message);
    } catch (err) {
        alert("Error: " + err.message);
    }
});

// Login form submission
document.getElementById("login-form").addEventListener("submit", async (e) => {
    e.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    try {
        const response = await fetch("/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password }),
        });

        const result = await response.json();
        alert(result.message);
    } catch (err) {
        alert("Error: " + err.message);
    }
});
