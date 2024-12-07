"use client";

import { SlPlane } from "react-icons/sl";

export default function SmallPlaneLoader() {
  return (
    <div className="flex items-center justify-center w-full h-60 ">
      <div className="relative w-full h-full ">
        {/* Plane */}
        <div className="absolute w-40 h-20 text-blue-500 animate-flyLinear">
          <SlPlane size={20} />
        </div>
      </div>
    </div>
  );
}
