"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import { CiSquareInfo } from "react-icons/ci";
import { BsQuestionSquare } from "react-icons/bs";
import NavButton from "../../components/NavButton";
import { usePrefetchPages } from "../../hooks/usePrefetchPages";
/* import { uploadData } from "@/app/firebase/uploadData"; */
import { useAuth } from "../../contexts/AuthContext";

const navButtons = [
  {
    label: "ATA's",
    icon: <HiOutlineClipboardDocumentList size={38} />,
    type: "ata",
  },
  {
    label: "TIPS",
    icon: <CiSquareInfo size={38} />,
    type: "tips",
  },
  {
    label: "QUESTIONS",
    icon: <BsQuestionSquare size={30} />,
    type: "questions",
  },
];

export default function Start() {
  const router = useRouter();

  const { userId } = useAuth();

  useEffect(() => {
    console.log("User ID: ", userId);
  }, []);

  /*  useEffect(() => {
    const upload = async () => {
      try {
        await uploadData();
        console.log("Data uploaded successfully!");
      } catch (error) {
        console.error("Error uploading data:", error);
      }
    };

    upload();
  }, []); */

  usePrefetchPages(["/pages/ata", "/pages/questions", "/pages/tips"]);

  const handleNavigation = (type) => {
    router.push(`/pages/${type}`);
  };

  return (
    <div className="bg-white text-blue-950 poppins flex flex-col">
      <div className="w-full p-8  flex flex-col items-center gap-8">
        <div className="text-center">
          <h1 className="flex flex-col">
            {/* <span className="text-xl text-sky-900 md:text-2xl font-extrabold uppercase tracking-widest translate-y-3 text-shadow-dark opacity-35">
              On the Flight Path to
            </span>

            <div className="flex flex-col justify-center items-center z-50">
              <span className="text-rounded-shadow text-4xl md:text-5xl font-extrabold uppercase text-shadow-sm tracking-wide">
                Mastery
              </span>
              <span className="-mb-8 text-white -translate-y-9 text-4xl md:-translate-y-10 md:text-5xl  uppercase tracking-widest font-medium">
                Mastery
              </span>
            </div> */}
            <p className="text-lg xs:text-2xl text-[#989ba5c4] dark:text-[#415880b4] font-extrabold translate-y-[16px] uppercase tracking-wide text-shadow-sm opacity-70">
              On the Flight Path to
            </p>
            <p className="font-extrabold text-blue-950 text-4xl tracking-wider dark:text-slate-950 z-20 text-shadow-dark uppercase">
              Mastery
            </p>

            <span className="text-md sm:text-lg md:text-xl font-extralight text-[#34363de3]">
              Choose a topic and Begin Your Airbus Quiz!
            </span>
          </h1>
        </div>

        <div className="flex flex-col gap-4 w-full max-w-md  items-center justify-center">
          {navButtons.map(({ label, icon, type }, idx) => (
            <NavButton
              key={idx}
              label={label}
              icon={icon}
              onClick={() => handleNavigation(type)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
