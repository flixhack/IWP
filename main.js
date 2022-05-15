const startButton = document.getElementById('start-btn')
const questionContainerElement = document.getElementById('question-contain')
const nextButton = document.getElementById('next-btn')
const nextSectionButton = document.getElementById('nextSec-btn')
const calculateButton = document.getElementById('calc-btn')

let sectionIndex, questionIndex
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answr-btn')

startButton.addEventListener('click', startSurvey)
nextButton.addEventListener('click', () => {
    questionIndex++
})
nextSectionButton.addEventListener('click', ()=> {
    sectionIndex++
})
calculateButton.addEventListener('click', calculate)

function startSurvey() { 
    startButton.classList.add('hide')
    sectionIndex = 0
    questionContainerElement.classList.remove('hide')
    newSection(0)
}

function newSection(sectionIndex) {
    resetState()
    questionIndex = 0
    if (sectionIndex = 0){showQuestion(generalQuestions[questionIndex])}
    else if (sectionIndex = 1){showQuestion(smokingQuestions[questionIndex])}
    else if (sectionIndex = 2){showQuestion(ageQuestions[questionIndex])}
    else if (sectionIndex = 3){showQuestion(foreignAndReligionQuestions[questionIndex])}
    else if (sectionIndex = 4){showQuestion(universityQuestions[questionIndex])}
    else if (sectionIndex = 5){showQuestion(householdQuestionsOne[questionIndex])}
    else {showQuestion(householdQuestionsTwo[questionIndex])}
}

function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild
        (answerButtonsElement.firstChild)
    }
}

function showQuestion(foundQuestion) {
    questionElement.innerText = foundQuestion.question
    foundQuestion.answers.forEach(answer => {
        const button = document.createElement(button)
        button.innerText = answer.text
        button.classList.add('btn')  

        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    });

}

// selectAnswer needs to be able to distinguish between sections. questions.length needs to be
// variable so depending on which section it is currently on, it distinguishes between them. 
function selectAnswer(e) {
    const selectedButton = e.target
    const value = selectedButton.dataset.compare
    setStatusClass(document.body, sectionIndex)
    if (questions.length > questionIndex + 1) {
        nextButton.classList.remove('hide')
    }
    else if (questions.length <= questionIndex + 1 && sections.length > sectionIndex + 1) {
        nextSectionButton.classList.remove('hide')
    }
    else {calculateButton.classList.remove('hide')}
}

function setStatusClass(element, section) {
    clearStatusClass(element)
    if (section = 0){element.classList.add('general')}
    else if(section = 1){element.classList.add('smoking')}
    else if(section = 2){element.classList.add('age')}
    else if(section = 3){element.classList.add('foreign-religion')}
    else if(section = 4){element.classList.add('university')}
    else if(section = 5){element.classList.add('household1')}
    else {element.classList.add('household2')}
}

function clearStatusClass(element) {
    element.classList.remove('general')
    element.classList.remove('age')
    element.classList.remove('foreign-religion')
    element.classList.remove('university')
    element.classList.remove('household1')
    element.classList.remove('household2')   
}

function nextQuestion(questionIndex) {
    resetState()
    showQuestion(questions[questionIndex])
}

function calculate() {

}
const sections = [

generalQuestions = [
    {
      question: 'What is your Gender?',
      answers: [
          { text: 'Male'},
          { text: 'Female'},
          { text: 'Other'}
      ]  
    }
],
smokingQuestions = [
    {
      question: '',
      answers: [
          { text: ''},
          { text: ''},
          { text: ''}
      ]  
    }
],
ageQuestions = [
    {
      question: '',
      answers: [
          { text: ''},
          { text: ''},
          { text: ''}
      ]  
    }
],
foreignAndReligionQuestions = [
    {
      question: '',
      answers: [
          { text: ''},
          { text: ''},
          { text: ''}
      ]  
    }
],
universityQuestions = [
    {
      question: '',
      answers: [
          { text: ''},
          { text: ''},
          { text: ''}
      ]  
    }
],
householdQuestionsOne = [
    {
      question: '',
      answers: [
          { text: ''},
          { text: ''},
          { text: ''}
      ]  
    }
],
householdQuestionsTwo = [
    {
      question: '',
      answers: [
          { text: ''},
          { text: ''},
          { text: ''}
      ]  
    }
]
]