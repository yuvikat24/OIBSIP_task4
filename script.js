function register() {
    const regUsername = document.getElementById('regUsername').value;
    const regPassword = document.getElementById('regPassword').value;
  
    if (regUsername && regPassword) {
      localStorage.setItem('username', regUsername);
      localStorage.setItem('password', regPassword);
      document.getElementById('registerForm').style.display = 'none';
      document.getElementById('loginForm').style.display = 'block';
      document.getElementById('status').textContent = 'Registration successful! Please login.';
    } else {
      document.getElementById('status').textContent = 'Please enter both username and password.';
    }
  }
  
  function login() {
    const loginUsername = document.getElementById('loginUsername').value;
    const loginPassword = document.getElementById('loginPassword').value;
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');
  
    if (loginUsername === storedUsername && loginPassword === storedPassword) {
      document.getElementById('loginForm').style.display = 'none';
      document.getElementById('securedPage').style.display = 'block';
      document.getElementById('status').textContent = '';
    } else {
      document.getElementById('status').textContent = 'Login failed. Please check your username and password.';
    }
  }
  
  function logout() {
    localStorage.removeItem('username');
    localStorage.removeItem('password');
    document.getElementById('securedPage').style.display = 'none';
    document.getElementById('loginForm').style.display = 'block';
    document.getElementById('status').textContent = 'You have been logged out.';
  }
  
  // Check if user is already logged in
  window.onload = function() {
    if (localStorage.getItem('username') && localStorage.getItem('password')) {
      document.getElementById('registerForm').style.display = 'none';
      document.getElementById('loginForm').style.display = 'block';
      document.getElementById('status').textContent = 'Please login.';
    } else {
      document.getElementById('status').textContent = 'Please register.';
    }
  };
  