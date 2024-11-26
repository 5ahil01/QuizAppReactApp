import React from "react";
import Questions from "../Questions";

const Summary = ({ userAnswers }) => {
  const skippedAns = userAnswers.filter((ans) => ans === null);
  const correctAns = userAnswers.filter(
    (ans, index) => ans === Questions[index].answers[0]
  );

  const skippedAnsShare = Math.round(
    (skippedAns.length / userAnswers.length) * 100
  );
  const correctAnsShare = Math.round(
    (correctAns.length / userAnswers.length) * 100
  );
  const wrongAnsShare = 100 - skippedAnsShare - correctAnsShare;

  return (
    <>
      <ul>
        <li>
          <p>Correct Answers {correctAnsShare}%</p>
        </li>
        <li>
          <p>Wrong Answers {wrongAnsShare}%</p>
        </li>
        <li>
          <p>Skipped Answers {skippedAnsShare}%</p>
        </li>
      </ul>
    </>
  );
};

export default Summary;
