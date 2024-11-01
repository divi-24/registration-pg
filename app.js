// Toggle Password Visibility
function togglePasswordVisibility() {
    const passwordField = document.getElementById('password');
    const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordField.setAttribute('type', type);
}

// Handle Registration Submission
document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Here you can add the logic to handle the registration process
    console.log(`Registered: ${fullName}, ${email}`);
    alert('Registration successful!');

    // Optionally redirect to the login page or another page after successful registration
    // window.location.href = 'some-page.html';
});

// Handle Forgot Password Submission
document.getElementById('forgotPasswordForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally
    const forgotEmail = document.getElementById('forgotEmail').value;

    // Here you can add the logic to handle the forgot password process
    console.log(`Reset link sent to: ${forgotEmail}`);
    alert('If an account exists with that email, a reset link will be sent.');

    // Optionally redirect to another page after successful submission
    // window.location.href = 'index.html';
});