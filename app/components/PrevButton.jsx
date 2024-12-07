"use client";
import { useQuiz } from "../contexts/QuizContext";

export default function PrevButton() {
  const { dispatch, index } = useQuiz();

  const handlePrev = () => {
    if (index > 0) {
      dispatch({ type: "previousQuestion" });
    }
  };

  return (
    <button
      onClick={handlePrev}
      className={`bg-gray-200 text-gray-800 py-2 px-4 rounded ${
        index === 0 ? "opacity-50" : "hover:bg-gray-300"
      }`}
      disabled={index === 0}
    >
      PREV
    </button>
  );
}
