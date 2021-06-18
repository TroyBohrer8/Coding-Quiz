var startBtn = document.querySelector('#startBtn');
var timer;
var timeCount;



// startQuiz function is called when start button is clicked

startBtn.addEventListener('click', function startGame() {

})

// Need array for questions
var questions = [
    {
        title: "Which of the following is NOT a primitive",
        choices: ["string", "index", "boolean", "number"],
        answer: "index"
    },

    {
        title: "Which comparison should we use to check if the user's answer matches the correct answer?",
        choices: ["!==", "=", "===", "$=="],
        answer: "==="
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

        {
        title: "Which of the following is NOT a primitive",
        choices: ["string", "index", "boolean", "number"],
        answer: "index"
    },
]

// The correctAnswer function is called when correct condition is set

// The wrongAnswer function is called when the wrong condition is set

// The setTimer function subtracts 3 seconds when answer is wrong
