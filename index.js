const adviceNum = document.querySelector(".advice-number");
const quote = document.querySelector(".quote");
const btn = document.querySelector(".btn-container");
const password = document.querySelector(".display-password");
const copyBtn = document.querySelector(".copy-btn");

async function getQuote() {
  const response = await fetch("https://api.adviceslip.com/advice");
  const data = await response.json();
  adviceNum.innerText = `ADVICE #${data.slip.id}`;
  quote.innerText = data.slip.advice;
  password.innerText = generateRandomPassword();
}

//notification

var notyf = new Notyf();

btn.addEventListener("click", function () {
  generateRandomPassword();
  generateRandomWord();
  getQuote();
});

// end of notification

copyBtn.addEventListener("click", function () {
  return notyf.success("Copied successfully");
});

const array = [
  "HelloWorld", 
  "ChangeMe",  
  "ITypeFast",
  "SecretCode",
  "DoubleClick"
  ];

const generateRandomWord = () => {
  let randomWord = array[Math.floor(Math.random() * array.length)];
  return randomWord;
};

function getRandomInt(max) {
  return Math.floor(Math.random() * max) + 10;
}

const generateRandomPassword = () => {
  return `${generateRandomWord()}.${getRandomInt(89)}`;
};

function copyText() {
  document.querySelector(".display-password").select();
  document.execCommand("copy");
}

getQuote();
