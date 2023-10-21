        //login
window.addEventListener('load', () => {
    // Get a reference to the login form
    const loginForm = document.getElementById('login-form');

    // Add a submit event listener to the form
    loginForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent the form from submitting (for demo purposes)

        // Check if the login is successful (you can replace this with your own logic)
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (username === 'admin' && password === 'admin123') {
            // Redirect to another page (change 'destination.html' to your desired page)
            window.location.href = 'Adminpanel.html';
        } else {
            alert('Login failed. Please check your credentials.');
        }
    });
});

        