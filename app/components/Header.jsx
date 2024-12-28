"use client";
import React from "react";
import { FaTelegramPlane } from "react-icons/fa";
import { useAuth } from "../contexts/AuthContext";
import ThemeToggle from "./ThemeToggle";
import { useRouter } from "next/navigation";
import { TbLogin2, TbLogout2 } from "react-icons/tb";
import { usePrefetchPages } from "../hooks/usePrefetchPages";
import { useQuiz } from "../contexts/QuizContext";

function Header() {
  const { currUser, logout } = useAuth();
  const { dispatch } = useQuiz();

  const loading = currUser === undefined;

  const router = useRouter();

  usePrefetchPages[("/pages/login", "/")];

  const handleLogout = async () => {
    await logout();
  };

  const handleNavigation = (path) => {
    dispatch({ type: "resetStatus" }); // Reset quiz state before navigation
    router.push(path);
  };

  return (
    <div className="bg-[#142850] poppins h-14 px-4 z-20 flex items-center justify-between ">
      <button
        className="flex gap-3 text-blue-50"
        onClick={() => handleNavigation("/")}
      >
        <FaTelegramPlane size={32} />
        <h1 className="text-3xl uppercase poppins-bold tracking-widest ">
          Airbus Quiz
        </h1>
      </button>
      <div className="flex items-center gap-3">
        {/*  <ThemeToggle /> */}

        {loading ? null : !currUser ? (
          <button
            onClick={() => router.push("/pages/login")}
            className="text-gray-50 hover:scale-125 "
            title="Login"
          >
            <TbLogin2 size={28} />
          </button>
        ) : (
          <button
            onClick={handleLogout}
            className="group relative flex items-center justify-center text-slate-300  hover:text-red-400 hover:scale-125"
            title="Logout"
          >
            <TbLogout2 size={26} />
          </button>
        )}
      </div>
    </div>
  );
}

export default Header;
