const startBtn = document.querySelector(".start");
const rulesBox = document.querySelector(".rules-container");
const exitBtn = document.querySelector(".exit");
const continueBtn = document.querySelector(".continue");
const quizBox = document.querySelector(".quiz-container");
const questionsBox = document.querySelector(".questions");
const resultsBox = document.querySelector(".results-container");
const restartQuiz = document.querySelector(".restart");
const quitQuiz = document.querySelector(".quit");
// let timeValue = 15;
// let que_numb = 1;
// let userScore = 0;
// let counter;
// let counterLine;
// let widthValue = 0;

// Questions
let questions = [
  {
    question: "What does HTML stand for?",
    answer: "Hyper Text Markup Language",
    options: [
      "Hyper Text Preprocessor",
      "Hyper Text Markup Language",
      "Hyper Text Multiple Language",
      "Hyper Tool Multi Language",
    ],
  },
  {
    question: "How many bits are in 1 byte?",
    answer: "8",
    options: ["2", "10", "8", "12"],
  },
  {
    question:
      "What would you use to iterate over something over and over again?",
    answer: "Loop",
    options: ["Loop", "Array", "Object", "Boolean"],
  },
  {
    question: "Which hex-color is the color white?",
    answer: "#fff",
    options: ["#000", "#fff", "#e8a", "#1fa"],
  },
  {
    question: "What symbols are used to create an array?",
    answer: "[]",
    options: ["{}", "()", "<>", "[]"],
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
  showQuestions(0);
  //   queCounter(1);
  //   startTimer(15);
  //   startTimeLine(0);
});

let questionNumber = 0;

// Show Questions
function showQuestions(index) {
  const questionText = document.querySelector(".questions");
  const optionText = document.querySelector(".answers");
  let questionElement = document.createElement("span");

  // Append question
  questionElement.innerHTML = questions[index].question;
  questionText.appendChild(questionElement);

  // Loop through options and append each one
  for (let i = 0; i < questions[index].options.length; i++) {
    let optionElement = document.createElement("span");
    optionElement.textContent = questions[index].options[i];
    optionText.appendChild(optionElement);
  }
}
