import { useState } from "react";
import Trivia from "./Trivia";
import "./Main.css";

const Main = () => {
  const [questionNumber, setQuestionNumber] = useState(1);
  const [timeOut, setTimeOut] = useState(1);

  const questions = [
    {
      id: 1,
      question: "What year was the very first model of the iPhone released?",
      answers: [
        {
          text: "2006",
          correct: false,
        },
        {
          text: "2007",
          correct: true,
        },
        {
          text: "2008",
          correct: false,
        },
        {
          text: "2009",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "Which planet has the most gravity?",
      answers: [
        {
          text: "Earth",
          correct: false,
        },
        {
          text: "Mars",
          correct: false,
        },
        {
          text: "Jupiter",
          correct: true,
        },
        {
          text: "Saturn",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "Which animal can be seen on the Porsche logo?",
      answers: [
        {
          text: "Bull",
          correct: false,
        },
        {
          text: "Horse",
          correct: false,
        },
        {
          text: "Snake",
          correct: true,
        },
        {
          text: "Bird",
          correct: false,
        },
      ],
    },
  ];

  return (
    <div className="main">
      <div className="top">
        <div className="timer">30</div>
      </div>
      <div className="bottom">
        <Trivia
          data={questions}
          setTimeOut={setTimeOut}
          setQuestionNumber={setQuestionNumber}
          questionNumber={questionNumber}
        />
      </div>
    </div>
  );
};

export default Main;
