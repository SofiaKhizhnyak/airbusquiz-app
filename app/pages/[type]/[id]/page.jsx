"use client";
import { use } from "react";
import { useQuiz } from "../../../contexts/QuizContext";
import QuizCard from "../../../components/QuizCard";
import PlaneLoader from "@/app/components/PlaneLoader";

export default function ChapterQuestions({ params }) {
  const { type, id } = use(params); // type = "ata" or "questions", id = chapter number
  const { status, questions } = useQuiz();

  console.log("ChapterQuestions params:", { type, id });

  /*
  decodeURIComponent is a built-in JavaScript function decodes a URL-encoded component.
  Replaces encoded characters (like %20 for spaces) with their readable equivalents.
  */
  const decodedChapterName = decodeURIComponent(id);
  console.log("Decoded chapter name:", decodedChapterName);

  if (status === "loading") {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <PlaneLoader />
      </div>
    );
  }

  if (status === "error") {
    console.log("Quiz status error. Questions:", questions);
    return <p className="text-red-500">Failed to load questions. Try again.</p>;
  }

  return (
    <div className="min-h-screen flex justify-center ">
      <QuizCard type={type} id={decodedChapterName} questionData={questions} />
    </div>
  );
}
