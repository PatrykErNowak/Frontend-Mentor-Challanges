// day.js library
dayjs().format();
dayjs.extend(window.dayjs_plugin_customParseFormat);
dayjs.extend(window.dayjs_plugin_duration);

// --------------------------------------------------------
// DOM Elements

const form = document.querySelector('.age-calc');
const inputDay = document.querySelector('#form-day');
const inputMonth = document.querySelector('#form-month');
const inputYear = document.querySelector('#form-year');
const btn = document.querySelector('.age-calc__btn');

const outputYears = document.querySelector('#output-years');
const outputMonths = document.querySelector('#output-months');
const outputDays = document.querySelector('#output-days');

// ------------------------------------------------------------
// Functions

const clearErrorMsgs = function () {
  const inputs = form.querySelectorAll('input');

  form.classList.remove('invalid');
  form.removeAttribute('aria-invalid');
  inputs.forEach((el) => {
    const container = el.closest('.age-calc__input-box');

    el.removeAttribute('aria-invalid');
    el.removeAttribute('aria-describedby');
    container.classList.remove('invalid');
    container.querySelector('.error-desc')?.remove();
  });
};

const renderErrorMsg = function (element, msg, addInvalidClass = true) {
  const inputBox = element.closest('.age-calc__input-box');
  const p = document.createElement('p');

  p.classList.add('error-desc');
  p.textContent = msg;
  p.setAttribute('id', `error-${element.getAttribute('id')}`);
  element.setAttribute('aria-invalid', 'true');
  element.setAttribute(
    'aria-describedby',
    `error-${element.getAttribute('id')}`,
  );
  inputBox.append(p);
  if (addInvalidClass) inputBox.classList.add('invalid');
};

const checkInputs = function () {
  const emptyFieldMsg = 'This field is required';
  const inputs = form.querySelectorAll('input');
  let isValid = true;
  inputs.forEach((el) => {
    if (el.value.length < 1) {
      renderErrorMsg(el, emptyFieldMsg);
      isValid = false;
    }
  });
  return isValid;
};

const isPastDate = function (date) {
  const now = new Date(
    new Date().getFullYear(),
    new Date().getMonth(),
    new Date().getDate(),
  );
  return now - date > 0 ? true : false;
};

const validateDate = function (day, month, year) {
  const dayFormatted = day.padStart(2, '0');
  const monthFormatted = month.padStart(2, '0');
  const yearFormatted = year.padStart(4, '0');

  const date = new Date(`${monthFormatted}/${dayFormatted}/${yearFormatted}`);
  const isValid = dayjs(
    `${yearFormatted}-${monthFormatted}-${dayFormatted}`,
    'YYYY-MM-DD',
    true,
  ).isValid();

  if (isValid && !isPastDate(date)) {
    form.classList.add('invalid');
    renderErrorMsg(inputDay, 'Must be in the past', false);
    return false;
  }
  if (!isValid) {
    // Check month - Is between 1-12?
    if (+month < 1 || +month > 12)
      renderErrorMsg(inputMonth, 'Must be a valid month');

    // Check day - Is between 1-31?
    if (+day < 1 || +day > 31) renderErrorMsg(inputDay, 'Must be a valid day');

    // Check day - Is valid for given month?
    if (+month >= 1 && +month <= 12 && +day >= 1 && +day <= 31) {
      form.classList.add('invalid');
      renderErrorMsg(inputDay, 'Must be a valid date', false);
    }
    return false;
  }

  return true;
};

const calcAge = function (day, month, year) {
  const now = dayjs();
  const birthday = dayjs(new Date(`${month}/${day}/${year}`));
  return dayjs.duration(now.diff(birthday)).$d;
};

const animateNumbers = function (element, finalNumber, animationSpeed) {
  return new Promise((resolve) => {
    let i = 0;
    const anime = setInterval(() => {
      element.textContent = i;
      if (i >= finalNumber) {
        clearInterval(anime);
        resolve();
      }
      i++;
    }, animationSpeed);
  });
};

const displayAge = async function ({ years, months, days }) {
  outputYears.textContent = '--';
  outputMonths.textContent = '--';
  outputDays.textContent = '--';
  await animateNumbers(outputYears, years, 30);
  await animateNumbers(outputMonths, months, 60);
  await animateNumbers(outputDays, days, 40);
};

//-------------------------------------------------------------

btn.addEventListener('click', (e) => {
  e.preventDefault();
  const day = inputDay.value;
  const month = inputMonth.value;
  const year = inputYear.value;

  clearErrorMsgs();
  const isValid = checkInputs() && validateDate(day, month, year);

  if (!isValid) return;

  const age = calcAge(day, month, year);
  displayAge(age);
});
