let userChoice = ' '
let answersCorrect = 0
let highScore = 0
let currentQuestion = 0
let placeholder

const playGameButton = document.querySelector('.play-game-button')
const answerFields = document.querySelector('.answer-fields')
const questionField = document.querySelector('#question-field')
const highScoreDisplay = document.querySelector('.high-score')
const restartButton = document.querySelector('#restart')
const paragraph = document.querySelector('p')

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

const correctAnswers = [1, 3, 2, 0, 3, 2, 1, 0, 2, 3]

const disableButtons = function () {
  const answerButtons = document.querySelectorAll('.answer-button')

  answerButtons.forEach((button) => {
    button.setAttribute('disabled', true)
  })
}

const checkAnswers = (btn, answer) => {
  if (
    answers[currentQuestion].indexOf(answer) == correctAnswers[currentQuestion]
  ) {
    highScore++
    paragraph.innerText = `Correct!`
    btn.style.backgroundColor = 'green'
    disableButtons()
    setTimeout(() => {
      nextPage()
    }, 1500)
  } else {
    highScore--
    paragraph.innerText = `Oh no! You're incorrect!`
    btn.style.backgroundColor = 'red'
    disableButtons()
    setTimeout(() => {
      nextPage()
    }, 1500)
  }
  updateHighScore()
}

const displayAnswers = function () {
  answers[currentQuestion].forEach((answer) => {
    let btn = document.createElement(`button`)
    btn.className = 'answer-button'
    btn.innerText = answer
    btn.addEventListener('click', () => {
      checkAnswers(btn, answer)
    })
    answerFields.appendChild(btn)
  })
}

function nextPage() {
  // placeholder.addEventListener('onclick', () => {
  //   // when user clicks answer, caption appears saying correct or incorrect and then move to next question without user clicking NEXT BUTTON
  // })
  currentQuestion += 1
  answerFields.innerHTML = ''
  if (currentQuestion > questions.length - 1) {
    questionField.innerText = 'Would'
    answerFields.innerHTML = ''
  }
  renderQuestions()
}

const renderQuestions = function () {
  questionField.innerHTML = questions[currentQuestion]
  displayAnswers()
}

renderQuestions()
// create if statement for when questions are over, questions.length clear board

// TODOCreate way to put userScore on high score field
function updateHighScore() {
  let p = document.createElement('p')
  let node = document.createTextNode(highScore)
  p.appendChild(node)
  highScoreDisplay.appendChild(p)
}

//Create timer of 10 seconds so that user is forced to answers promptly
let timer = setInterval(countdownTimer, 10000)

function countdownTimer() {}

function stopTimer() {
  clearInterval(timer)
}

//Subtract from user score and register answer to current question as incorrect if timer runs out.

//If timer doesn't run out while answering question correctly, move on to next question and award user points

function restart() {
  location.reload()
}
restartButton.addEventListener('click', restart)

/* 
  
  
  Not having high score have multiple numbers on at it one time. 
  Possibly implementing timer?
  Fixing undefined text that comes up once final question is asked (questions.length prob) 
  
   */
