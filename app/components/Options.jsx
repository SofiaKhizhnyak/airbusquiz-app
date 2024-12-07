"use client";

import { useQuiz } from "../contexts/QuizContext";

function Options({ question }) {
  const { dispatch, answer } = useQuiz();

  const hasAnswered = answer !== null;

  const handleAnswer = (index) => {
    dispatch({ type: "newAnswer", payload: index });
  };

  return (
    <div className="space-y-2">
      {question.options.map((option, index) => {
        const isCorrect = index === question.answer;
        const isSelected = index === answer;

        return (
          <button
            key={index}
            onClick={() => handleAnswer(index)}
            disabled={hasAnswered}
            className={`border text-sm sm:text-md w-11/12 text-center p-2 rounded-lg transition-all focus:outline-none
              ${
                hasAnswered
                  ? isCorrect
                    ? "bg-[#51d86ec0] border-[#42be6193]  translate-x-4 "
                    : isSelected
                    ? "bg-[#fe4646] border-[#ee3c3c] opacity-80"
                    : "opacity-50"
                  : "hover:shadow-md hover:translate-x-4 hover:bg-[#faf88e] hover:border-amber-100"
              }`}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
}

export default Options;
