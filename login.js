document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
  
    // Define username-password pairs
    var users = {
      'user1': 'password1',
      'user2': 'password2',
      'user3': 'password3',
      'user4': 'password4',
      'user5': 'password5'
    };
  
    // Check if the entered username exists and the password matches
    if (users.hasOwnProperty(username) && users[username] === password) {
      document.getElementById('message').innerText = 'Login successful!';
      // Redirect to another page or perform other actions upon successful login
    } else {
      document.getElementById('message').innerText = 'Invalid username or password!';
    }
  });
  