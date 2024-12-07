"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import SideBar from "./SideBar";
import ProtectedRoute from "./ProtectedRoute";

export default function ClientLayout({ children }) {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const unprotectedPaths = [
    "/",
    "/pages/signup",
    "/pages/login",
    "/pages/nouser",
  ];
  const isUnprotectedPage = unprotectedPaths.includes(pathname);
  const [viewportHeight, setViewportHeight] = useState("100vh");

  // Adjust height for different screen sizes
  useEffect(() => {
    const updateHeight = () => {
      setViewportHeight(`${window.innerHeight}px`);
    };

    updateHeight(); // Set initial height
    window.addEventListener("resize", updateHeight);

    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  return (
    <div
      style={{ height: viewportHeight }} // Dynamic height
      className="flex flex-col h-screen overflow-hidden"
    >
      {/* Render Sidebar only if not on the home page */}
      {!isHomePage && <SideBar />}

      {/* Main Content */}
      <main className={`flex-grow ${!isHomePage && "ml-14"}`}>
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
