"use client";
import { useRouter } from "next/navigation";
import { useQuiz } from "../contexts/QuizContext";
import { FiChevronRight } from "react-icons/fi";

function NextButton() {
  const { dispatch, index, numQuestions, userAnswer } = useQuiz();

  const router = useRouter();

  const isAnswered = userAnswer !== null;
  const isLastQuestion = index === numQuestions - 1;

  const handleAnswer = () => {
    if (isLastQuestion) {
      dispatch({ type: "finish" });
      router.push("/pages/finish");
    } else {
      dispatch({ type: "nextQuestion" });
    }
  };

  return (
    <button
      onClick={handleAnswer}
      disabled={!isAnswered}
      className={`bg-sky-800 text-sm  text-white px-2.5 py-1 rounded flex justify-center items-center ml-auto transition-colors uppercase ${
        !isAnswered ? "opacity-50" : "hover:bg-sky-600"
      }`}
    >
      {isLastQuestion ? "Finish" : "Next"}
      {!isLastQuestion && <FiChevronRight className="ml-1" />}
    </button>
  );
}

export default NextButton;
