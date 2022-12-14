// 1. Start
// 2. Questions
// 3. Timer
// 4. Highscore
// 5. Quiz reset

// Coding Quiz Challenges
// Try to answer the following code-related questions within the time limit. Keep in mind the incorrect answers will penalize your scoretime by ten seconds!

// Commonly used data types DO NOT include:
// 1. strings
// 2. booleans
// 3. alerts
// 4. numbers

// The condition of an if/else statement is enclosed within _____:
// 1. quotes
// 2. curly brackets
// 3. parenthesis
// 4. square brackets

// Arrays in JavaScript can be used to store _____:
// 1. numbers and strings
// 2. other arrays
// 3. booleans
// 4. all of the above

// String values must be enclosed within _____ when being assigned to variables.
// 1. commas
// 2. curly brackets
// 3. quotes
// 4. parenthesis

// A very useful tool used during developement and debugging for printing content to the debugger is 
// 1. JavaScript
// 2. Booleans
// 3. for loops
// 4. console.log

// All done!
// Your final score is .
// Enter your initials: (Submit button)
// Highscores
// Dispay Highscores
// Clear Highscores and Go Back buttons

// Quiz Content

/*var quizContent= [
{
    question : '. Commonly used data types DO NOT include:',
    answer : ['strings','booleans','alerts','numbers'],
    truth : 'alerts'

},
{
    question : '. The condition of an if/else statement is enclosed within _____:',
    answer : ['quotes','curly brackets','parenthesis','square brackets'],
    truth : 'curly brackets'

},
{
    question : '. Arrays in JavaScript can be used to store _____:',
    answer : ['numbers and strings','other arrays','booleans','all of the above'],
    truth : 'all of the above'

},
{
    question : '. String values must be enclosed within _____ when being assigned to variables.',
    answer : ['commas','curly brackets','quotes','parenthesis'],
    truth : 'quotes'

},
{
    question : '. A very useful tool used during developement and debugging for printing content to the debugger is',
    answer : ['JavaScript','Booleans','for loops','console.log'],
    truth : 'console.log'

}
]


var quizBox = document.getElementById('quiz-box');
var question = document.getElementById('question')
var answer0 = document.getElementById('answer0')
var answer1 = document.getElementById('answer1')
var answer2 = document.getElementById('answer2')
var answer3 = document.getElementById('answer3')

var scoreboard = document.getElementById('scoreboard')
const start = document.getElementById('#start')
var next = document.querySelectorAll('next')
var tally = document.getElementById('score')
var span = document.querySelectorAll('span')
var i=0;
var score = 0;

//timer
const startingMinutes = 5.00;

let time = startingMinutes*60;

const countdownEl = document.getElementById('countdown')

setInterval(updateCountdown, 1000);

function updateCountdown() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;

    countdownEl.innerHTML = `${minutes}:${seconds}`;
    time--; 
}
*/
// Display question
/*
start.addEventListener("click", function startQuiz() {
    for (var i = 0; i < span.length; i++) {
    span[i].style.background = 'none';
    }
    {question.innerHTML = '' + (i + 1) + ''+ quizContent[i].question;
    answer0.innerHTML = quizContent[i].answer[0];
    answer1.innerHTML = quizContent[i].answer[1];
    answer2.innerHTML = quizContent[i].answer[2];
    answer3.innerHTML = quizContent[i].answer[3];
    any.innerHTML = "question" + '' + (i + 1) + '' + quizContent.length;
});
}
*/
//display score
// Display next question
/*
function nextQuestion() {
if (i < quizContent.length - 1) {
            i = i + 1;
            nextQuestion();
        }
        else {
            score.innerHTML = score + '/' +
                quizContent.length;
            quizBox.style.display = 'block';
        }
}

//click events for next button
document.getElementById('next').addEventListener('click', () =>{
    console.log('Next Question!')
})

// click event for return button
function returnQuiz() {
    location.reload();
})
*/

const startButton = document.getElementById('start-btn')
const quizBox = document.getElementById('quiz-box')
const nextButton = document.getElementById('next-btn')
const restartButton = document.getElementById('restart-btn')
var question = document.querySelectorAll('question')
//timer
const startingMinutes = 5.00;

let time = startingMinutes*60;

const countdownEl = document.getElementById('countdown')

setInterval(updateCountdown, 1000);

function updateCountdown() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;

    countdownEl.innerHTML = `${minutes}:${seconds}`;
    time--; 
}

startButton.addEventListener('click', startGame)

function startGame() {
    console.log('game started')
    startButton.classList.add('hide')
    setNextQuestion()
}

var indexQuestion = 0;

nextButton.addEventListener('click', setNextQuestion)

function setNextQuestion() {
    console.log('next question')
    if(indexQuestion<question.length-1)
    {
        indexQuestion++;
        loadQuestion(indexQuestion);
    }
}

nextButton.addEventListener('click', clickHandler, false)

var clickHandler = (function (e) {
    var count = 0;
    return function () {
        count += 1;
        if (count > 5) {
            return;
        } 
    }
}());


function selectAnswer(){

}

const quizContent = {
    question0 : '. Commonly used data types DO NOT include:',
    answer : [
        {text: 'strings', correct: false },
        {text: 'booleans', correct: false },
        {text: 'alerts', correct: true },
        {text: 'numbers', correct: false }
    ],

    question1 : '. The condition of an if/else statement is enclosed within _____:',
    answer : [
        {text: 'quotes', correct: false },
        {text: 'curly brackets', correct: true },
        {text: 'parenthesis', correct: false },
        {text: 'square brackets', correct: false }
    ],

    question2 : '. Arrays in JavaScript can be used to store _____:',
    answer : [
        {text: 'commas', correct: false },
        {text: 'quotes', correct: false },
        {text: 'curly brackets', correct: true },
        {text: 'parenthesis', correct: false }
    ],

    question3 : '. String values must be enclosed within _____ when being assigned to variables.',
    answer : [
        {text: 'numbers and strings', correct: false },
        {text: 'other arrays', correct: false },
        {text: 'booleans', correct: false },
        {text: 'all of the above', correct: true }
    ],

    question4 : 'A very useful tool used during developement and debugging for printing content to the debugger is ',
    answer : [
        {text: 'JavaScript', correct: false},
        {text: 'Booleans', correct: false},
        {text: 'for loops', correct: false},
        {text: 'console.log', correct: true}
    ]
}

// click event for return button
restartButton.addEventListener('click', returnQuiz)

function returnQuiz() {
     console.log('game reset')
        window.location.reload()
}