// Smooth scrolling for nav links only
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Show "Back to Top" button on scroll
const backToTopButton = document.getElementById('backToTop');

window.onscroll = function() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
};

backToTopButton.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Form validation
document.getElementById('contactForm').addEventListener('submit', function(event) {
  const email = document.getElementById('email');
  const phone = document.getElementById('phone');
  const emailError = document.getElementById('emailError');
  const phoneError = document.getElementById('phoneError');
  const successMessage = document.getElementById('successMessage');

  let isValid = true;

  // Email validation
  if (!email.value) {
    emailError.textContent = "Email is required.";
    emailError.style.display = 'block';
    isValid = false;
  } else if (!email.value.includes('@')) {
    emailError.textContent = "Please enter a valid email.";
    emailError.style.display = 'block';
    isValid = false;
  }

  // Phone validation
  if (!phone.value) {
    phoneError.textContent = "Phone number is required.";
    phoneError.style.display = 'block';
    isValid = false;
  } else if (!/^\d{10}$/.test(phone.value)) {
    phoneError.textContent = "Please enter a 10-digit phone number.";
    phoneError.style.display = 'block';
    isValid = false;
  }

  if (!isValid) {
    event.preventDefault();
  } else {
    successMessage.style.display = 'block';
  }
});

