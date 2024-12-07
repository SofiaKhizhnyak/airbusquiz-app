"use client";
import Options from "./Options";

function Question({ currentQuestion }) {
  return (
    <div className="p-2">
      <h3 className="px-0.5 text-md sm:text-lg poppins-semibold mb-2 text-sky-900 mt-2 text-center h-full">
        {currentQuestion.question}
      </h3>
      {/* Options */}
      <Options question={currentQuestion} />
    </div>
  );
}

export default Question;
