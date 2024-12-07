"use client";

import React from "react";
import { MdWavingHand } from "react-icons/md";
import { RiMailSendLine } from "react-icons/ri";
import SendEmail from "../../components/SendEmail";

function Signup() {
  return (
    <div className="flex flex-col lg:items-center lg:justify-center h-screen px-5 py-6 text-center bg-sky-50">
      <div className="flex flex-col lg:flex-row items-center lg:space-x-16 w-full max-w-4xl border border-sky-100 rounded-2xl px-5 py-7 bg-white shadow-lg">
        <div className="flex flex-col items-center lg:w-3/5 lg:space-y-4">
          <div className="flex items-center justify-center gap-2">
            <h1 className="text-xl font-semibold">Hello, Stranger!</h1>
            <MdWavingHand size={28} />
          </div>
          <p className="text-md md:text-lg mt-3">
            Ready to access exclusive Quizzes, Tips, and Questions?
          </p>
          <p className="text-sm sm:text-md text-blue-950">
            Fill the form below to embark on your journey.
          </p>
          <div className="mt-3">
            <p className="text-sm mb-1 md:text-lg text-slate-700">
              Don’t hesitate to reach out – your message is just a click away!
            </p>
            <div className="flex justify-center items-center gap-2">
              <RiMailSendLine className="text-gray-500" />
              <p className="text-sm text-pink-600 tracking-widest md:text-md lg:text-lg">
                sofiehij@hotmail.co.il
              </p>
            </div>
          </div>
        </div>
        <SendEmail />
      </div>
    </div>
  );
}

export default Signup;
