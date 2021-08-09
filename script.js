// Global Variables

const playGameButton = document.querySelector('.playGameBtn')
const answerFields = document.querySelectorAll('.answer-fields')
const questionField = document.querySelectorAll('#question-field')
const highScore = document.querySelector('.high-score')
const restartButton = document.querySelectorAll('#restart')
const questions = [
  'What was the release year for Alien?',
  ' ',
  ' ',
  ' ',
  ' ',
  ' ',
  ' ',
  ' ',
  ' ',
  ' '
]
const answers = [
  ['1978', '1979', '1980', '1981'],
  [' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ']
]

const correctAnswers = []

// Event Listeners

for (let i = 0; i < answerFields.length; i++) {
  answerFields.addEventListener('click')
}

function restart() {
  location: reload()
  restartButton.addEventListener('click', restart)
}
