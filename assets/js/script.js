// grab elements from DOM
const startBtn = document.getElementById("startButton");
const answer1 = document.getElementById("answer1");
const answer2 = document.getElementById("answer2");
const answer3 = document.getElementById("answer3");
const answer4 = document.getElementById("answer4");
const answers = document.getElementById("answers");
const questionText = document.getElementById("questionText");
const quizContainer = document.getElementById("quiz-div");
const timer = document.querySelector("#time");
const messageDiv = document.querySelector("#message");

// declare variables
let score = 0;
let time = 60;
let randQuestion = "";
let questionIndex = 0;
let savedScores;
let scoreList = [];

startButton.addEventListener("click", startQuiz);

// start timer 
function startTime() {
    let timerInterval = setInterval(() => {
        time--;
        timer.textContent = `Timer: ${time}`;

        if (time === 0) {
            clearInterval(timerInterval);
            alert("time's up!");
            endQuiz();
        } else if (questionIndex === questions.length) {
            clearInterval(timerInterval);
        }
    }, 1000);
    return score;
}

// start quiz
function startQuiz() {
    randQuestion = questions.sort(() => Math.random() - 0.5);
    questionIndex = 0;
    showNextQuestion();
}
// show next
function showNextQuestion() {
    showQuestion(randQuestion[questionIndex]);
}

// get next 
function showQuestion() {
    answer1.hidden = false;
    answer2.hidden = false;
    answer3.hidden = false;
    answer4.hidden = false;

    startButton.classList.add("hide");
    if (questionIndex === questions.length) {
        endQuiz();
    } else {
        questionText.innerText = questions[questionIndex].question;
        answer1.textContent = questions[questionIndex]["choices"][0];
        answer2.textContent = questions[questionIndex]["choices"][1];
        answer3.textContent = questions[questionIndex]["choices"][2];
        answer4.textContent = questions[questionIndex]["choices"][3];
    }
}
// select answer
function selectAnswer(answer) {
    if (
        questions[questionIndex].answer === questions[questionIndex].choices[answer]
    ) {
        messageDiv.textContent = "Correct!";
        score += 20;
    } else {
        messageDiv.textContent = "Wrong!";
        score -= 20;
        time -= 10;
    }
    questionIndex++;
    showNextQuestion();
}

// functions to choose each button for selectAnswer
function choice0() {
    selectAnswer(0);
}

function choice1() {
    selectAnswer(1);
}

function choice2() {
    selectAnswer(2);
}

function choice3() {
    selectAnswer(3);
}

// GAMEOVERRRR RIP QUIZ
function endQuiz() {
    let scoreTag = document.createElement("h1");
    let inputTag = document.createElement("input");
    let submitButton = document.createElement("button");

    score += 20;

    messageDiv.classList.add("hide");
    questionText.textContent = "Game Over!";

    answer1.remove();
    answer2.remove();
    answer3.remove();
    answer4.remove();

    document.body.children[1].appendChild(scoreTag);
    document.getElementsByTagName("h1")[0].setAttribute("id", "score");
    document.getElementById("score").textContent = `Your score is: ${score}`;
    document.body.children[1].appendChild(inputTag);
    document.getElementsByTagName("input")[0].setAttribute("id", "input-field");

    submitButton.textContent = "Submit";
    document.body.children[1].appendChild(submitButton);
    document.getElementsByTagName("button")[0].setAttribute("id", "btn");
    submitButton.addEventListener("click", function(event) {
        event.preventDefault();
        let highScoreText = new Object();
        highScoreText.name = inputTag.value.trim();
        highScoreText.newScore = score;
        storeScores(highScoreText);
        window.location.href = "scores.html";
    });
}
// save to local storage 

function storeScores(highScoreText) {
    tempArray = JSON.parse(localStorage.getItem("scores"));
    if (tempArray === null) {
        scoreList.push(highScoreText);
        localStorage.setItem("scores", JSON.stringify(scoreList));
    } else {
        tempArray.push(highScoreText);
        localStorage.setItem("scores", JSON.stringify(tempArray));
    }
}

// hide buttons on page load
answer1.hidden = true;
answer2.hidden = true;
answer3.hidden = true;
answer4.hidden = true;

// event listeners
startButton.addEventListener("click", showQuestion);
startButton.addEventListener("click", startTime);
startButton.addEventListener("click", () => {
    messageDiv.textContent = "";
});
answer1.addEventListener("click", choice0);
answer2.addEventListener("click", choice1);
answer3.addEventListener("click", choice2);
answer4.addEventListener("click", choice3);


// Questions Array
const questions = [{
        question: "Inside which HTML element do we put the JavaScript?",
        choices: ["<script>", "<js>", "<scripting>", "<javascript>"],
        answer: "<script>"
    },

    {
        question: "What is the correct syntax for referring to an external script called 'xxx.js'?",
        choices: ["<script href='xxx.js'>", "<script ='xxx.js'>", "<script src='xxx.js'>", "<javascript ='xxx.js'>"],
        answer: "<script src='xxx.js'>"
    },

    {
        question: "How do you write 'Hello World' in an alert box?",
        choices: ["msgBox('Hello World')", "alert('Hello World');", "alertBox('Hello World');", "msg('Hello World');"],
        answer: "alert('Hello World');"
    },

    {
        question: "How to write an IF statement in JavaScript?",
        choices: ["if i = 5", "if (i = 5)", "if i = 5 then", "if i == 5 then"],
        answer: "if (i = 5)"
    },

    {
        question: "How to write an IF statement for executing some code if 'i' is NOT equal to 5?",
        choices: ["if (i !=5)", "if i=!5 then", "if (i) !=5", "if i <> 5"],
        answer: "if (i != 5)"
    },

    {
        question: "Inside which HTML element do we put the JavaScript?",
        choices: ["<script>", "<js>", "<scripting>", "<javascript>"],
        answer: "<script>"
    },

    {
        question: "Which event occurs when the user clicks on an HTML element?",
        choices: ["onmouseclick", "onchange", "onclick", "onmouseover"],
        answer: "onclick"
    },

    {
        question: "How can you make a bulleted list in HTML?",
        choices: ["<ol>", "<ul>", "<dl>", "<list>"],
        answer: "<ul>"
    },

    {
        question: "What does CSS stand for?",
        choices: ["Colorful Style Sheets", "Creative Style Sheets", "Computer Style Sheets", "Cascading Style Sheets", ],
        answer: "Cascading Style Sheets"
    },

    {
        question: "What does HTML stand for?",
        choices: ["Hyper Mark Text Language", "Hypermark Match Text Language", "Hypertext Markup Language", "Hypertext Match Language"],
        answer: "Hypertext Markup Language"
    },
];