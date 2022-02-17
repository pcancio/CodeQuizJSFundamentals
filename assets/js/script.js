// set variables 
var headerEl = document.getElementById("header");
var contentId = document.getElementById("content");

// create elements 
function createElement(element, type, value, text) {
    var tmp = document.createElement(element);
    tmp.setAttribute(type, value);
    tmp.textContent = text;
    return tmp;

// create answer buttons
function createButton(idValue) {
var tmp = document.createElement("button");
tmp.setAttribute("type", "button");
tmp.setAttribute("class", "answers");
tmp.setAttribute("id", idValue);
return tmp;

// create span for answer button text
function createSpan(idValue) {
var tmp = document.createElement("span");
tmp.setAttribute("data-answer", "option" + idValue);
tmp.setAttribute("id", "option" + idValue);
return tmp;

// append child elements 
function appendChild(location, element) {
var tmp = location.appendChild(element);
return tmp;
};

// Start the quiz! 
function startQuiz(event) {
event.preventDefault;

// Questions Array
                questionIndex = [];

                var q1 = {
                    text: "Inside which HTML element do we put the JavaScript?",
                    choices: ["<script>", "<js>", "<scripting>", "<javascript>"],
                    answer: "<script>"
                };
                questionIndex.push(q1);

                var q2 = {
                    text: "What is the correct syntax for referring to an external script called 'xxx.js'?",
                    choices: ["<script href='xxx.js'>", "<script ='xxx.js'>", "<script src='xxx.js'>", "<javascript ='xxx.js'>"],
                    answer: "<script src='xxx.js'>"
                };
                questionIndex.push(q2);

                var q3 = {
                    text: "How do you write 'Hello World' in an alert box?",
                    choices: ["msgBox('Hello World')", "alert('Hello World');", "alertBox('Hello World');", "msg('Hello World');"],
                    answer: "alert('Hello World');"
                };
                questionIndex.push(q3);

                var q4 = {
                    text: "How to write an IF statement in JavaScript?",
                    choices: ["if i = 5", "if (i = 5)", "if i = 5 then", "if i == 5 then"],
                    answer: "if (i = 5)"
                };
                questionIndex.push(q4);

                var q5 = {
                    text: "How to write an IF statement for executing some code if 'i' is NOT equal to 5?",
                    choices: ["if (i !=5)", "if i=!5 then", "if (i) !=5", "if i <> 5"],
                    answer: "if (i != 5)"
                };
                questionIndex.push(q5)
            }
// function to shuffle questionIndex
shuffle(questionIndex);

// This function will shuffle order of questions in the array
function shuffle(array) {
    var currentIndex = array.length;
    var temporaryValue, randomIndex;
    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
};

 // Declaring my elements and their matching html names

                var startQuizEl = document.getElementById('start');
                var timerEl = document.getElementById('time');
                var startScreenEl = document.getElementById('start-screen');
                var questionsEl = document.getElementById('questions');
                var questionTitleEl = document.getElementById('question-title');









                var headerEl = document.getElementById("top");
                var contentId = document.getElementById("content");

                function createElement(element, type, value, text) {
                    var tmp = document.createElement(element);
                    tmp.setAttribute(type, value);
                    tmp.textContent = text;
                    return tmp;
                };

                function createButton(idValue) {
                    var tmp = document.createElement("button");
                    tmp.setAttribute("type", "button");
                    tmp.setAttribute("class", "answers");
                    tmp.setAttribute("id", idValue);
                    return tmp;
                };

                jonath




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

                var quizQuestions = [

                        var startQuizBtn = document.getElementById('start-quiz');
                        startQuizBtn.addEventListener('click', startQuiz)