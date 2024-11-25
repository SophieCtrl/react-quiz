import QuestionTimer from "./QuestionTimer.jsx";
import Answers from "./Answers.jsx";

const Question = ({
  currentQuestion,
  selectedAnswer,
  answerState,
  onSelect,
  onSkip,
}) => {
  return (
    <div id="question">
      <QuestionTimer timer={5000} onTimeout={onSkip} />
      <h2>{currentQuestion.text}</h2>
      <Answers
        answers={currentQuestion.answers}
        selectedAnswer={selectedAnswer}
        answerState={answerState}
        onSelect={onSelect}
      />
    </div>
  );
};

export default Question;
