'use strict';

const state = {
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

const classToggle = function (element, ...classes) {
  classes.forEach((c) => element.classList.toggle(c));
};

state.init.submitBtn.addEventListener('click', (e) => {
  let rating;
  const { init, end } = state;

  e.preventDefault();
  init.inputRadios.forEach((radio) => {
    if (radio.checked) rating = radio.value;
  });

  end.userRating.textContent = rating;

  if (rating) {
    classToggle(init.container, 'hidden', 'flex');
    classToggle(end.container, 'hidden', 'flex');
  }
});
