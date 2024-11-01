import React, { useEffect, useState } from "react";
import QUESTIONS from "../Questions";

const Quiz = () => {
  const [useranswers, setUserAnswers] = useState([]);
  const activeQuestionIndex = useranswers.length;
  //Checking useranswers array length and questions array length
  const quizIsComplete = activeQuestionIndex === QUESTIONS.length;
  // const [isTimerOut, setIsTimerOut] = useState(false);

  // useEffect(() => {
  //   setInterval(() => {
  //     setIsTimerOut(true);
  //   }, 10000);
  // }, []);

  // if (isTimerOut) {
  //   return (
  //     <div>
  //       <h1>Quiz is over</h1>
  //     </div>
  //   );
  // }

  function handleSelectAnswer(selected) {
    setUserAnswers((prev) => {
      return [...prev, selected];
    });
  }

  if (quizIsComplete) {
    return <div>Quiz is complete</div>;
  }

  //Shuffling answers
  const shuffledAnswers = [...QUESTIONS[activeQuestionIndex].answers];
  shuffledAnswers.sort(() => Math.random() - 0.5); // Math.random - 0.5 will generate random positive or negative numbrers

  return (
    <div className="flex justify-center items-center">
      <div>
        <h2 className="my-5">{QUESTIONS[activeQuestionIndex].text}</h2>
        <ul>
          {shuffledAnswers.map((ans) => (
            <li key={ans}>
              <button
                className="mb-1 hover:bg-blue-200"
                onClick={() => handleSelectAnswer(ans)}
              >
                {ans}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Quiz;
