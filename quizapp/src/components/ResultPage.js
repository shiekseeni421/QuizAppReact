import React, { useContext } from "react";
import { AppItemBox } from "../App";

function ResultPage() {
  const { TotalScore, noOfQuestions } = useContext(AppItemBox);

  return (
    <div className="result_cont">
      <h1>Quiz is Done</h1>
      <p>
        You answered{" "}
        <span style={{ color: "green", fontWeight: "800" }}>
          {noOfQuestions}
        </span>{" "}
        questions
      </p>
      <p>
        Your Score is{" "}
        <span style={{ color: "Red", fontWeight: "800", fontSize: "20px" }}>
          {TotalScore}
        </span>{" "}
      </p>
    </div>
  );
}

export default ResultPage;
