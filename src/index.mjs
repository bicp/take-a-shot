import { questions } from "./data/trivia-questions.mjs";
let question;

// start game btn
const startButton = document.getElementById("start-btn");
startButton.addEventListener("click", startGame);

const questionContainerElement = document.getElementById("question-container");
const explanationElement = document.getElementById("explanation");

const ansBtnTrue = document.getElementById("btntrue");
const ansBtnFalse = document.getElementById("btnfalse");
const nextElement = document.getElementById("next-btn");

ansBtnTrue.addEventListener("click", function () {
  if (question.fact === true) {
    ansBtnTrue.classList.add("correct");
  } else {
    ansBtnTrue.classList.add("wrong");
  }
});

ansBtnTrue.addEventListener("click", function () {
  const explanationElement = document.getElementById("explanation");
  explanationElement.innerText = question.explanation;
});

ansBtnFalse.addEventListener("click", function () {
  explanationElement.innerText = question.explanation;
});

ansBtnFalse.addEventListener("click", function () {
  if (question.fact === false) {
    ansBtnFalse.classList.add("correct");
  } else {
    ansBtnFalse.classList.add("wrong");
  }
});

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

  setNextQuestion();
}

function setNextQuestion() {
  question = questions[Math.floor(Math.random() * questions.length)];
  const questionElement = document.getElementById("question");
  questionElement.innerText = question.claim;
}

function selectAnswer() {}
