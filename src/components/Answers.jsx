import { useMemo } from "react";

const Answers = ({ answers, selectedAnswer, answerState, onSelect }) => {
  const shuffledAnswers = useMemo(() => {
    const shuffledAnswers = [...answers].sort(() => Math.random() - 0.5);
    return shuffledAnswers;
  }, [answers]);

  return (
    <>
      <ul id="answers">
        {shuffledAnswers.map((answer) => {
          let cssClasses = "";
          const isSelected = answer === selectedAnswer;

          if (answerState !== "selected" && isSelected) {
            cssClasses = "selected";
          }

          if (
            (answerState === "correct" || answerState === "wrong") &&
            isSelected
          ) {
            cssClasses = answerState;
          }

          return (
            <li key={answer} className="answer">
              <button
                className={cssClasses}
                onClick={() => onSelect(answer)}
                disabled={answerState !== ""}
              >
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
