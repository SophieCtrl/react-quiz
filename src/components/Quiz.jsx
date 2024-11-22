import { useState } from "react";
import QUESTIONS from "../questions.js";

const Quiz = () => {
  const [userAnswers, setUserAnswers] = useState([]);
  const activeQuestionIndex = userAnswers.length;
  const curQuestion = QUESTIONS[activeQuestionIndex];

  const handleSelectAnswer = (answer) => {
    setUserAnswers((prevAnswers) => [answer, ...prevAnswers]);
  };

  return (
    <>
      <div id="quiz">
        <div id="question">
          <h2>{curQuestion.text}</h2>
          <ul id="answers">
            {curQuestion.answers.map((answer) => (
              <li key={answer} className="answer">
                <button onClick={() => handleSelectAnswer(answer)}>
                  {answer}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Quiz;
