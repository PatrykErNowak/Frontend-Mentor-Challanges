"use strict";

const faq = document.querySelector(".js-faq");

faq.addEventListener("click", (e) => {
  if (!e.target.classList.contains("faq__question")) return;

  const target = e.target.closest(".faq__row");
  const faqQuestion = target.querySelector(".faq__question");
  const faqAnswer = target.querySelector(".faq__answer");

  target.classList.toggle("faq__row--active");
  const isActive = target.classList.contains("faq__row--active");

  faqQuestion.ariaExpanded = isActive;
  faqAnswer.ariaHidden = !isActive;
  if (isActive) faqAnswer.style.maxHeight = `${faqAnswer.scrollHeight}px`;
  if (!isActive) faqAnswer.style.maxHeight = 0;
  faqQuestion.blur();
});
