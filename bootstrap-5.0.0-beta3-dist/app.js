// Get the form element
const form = document.getElementById('contact-form');

// Add an event listener to the form's submit event
form.addEventListener('submit', function(event) {
  // Prevent the form from being submitted normally
  event.preventDefault();

  // Get the values of the form fields
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Create a new email message using the form values
  const emailMessage = `From: ${name}\nEmail: ${email}\nMessage: ${message}`;

  // Send the email using the mailto protocol
  window.location.href = `mailto:info@ayo-oke.com.ng?subject=Contact Form Submission&body=${encodeURIComponent(emailMessage)}`;
});
