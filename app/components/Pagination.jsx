"use client";

import React from "react";
import { CgAirplane } from "react-icons/cg";

export default function Pagination({
  currentPage,
  totalPages,
  onNextPage,
  onPreviousPage,
}) {
  return (
    <div className="fixed bottom-4 flex items-center justify-center gap-3">
      {/* Previous Page */}
      <button
        onClick={onPreviousPage}
        disabled={currentPage === 1}
        className={`inline-flex h-8 w-8 items-center justify-center rounded text-gray-900 ${
          currentPage === 1 ? "opacity-50" : "hover:scale-150"
        }`}
        aria-label="Previous Page"
      >
        <CgAirplane className="rotate-180" />
      </button>

      {/* Current Page Indicator */}
      <p className="text-sm text-gray-900">
        {currentPage}
        <span className="mx-0.5">/</span>
        {totalPages}
      </p>

      {/* Next Page */}
      <button
        onClick={onNextPage}
        disabled={currentPage === totalPages}
        className={`inline-flex h-8 w-8 items-center justify-center rounded text-gray-900 ${
          currentPage === totalPages ? "opacity-50" : "hover:scale-150"
        }`}
        aria-label="Next Page"
      >
        <CgAirplane />
      </button>
    </div>
  );
}
