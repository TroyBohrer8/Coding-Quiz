const startBtn = document.querySelector(".start");
const rulesBox = document.querySelector(".rules-container");
const exitBtn = document.querySelector(".exit");
const continueBtn = document.querySelector(".continue");
const quizBox = document.querySelector(".quiz-container");

// Prompt Rules
startBtn.addEventListener("click", () => {
  rulesBox.classList.add("showRules");
  console.log("hello");
});

// Exit
exitBtn.addEventListener("click", () => {
    rulesBox.classList.remove("showRules");
})

// Start Quiz
continueBtn.addEventListener("click", () => {
    rulesBox.classList.remove("showRules");
    quizBox.classList.add("showQuiz")
})
