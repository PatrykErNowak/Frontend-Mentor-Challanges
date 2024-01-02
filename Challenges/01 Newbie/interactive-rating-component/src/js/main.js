'use strict';

const state = {
  component: document.querySelector('.js--rate-us'),
  init: {
    container: document.querySelector('.js--rating-form'),
    submitBtn: document.querySelector('.js--rating-btn'),
    inputRadios: document.querySelectorAll('.js--rating-radio'),
  },

  end: {
    container: document.querySelector('.js--rating-thankyou'),
    userRating: document.querySelector('.js--rating-userrating'),
  },
};

const loadingStateElement = `      
<svg
class="text-tertiary-medium h-11 w-11 animate-spin js--loading"
aria-label="Loading data, please wait"
xmlns="http://www.w3.org/2000/svg"
fill="none"
viewBox="0 0 24 24"
>
<circle
  class="opacity-10"
  cx="12"
  cy="12"
  r="10"
  stroke="currentColor"
  stroke-width="4"
></circle>
<path
  class="opacity-40"
  fill="currentColor"
  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
></path>
</svg>`;

const classToggle = function (element, ...classes) {
  classes.forEach((c) => element.classList.toggle(c));
};

state.init.submitBtn.addEventListener('click', (e) => {
  let rating;
  const { init, end, component } = state;
  const classToToggle = ['hidden', 'flex'];

  e.preventDefault();
  // Check which rating user choose
  init.inputRadios.forEach((radio) => {
    if (radio.checked) rating = radio.value;
  });

  // Execute if user set rating
  if (rating) {
    end.userRating.textContent = rating;
    classToggle(init.container, ...classToToggle);

    // Add loading state
    component.insertAdjacentHTML('afterbegin', loadingStateElement);

    // Simulate loading data
    setTimeout(() => {
      component.querySelector('.js--loading').remove();
      classToggle(end.container, 'fade-in', ...classToToggle);
    }, 600);
  }
});
