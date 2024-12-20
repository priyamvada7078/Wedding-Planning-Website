
const form = document.getElementById('event-form');
const successMessage = document.getElementById('success-message');


form.addEventListener('submit', function(event) {
  event.preventDefault(); 

  
  const name = document.getElementById('name').value;
  const phone = document.getElementById('phone').value;
  const eventType = document.getElementById('event-type').value;
  const eventName = document.getElementById('event-name').value;
  const destinationType = document.getElementById('destination-type').value;
  const preferredCity = document.getElementById('preferred-city').value;

  if (!name || !phone || !eventType || !eventName || !destinationType || !preferredCity) {
    alert('Please fill out all fields.');
    return;
  }

  
  form.reset(); // Reset form fields after submission
  successMessage.classList.remove('hidden');
  setTimeout(() => {
    successMessage.classList.add('hidden');
  }, 5000); // Hide the success message after 5 seconds
});