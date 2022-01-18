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