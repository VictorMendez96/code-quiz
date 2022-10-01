//Variables to be defined
var startButton = document.querySelector(".start-button");
var countDownElement = document.querySelector(".count-down");
var mainDiv = document.querySelector(".main-div")
var scoresBtn = document.querySelector(".scores-button")
var result = document.querySelector(".result")

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

var timer;
var countDown;
var correctAnswerCount = 0;
var q = 0;
var quizQuestion = questions[q];
var scoreRecord = [];

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
    }, 1000)

}

//Function to display question and answers to choose from and calls function to check answer
function askQuestion() {
    
    if(q < questions.length) {
       mainDiv.innerHTML = "<h1>"+quizQuestion.question+"</h1>";
       console.log(questions)
       //Create buttons with answers
       for (let i = 0; i < quizQuestion.answerOpt.length; i++) {
            var answerBtns = document.createElement("button");
            answerBtns.textContent = quizQuestion.answerOpt[i];
            answerBtns.addEventListener("click", checkAnswer);
            mainDiv.appendChild(answerBtns);
       }
       
    }
    else {
        countDown = 0;
        
        finalScore()
    }
    // checkAnswer(answerChosen);
}

//Function to check answer chosen by user, count, and show result
function checkAnswer() {
    var answerChosen = this.textContent

    if(answerChosen === quizQuestion.correctAnswer) {
        correctAnswerCount++;
        q++;
        quizQuestion = questions[q];
        result.textContent = "Correct!";
        askQuestion();
    }
    else{
        if(countDown >= 10){
        countDown = countDown - 10;}
        else{
            countDown = 0
            finalScore()
        }
        q++;
        quizQuestion = questions[q];
        result.textContent = "Incorrect :("
        askQuestion();
    }

}

//Function to show quiz score at the end of timer
function finalScore() {
    alert("Here is your final score: "+ correctAnswerCount)
    result.textContent = "";
    clearInterval(timer);
    saveScore();
}

//Function for user input prompt for Initials to save score, and concat info to the score list
function saveScore() {
    var initials = prompt("Enter your initials to save your score!");
    if(!initials) {
        saveScore()
    };
    
    var userInfo = {
    initials: initials,
    score: correctAnswerCount,
    };

    scoreRecord.push(userInfo);
    scoreRecord = scoreRecord.concat(JSON.parse(localStorage.getItem("scoreRecord")||'[]'));
    console.log(scoreRecord)

    localStorage.setItem("scoreRecord", JSON.stringify(scoreRecord))

    highScores();
    
}

//Function to Display Top Scores, called by saveScore and when the view high scores button is pressed
function highScores() {
    mainDiv.innerHTML = "<h1>Leaderboard</h1>";
    
    scoreRecord = JSON.parse(localStorage.getItem("scoreRecord")||'[]');

    scoreRecord.sort((a, b) => b.score - a.score);

    var leaderboard = document.createElement("ol")
    

    scoreRecord.forEach((Element) => {
        var user = document.createElement("li");
        user.textContent = `${Element.initials}, Score: ${Element.score}`;
        leaderboard.appendChild(user);
        
    })
    mainDiv.append(leaderboard)
    var backBtn = document.createElement("button");
    backBtn.textContent = "Go Back";
    backBtn.addEventListener("click", reset);
    mainDiv.appendChild(backBtn);
}

//Event Listener for start button 
startButton.addEventListener("click", startQuiz)

//Event Listener for View High Scores Button
scoresBtn.addEventListener("click", highScores)

//Init function, to triggers when the webpage is loaded
function reset() {
    document.location.reload()
}
