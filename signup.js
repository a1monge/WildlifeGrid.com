$(document).ready(function () {
    $('#signup-form').submit(function (event) {
        event.preventDefault(); // Prevent the default form submission
        signup(); // Call the signup function
    });
});

function signup() {
    const username = $('#signup-name').val();
    const email = $('#signup-email').val();
    const password = $('#signup-password').val();
    $.ajax({
        type: "POST",
        url: "http://localhost/Project/WildlifeGrid.com/signup.php",
        data: { username: username, email: email, password: password },
        success: function (response) {
            alert(response);
        }
    });
}
