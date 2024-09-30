/** Login function */

function login(event) {
    event.preventDefault(); // Prevent form from submitting
    const username = document.getElementById('uname').value;
    const password = document.getElementById('pass').value;

    // Temporary check for username and password
    if (username === 'Admin' && password === 'admin123') {
        alert('Login successful!');
        window.location.href = 'dashboard.html'; // Redirect to dashboard.html
    } else {
        alert('Invalid username or password.');
    }
}

/** Register function */
function registerUser(event) {
    event.preventDefault(); // Prevent form submission

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('cpassword').value;

    // Validate input
    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }

    // Create a user object
    const user = {
        name: name,
        email: email,
        password: password
    };

    // Save user data to localStorage
    const users = JSON.parse(localStorage.getItem('users')) || [];
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));

    alert('Registration successful!');

    // Redirect to login page after registration
    window.location.href = 'login.html';
}

// Function to check for existing users (optional)
function checkExistingUser(email) {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    return users.some(user => user.email === email);
}
