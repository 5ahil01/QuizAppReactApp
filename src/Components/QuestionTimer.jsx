import React, { useEffect, useState } from "react";

const QuestionTimer = ({ timeout, onTimeout }) => {
  const [remainingTime, setRemainingTime] = useState(timeout);

  useEffect(() => {
    console.log("SET_TIMEOUT");
    const timer = setTimeout(onTimeout, timeout);

    return () => {
      clearTimeout(timer);
    };
  }, [timeout, onTimeout]);

  useEffect(() => {
    console.log("SET_INTERVAL");

    const intervalId = setInterval(() => {
      setRemainingTime((prevTime) => prevTime - 100);
    }, 100);

    //Clean Up function, which gets executed after the unmount of this component or useEffect gets called again
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return <progress max={timeout} value={remainingTime} />;
};

export default QuestionTimer;
