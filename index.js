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
var score = 0;*/

//timer
const startingMinutes = 5.00;

let time = startingMinutes*60;

const countdownEl = document.getElementById('countdown')

setInterval(updateCountdown, 1000);

function updateCountdown() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;

    countdownEl.innerHTML = `${minutes}: ${seconds}`;
    time--; 
}
//
// Display question
/*
function startQuiz() {
    for (var i = 0; i < span.length; i++) {
    span[i].style.background = 'none';
    }
    {question.innerHTML = '' + (i + 1) + ''+ quizContent[i].question;
    answer0.innerHTML = quizContent[i].answer[0];
    answer1.innerHTML = quizContent[i].answer[1];
    answer2.innerHTML = quizContent[i].answer[2];
    answer3.innerHTML = quizContent[i].answer[3];
    any.innerHTML = "Question" + '' + (i + 1) + '' + quizContent.length;
}

start.addEventListener("click", startQuiz);

//display score
// Display next question
if (i < quizContent.length - 1) {
            i = i + 1;
            displayQuestion();
        }
        else {
            score.innerHTML = score + '/' +
                quizContent.length;
            quizBox.style.display = 'block';
        }

        //click events for next button
        next.addEventListener(click, nextQuestion);

        // click event for return button
        function returnQuiz() {
            location.reload();
}
*/