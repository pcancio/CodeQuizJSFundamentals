const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionContainerEl = document.getElementById('question-container');
const questionEl = document.getElementById('question');
const answerEl = document.getElementById('answer-buttons');
let timeLeft = 60;
let Highscore = [];

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startQuiz);
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

function gameOver() {
    const currentEl = document.querySelector()
}
function startQuiz() {
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5);
    currentQuestionIndex = 0
    questionContainerEl.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionEl.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerEl.appendChild(button)
    })
}

function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerEl.firstChild) {
        answerEl.removeChild(answerEl.firstChild)
    }
}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerEl.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide')
    } else {
        startButton.innerText = 'Restart'
        startButton.classList.remove('hide')
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

const questions = [{
        question: "Where is the correct place to insert a JavaScript? ",
        answers: [
            { text: "<head>", correct: false },
            { text: "<header>", correct: false },
            { text: "<body>", correct: true },
            { text: "<footer>", correct: false }
        ]
    },
    {
        question: "How do you write an If Statement in JavaScript? ",
        answers: [
            { text: "if i =5 then", correct: false },
            { text: "if i = 5", correct: true },
            { text: "if i == 5 then", correct: false },
            { text: "if (i===5)", correct: false }
        ]
    },
    {
        question: "How do you call a function named 'myfunction'? ",
        answers: [
            { text: "myFunction()", correct: true },
            { text: "call function myFunction()", correct: false },
            { text: "call myFunction()", correct: false },
            { text: "function callmyFunction()", correct: false }
        ]
    },
    {
        question: "How do you make an alert box for 'Hello World'?",
        answers: [
            { text: "msg('Hello World');", correct: false },
            { text: "alert('Hello World');", correct: true },
            { text: "alertBox('Hello World');", correct: false },
            { text: "msgBox('Hello World');", correct: false }
        ]
    },
    {
        question: "Which logical operators in Javascript represent 'AND' ",
        answers: [
            { text: "&!", correct: false },
            { text: "&", correct: false },
            { text: "||", correct: false },
            { text: "&&", correct: true }
        ]
    }
]