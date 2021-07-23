import React from "react";

type Props = {
  question: string;
  answers: string[];
  callback: any;
  userAnswer: any;
  questionNr: number;
  totalQuestions: number;
};

export const QuestionCard: React.FC<Props> = ({
  question,
  answers,
  callback,
  userAnswer,
  questionNr,
  totalQuestions,
}) => {
  console.log("i am from user answer in card", userAnswer);
  return (
    <div>
      <p className="number">
        Question:{questionNr}/{totalQuestions}
      </p>
      <p dangerouslySetInnerHTML={{ __html: question }} />
      <div>
        {answers.map((answer) => (
          <div key={answer}>
            <button onClick={callback}>{answer}</button>
          </div>
        ))}
      </div>
    </div>
  );
};
export default QuestionCard;
