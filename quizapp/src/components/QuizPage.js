import React, { useContext, useState } from "react";
import { Button } from "antd";
import "./index.scss";
import { AppItemBox } from "../App";

const QuestionArray = [
  {
    title: "what is the capital of India ?",
    A: "Hyderabad",
    B: "New Delhi",
    C: "New Zealand",
    D: "New Mexico",
    Answer: "B",
  },
  {
    title:
      "Which of the following tag is used for inserting the largest heading in HTML?",
    A: "<h3>",
    B: "<h4>",
    C: "<h6>",
    D: "<h1>",
    Answer: "D",
  },
  {
    title: "What is React?",
    A: "It is a library",
    B: "It is framework",
    C: "Both A and B",
    D: "None of the above",
    Answer: "A",
  },
  {
    title: "HTML stands for - ?",
    A: "HighText Machine Language",
    B: "HyperText and links Markup Language",
    C: "HyperText Markup Language",
    D: "None of the above",
    Answer: "C",
  },
  {
    title: "Which is Click Events in HTML ?",
    A: "onClick Event",
    B: "onMouseOver Event",
    C: "onMouseOut Event",
    D: "None of the above",
    Answer: "A",
  },
  {
    title:
      "Which is the correct syntax for referring to an external style sheet?",
    A: "<link rel='stylesheet' type='text/css' href='style.css'>",
    B: "<link rel='stylesheet' href='style.css'>",
    C: "<link rel='stylesheet' type='text/css' href='style.css'>",
    D: "<link rel='stylesheet' href='style.css'>",
    Answer: "C",
  },
];

function QuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [correctAnswer, setAnswer] = useState("");
  const { TotalScore, SetTotalScore, storeState, setNoOfQuestions } =
    useContext(AppItemBox);
  setNoOfQuestions(QuestionArray.length);

  const goToNextQuestion = () => {
    if (correctAnswer != "") {
      if (QuestionArray[currentQuestion].Answer === correctAnswer) {
        SetTotalScore(TotalScore + 1);
        setCurrentQuestion(currentQuestion + 1);
      } else {
        setCurrentQuestion(currentQuestion + 1);
      }
    } else {
      alert("please select a one Answer");
    }
  };

  const submitAnswer = () => {
    if (correctAnswer !== "") {
      if (QuestionArray[currentQuestion].Answer == correctAnswer) {
        SetTotalScore(TotalScore + 1);
        storeState("ResultPage");
      } else {
        storeState("ResultPage");
      }
    } else {
      alert("please select a one Answer");
    }
  };

  return (
    <div className="Question_cont">
      <h1>
        Q{currentQuestion + 1}: {QuestionArray[currentQuestion].title}
      </h1>
      <ol type="A">
        <li className="list_Item">
          <Button
            type="primary"
            ghost
            onClick={() => {
              setAnswer("A");
            }}
          >
            {QuestionArray[currentQuestion].A}
          </Button>
        </li>

        <li>
          <Button
            className="list_Item"
            ghost
            type="primary"
            onClick={() => {
              setAnswer("B");
            }}
          >
            {QuestionArray[currentQuestion].B}
          </Button>
        </li>

        <li>
          <Button
            className="list_Item"
            ghost
            type="primary"
            onClick={() => {
              setAnswer("C");
            }}
          >
            {QuestionArray[currentQuestion].C}
          </Button>
        </li>

        <li>
          <Button
            className="list_Item"
            type="primary"
            ghost
            onClick={() => {
              setAnswer("D");
            }}
          >
            {QuestionArray[currentQuestion].D}
          </Button>
        </li>
      </ol>
      {currentQuestion === QuestionArray.length - 1 ? (
        <Button
          type="primary"
          danger
          onClick={() => {
            submitAnswer();
          }}
        >
          Submit
        </Button>
      ) : (
        <Button
          onClick={() => {
            goToNextQuestion();
          }}
          type="primary"
        >
          Next
        </Button>
      )}
    </div>
  );
}

export default QuizPage;
