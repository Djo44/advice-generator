const adviceNum = document.querySelector(".advice-number");
const quote = document.querySelector(".quote");
const btn = document.querySelector(".btn-container");

async function getQuote() {
  const response = await fetch("https://api.adviceslip.com/advice");
  const data = await response.json();
  adviceNum.innerText = `ADVICE #${data.slip.id}`;
  quote.innerText = data.slip.advice;
}

btn.addEventListener("click", function () {
  getQuote();
});

getQuote();
