const form = document.querySelector('.js-landing__form');
const input = form.querySelector('input[type="email"]');

// Disable default validation for users with JS
form.setAttribute('novalidate', true);

// Create succes message
const succesMsg = function () {
  const msgBox = document.createElement('div');
  msgBox.classList.add('popup-succes');
  msgBox.innerHTML = `<h2>Thank You</h2>
  <p>We received Your e-mail 📧</p>`;

  const btn = document.createElement('button');
  btn.innerHTML = '&#10005;';
  btn.setAttribute('aria-label', 'Close message');

  msgBox.append(btn);
  document.body.append(msgBox);

  // Event listeners
  btn.addEventListener('click', () => msgBox.remove());
  window.addEventListener('keydown', (e) =>
    e.key === 'Escape' ? msgBox.remove() : '',
  );
};

const submitForm = function () {
  const regexp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const isValid = input.checkValidity() && regexp.test(input.value);

  if (!isValid) {
    form.classList.add('invalid');
    input.setAttribute('aria-invalid', 'true');
    input.setAttribute('aria-errormessage', 'error-msg');
  }
  if (isValid) {
    form.classList.remove('invalid');
    input.setAttribute('aria-invalid', 'false');
    input.removeAttribute('aria-errormessage');
    input.value = '';
    succesMsg();
  }
};

form.addEventListener('submit', (e) => {
  e.preventDefault();
  submitForm();
});
