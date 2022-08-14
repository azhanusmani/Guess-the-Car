const playAgainEl = document.getElementById("playAgain");
const guessBoxEl = document.getElementById("guessBox");
const userInputEl = document.getElementById("userInput");
const topEl = document.getElementById("top");
const mainHeadEl = document.getElementById("mainHead");
let data = 0;

const displayMsgs = {
  success: "Hey You Won! Play Again!",
  fail: "Better Luck next time! Try Again",
};

function getRandomElement(array) {
  let randomIdx = Math.floor(Math.random() * array.length);
  return array[randomIdx];
}

function shuffleStr(str) {
  const arr = str.split("");
  let ctr = arr.length;
  let temp, index;

  while (ctr > 0) {
    index = Math.floor(Math.random() * ctr);
    ctr--;

    temp = arr[ctr];
    arr[ctr] = arr[index];
    arr[index] = temp;
  }
  return arr.join("");
}

function startGame(entities, entityName) {
  initialiseGame(entityName);

  const randomEntity = getRandomElement(entities);
  mainHeadEl.innerHTML = `Guess the ${entityName.toLowerCase()} "${shuffleStr(
    randomEntity
  )
    .split("")
    .join(",")}"`;
  document.getElementById("guessBtn").addEventListener("click", (e) => {
    const userInput = userInputEl.value;

    if (userInput === randomEntity) {
      mainHeadEl.innerHTML = displayMsgs.success;
    } else {
      mainHeadEl.innerText = displayMsgs.fail;
    }

    restartGame(entities, entityName);
  });
}

function initialiseGame(entityName) {
  guessBoxEl.classList.add("show");
  playAgainEl.classList.remove("show");
  playAgainEl.classList.add("hide");

  topEl.innerHTML = `Guess the ${entityName.toLowerCase()}`;
  userInputEl.value = "";
}

function restartGame(entities, entityName) {
  guessBoxEl.classList.add("hide");
  guessBoxEl.classList.remove("show");

  playAgainEl.classList.add("show");
  playAgainEl.classList.remove("hide");

  playAgainEl.addEventListener("click", (e) => {
    startGame(entities, entityName);
  });
}

let fruits = ["apple", "banana", "custard apple", "watermelon", "mango"].map(
  (v) => v.toLowerCase()
);
let cars = [
  "I20",
  "I10",
  "Amaze",
  "City",
  "Alto",
  "Nano",
  "Maruti800",
  "Thar",
  "Safari",
  "Fortuner",
  "Seltos",
  "Sonnet",
  "Datsun",
  "Benz",
  "Bugatti",
  "Carrera",
].map((v) => v.toLowerCase());

startGame(cars, "Car");
