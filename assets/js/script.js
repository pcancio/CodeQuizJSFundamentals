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

// Quiz variables
var lastQuestionIndex = questionList.length - 1;
var score = 0;
var currentQuestionIndex = 0;
countDown = 60;
countDownSpan.textContent = countDown;

// Hiding description and quiz button
document.querySelector("#description").style.display = "none";
document.querySelector("#start-quiz").style.display = "none";
contentId.style.textAlign = "left";

// start the timer
setTime();

//Create answer buttons
createAnswers();

//function will shuffle order of questions 
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

 