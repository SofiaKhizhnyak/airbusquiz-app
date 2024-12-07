"use client";

function FinishButton({ onFinish, isAnswered }) {
  return (
    <button
      onClick={onFinish}
      disabled={!isAnswered}
      className="bg-sky-800 text-sm hover:bg-sky-600 text-white px-2.5 py-1 rounded flex justify-center items-center ml-auto transition-colors uppercase"
    >
      Finish
    </button>
  );
}

export default FinishButton;
