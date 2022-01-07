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
const endGameElement = document.getElementById("end-game");
const welcomeContainerElement = document.getElementById("start-game");

const ansBtnTrue = document.getElementById("btntrue");
const ansBtnFalse = document.getElementById("btnfalse");
const nextElement = document.getElementById("next-btn");
const restartBtn = document.getElementById("restart-btn");

restartBtn.addEventListener("click", resetGame);

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

  // a fix to show the explanation of the last question
  setTimeout(() => {
    checkIfGameIsOver();
  });
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
    endGame();
  } else if (wrongAnswers === 3) {
    alert(
      "Please take a look at the WHO https://www.who.int/emergencies/diseases/novel-coronavirus-2019 and do not believe in Fake News!"
    );
    endGame();
  } else {
    nextElement.classList.remove("hide");
  }
}

nextElement.addEventListener("click", function () {
  startGame();
});

function endGame() {
  questionContainerElement.classList.add("hide");
  welcomeContainerElement.classList.add("hide");
  correctAnswers = 0;
  wrongAnswers = 0;

  endGameElement.classList.remove("hide");
  restartBtn.classList.remove("hide");
}

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
  endGameElement.classList.add("hide");
  restartBtn.classList.add("hide");
  welcomeContainerElement.classList.remove("hide");

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
