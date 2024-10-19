(function() {
  emailjs.init("t16YN1tt1S4D_g6aI");
})();

document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();

  emailjs.sendForm('service_vri134s', 'template_6yk9br4', this)
      .then(function() {
          document.getElementById('formStatus').textContent = 'Message sent successfully!';
          document.getElementById('contact-form').reset();
      }, function(error) {
          document.getElementById('formStatus').textContent = 'Failed to send message. Please try again.';
          console.error('Failed to send message:', error);
      });
});
  