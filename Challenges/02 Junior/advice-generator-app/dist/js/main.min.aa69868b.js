const adviceID = document.querySelector('[data-js="adviceID"]');
const adviceText = document.querySelector('[data-js="adviceText"]');
const adviceBtn = document.querySelector('[data-js="adviceBtn"]');
const generateAdvice = async function() {
    try {
        const res = await fetch("https://api.adviceslip.com/advice");
        const adviceJson = await res.json();
        const { id, advice } = adviceJson.slip;
        adviceID.textContent = id;
        adviceText.textContent = advice;
    } catch (error) {
        adviceID.textContent = "---";
        adviceText.textContent = "Sorry, We can't display the advice. Please try later.";
    }
};
generateAdvice();
adviceBtn.addEventListener("click", generateAdvice);

//# sourceMappingURL=main.min.aa69868b.js.map
