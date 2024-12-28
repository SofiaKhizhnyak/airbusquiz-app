"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import SideBar from "./SideBar";
import ProtectedRoute from "./ProtectedRoute";

export default function ClientLayout({ children }) {
  const pathname = usePathname();

  const unprotectedPaths = [
    "/",
    "/pages/signup",
    "/pages/login",
    "/pages/nouser",
  ];
  const isUnprotectedPage = unprotectedPaths.includes(pathname);
  const [viewportHeight, setViewportHeight] = useState("100vh");

  //  dynamically adjusts the viewport height of the app, based on the window height
  useEffect(() => {
    const updateHeight = () => {
      setViewportHeight(`${window.innerHeight}px`);
    };

    updateHeight(); // initial height
    // recalculate and update the height, if the user resizes the window
    window.addEventListener("resize", updateHeight);

    // clean up the event listener on unmount
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  return (
    <div
      style={{ height: viewportHeight }} // Dynamic height
      className="flex flex-col overflow-hidden"
    >
      {/* Render Sidebar only if not on the home page */}
      {!isUnprotectedPage && <SideBar />}

      {/* Main Content */}
      <main className={`flex-grow ${!isUnprotectedPage && "ml-14"}`}>
        {/* Wrap protected pages with ProtectedRoute */}
        {isUnprotectedPage ? (
          children
        ) : (
          <ProtectedRoute>{children}</ProtectedRoute>
        )}
      </main>
    </div>
  );
}
