function sendMail() {
  var params = {
    first_name: document.getElementById('firstName').value,
    last_name: document.getElementById('lastName').value,
    telephone: document.getElementById('telephone').value,
    email: document.getElementById('email').value,
    message: document.getElementById('message').value,
  };

  const serviceId = 'service_ji610vx';
  const templateId = 'template_nkfhaad';

  emailjs
    .send(serviceId, templateId, params)
    .then((res) => {
      document.getElementById('firstName').value = '';
      document.getElementById('lastName').value = '';
      document.getElementById('telephone').value = '';
      document.getElementById('email').value = '';
      document.getElementById('message').value = '';
      document.getElementById('alert-success').classList.toggle('active');
      setTimeout(() => {
        document.getElementById('alert-success').classList.toggle('active');
      }, 5000);
    })
    .catch((error) => {
      document.getElementById('alert-error').classList.toggle('active');
      document.getElementById('alert-error').innerText = error.message;
      setTimeout(() => {
        document.getElementById('alert-error').classList.toggle('active');
      }, 5000);
    });
}

document.querySelector('.submit').addEventListener('click', sendMail);
