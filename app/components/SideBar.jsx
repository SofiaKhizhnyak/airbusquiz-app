"use client";
import React, { useState, useRef, useEffect } from "react";
import { AiOutlineDashboard } from "react-icons/ai";
import { useRouter } from "next/navigation";
import { TbLogout2 } from "react-icons/tb";
import { useAuth } from "../contexts/AuthContext";
import { useQuiz } from "../contexts/QuizContext";
import { PiUserCircleCheck } from "react-icons/pi";
import { CgInfo } from "react-icons/cg";

const styles = {
  menuBtn:
    "relative border rounded dark:border-gray-700 border-gray-100 block w-full text-center px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:scale-110 transition-all duration-150 group", // Match duration-200
  menuBtnBefore:
    "absolute rounded left-0 top-1/2 h-0 w-[3px] -translate-y-1/2 bg-slate-700 dark:bg-slate-300 transition-all duration-150 origin-center group-hover:h-[98%]",
};

function SideBar() {
  const { logout } = useAuth();
  const router = useRouter();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const { dispatch } = useQuiz();

  useEffect(() => {
    if (isDropdownOpen) {
      document.addEventListener("click", handleClickOutside);
    }

    // clean up the event listener on unmount / when submenu closes
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isDropdownOpen]);

  const handleLogout = async () => {
    dispatch({ type: "resetStatus" }); // Reset the quiz state
    await logout();
    router.push("/"); // Redirect to the home page after logout
  };

  const toggleDropdown = (e) => {
    setIsDropdownOpen((prev) => !prev);
  };

  // detect click outside the sub menu and close it if open
  const handleClickOutside = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setIsDropdownOpen(false);
    }
  };

  const handleEscPress = (e) => {
    if (e.key === "Escape") {
      setIsDropdownOpen(false);
    }
  };

  const navigateAndClose = (type) => {
    dispatch({ type: "resetStatus" });

    if (type === "start") {
      router.push("/pages/start");
    } else if (type === "tips") {
      router.push("/pages/tips");
    } else {
      router.push(`/pages/${type}`);
    }
    setIsDropdownOpen(false);
  };

  return (
    <div className="poppins flex h-screen w-12 xs:w-14 flex-col items-center justify-between border-r bg-white dark:bg-gray-900 fixed top-14 z-50">
      <div className="py-6 h-[85%] flex flex-col items-center justify-between">
        {/* DASHBOARD MENU */}
        <button
          onClick={toggleDropdown}
          onKeyDown={handleEscPress}
          className="mb-6 group bg-transparent relative flex justify-center rounded  dark:bg-gray-700 px-2 py-1.5 focus:outline-none hover:bg-gray-50 "
        >
          <AiOutlineDashboard size={28} color="#6b7280" />
          <span className="z-50 tracking-wide invisible absolute start-full top-1/2 ms-2 -translate-y-1/2 rounded bg-slate-500 px-2 py-1 text-xs font-medium text-white group-hover:visible">
            Menu
          </span>
        </button>
        {isDropdownOpen && (
          <div
            ref={dropdownRef}
            className="absolute top-14 left-4  ms-2 w-auto bg-white dark:bg-gray-800  rounded-md shadow-lg z-50 text-sm"
          >
            <button
              onClick={() => navigateAndClose("start")}
              className={styles.menuBtn}
            >
              Dashboard
              <span className={`${styles.menuBtnBefore}`}></span>
            </button>
            <button
              onClick={() => navigateAndClose("ata")}
              className={styles.menuBtn}
            >
              ATA&apos;s
              <span className={`${styles.menuBtnBefore}`}></span>
            </button>
            <button
              onClick={() => navigateAndClose("questions")}
              className={styles.menuBtn}
            >
              Q&A
              <span className={`${styles.menuBtnBefore}`}></span>
            </button>
            <button
              onClick={() => navigateAndClose("tips")}
              className={styles.menuBtn}
            >
              Tips
              <span className={`${styles.menuBtnBefore}`}></span>
            </button>
          </div>
        )}

        {/* STATS */}
        <div className="flex flex-col justify-between h-full  border-t border-gray-100 dark:border-gray-700 pt-4 py-4">
          <div className="">
            <button
              onClick={() => {
                dispatch({ type: "resetStatus" });
                router.push("/pages/statistics");
              }}
              className=" group relative flex w-full items-center justify-center rounded-lg px-2 py-1.5 text-sm text-[#6b7280ce] dark:text-gray-300 hover:bg-gray-50 hover:text-green-400 dark:hover:bg-gray-700 "
            >
              <PiUserCircleCheck size={29} />

              <span className=" z-50 tracking-wide invisible absolute start-full top-1/2 ms-2 -translate-y-1/2 rounded bg-slate-500 px-2 py-1 text-xs font-medium text-white group-hover:visible ">
                Stats
              </span>
            </button>
          </div>

          {/* ABOUT */}
          <div className="mb-4">
            <button
              onClick={() => {
                dispatch({ type: "resetStatus" });
                router.push("/pages/about");
              }}
              className=" group relative flex w-full items-center justify-center rounded-lg px-2 py-1.5 text-sm text-[#6b7280ce] hover:text-indigo-500 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 "
            >
              <CgInfo size={28} />
              <span className="z-50 tracking-wide invisible absolute start-full top-1/2 ms-2 -translate-y-1/2 rounded bg-slate-500 px-2 py-1 text-xs font-medium text-white group-hover:visible ">
                About
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* LOGOUT */}
      <div className="flex flex-col items-center justify-center p-2">
        <button
          onClick={handleLogout}
          className="border-t border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-900 bottom-20 group relative flex w-full justify-center rounded-lg px-2 py-1.5 text-sm text-gray-500 dark:text-gray-300 hover:text-red-700 hover:scale-110"
        >
          <TbLogout2 size={26} />
          <span
            className="z-50 invisible absolute start-full top-3 ms-1   text-red-600 text-[10px] font-medium  group-hover:visible
             dark:opacity-100 opacity-75  dark:text-gray-300 uppercase"
          >
            Logout
          </span>
        </button>
      </div>
    </div>
  );
}

export default SideBar;
