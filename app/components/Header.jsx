"use client";
import React, { useEffect } from "react";
import { FaTelegramPlane } from "react-icons/fa";
import { useAuth } from "../contexts/AuthContext";
import ThemeToggle from "./ThemeToggle";
import { useRouter } from "next/navigation";
import { TbLogin2 } from "react-icons/tb";

function Header() {
  const { currUser } = useAuth();

  const loading = currUser === undefined;

  const router = useRouter();

  useEffect(() => {
    router.prefetch("/pages/login");
  }, []);

  return (
    <div className="bg-[#142850] poppins h-14 px-4 z-20 flex items-center justify-between ">
      <button
        className="flex gap-3 text-blue-50"
        onClick={() => router.push("/")}
      >
        <FaTelegramPlane size={32} />
        <h1 className="text-3xl uppercase poppins-bold tracking-widest ">
          Airbus Quiz
        </h1>
      </button>
      <div className="flex items-center gap-3">
        <ThemeToggle />

        {loading ? null : !currUser ? (
          <button
            onClick={() => router.push("/pages/login")}
            className=" text-gray-50 hover:scale-125 "
            title="Login"
          >
            <TbLogin2 size={26} />
          </button>
        ) : null}
      </div>
    </div>
  );
}

export default Header;
