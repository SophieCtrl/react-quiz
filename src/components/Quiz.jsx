import { useState, useCallback } from "react";
import QUESTIONS from "../questions.js";
import quizComplete from "../assets/quiz-complete.png";
import QuestionTimer from "./QuestionTimer.jsx";

const Quiz = () => {
  const [userAnswers, setUserAnswers] = useState([]);
  const activeQuestionIndex = userAnswers.length;
  const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

  const handleSelectAnswer = useCallback((answer) => {
    setUserAnswers((prevAnswers) => [answer, ...prevAnswers]);
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

  const shuffeledAnswers = [...QUESTIONS[activeQuestionIndex].answers];
  shuffeledAnswers.sort(() => Math.random - 0.5);

  return (
    <>
      <div id="quiz">
        <div id="question">
          <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
          <ul id="answers">
            {shuffeledAnswers.map((answer) => (
              <li key={answer} className="answer">
                <button onClick={() => handleSelectAnswer(answer)}>
                  {answer}
                </button>
              </li>
            ))}
          </ul>
          <QuestionTimer
            key={activeQuestionIndex}
            timer={5000}
            onTimeout={handleSkipAnswer}
          />
        </div>
      </div>
    </>
  );
};

export default Quiz;
