import React, { useEffect, useState } from "react";
import QUESTIONS from "../Questions";
import QuestionTimer from "./QuestionTimer";

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
        <QuestionTimer
          key={activeQuestionIndex} // This key props helps to remount this component, leads to resetting of setInterval and setTimeout function
          //Whenever this key prop value is change, it remounts the component
          timeout={5000}
          onTimeout={() => handleSelectAnswer(null)} //Here null means no answer is selected , since this function will executes when timer wil be up!
        />
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
