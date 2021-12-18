const startButton = document.getElementById('start-btn')
const questionContainerElement = document.getElementById('question-container')
import {questions} from "./data/trivia-questions.mjs";

startButton.addEventListener('click', startGame)

function startGame() {
    console.log('Started');
    startButton.classList.add('hide')
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion() {

}

function seclectAnswer() {

}

console.log(questions);