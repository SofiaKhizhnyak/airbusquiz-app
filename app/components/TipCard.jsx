import React, { useRef, useEffect } from "react";
import { PiPaperPlaneFill, PiPaperPlaneBold } from "react-icons/pi";

function TipCard({ tip, isOpen, onOpen, isDimmed }) {
  const tipRef = useRef(null);

  // Scroll the opened tip into view
  useEffect(() => {
    if (isOpen && tipRef.current) {
      tipRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [isOpen]);

  return (
    <div
      ref={tipRef}
      onClick={onOpen}
      className={`overflow-hidden cursor-pointer transition-opacity ${
        isDimmed ? "opacity-50" : "opacity-100"
      }`}
      aria-expanded={isOpen} 
      aria-controls={`tip-${tip.id}`} 
    >
      <div className="poppins">
        <div
          className={`flex items-center justify-between gap-1.5 rounded-lg p-4 transition-colors ${
            isOpen
              ? "bg-sky-900 text-white"
              : "bg-gray-50 text-gray-900 hover:bg-gray-100"
          }`}
        >
          <h2 className="font-medium">{tip.question}</h2>
          <div>
            {isOpen ? (
              <PiPaperPlaneBold size={16} aria-hidden="true" />
            ) : (
              <PiPaperPlaneFill
                size={16}
                className="rotate-180"
                aria-hidden="true"
              />
            )}
          </div>
        </div>

        {isOpen && (
          <p
            id={`tip-${tip.id}`}
            className="mt-3 px-6 py-2 font-medium text-blue-950 bg-sky-50 rounded-xl transition-opacity max-h-64 overflow-y-auto"
          >
            {tip.answer}
          </p>
        )}
      </div>
    </div>
  );
}

export default TipCard;
