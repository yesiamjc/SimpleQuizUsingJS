const quizData = [
    {
        question: "What is a commonly used backend programming language?",
        a: "a) HTML",
        b: "b) CSS",
        c: "c) JavaScript",
        d: "d) C",
        correct: "c",
    },
    {
        question: "Which database type is commonly used for storing structured data in backend development?",
        a: "a) MongoDB",
        b: "b) Redis",
        c: "c) SQLite",
        d: "d) Apache Kafka",
        correct: "c",
    },
    {
        question: "Which protocol is commonly used for communication between the client and the server in a RESTful API?",
        a: "a) HTTP",
        b: "b) FTP",
        c: "c) TCP",
        d: "d) UDP",
        correct: "a",
    },
    {
        question: "What is the purpose of a web server in backend development?",
        a: "a) Render HTML pages",
        b: "b) Execute JavaScript code",
        c: "c) Store and retrieve data",
        d: "d) Handle incoming HTTP requests",
        correct: "d",
    },
    {
        question: "Which of the following is NOT a commonly used backend framework?",
        a: "a) Django",
        b: "b) Flask",
        c: "c) Node.js",
        d: "d) Angular",
        correct: "d",
    }
];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer

    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })

    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    
    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++
        }

        currentQuiz++

        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
                <h2>You answered ${score}/${quizData.length} questions correctly</h2>

                <button onclick="location.reload()">Reload</button>
            `
        }
    }
})