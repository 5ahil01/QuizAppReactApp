import React from "react";

const QuestionTimer = ({ timeout, onTimeout }) => {
  const [remainingTime, setRemainingTime] = useState(timeout);
  setTimeout(onTimeout, timeout);

  setInterval(() => {
    setRemainingTime((prevTime) => prevTime - 100);
  }, 100);
  return <progress />;
};

export default QuestionTimer;
