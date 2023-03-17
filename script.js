const paymentForm = document.querySelector('#payment-form');

paymentForm.addEventListener('submit', function(event) {
  event.preventDefault(); // prevent the form from submitting

  // display a popup message
  alert('Thank you for your payment!');
});
