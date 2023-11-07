import { createContext, useState } from "react";
import HomePage from "./components/HomePage";
import QuizPage from "./components/QuizPage";
import ResultPage from "./components/ResultPage";

export const AppItemBox = createContext();

function App() {
  const [pageIndex, setPageIndex] = useState("HomePage");
  const [score, setTotalScore] = useState(0);
  const [noOfQuestions, setNoOfQuestions] = useState(0);
  return (
    <>
      <AppItemBox.Provider
        value={{
          storeState: setPageIndex,
          TotalScore: score,
          SetTotalScore: setTotalScore,
          setNoOfQuestions: setNoOfQuestions,
          noOfQuestions: noOfQuestions,
        }}
      >
        {pageIndex === "HomePage" && <HomePage />}
        {pageIndex === "QuizPage" && <QuizPage />}
        {pageIndex === "ResultPage" && <ResultPage />}
      </AppItemBox.Provider>
    </>
  );
}

export default App;
