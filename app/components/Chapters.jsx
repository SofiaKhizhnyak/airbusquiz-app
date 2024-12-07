"use client";

import { useQuiz } from "../contexts/QuizContext";
import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Pagination from "./Pagination";
import PlaneLoader from "./PlaneLoader";

export default function Chapters() {
  const { dispatch, chapters, status } = useQuiz();
  const router = useRouter();
  const pathname = usePathname();
  const [basePath, setBasePath] = useState("");
  const [section, setSection] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  useEffect(() => {
    if (pathname.includes("ata")) {
      setBasePath("ata");
      setSection([21, 26, 27, 28, 29, 32, 36, 52]);
    } else if (pathname.includes("questions")) {
      setBasePath("questions");
      setSection(chapters);
    }
  }, [pathname, chapters]);

  const handleChapterSelect = (chapter) => {
    const type = basePath; // "ata" or "questions"

    dispatch({
      type: "selectChapter",
      payload: {
        type,
        chapter,
      },
    });

    router.push(`/pages/${type}/${encodeURIComponent(chapter)}`);
  };

  // Pagination logic for "questions" type
  const totalPages = Math.ceil(section.length / itemsPerPage);

  const paginatedSection = section.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

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

  /*   if (status === "loading") return <PlaneLoader className="w-2/3 h-2/3" />; */

  return (
    <div className="flex flex-col items-center w-full">
      <div className="grid grid-cols-2 gap-4 w-[87%] max-w-[400px] mt-4 border border-slate-300 p-5 rounded-md ">
        {paginatedSection.map((item, idx) => (
          <button
            key={idx}
            onClick={() => handleChapterSelect(item)}
            className={`${
              basePath === "ata"
                ? "text-sm sm:text-base lg:text-lg"
                : "text-[11px] xs:text-[12px] "
            } bg-blue-950 text-white p-2 rounded-md hover:scale-110 hover:bg-blue-700`}
          >
            {basePath === "ata" ? `ATA ${item}` : item}
          </button>
        ))}
      </div>
      {/* Pagination for "questions" */}
      {totalPages > 1 && (
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
