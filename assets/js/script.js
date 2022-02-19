// set variables 
var headerEl = document.getElementById("header");
var contentId = document.getElementById("content");

// create elements 
function createElement(element, type, value, text) {
    var quiz = document.createElement(element);
    quiz.setAttribute(type, value);
    quiz.textContent = text;
    return quiz;

// create answer buttons
function createButton(idValue) {
var quiz = document.createElement("button");
quiz.setAttribute("type", "button");
quiz.setAttribute("class", "answers");
quiz.setAttribute("id", idValue);
return quiz;
};

// create span for answer button text
function createSpan(idValue) {
var quiz = document.createElement("span");
quiz.setAttribute("data-answer", "option" + idValue);
quiz.setAttribute("id", "option" + idValue);
return tmp;
};

// append child elements 
function appendChild(location, element) {
var quiz = location.appendChild(element);
return quiz;
};

// Start the quiz! and do all the functions after the array
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
            
// call function to shuffle questionIndex
shuffle(questionIndex);

// Quiz variables
var lastQuestionIndex = questionIndex.length - 1;
var score = 0;
var currentQuestionIndex = 0;
countDown = 60;
countDownSpan.textContent = countDown;

// Hiding description and quiz button
document.querySelector("#description").style.display = "none";
document.querySelector("#start-quiz").style.display = "none";
contentId.style.textAlign = "left";

// call to start the timer
startTime();
//call to create answer buttons
createAnswers();
// call the first question to render
renderQuestion();
//target the answer buttons for user input and checking answer
var answerIndex = document.querySelectorAll(".answers");
for (var i = 0; i < answerList.length; i++) {
    answerIndex[i].addEventListener('click', checkAnswer)
};
//function starts the timer when the quiz starts, makes 0 game over

    function startTime() {
        var timerInterval = setInterval(function () {
            countDown--;
            countDownSpan.textContent = countDown;
            if (countDown === 0) {
                clearInterval(timerInterval);
                gameOver();
            } else if (countDown < 0) {
                clearInterval(timerInterval);
                gameOver();
                countDown = 0
            }
            else if (currentQuestionIndex === lastQuestionIndex) {
                clearInterval(timerInterval);
            }
        }, 1000);
    };
// function to create the answer buttons
function createAnswers() {
var qs = questionIndex[currentQuestionIndex];
var answers = createElement("div", "id", "answers");
appendChild(contentId, answers);
var answersDiv = document.getElementById("answers");
        appendChild(answersDiv, button0);
        appendChild(answersDiv, button1);
        appendChild(answersDiv, button2);
        appendChild(answersDiv, button3);
        for (var i = 0; i < qs.choices.length; i++) {
            var textSpan = createSpan(i);
            appendChild(document.getElementById("btn" + i), textSpan)
        };
    };
// function to shuffle order of qs
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

    // function to render 
    function renderQuestion() {
        var qs = questionIndex[currentQuestionIndex];

        questionH1.textContent = qs.text;

        for (var i = 0; i < q.choices.length; i++) {
            document.getElementById("option" + i).textContent = qs.choices[i];
        }
    };

    // function to check if answer is correct.
    function checkAnswer(event) {
        event.preventDefault();
        var wrongAnswer = 10;
        var qs = questionIndex[currentQuestionIndex];
        var userInput = this.children[0].getAttribute("data-answer");
        // if correct, show correct 
        if (userInput === qs.correctAnswer) {
            score++;
            displayCorrect();
        } else {
            // if wrong show wrong and lose points
            countDown = countDown - wrongAnswer;
            countDown.textContent = countDown;
            displayWrong();
        };
        // keep doing it till last question then game over
        if (currentQuestionIndex < lastQuestionIndex) {
            currentQuestionIndex++;
            renderQuestion();
        } else {
            gameOver();
        };
    };

    // show that the answer was correct
    function displayCorrect() {
        var correct = createElement("h3", "id", "correct", "Correct!");
        appendChild(document.body, correct);
        timer = 1;
        var timerInterval = setInterval(function () {
            timer--;
            if (timer === 0) {
                clearInterval(timerInterval);
                var element = document.getElementById("correct");
                element.parentNode.removeChild(element);
                timer = 1;
            };
        }, 1000);
    };

    // show that the answer was wrong
    function displayWrong() {
        var wrong = createElement("h3", "id", "wrong", "Wrong!")
        appendChild(document.body, wrong);
        timer = 1;
        var timerInterval = setInterval(function () {
            timer--;
            if (timer === 0) {
                clearInterval(timerInterval);
                var element = document.getElementById("wrong");
                element.parentNode.removeChild(element);
                timer = 1;
            };
        }, 1000);
    };
    // game overrrrr, then do: 
    function gameOver() {
        countDownSpan.textContent = 0;
        contentId.style.textAlign = "center";
        questionH1.textContent = "GAME OVER"
        hideButtons();
        showScore();
        addInitials()
    }

    // hide answer buttons
    function hideButtons() {
        var q = questionIndex[currentQuestionIndex];
        for (var i = 0; i < q.choices.length; i++) {
            document.getElementById("btn" + i).style.display = "none";
        };
    };

    // show the score
    function showScore() {
        var scoreDiv = createElement("h2", "class", "score", "Score: " + score);
        appendChild(contentId, scoreDiv);
    };

// This function handles the input for initials and puts it into local storage.
    // It also appends data from previous scores, then sorts in score order from big to small
    function addInitials() {
        var input = createElement("input", "type", "text");
        input.setAttribute("id", "input");
        input.setAttribute("placeholder", "Type your initials!");
        input.setAttribute("size", "20");
        var submit = createElement("button", "id", "submit", "Submit");
        var msg = createElement("div", "id", "msg");
        appendChild(contentId, input);
        appendChild(contentId, submit);
        appendChild(contentId, msg);

        document.getElementById("submit").addEventListener("click", function () {
            if (document.getElementById("input").value == "") {
                document.getElementById("msg").textContent = "Please type in your initials!"
            } else {
                var highScoreList = JSON.parse(localStorage.getItem("highScores"));
                if (highScoreList == null) {
                    var highScoreList = [];
                    var newScore = new Object();
                    newScore.initials = document.getElementById("input").value;
                    newScore.score = score;
                    highScoreList.push(newScore);
                    var rankedScore = highScoreList.sort(({ score: a }, { score: b }) => b - a);
                    localStorage.setItem("highScores", JSON.stringify(rankedScore));
                }
                else {
                    var highScore = new Object();
                    highScore.initials = document.getElementById("input").value;
                    highScore.score = score;
                    highScoreList.push(highScore);
                    var rankedScore = highScoreList.sort(({ score: a }, { score: b }) => b - a);
                    localStorage.setItem("highScores", JSON.stringify(rankedScore));
                };
                location.href = "highscores.html"
            };
        });
    };
};
};
