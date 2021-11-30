var Questions = [{
        question: "Where is the correct place to insert a JavaScript? ",
        answer: ["<head>", "<header>", "<body>", "<footer>"],
        correct: "<body>"
    },
    {
        question: "How do you create a function in JavaScript?",
        answer: ["function myFunction()", "function =myFunction()", "function:myfunction()", "function =>myfunction()"],
        correct: "function =myfunction()"
    },
    {
        question: "How do you write an If Statement in JavaScript?",
        answer: ["if i =5 then", "if i = 5", "if i == 5 then", "if (i===5)"],
        correct: "if i = 5"
    },
    {
        question: "How do you call a function named 'myfunction'?",
        answer: ["myFunction()", "call function myFunction()", "call myFunction()", "call() myFunction"],
        correct: "myFunction()"
    },
    {
        question: "How do you make an alert box for 'Hello World'?",
        answer: ["msg('Hello World');", "alert('Hello World');", "alertBox('Hello World');", "msgBox('Hello World');"],
        correct: "alert('Hello World');"
    },

]
var questionId = 0;
var score = 0;
var quizContainerEl = document.querySelector("#quiz-container");
var scoreEl = document.querySelector("#totalScore");
var timerEl = document.querySelector("#timer");
var main = document.querySelector("#main");
var timeLeft = 100;
var HighScore = [];

function StartQuiz(questionId) {
    var quizTextEl = document.createElement("div");
    quizTextEl.id = "question" + questionId;
    quizTextEl.className = "btn-container";
    quizTextEl.innerHTML = "<h2>Questions[questionId].question </h2>";
    for (ans in Questions[questionId].answers) {
        startButtonEl.class "start-btn"
    }

}