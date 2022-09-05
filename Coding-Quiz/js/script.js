const startBtn = document.querySelector(".start");
const rulesBox = document.querySelector(".rules-container");
const exitBtn = document.querySelector(".exit");
const continueBtn = document.querySelector(".continue");
const quizBox = document.querySelector(".quiz-container");
const resultsBox = document.querySelector(".results-container");
const restartQuiz = document.querySelector(".restart");
const quitQuiz = document.querySelector(".quit");
// let timeValue = 15;
// let que_count = 0;
// let que_numb = 1;
// let userScore = 0;
// let counter;
// let counterLine;
// let widthValue = 0;

// Questions
let questions = [
  {
    id: 1,
    question: "What does HTML stand for?",
    answer: "Hyper Text Markup Language",
    options: [
      "Hyper Text Preprocessor",
      "Hyper Text Markup Language",
      "Hyper Text Multiple Language",
      "Hyper Tool Multi Language",
    ],
    id: 2,
    question: "What does HTML stand for?",
    answer: "Hyper Text Markup Language",
    options: [
      "Hyper Text Preprocessor",
      "Hyper Text Markup Language",
      "Hyper Text Multiple Language",
      "Hyper Tool Multi Language",
    ],
    id: 3,
    question: "What does HTML stand for?",
    answer: "Hyper Text Markup Language",
    options: [
      "Hyper Text Preprocessor",
      "Hyper Text Markup Language",
      "Hyper Text Multiple Language",
      "Hyper Tool Multi Language",
    ],
    id: 4,
    question: "What does HTML stand for?",
    answer: "Hyper Text Markup Language",
    options: [
      "Hyper Text Preprocessor",
      "Hyper Text Markup Language",
      "Hyper Text Multiple Language",
      "Hyper Tool Multi Language",
    ],
    id: 5,
    question: "What does HTML stand for?",
    answer: "Hyper Text Markup Language",
    options: [
      "Hyper Text Preprocessor",
      "Hyper Text Markup Language",
      "Hyper Text Multiple Language",
      "Hyper Tool Multi Language",
    ],
  },
];

// Prompt Rules
startBtn.addEventListener("click", () => {
  rulesBox.classList.add("showRules");
});

// Exit
exitBtn.addEventListener("click", () => {
  rulesBox.classList.remove("showRules");
});

// Start Quiz
continueBtn.addEventListener("click", () => {
  rulesBox.classList.remove("showRules");
  quizBox.classList.add("showQuiz");
//   showQuestions(0);
//   queCounter(1);
//   startTimer(15);
//   startTimeLine(0);
});
