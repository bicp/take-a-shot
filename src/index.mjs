import { questions } from "./data/trivia-questions.mjs";
let question;
let correctAnswers = 0;
let wrongAnswers = 0;

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
    // soma no wrong answers

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
    // soma no wrong answers

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
  if (correctAnswers === 3) {
    alert("Congratulations! You believe in science!");
  } else if (wrongAnswers === 3) {
    alert(
      "Please take a look at the WHO website and do not believe in Fake News."
    );
  }
}

ansBtnTrue.addEventListener("click", function () {
  nextElement.classList.remove("hide");
});

ansBtnFalse.addEventListener("click", function () {
  nextElement.classList.remove("hide");
});

nextElement.addEventListener("click", function () {
  startGame();
});

function startGame() {
  console.log("Started");
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
  question = questions[Math.floor(Math.random() * questions.length)];
  const questionElement = document.getElementById("question");
  questionElement.innerText = question.claim;
}
