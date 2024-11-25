import { useEffect, useState } from "react";

const QuestionTimer = ({ timer, onTimeout, mode }) => {
  const [remainingTime, setRemainingTime] = useState(timer);

  useEffect(() => {
    console.log("Setting Timeout");
    const timeout = setTimeout(onTimeout, timer);

    return () => {
      clearTimeout(timeout);
    };
  }, [timer, onTimeout]);

  useEffect(() => {
    console.log("Setting Interval");
    const interval = setInterval(() => {
      setRemainingTime((prevRemainingTime) => {
        const newTime = prevRemainingTime - 100;
        return newTime;
      });
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <progress id="question-time" value={remainingTime} max={timer} />;
};

export default QuestionTimer;
