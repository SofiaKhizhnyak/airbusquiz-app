"use client";
import { useState } from "react";
import TipCard from "@/app/components/TipCard";
import PlaneLoader from "@/app/components/PlaneLoader";
import { useTips } from "@/app/hooks/useTips";
import Pagination from "@/app/components/Pagination";

export default function Tips() {
  const { tips, loading, error } = useTips();

  const [currentPage, setCurrentPage] = useState(1);
  const [openTipId, setOpenTipId] = useState(null);
  const tipsPerPage = 5;

  const totalPages = Math.ceil(tips.length / tipsPerPage);
  const currentTips = tips.slice(
    (currentPage - 1) * tipsPerPage,
    currentPage * tipsPerPage
  );

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
      scrollToTop();
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
      scrollToTop();
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleOpenTip = (tipId) => {
    setOpenTipId((prevId) => (prevId === tipId ? null : tipId));
    scrollToTop();
  };

  if (loading) {
    return (
      <div className="poppins h-screen flex flex-col items-center justify-center dark:bg-gray-900 text-black dark:text-white">
        <PlaneLoader />
      </div>
    );
  }

  if (error) {
    return (
      <div className="poppins h-screen flex flex-col items-center justify-center dark:bg-gray-900 text-red-500">
        <p>Error: {error}</p>
      </div>
    );
  }

  return (
    <div
      className="poppins max-h-screen flex flex-col items-center 
        px-4 py-6 sm:py-10 relative overflow-y-auto dark:bg-gray-900 text-black dark:text-white"
    >
      <div className="w-full max-w-2xl flex flex-col gap-4 xs:gap-2 sm:gap-4 md:px-10">
        {currentTips.map((tip) => (
          <TipCard
            key={tip.id}
            tip={tip}
            isOpen={openTipId === tip.id}
            onOpen={() => handleOpenTip(tip.id)}
            isDimmed={openTipId !== null && openTipId !== tip.id}
          />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onNextPage={handleNextPage}
        onPreviousPage={handlePreviousPage}
      />
    </div>
  );
}
