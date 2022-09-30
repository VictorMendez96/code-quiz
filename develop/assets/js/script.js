//Variables to be defined
var startButton = document.querySelector("");
var countDownElement = document.querySelector(".count-down");

var timer;
var countDown;
var correctAnswers = 0;

//Function to begin quiz when button is clicked, calls timer and question functions
function startQuiz() {

    startTime();
    askQuestion();
}

//Function for quiz timer
function startTime() {
    timer = setInterval(function() {
        countDown--;
        countDownElement.textContent = countDown;
        if (countDown === 0) {
            clearInterval(timer);
            finalScore();
        }
    }, 1000)

}

//Function to display question and answers to choose from and calls function to check answer
function askQuestion() {

    checkAnswer(answerChosen);
}

//Function to check user answer chosen by user, count, and show result
function checkAnswer() {

}

//Function to show quiz score at the end of timer
function finalScore() {

}

//Function for user input prompt for Initials to save score
function saveScore() {

    highScores();
}

//Function to Display Top Scores
function highScores() {

}

//Event Listener for start button 
startButton.addEventListener("click", startQuiz)

//Init function, to triggers when the webpage is loaded
function init() {

}

//Calls init() function when page loads
init();