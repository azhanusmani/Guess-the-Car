var msg = document.querySelector(".mainHead");
// var guessText = document.querySelector(".input")
// var submitBtn=document.querySelector(".btn")
// let inputGet= document.querySelector(".input")
let guessArray = [
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
].map(v => v.toLowerCase());;

function genWords() {
  let i = Math.floor(Math.random() * guessArray.length);
  let ranWords = guessArray[i];
  //  console.log(ranWords);
  return ranWords;
}


function shuffle(arra1) {
  let ctr = arra1.length;
  let temp, index;

  while (ctr > 0) {
    index = Math.floor(Math.random() * ctr);

    ctr--;

    temp = arra1[ctr];
    arra1[ctr] = arra1[index];
    arra1[index] = temp;
  }
  return arra1;
}

let answer = genWords();
// console.log(answer)

document.querySelector(".mainHead").innerHTML =
  "Guess the car " + shuffle(answer.split(""));




var guessedWord = document.querySelector(".input");
document.querySelector(".btn").addEventListener("click", function (e) {
e.preventDefault()
  let question = guessedWord.value;
  // console.log(question)

  if (question === answer) {
    document.querySelector(".mainHead").innerHTML= "Hey You Won! Play Again!"
  } else {
 
    document.querySelector(".mainHead").innerText = "Better Luck next time! Try Again" 
  }
});


