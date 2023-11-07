import React, { useContext } from "react";
import { AppItemBox } from "../App";
import { Button } from "antd";
import "./index.scss";

function HomePage() {
  const { storeState } = useContext(AppItemBox);
  return (
    <div className="Homepage">
      <h1>Please Start Quiz</h1>
      <Button
        type="primary"
        onClick={() => {
          storeState("QuizPage");
        }}
      >
        Click
      </Button>
    </div>
  );
}

export default HomePage;
