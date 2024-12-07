"use client";

import React from "react";
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

  return (
    <div className="flex overflow-hidden h-screen">
      {!isHomePage && <SideBar />}
      <main className={`flex-grow ${!isHomePage ? "ml-14" : ""} `}>
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
