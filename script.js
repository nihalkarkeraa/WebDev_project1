document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();

  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;

  // usenames and passwords
  var users = {
    'nihal': 'nihal1212',
    'dhanvith': 'dhanvith1212',
    'harshith': 'harshith1212',
    'adarsh': 'adarsh1212',
    'srinivas': 'srinivas1212'
  };

  //checks if unsernanme and password is correct
  if (users.hasOwnProperty(username) && users[username] === password) {
    document.getElementById('message').innerText = 'Login successful!';
    // Redirect to another page or perform other actions upon successful login
  } else {
    document.getElementById('message').innerText = 'Invalid username or password!';
  }
});
