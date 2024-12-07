"use client";
import { CgAirplane } from "react-icons/cg";
import { useState, useMemo, useEffect } from "react";
import TipCard from "../../components/TipCard";
import PlaneLoader from "@/app/components/PlaneLoader";
import { useTips } from "@/app/hooks/useTips";
import { fetchTipsFromFirestore } from "@/app/hooks/useTips";

export async function getStaticProps() {
  try {
    const tips = await fetchTipsFromFirestore(); // Import this function
    return {
      props: {
        tips,
      },
      revalidate: 60, // Revalidate every 60 seconds
    };
  } catch (error) {
    console.error("Failed to fetch tips for SSG:", error);
    return {
      props: {
        tips: [],
      },
    };
  }
}

export default function Tips() {
  const { tips, loading } = useTips();
  const [currentPage, setCurrentPage] = useState(1);
  const [openTipId, setOpenTipId] = useState(null);
  const [totalPages, setTotalPages] = useState(1);
  const tipsPerPage = 5;

  useEffect(() => {
    if (tips.length > 0) {
      setTotalPages(Math.ceil(tips.length / tipsPerPage));
    }
  }, [tips, tipsPerPage]);

  if (loading) {
    return (
      <div className="poppins h-screen flex flex-col items-center justify-center dark:bg-gray-900 text-black dark:text-white">
        <PlaneLoader /> {/* Or any other loader component */}
      </div>
    );
  }

  const currentTips = tips.slice(
    (currentPage - 1) * tipsPerPage,
    currentPage * tipsPerPage
  );

  // Navigation between pages
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

  // Scroll back to the top of the page
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Open or close a tip
  const handleOpenTip = (tipId) => {
    setOpenTipId((prevId) => {
      if (prevId === tipId) {
        // Scroll to the top when closing a tip
        scrollToTop();
        return null;
      }
      return tipId;
    });
  };

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
      {/* Pagination */}
      <div className="fixed bottom-4 flex items-center justify-center gap-3">
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          className={`inline-flex h-8 w-8 items-center justify-center rounded text-gray-900 ${
            currentPage === 1 ? "opacity-50" : "hover:scale-150"
          }`}
          aria-label="Previous Page"
        >
          <CgAirplane className="rotate-180" />
        </button>

        <p className="text-sm text-gray-900">
          {currentPage}
          <span className="mx-0.5">/</span>
          {totalPages}
        </p>

        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className={`inline-flex h-8 w-8 items-center justify-center rounded text-gray-900 ${
            currentPage === totalPages ? "opacity-50" : "hover:scale-150"
          }`}
          aria-label="Next Page"
        >
          <CgAirplane />
        </button>
      </div>
    </div>
  );
}
