"use client";

function ProgressBar({ progress }) {
  return (
    <div className="w-full bg-gray-200 rounded-full h-1 opacity-40">
      <div
        className="bg-sky-500 h-1 rounded-full"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
}

export default ProgressBar;
