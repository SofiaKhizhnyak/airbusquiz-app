"use client";

import { SlPlane } from "react-icons/sl";

export default function PlaneLoader() {
  return (
    <div className="flex items-center justify-center w-full h-screen bg-sky-100">
      <div className="relative w-40 h-40">
        {/* Globe */}
        <div className="absolute inset-0 rounded-full border-2 border-sky-600"></div>

        {/* Flight path */}
        <div className="absolute inset-2 rounded-full border-2 border-sky-200 border-dashed"></div>

        {/* Rotating container for the plane */}
        <div
          className="absolute inset-0 animate-orbit"
          style={{ transformOrigin: "center" }}
        >
          {/* Airplane */}
          <div className="absolute w-8 h-8 text-sky-900 -translate-x-1/2 -translate-y-full">
            <SlPlane size={32} />
          </div>
        </div>

        {/* Loading text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-sky-800 font-semibold animate-pulse">Loading...</p>
        </div>
      </div>
    </div>
  );
}
