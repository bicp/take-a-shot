import { questions } from "./data/trivia-questions.mjs";
let question;

// start game btn
const startButton = document.getElementById("start-btn");
startButton.addEventListener("click", startGame);

const questionContainerElement = document.getElementById("question-container");

const ansBtnTrue = document.getElementById("btntrue");
const ansBtnFalse = document.getElementById("btnfalse");
ansBtnTrue.addEventListener("click", function () {
  if (question.fact === true) {
    ansBtnTrue.classList.add("correct");
  } else {
    ansBtnTrue.classList.add("wrong");
  }
});
ansBtnFalse.addEventListener("click", function () {});

function startGame() {
  console.log("Started");
  startButton.classList.add("hide");
  questionContainerElement.classList.remove("hide");
  setNextQuestion();
}

function setNextQuestion() {
  const questionElement = document.getElementById("question");
  questionElement.innerText = question.claim;
}

function selectAnswer() {}
