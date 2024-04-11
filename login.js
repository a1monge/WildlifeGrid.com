document.addEventListener("DOMContentLoaded", function () {
    // Call the login function when the DOM is fully loaded
    login();
});

function login() {
    const loginForm = document.getElementById("login-form");
    const loginButton = document.getElementById("login-btn");

    loginForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const username = document.getElementById("login-email").value;
        const password = document.getElementById("login-password").value;
        const xhr = new XMLHttpRequest();
        xhr.open("POST", "http://localhost/Project/WildlifeGrid.com/login.php");
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

        xhr.onload = function () {
            console.log(xhr.responseText); // Log the response for debugging
            if (xhr.status === 200) {
                if (xhr.responseText === "valid") {
                    window.location.href = "index.html";
                }
                else {
                    alert("Invalid username or password");
                }
            }
        };

        // Send the form data to login.php
        xhr.send("username=" + username + "&password=" + password);
    });
}
