import { useRef } from "react";

const Answers = ({ answers, selectedAnswer, answerState, onSelect }) => {
  const shuffeledAnswers = useRef();

  if (!shuffeledAnswers.current) {
    shuffeledAnswers.current = [...answers];
    shuffeledAnswers.current.sort(() => Math.random - 0.5);
  }

  return (
    <>
      <ul id="answers">
        {shuffeledAnswers.current.map((answer) => {
          let cssClasses = "";
          const isSelected = answer === selectedAnswer;

          if (answerState !== "answered" && isSelected) {
            cssClasses = "answered";
          }

          if (
            (answerState === "correct" || answerState === "wrong") &&
            isSelected
          ) {
            cssClasses = answerState;
          }

          return (
            <li key={answer} className="answer">
              <button className={cssClasses} onClick={() => onSelect(answer)}>
                {answer}
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Answers;
