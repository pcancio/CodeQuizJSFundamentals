// grab elements from DOM
const startBtn = document.getElementById("startButton");
const answer1 = document.getElementById("answer1");
const answer2 = document.getElementById("answer2");
const answer3 = document.getElementById("answer3");
const answer4 = document.getElementById("answer4");
const answers = document.getElementById("answers");
const questionText = document.getElementById("questionText");
const gameContainer = document.getElementById("game-div");
const timer = document.querySelector("#time");
const messageDiv = document.querySelector("#message");

// declare variables
let score = 0;
let time = 60;
let randQuestion = "";
let questionIndex = 0;
let savedScores;
let scoreList = [];

startButton.addEventListener("click", startGame);

// start timer 
function startTime() {
    let timerInterval = setInterval(() => {
      time--;
      timer.textContent = `Timer: ${time}`;
  
      if (time === 0) {
        clearInterval(timerInterval);
        alert("time's up!");
        endGame();
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
      endGame();
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
            
