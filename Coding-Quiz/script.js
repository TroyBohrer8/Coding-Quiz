var quizBox = document.querySelector('.quizBox');
var startButton = document.getElementById('startButton');
var timer = document.getElementById('timer');
var timeCount = document.getElementById('timercounter');
var titeItem = document.getElementById('title-item');
var quizQuestions = document.getElementById('quiz-questions');
var quizAnswers = document.getElementById('quiz-answers');
var nextQuestion;
var currentIndex = 0;
var count = 75;
var info = document.getElementById('info');
var quizScores = [];
var storedScores = JSON.parse(localStorage.getItem('userData'));

var questions = [
    {
        title: "Which of the following is NOT a primitive?",
        choices: ["string", "index", "boolean", "number"],
        answer: "index"
    },

    {
        title: "Which comparison should we use to check if the user's answer matches the correct answer?",
        choices: ["!==", "=", "===", "$=="],
        answer: "==="
    },

    {
        title: "Whats the maximun amount of values can we store in an array?",
        choices: ["1", "5", "As many as we want", "100"],
        answer: "As many as we want"
    },

    {
        title: "Which of the following is NOT a primitive",
        choices: ["string", "index", "boolean", "number"],
        answer: "index"
    },

        {
        title: "Which of the following is NOT a primitive",
        choices: ["string", "index", "boolean", "number"],
        answer: "index"
    },
]



// startQuiz function is called when start button is clicked

startButton.addEventListener('click', startQuiz); 
function startQuiz() {
    if(storedScores !== null) {
        quizScores = storedScores;
    }
    
    startButton.classList.add("d-none")
    quizQuestions.classList.remove("d-none")
    nextQuestion = questions[currentIndex]
    quizBox.classList.add("d-none")
    // console.log(nextQuestion)
    displayQuestion(nextQuestion)

quizTime();

};

// Timer
function quizTime() {
    var timeInterval = setInterval(function() {
        timer.innerText = count;
        count--;
    }, 1000);
};

// Display Questions
function displayQuestion(question) {
    titeItem.innerText = question.title;
    question.choices.forEach(element => {
        let button = document.createElement("button");
        button.className = "btn-primary btn-block text-left";
        button.innerText = element;
        quizAnswers.appendChild(button);
        button.addEventListener('click', displayNextQuestion)
    });
};

function displayNextQuestion(e) {
    currentIndex++;
    if (currentIndex < questions.length) {
            correction(e.target.innerText === nextQuestion.answer)
            quizAnswers.innerHTML = " ";
        if (currentIndex < questions.length) {
            nextQuestion = questions[currentIndex]
            displayQuestion(nextQuestion);
        } else {
            currentIndex = 0;
            displayQuestion(nextQuestion);
        }
    } else {
        console.log("endgame")
        endgame();
    }
}


