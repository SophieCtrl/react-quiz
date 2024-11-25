import { useState, useCallback } from "react";
import QUESTIONS from "../questions.js";
import quizComplete from "../assets/quiz-complete.png";
import Question from "./Question.jsx";

const Quiz = () => {
  const [userAnswers, setUserAnswers] = useState([]);

  const activeQuestionIndex = userAnswers.length;
  const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

  const handleSelectAnswer = useCallback((answer) => {
    setUserAnswers((prevAnswers) => [...prevAnswers, answer]);
  }, []);

  const handleSkipAnswer = useCallback(() => {
    handleSelectAnswer(null);
  }, [handleSelectAnswer]);

  if (quizIsComplete) {
    return (
      <div id="summary">
        <img src={quizComplete} alt="trophy icon" />
        <h2>Quiz Completed!</h2>
      </div>
    );
  }

  return (
    <>
      <div id="quiz">
        <Question
          key={activeQuestionIndex}
          index={activeQuestionIndex}
          onSelectAnswer={handleSelectAnswer}
          onSkip={handleSkipAnswer}
        />
      </div>
    </>
  );
};

export default Quiz;
