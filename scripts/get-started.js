function sendMail() {
  var params = {
    first_name: document.getElementById('firstName').value,
    last_name: document.getElementById('lastName').value,
    telephone: document.getElementById('telephone').value,
    email: document.getElementById('email').value,
    website_url: document.getElementById('websiteUrl').value,
    company_name: document.getElementById('companyName').value,
    country: document.querySelector('[name="country"]:checked').value,
    other_country: document.getElementById('otherCountry').value,
    business_age: document.getElementById('businessAge').value,
    business_model: document.getElementById('businessModel').options[
      document.getElementById('businessModel').selectedIndex
    ].text,
    revenue: document.getElementById('revenue').value,
    target: document.getElementById('target').value,
    marketing: `${[
      ...document.querySelectorAll('[name="marketing"]:checked').value,
    ]}`,
    other_channel: document.getElementById('otherChannelText').value,
    marketing_spending: document.getElementById('marketingSpending').options[
      document.getElementById('marketingSpending').selectedIndex
    ].text,
    marketing_scaling: document.getElementById('marketScaling').options[
      document.getElementById('marketScaling').selectedIndex
    ].text,
  };

  const serviceId = 'service_ji610vx';
  const templateId = 'template_nkfhaad';

  emailjs
    .send(serviceId, templateId, params)
    .then((res) => {
      document.getElementById('firstName').value = '';
      document.getElementById('lastName').value = '';
      document.getElementById('telephone').valu = '';
      document.getElementById('email').value = '';
      document.getElementById('websiteUrl').value = '';
      document.getElementById('companyName').value = '';
      document.querySelector('[name="country"]').checked = true;
      document.getElementById('otherCountry').value = '';
      document.getElementById('businessAge').value = '';
      document.getElementById('businessModel').value = 'none';
      document.getElementById('revenue').value = '';
      document.getElementById('target').value = '';
      `${[
        ...(document.querySelectorAll('[name="marketing"]').checked = 'false'),
      ]}`;
      document.getElementById('otherChannelText').value = '';
      document.getElementById('marketingSpending').value = 'none';
      document.getElementById('marketScaling').value = 'none';
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

document.querySelector('#submit').addEventListener('click', sendMail);
