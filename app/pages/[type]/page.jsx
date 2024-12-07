"use client";
import { useEffect, use } from "react";
import { useQuiz } from "../../contexts/QuizContext";
import Chapters from "../../components/Chapters";
import { useRouter } from "next/navigation";

export default function QuizTypePage({ params }) {
  const { type } = use(params);
  const { status } = useQuiz();
  const router = useRouter();

  useEffect(() => {
    router.prefetch("/pages/start");
    router.prefetch("/pages/finish");
  }, []);

  useEffect(() => {
    if (status === "finished") {
      router.push("/pages/finish");
    }
  }, [status, router]);

  const title = type === "ata" ? "ATA Navigation" : "Questions Navigation";
  const subtitle =
    type === "ata" ? (
      <>
        Select an ATA Code
        {/*   <br /> */}
        <span> and Elevate Your Airbus Skills</span>
      </>
    ) : (
      "Select a Part and Pilot Your Way to Success"
    );

  return (
    <div className="bg-white mt-12  flex flex-col max-h-screen poppins overflow-y-scroll ">
      <div className="w-full flex flex-col items-center">
        <div className="text-center">
          {/* <div className="flex flex-col justify-center items-center">
            <span className="text-rounded-shadow text-2xl md:text-3xl lg:text-4xl font-extrabold uppercase text-shadow-sm tracking-wide">
              {title}
            </span>
            <span className="text-white  text-2xl md:text-3xl lg:text-4xl  -translate-y-7 md:-translate-y-8 lg:-translate-y-9 uppercase tracking-widest font-semibold">
              {title}
            </span>
          </div> 
          <h3 className="-mt-6 text-sm sm:text-md md:text-lg font-semibold text-[#3641669f] tracking-wider">
            {subtitle}
          </h3>*/}
          <h1 className="text-[22px] xs:text-3xl text-blue-950 poppins-extrabold  dark:text-slate-950 uppercase">
            {title}
          </h1>
          <h3 className="text-sm xs:text-base text-[#54575ca9] dark:text-[#415880b4] -translate-y-1">
            {subtitle}
          </h3>
        </div>
        <Chapters type={type} />
      </div>
    </div>
  );
}
