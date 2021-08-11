// Global Variables
let userChoice = ' '
let answersCorrect = 0
let highScore = 0
let currentQuestion = 0

const playGameButton = document.querySelector('.play-game-button')
const answerFields = document.querySelector('.answer-fields')
const questionField = document.querySelector('#question-field')
const highScoreDisplay = document.querySelector('.high-score')
const restartButton = document.querySelector('#restart')
const nextButton = document.querySelector('#next')

const questions = [
  'What was the release year for the Ridley Scott directed movie, Alien?',
  'What was the number of samurai in the 1954 movie directed by Akira Kurosawa?',
  'Who is the lead actress in the 1978 movie, Halloween?',
  'What was the directorial debut of Christopher Nolan?',
  'Which actor has NOT played the role of Bruce Wayne in the Batman franchise?',
  'Which movie prominently features a character embodying Death playing chess?',
  'Which of these movies was NOT directed by Paul Thomas Anderson?',
  'Which of these film festivals occurs in January?',
  'Which of these movies was released most recently in theaters?',
  'Which movie won Best Picture at the 92nd Academy Awards?'
]

const answers = [
  ['1978', '1979', '1980', '1981'],
  ['Five', 'Nine', 'Three ', 'Seven'],
  ['Margot Kidder', 'Adrienne King', 'Jamie Lee Curtis', 'Clare Higgins'],
  ['Following', 'Dunkirk', 'Memento', 'Insomnia'],
  ['Michael Keaton', 'Christian Bale', 'Adam West', 'Jared Leto'],
  ['Se7en', 'Seven Chances', 'The Seventh Seal ', '7th Heaven'],
  ['Hard Eight', 'Event Horizon', 'Junun', 'Phantom Thread'],
  ['Sundance', 'Berlinale', 'Tribeca', 'South by Southwest'],
  ['Black Widow', 'Cruella', 'Jungle Cruise', 'Nobody'],
  ['Once Upon a Time in Hollywood', 'Nomadland', 'Mank', 'Parasite']
]

console.log(answers[0])

const correctAnswers =
  answers[
    ([1],
    answers[1][3],
    answers[2][2],
    answers[3][0],
    answers[4][3],
    answers[5][2],
    answers[6][1],
    answers[7][0],
    answers[8][2],
    answers[9][3])
  ]

// Event Listeners

// Create way for questions to appear on game.html page
const displayAnswers = function () {
  answers[currentQuestion].forEach((answer) => {
    let btn = document.createElement(`button`)
    btn.innerText = answer
    answerFields.appendChild(btn)
    // need click to show correct and incorrect answers
    // if right answer clicked, add points to current score
    // if wrong answer clicked, subtract points from current score
    // need function for correct answers array to check against user submitted answer?
  })
}

const renderQuestions = function () {
  questionField.innerHTML = questions[currentQuestion]
  displayAnswers()
}

renderQuestions()
// create if statement for when questions are over, questions.length clear board
nextButton.addEventListener('click', () => {
  currentQuestion += 1
  answerFields.innerHTML = ''
  if (questions > questions.length) {
    questionField.innerHTML = ''
    answerFields.innerHTML = ''
  }
  renderQuestions()
})

// TODOCreate way to click answer and have it register as correct or incorrect
const clickedAnswer = function () {
  answers[currentQuestion].addEventListener
}
// Create way to add and subtract from score based on correct and incorrect answers

// TODOCreate way to put userScore on high score field
if (userChoice === correctAnswers) {
  highScore++
} else if (userChoice !== correctAnswers) {
  highScore--
}

// Create way to interact with user with correct and incorrect answers

//Create timer of 10 seconds so that user is forced to answers promptly
let timer = setInterval(countdownTimer, 10000)

function countdownTimer() {}

function stopTimer() {
  clearInterval(timer)
}

//Subtract from user score and register answer to current question as incorrect if timer runs out.

//If timer doesn't run out while answering question correctly, move on to next question and award user points

// restart game

function restart() {
  location.reload()
}
restartButton.addEventListener('click', restart)
