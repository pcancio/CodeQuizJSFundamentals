var headerEl = document.getElementById("top");
var contentId = document.getElementById("content");

function createElement(element, type, value, text) {
    var tmp = document.createElement(element);
    tmp.setAttribute(type, value);
    tmp.textContent = text;
    return tmp;
};






var timeEl = document.querySelector(".time");
var secondsLeft = 75;
var questionIndex = 0;
var submitBtn;

function startQuiz() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = secondsLeft;

        if (secondsLeft <= 0) {
            clearInterval(timerInterval);
            sendMessage();
            endGame();
        }
    }, 1000);
    buildQuiz(quizQuestions[questionIndex])
}

function sendMessage() {
    alert("Game over! Enter your score.")
}
var card = document.getElementById('welcomeCard')

function buildQuiz(quizQ) {
    card.innerHTML = `
    <div> ${ quizQ.question} </div> 
        <button class = "answerBtn"> ${ quizQ.choice1 } </button> 
        <button class = "answerBtn" > ${ quizQ.choice2 } </button> 
        <button class = "answerBtn" > ${ quizQ.choice3 } </button> 
        <button class = "answerBtn" > ${ quizQ.choice4 } </button>`
}
var userSelection = document.getElementsByClassName('answerBtn')
for (var i = 0; i < userSelection.length; i++) {
    userSelection[i].addEventListener('click', function(event) {
        if (event.target.innerText === quizQ.answer) {} else {
            secondsLeft -= 10
        }
        questionIndex++
        if (questionIndex === quizQuestions.length) {
            endGame()
            timeEl = secondsLeft
        } else { buildQuiz(quizQuestions[questionIndex]) }
    })
}

function endGame() {
    card.innerHTML = `
    <div>Your score is ${secondsLeft}</div>
    <h1="fname">Enter your intials:</h1><br>
    <input type ="text" id ="initials"><br>
    <button id="submit">Submit</button>
    `
    submitBtn = document.getElementById('submit')
    submitBtn.addEventListener('click', function() {
        var initals = document.getElementById('initials').value
        localStorage.setItem = ('initials', initals)
        localStorage.setItem = ('score', secondsLeft)
        alert("Thanks for playing!")
    })
}

var quizQuestions = [{
        question: "Inside which HTML element do we put the JavaScript?",
        choice1: "<script>",
        choice2: "<js>",
        choice3: "<scripting>",
        choice4: "<javascript>",
        answer: "<script>"
    },
    {
        question: "What is the correct syntax for referring to an external script called 'xxx.js'?",
        choice1: "<script href='xxx.js'>",
        choice2: "<script ='xxx.js'>",
        choice3: "<script src='xxx.js'>",
        choice4: "<javascript ='xxx.js'>",
        answer: "<script src='xxx.js'>"
    },
    {
        question: "How do you write 'Hello World' in an alert box?",
        choice1: "msgBox('Hello World')",
        choice2: "alert('Hello World');",
        choice3: "alertBox('Hello World');",
        choice4: "msg('Hello World');",
        answer: "alert('Hello World');"
    },
    {
        question: "How to write an IF statement in JavaScript?",
        choice1: "if i = 5",
        choice2: "if (i==5)",
        choice3: "if i = 5 then",
        choice4: "if i == 5 then",
        answer: "if (i==5)"
    },
    {
        question: "How to write an IF statement for executing some code if 'i' is NOT equal to 5?",
        choice1: "if (i !=5)",
        choice2: "if i=!5 then",
        choice3: "if (i) !=5",
        choice4: "if i <> 5",
        answer: "if (i != 5)"
    },
]

var startQuizBtn = document.getElementById('start-quiz');
startQuizBtn.addEventListener('click', startQuiz)