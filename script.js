// Array to store user credentials
const users = [
    { username: 'admin', password: '123' }
];

// Handle login form submission
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
    }
});

// Function to handle login
function handleLogin(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Check if username and password match any user
    const user = users.find(u => u.username === username && u.password === password);
    
    if (user) {
        // Save loggedIn status to localStorage
        localStorage.setItem('loggedIn', 'true');
        localStorage.setItem('currentUser', username);
        
        // Redirect to members.html
        window.location.href = 'members.html';
    } else {
        alert('Invalid username or password');
        // Clear password field
        document.getElementById('password').value = '';
    }
}
