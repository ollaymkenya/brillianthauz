function sendMail() {
  // Get form field values
  var firstName = document.getElementById('firstName').value;
  var lastName = document.getElementById('lastName').value;
  var telephone = document.getElementById('telephone').value;
  var email = document.getElementById('email').value;
  var message = document.getElementById('message').value;

  // Validate form fields
  if (firstName === '' || lastName === '' || telephone === '' || email === '' || message === '') {
    // Show error message or perform other actions for validation failure
    document.getElementById('alert-error').classList.toggle('active');
    document.getElementById('alert-error').innerText = 'Please fill in all fields.';
    setTimeout(() => {
      document.getElementById('alert-error').classList.toggle('active');
    }, 5000);
    return; // Stop further execution
  }

  var params = {
    first_name: firstName,
    last_name: lastName,
    telephone: telephone,
    email: email,
    message: message,
  };

  const serviceId = 'service_ji610vx';
  const templateId = 'template_nkfhaad';

  emailjs
    .send(serviceId, templateId, params)
    .then((res) => {
      // Reset form fields to blank
      document.getElementById('firstName').value = '';
      document.getElementById('lastName').value = '';
      document.getElementById('telephone').value = '';
      document.getElementById('email').value = '';
      document.getElementById('message').value = '';

      // Show success message or perform other actions
      document.getElementById('alert-success').classList.toggle('active');
      setTimeout(() => {
        document.getElementById('alert-success').classList.toggle('active');
      }, 5000);
    })
    .catch((error) => {
      // Show error message or perform other actions for sending failure
      document.getElementById('alert-error').classList.toggle('active');
      document.getElementById('alert-error').innerText = error.message;
      setTimeout(() => {
        document.getElementById('alert-error').classList.toggle('active');
      }, 5000);
    });
}

document.querySelector('.submit').addEventListener('click', sendMail);
