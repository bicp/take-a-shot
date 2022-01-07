import { questions } from "./data/trivia-questions.mjs";
let question;
let correctAnswers = 0;
let wrongAnswers = 0;
let index;

let questionsCopy = [...questions];

// start game btn
const startButton = document.getElementById("start-btn");
startButton.addEventListener("click", startGame);
const welcomeText = document.getElementById("text");

const questionContainerElement = document.getElementById("question-container");
const explanationElement = document.getElementById("explanation");

const ansBtnTrue = document.getElementById("btntrue");
const ansBtnFalse = document.getElementById("btnfalse");
const nextElement = document.getElementById("next-btn");

ansBtnTrue.addEventListener("click", function () {
  if (question.fact === true) {
    correctAnswers = correctAnswers + 1;

    ansBtnTrue.classList.add("correct");
  } else {
    wrongAnswers = wrongAnswers + 1;

    ansBtnTrue.classList.add("wrong");
  }

  const explanationElement = document.getElementById("explanation");
  explanationElement.innerText = question.explanation;
  checkIfGameIsOver();
});
ansBtnFalse.addEventListener("click", function () {
  if (question.fact === false) {
    correctAnswers = correctAnswers + 1;

    ansBtnFalse.classList.add("correct");
  } else {
    wrongAnswers = wrongAnswers + 1;

    ansBtnFalse.classList.add("wrong");
  }

  const explanationElement = document.getElementById("explanation");
  explanationElement.innerText = question.explanation;
  checkIfGameIsOver();
});

ansBtnFalse.addEventListener("click", function () {
  explanationElement.innerText = question.explanation;
});

function checkIfGameIsOver() {
  questionsCopy = questionsCopy.filter(function (_, i) {
    return index !== i;
  });

  if (correctAnswers === 3) {
    alert("Congratulations! You believe in science!");
    resetGame();
  } else if (wrongAnswers === 3) {
    alert(
      "Please take a look at the WHO website and do not believe in Fake News."
    );
    resetGame();
  } else {
    nextElement.classList.remove("hide");
  }
}

nextElement.addEventListener("click", function () {
  startGame();
});

function startGame() {
  startButton.classList.add("hide");
  questionContainerElement.classList.remove("hide");
  explanationElement.innerText = "";
  ansBtnTrue.classList.remove("correct");
  ansBtnTrue.classList.remove("wrong");
  ansBtnFalse.classList.remove("correct");
  ansBtnFalse.classList.remove("wrong");
  welcomeText.classList.add("hide");

  setNextQuestion();
}

function setNextQuestion() {
  index = Math.floor(Math.random() * questionsCopy.length);
  question = questionsCopy[index];
  const questionElement = document.getElementById("question");
  questionElement.innerText = question.claim;
  nextElement.classList.add("hide");
}

function resetGame() {
  startButton.classList.remove("hide");
  questionContainerElement.classList.add("hide");
  explanationElement.innerText = "";
  ansBtnTrue.classList.remove("correct");
  ansBtnTrue.classList.remove("wrong");
  ansBtnFalse.classList.remove("correct");
  ansBtnFalse.classList.remove("wrong");
  welcomeText.classList.remove("hide");
  nextElement.classList.add("hide");
  questionsCopy = [...questions];
}
