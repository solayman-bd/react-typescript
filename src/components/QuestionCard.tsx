import React from "react";

import { AnswerObject } from "../App";

type Props = {
  question: string;
  answers: string[];
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
  userAnswer: AnswerObject[] | undefined;
  questionNr: number;
  totalQuestions: number;
  showNextButton: boolean;
};

export const QuestionCard: React.FC<Props> = ({
  question,
  answers,
  callback,
  userAnswer,
  questionNr,
  totalQuestions,
  showNextButton,
}) => {
  //   console.log("i am from user answer in card", userAnswer);
  return (
    <div>
      <p className="number">
        Question:{questionNr}/{totalQuestions}
      </p>
      <p dangerouslySetInnerHTML={{ __html: question }} />
      <div>
        {answers.map((answer) => (
          <div key={answer}>
            <button disabled={showNextButton} onClick={callback}>
              {answer}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
export default QuestionCard;
