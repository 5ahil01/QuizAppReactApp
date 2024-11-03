import React, { useCallback, useEffect, useState } from "react";
import QUESTIONS from "../Questions";
import QuestionTimer from "./QuestionTimer";

const Quiz = () => {
  const [useranswers, setUserAnswers] = useState([]);
  const [answerState, setAnswerState] = useState("");
  const [score, setScore] = useState(0);
  const [shuffledAnswers, setShuffledAnswers] = useState([]);

  console.log("quiz render");
  const activeQuestionIndex =
    answerState === "" ? useranswers.length : useranswers.length - 1;

  const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

  const handleSelectAnswer = useCallback(
    (selected) => {
      setAnswerState("answered");
      setUserAnswers((prev) => [...prev, selected]);

      setTimeout(() => {
        if (selected === QUESTIONS[activeQuestionIndex].answers[0]) {
          setAnswerState("correct");
          setScore((prev) => prev + 1);
        } else {
          setAnswerState("wrong");
        }
        setTimeout(() => {
          setAnswerState("");
        }, 2000);
      }, 1000);
    },
    [activeQuestionIndex]
  );

  // Shuffling answers
  useEffect(() => {
    if (!quizIsComplete) {
      // Ensure this runs only when quiz is not complete
      const shuffled = [...QUESTIONS[activeQuestionIndex].answers];
      shuffled.sort(() => Math.random() - 0.5);
      setShuffledAnswers(shuffled);
    }
  }, [activeQuestionIndex, quizIsComplete]);

  // Render the component only if the quiz is not complete
  if (quizIsComplete) {
    return (
      <>
        <div>Quiz is complete</div>
        <div>
          Your score is {score}/{QUESTIONS.length}
        </div>
      </>
    );
  }

  return (
    <div className="flex justify-center items-center">
      <div>
        <QuestionTimer
          key={activeQuestionIndex}
          timeout={5000}
          onTimeout={() => handleSelectAnswer(null)}
        />
        <h2 className="my-5">{QUESTIONS[activeQuestionIndex].text}</h2>
        <ul>
          {shuffledAnswers.map((ans) => {
            const isSelected = useranswers[useranswers.length - 1] === ans;
            let cssClass = "mb-1 hover:bg-blue-200";

            if (answerState === "correct" && isSelected) {
              cssClass = "mb-1 bg-green-200";
            } else if (answerState === "wrong" && isSelected) {
              cssClass = "mb-1 bg-red-200";
            }

            return (
              <li key={ans}>
                <button
                  className={cssClass}
                  onClick={() => handleSelectAnswer(ans)}
                >
                  {ans}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Quiz;
