//Variables to be defined
var startButton = document.querySelector(".start-button");
var countDownElement = document.querySelector(".count-down");
var mainDiv = document.querySelector(".main-div")

var timer;
var countDown;
var correctAnswerCount = 0;

//Function to begin quiz when button is clicked, calls timer and question functions
function startQuiz() {
    countDown = 60;
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
    mainDiv.innerHTML = "<h1>"+ +"</h1>";
    checkAnswer(answerChosen);
}

//Function to check user answer chosen by user, count, and show result
function checkAnswer() {
    if(answerChosen === correctAnswer) {
        correctAnswerCount++;
    }

    if(answerChosen != correctAnswer) {
        countDown - 10;
    }

    if (countDown > 0){
        askQuestion();
    }

}

//Function to show quiz score at the end of timer
function finalScore() {

}

//Function for user input prompt for Initials to save score
function saveScore() {
    var initials = prompt("Enter your initials to save your score!");
    if(initials === null) {
        saveScore()
    }
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