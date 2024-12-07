"use client";
import React, { useEffect } from "react";
import { useAuth } from "./contexts/AuthContext";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Spinner } from "@nextui-org/spinner";

export default function Home() {
  const { currUser, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    router.prefetch("/pages/start");
    router.prefetch("/pages/signup");
  }, []);

  return (
    <div className="poppins relative  flex items-center h-screen bg-cover bg-top dark:opacity-85 dark:bg-slate-900">
      <Image
        src="/images/banner.jpg"
        alt="Airbus Quiz App Banner"
        fill
        priority
        className="absolute inset-0 z-0  object-cover"
      />
      <div className="absolute inset-0 bg-white/55 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>
      <div className="relative max-w-screen-xl px-4 -bottom-5 md:bottom-0 sm:py-52 sm:px-6 lg:flex lg:items-center">
        <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right tracking-wide">
          <h1>
            <strong className="block relative text-6xl poppins-extrabold z-20 tracking-wide dark:text-slate-950">
              AIRBUS
            </strong>
            <strong className="text-3xl text-[#41588069] dark:text-[#415880b4] font-bold z-1 -translate-y-4 block relative">
              318/319/320/321 B1&B2
            </strong>
            <strong className="block font-extrabold text-blue-950 text-4xl tracking-wide">
              Quiz App
            </strong>
          </h1>
          <p className="mt-4 max-w-lg text-xl/relaxed dark:text-slate-900">
            Take a flight to test your Airbus knowledge with this first-class
            quiz app!
          </p>

          <div className="mt-8 flex sm:flex-row flex-col gap-4 text-center items-center justify-center">
            {isLoading ? (
              <Spinner color="blue" size="md" />
            ) : currUser ? (
              <button
                onClick={() => router.push("/pages/start")}
                className="block w-3/5 rounded bg-blue-950 px-12 py-3 text-md sm:text-lg font-medium text-white shadow hover:scale-110"
              >
                Go to Quizzes
              </button>
            ) : (
              <button
                onClick={() => router.push("/pages/signup")}
                className="block w-3/5 rounded bg-blue-950 px-12 py-3 text-sm sm:text-lg font-medium text-white shadow hover:scale-110"
              >
                Click to Sign Up
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
