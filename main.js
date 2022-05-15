const startButton = document.getElementById('start-btn')
const questionContainerElement = document.getElementById('question-contain')
const nextButton = document.getElementById('next-btn')

let sectionIndex, questionIndex
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answr-btn')

startButton.addEventListener('click', startSurvey)

function startSurvey() {
    console.log('Success')
    startButton.classList.add('hide')
    sectionIndex = 0
    questionIndex = 0
    questionContainerElement.classList.remove('hide')
    startSection(0)
}

function startSection(section) {
    resetState()
    showQuestion(questions[questionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement(button)
        button.innerText = answer.text
        button.classList.add('btn')  

        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    });

}

function resetState() {

}

function selectAnswer(e) {

}

function nextQuestion(question) {

}

function calculate() {

}

const questions = [
    {
      question: 'What is your Gender?',
      answers: [
          { text: 'Male'},
          { text: 'Female'},
          { text: 'Other'}
      ]  
    }
]