const sendButton = document.querySelector('#submit');

sendButton.addEventListener('click', () => {
  sendEmail();
});

function sendEmail() {
  Email.send({
    Host: 'smtp.gmail.com',
    Username: 'olivermuriithi11@gmail.com',
    To: 'olivermuriithi500@gmail.com',
    From: 'olivermuriithi11@gmail.com',
    Subject: 'Sending Email using javascript',
    Body: 'Well that was easy!!',
  }).then(function (message) {
    console.log({message});
    alert(`${message}`);
  });
}
