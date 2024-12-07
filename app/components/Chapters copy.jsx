"use client";

import { useQuiz } from "../contexts/QuizContext";
import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Pagination from "./Pagination";

const qChaptersNames = {
  1: "GENERAL SYSTEMS",
  2: "AIRCON / PRES / VENT 1",
  3: "AIRCON / PRES / VENT 2",
  4: "AIRCON / PRES / VENT 3",
  5: "AIRCON / PRES / VENT 4",
  6: "AUTOFLIGHT",
  7: "DOORS",
  8: "INDICAT / RECORD 1",
  9: "INDICAT / RECORD 2",
  10: "ELECTRICAL 1",
  11: "ELECTRICAL 2",
  12: "PNEUMATICS",
  13: "FUEL",
  14: "ICE&RAIN PROTECTION",
  15: "HYDRAULIC SYSTEM",
  16: "APU",
  17: "ENGINES 1",
  18: "ENGINES 2",
  19: "LANDING GEAR 1",
  20: "LANDING GEAR 2",
  21: "OXYGEN",
  22: "EQUIPMENT",
  23: "COMMUNICATION 1",
  24: "COMMUNICATION 2",
  25: "FLIGHT CONTROLS 1",
  26: "FLIGHT CONTROLS 2",
  27: "NAVIAGTION 1",
  28: "NAVIGATION 2",
  29: "FIRE PROTECTION",
  30: "AMBIGOUS QUESTIONS",
};
const ataNumbers = [21, 26, 27, 28, 29, 32, 36, 52];

export default function Chapters() {
  const { dispatch } = useQuiz();
  const router = useRouter();
  const pathname = usePathname();
  const [textSizeXS, setTextSizeXS] = useState("");
  const [textSize, setTextSize] = useState("");
  const [basePath, setBasePath] = useState("");
  const [section, setSection] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  useEffect(() => {
    if (pathname.includes("ata")) {
      setBasePath("ata");
      setTextSizeXS("text-lg");
      setTextSize("text-xl");
      setSection(ataNumbers);
    } else if (pathname.includes("questions")) {
      setBasePath("questions");
      setTextSizeXS("text-[11px]");
      setTextSize("text-sm");
      setSection(Object.keys(qChaptersNames)); // array of chapter keys
    }
  }, [pathname]);

  const handleChapterSelect = (chapter) => {
    const type = basePath; // "ata" or "questions"

    dispatch({
      type: "selectChapter",
      payload: { type, chapter },
    });

    router.push(`/pages/${type}/${chapter}`);
  };

  // Pagination logic for "questions"
  const totalPages = Math.ceil(section.length / itemsPerPage);

  const paginatedSection =
    basePath === "questions"
      ? section.slice(
          (currentPage - 1) * itemsPerPage,
          currentPage * itemsPerPage
        )
      : section;

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  return (
    <div className="flex flex-col items-center w-full">
      <div className="grid grid-cols-2 gap-4 w-[87%] max-w-[400px] mt-4 border border-slate-300 p-5 rounded-md ">
        {paginatedSection.map((item) => (
          <button
            key={item}
            onClick={() => handleChapterSelect(item)}
            className={`${
              basePath === "ata"
                ? "text-sm sm:text-base lg:text-lg"
                : "text-[11px] xs:text-[12px] "
            } bg-blue-950 text-white p-2 rounded-md hover:scale-110 hover:bg-blue-700`}
          >
            {basePath === "ata" ? `ATA ${item}` : qChaptersNames[item]}
          </button>
        ))}
      </div>
      {/* Pagination for "questions" */}
      {basePath === "questions" && totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onNextPage={handleNextPage}
          onPreviousPage={handlePreviousPage}
        />
      )}
    </div>
  );
}
