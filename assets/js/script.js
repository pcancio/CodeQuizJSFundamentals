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
        question: "",
        choice1: "",
        choice2: "",
        choice3: "",
        choice4: "",
        answer: ""
    },
    {
        question: "",
        choice1: "",
        choice2: "",
        choice3: "",
        choice4: "",
        answer: ""
    },
    {
        question: "",
        choice1: "",
        choice2: "",
        choice3: "",
        choice4: "",
        answer: ""
    },
    {
        question: "",
        choice1: "",
        choice2: "",
        choice3: "",
        choice4: "",
        answer: ""
    },
    {
        question: "",
        choice1: "",
        choice2: "",
        choice3: "",
        choice4: "",
        answer: ""
    },
]

var startQuizBtn = document.getElementById('start-quiz');
startQuizBtn.addEventListener('click', startQuiz)