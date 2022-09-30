//Variables to be defined
var startButton = document.querySelector(".start-button");
var countDownElement = document.querySelector(".count-down");
var mainDiv = document.querySelector(".main-div")

var timer;
var countDown;
var correctAnswerCount = 0;
var questions = [
    {
        question: "Commonly used data types DO NOT include: ",
        answerOpt: ["a. Strings", "b. Booleans", "c. Alerts", "d. Numbers"],
        correctAnswer: "c. Alerts",
    },
    {
        question: "The condition in an if/else statement is enclosed with _______.",
        answerOpt: ["a. Quotes", "b. Curly brackets", "c. Parenthesis", "d. Square brackets"],
        correctAnswer: "c. Parenthesis",
    },
    {
        question: "Arrays in Javascript can be used to store _______.",
        answerOpt: ["a. Numbers and Strings", "b. Other arrays", "c. Booleans","d. All of the above" ],
        correctAnswer: "d. All of the above",
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger ",
        answerOpt: ["a. Javascript", "b. Terminal/Bash", "c. for loops", "d. console.log"],
        correctAnswer: "d. console.log",
    },
    {
        question: "String values must be enclosed ",
        answerOpt: ["a. Commas", "b. Curly brackets", "c. Quotes", "d. Parenthesis"],
        correctAnswer: "c. Quotes",
    },
];
var q = 0;
var quizQuestion = questions[q];


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
    
    if(q <= questions.length) {
       mainDiv.innerHTML = "<h1>"+quizQuestion.question+"</h1>";
       //Create buttons with answers
       for (let i = 0; i < quizQuestion.answerOpt.length; i++) {
            var answerBtns = document.createElement("button");
            answerBtns.textContent = quizQuestion.answerOpt[i];
            answerBtns.addEventListener("click", checkAnswer);
            mainDiv.appendChild(answerBtns);
       }
       
    }
    else {
        countDown = 0
        finalScore()
    }
    // checkAnswer(answerChosen);
}

//Function to check user answer chosen by user, count, and show result
function checkAnswer() {
    var answerChosen = this.textContent

    if(answerChosen === quizQuestion.correctAnswer) {
        correctAnswerCount++;
        console.log(answerChosen);
        console.log(correctAnswerCount);
        q++;
        console.log(q)
        console.log(questions.length)
        mainDiv.textContent = ""
        askQuestion();
    }
    else{
        // if(countDown >= 10){
        // countDown - 10;}
        // else{
        //     countDown = 0
        // }
        q++;
        console.log(answerChosen);
        askQuestion();
    }

}

//Function to show quiz score at the end of timer
function finalScore() {
    alert

    saveScore();
}

//Function for user input prompt for Initials to save score
function saveScore() {
    var initials = prompt("Enter your initials to save your score!");
    if(!initials) {
        saveScore()
    };
    
    var scoreRecord = {
    initials: initials,
    score: correctAnswerCount,
    };

    localStorage.setItem("scoreRecord", JSON.stringify(scoreRecord))

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