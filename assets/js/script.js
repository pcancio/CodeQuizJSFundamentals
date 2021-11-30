var questions = [{
        question: "Where is the correct place to insert a JavaScript? ",
        answers: [
            { text: "<head>", correct: false },
            { text: "<header>", correct: false },
            { text: "<body>", correct: true },
            { text: "<footer>", correct: false }
        ]
    },
    //     {
    //         question: "How do you create a function in JavaScript?",
    //         answers: ["function myFunction()", "function =myFunction()", "function:myfunction()", "function =>myfunction()"],
    //         correct: "function =myfunction()"
    //     },
    //     {
    //         question: "How do you write an If Statement in JavaScript?",
    //         answers: ["if i =5 then", "if i = 5", "if i == 5 then", "if (i===5)"],
    //         correct: "if i = 5"
    //     },
    //     {
    //         question: "How do you call a function named 'myfunction'?",
    //         answers: ["myFunction()", "call function myFunction()", "call myFunction()", "call() myFunction"],
    //         correct: "myFunction()"
    //     },
    //     {
    //         question: "How do you make an alert box for 'Hello World'?",
    //         answers: ["msg('Hello World');", "alert('Hello World');", "alertBox('Hello World');", "msgBox('Hello World');"],
    //         correct: "alert('Hello World');"
    //     },

    // ]

    const startButton = document.getElementById('start-btn');
    const nextButton = document.getElementById('next-btn');
    const questionContainerEl = document.getElementById('question-container');
    const questionEl = document.getElementById('question');
    const answerEl = document.getElementById('answer-buttons');

    let shuffledQuestions, currentQuestionIndex

    startButton.addEventListener('click', startQuiz);
    nextButton.addEventListener('click', () => {
        currentQuestionIndex++
    })

    function StartQuiz() {
        startButton.classList.add('hide')
        questionContainerEl.classList.remove('hide')
        shuffledQuestions = questions.sort(() => Mat.random() - .5);
        currentQuestionIndex = 0
        setNextQuestion()
    }

    function setNextQuestion() {
        showQuestion(shuffledQuestions[currentQuestionIndex])
    }

    function showQuestion(question) {
        questionEl.innerText = question.question
        question.answers.forEach(answer => {
            const button = document.createElement('button')
            button.innerText = answer.innerText
            button.classList.add('btn')
            if (answer.correct) {
                button.dataset.correct = answer.correct
            }
            button.addEventListener('click', selectAnswer) answerButtonsEl.appendChild(button)
        })

    }

    function resetState() {
        nextButton.classList.add('hide')
        while (answerEl.firstChild) {
            answerEl.removeChild(answerEl.firstChild)
        }
    }

    function selectAnswer() {
        const selectedButton = e.target
        const correct = selectedButton.dataset.correct
        setStatusClass(document.body, correct)
        Array.from(answerEl.children).forEach(button => {
            setStatusClass(button, button.dataset.correct)
        })
    }

    function setStatusClass(element, correct) {
        clearStatusClass(element)
        if (correct) {
            element.classList.add('correct')
        } else {
            element.classList.add('wrong')
        }
    }

}




// var questionId = 0;
// var score = 0;
// var quizContainerEl = document.querySelector("#quiz-container");
// var scoreEl = document.querySelector("#totalScore");
// var timerEl = document.querySelector("#timer");
// var mainEl = document.querySelector("#main");
// var check = document.querySelector("checkAnswer");
// var storedScore = document.querySelector("getHighScore");
// var timeLeft = 100;
// var HighScore = [];

// function StartQuiz(questionId) {
//     var quizTextEl = document.createElement("div");
//     quizTextEl.id = "question" + questionId;
//     quizTextEl.className = "btn-container";
//     quizTextEl.innerHTML = Questions[questionId].question;
//     for (ans in Questions[questionId].answers) {
//         startButtonEl.className = "start-btn"
//         startButtonEl.setAttribute("onclick", "checkAnswer" + questionId + "," + Questions[questionId].answers[ans]);
//         startButtonEl.textContent = Questions[questionId].answers[ans];
//         quizTextEl.appendChild(quizInfoEl);
//     }
//     mainEl.appendChild(quizTextEl);
// }

// function checkAnswer(questionId, answers) {
//     var selectContainer = document.querySelector("#question" + questionId);
//     if (answers === Questions[questionId].correctAnswer) {
//         correct();
//         score += 10;
//         showScore();
//         questionId++;
//     } else {
//         wrong()
//         timeLeft -= 10;
//         questionId++;
//     }
//     selectContainer.remove();
//     if (Questions[questionId] === undefinded) {
//         gameOver();
//     } else {
//         StartQuiz(questionId);
//     }
// }

// function gameOver() {
//     var currentEl = document.querySelector(".btn-container")
// }