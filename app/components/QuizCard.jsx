"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { useQuiz } from "../contexts/QuizContext";
import NextButton from "./NextButton";
import PrevButton from "./PrevButton";
import Question from "./Question";
import ProgressBar from "./ProgressBar";
import PlaneLoader from "./PlaneLoader";

export default function QuizCard({ questionData }) {
  const {
    points,
    index: currentQuestionIndex,
    answer: selectedAnswer,
    dispatch,
  } = useQuiz();
  const currentQuestion = questionData[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / questionData.length) * 100;
  const router = useRouter();

  if (!currentQuestion) {
    return <PlaneLoader />;
  }

  return (
    <div className="h-full  flex flex-grow items-center justify-center p-8 poppins">
      <div className="w-full h-full max-w-xl bg-white border border-blue-950 shadow-xl rounded-lg">
        <div className="p-4 h-full flex flex-col">
          {/* Progress */}
          <div className="flex items-center justify-between">
            <p className="text-gray-300 text-xs">{`${
              currentQuestionIndex + 1
            }/${questionData.length}`}</p>
            <p className="text-gray-300 text-xs">{`Score: ${points}`}</p>
          </div>
          <ProgressBar progress={progress} />

          {/* Question Section */}
          <div className="flex-grow overflow-y-auto mt-2">
            <Question currentQuestion={currentQuestion} />
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between px-4 py-2 mt-1">
            <PrevButton />
            <NextButton />
          </div>
        </div>
      </div>
    </div>
  );
}
