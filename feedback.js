document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var feedback = document.getElementById('feedback').value;
  
    // submit messages
    var message = "Thank you, " + name + "! Your feedback has been received. Thank you for Your time";
    document.getElementById('message').innerText = message;
    // clearing form after filling
    document.getElementById('feedbackForm').reset();
  });
  