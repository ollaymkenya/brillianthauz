function sendMail() {
  // Get form field values
  var firstName = document.getElementById('firstName').value;
  var lastName = document.getElementById('lastName').value;
  var telephone = document.getElementById('telephone').value;
  var email = document.getElementById('email').value;
  var websiteUrl = document.getElementById('websiteUrl').value;
  var companyName = document.getElementById('companyName').value;
  var country = document.querySelector('[name="country"]:checked')?.value;
  var otherCountry = document.getElementById('otherCountry').value;
  var businessAge = document.getElementById('businessAge').value;
  var businessModel = document.getElementById('businessModel').options[
    document.getElementById('businessModel').selectedIndex
  ].text;
  var revenue = document.getElementById('revenue').value;
  var target = document.getElementById('target').value;
  var channels = Array.from(
    document.querySelectorAll('[name="marketing"]:checked')
  ).map((mI) => mI.value);
  var otherChannel = document.getElementById('otherChannelText').value;
  var marketingSpending = document.getElementById('marketingSpending').options[
    document.getElementById('marketingSpending').selectedIndex
  ].text;
  var marketScaling = document.getElementById('marketScaling').options[
    document.getElementById('marketScaling').selectedIndex
  ].text;

  // Validate form fields
  if (
    firstName === '' ||
    lastName === '' ||
    telephone === '' ||
    email === '' ||
    websiteUrl === '' ||
    companyName === '' ||
    country === '' ||
    businessAge === '' ||
    businessModel === 'none' ||
    revenue === '' ||
    target === '' ||
    channels.length === 0 ||
    marketingSpending === 'none' ||
    marketScaling === 'none'
  ) {
    // Show error message or perform other actions for validation failure
    document.getElementById('alert-error').classList.toggle('active');
    document.getElementById('alert-error').innerText =
      'Please fill in all fields.';
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
    website_url: websiteUrl,
    company_name: companyName,
    country: country,
    other_country: otherCountry,
    business_age: businessAge,
    business_model: businessModel,
    revenue: revenue,
    target: target,
    channels: channels.join(','),
    other_channel: otherChannel,
    marketing_spending: marketingSpending,
    marketing_scaling: marketScaling,
  };

  const serviceId = 'service_ji610vx';
  const templateId = 'template_tqucmlp';

  emailjs
    .send(serviceId, templateId, params)
    .then((res) => {
      // Reset form fields to blank
      document.getElementById('firstName').value = '';
      document.getElementById('lastName').value = '';
      document.getElementById('telephone').value = '';
      document.getElementById('email').value = '';
      document.getElementById('websiteUrl').value = '';
      document.getElementById('companyName').value = '';
      document.querySelector('[name="country"]').checked = true;
      document.getElementById('otherCountry').value = '';
      document.getElementById('businessAge').value = '';
      document.getElementById('businessModel').value = 'none';
      document.getElementById('revenue').value = '';
      document.getElementById('target').value = '';
      document.querySelectorAll('[name="marketing"]').forEach((mI) => {
        mI.checked = false;
      });
      document.getElementById('otherChannelText').value = '';
      document.getElementById('marketingSpending').value = 'none';
      document.getElementById('marketScaling').value = 'none';

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

document.querySelector('#submit').addEventListener('click', sendMail);
