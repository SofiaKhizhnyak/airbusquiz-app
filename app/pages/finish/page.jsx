"use client";
import { useQuiz } from "../../contexts/QuizContext";
import React, { useEffect, useState } from "react";
import PlaneLoader from "../../components/PlaneLoader";
import { useRouter } from "next/navigation";
import NextImage from "next/image";

const finishImages = {
  Expert: "/images/finish/1.png",
  Good: "/images/finish/2.png",
  Okay: "/images/finish/3.png",
  Weak: "/images/finish/4.png",
  Fail: "/images/finish/5.png",
};

function Finish() {
  const [msg, setMsg] = useState("");
  const [imgSrc, setImgSrc] = useState("");
  const [loading, setLoading] = useState(true);
  const [buttonLoading, setButtonLoading] = useState(false);

  const router = useRouter();

  const { points, questions, dispatch, type, selectedChapter } = useQuiz();

  const percentage =
    questions.length > 0 ? (points / questions.length) * 100 : 0;

  // preload images
  useEffect(() => {
    Object.values(finishImages).forEach((src) => {
      const img = new window.Image();
      img.src = src;
    });
  }, []);

  // Set the message and image based on the score
  useEffect(() => {
    if (percentage === 100) {
      setMsg("You’re a true aviation expert!\nReady for takeoff!");
      setImgSrc(finishImages.Expert);
    } else if (percentage >= 80 && percentage < 100) {
      setMsg(
        "You’re flying high!\nJust a little more practice and you’ve got it!"
      );
      setImgSrc(finishImages.Good);
    } else if (percentage >= 50 && percentage < 80) {
      setMsg("You're gaining altitude!\nDon’t stop now!");
      setImgSrc(finishImages.Okay);
    } else if (percentage > 0 && percentage < 50) {
      setMsg("Plane is on the runway.\nTime to build momentum!");
      setImgSrc(finishImages.Weak);
    } else if (percentage === 0) {
      setMsg("Start small, dream big.\nThe sky is waiting for you!");
      setImgSrc(finishImages.Fail);
    }
  }, [points, questions]);

  useEffect(() => {
    if (msg && imgSrc) {
      setLoading(false);
    }
  }, [msg, imgSrc]);

  const handleNavigation = (type) => {
    setButtonLoading(true);
    dispatch({ type: "resetStatus" });
    router.push(type === "start" ? `/pages/start` : `/pages/${type}`);
  };

  const handleRestartChapter = () => {
    if (type && selectedChapter) {
      setButtonLoading(true);
      dispatch({ type: "resetChapter" });
      router.push(`/pages/${type}/${selectedChapter}`);
    }
  };

  if (loading || buttonLoading) {
    return <PlaneLoader />;
  }

  return (
    <div className="poppins mt-14 w-full flex flex-col items-center justify-center ">
      <div className="rounded-lg flex flex-col items-center justify-center shadow transition hover:shadow-lg px-6 py-4">
        <div className="text-md tracking-wide text-shadow-sm font-semibold uppercase mb-2">
          <p className="text-center text-gray-800">
            You scored {points} out of {questions.length}.
          </p>
          <p className="text-center text-gray-700">
            That’s <strong>{percentage.toFixed()}%</strong> correct!
          </p>
        </div>

        <NextImage
          src={imgSrc}
          alt="image according to the score"
          height={210}
          width={210}
        />

        <div className="bg-white p-4 sm:p-6">
          <h3 className="mt-0.5 sm:text-lg text-md text-gray-900 tracking-wide text-center text-shadow-sm whitespace-pre-wrap">
            {msg}
          </h3>
        </div>
      </div>

      <div className="mt-4 flex items-center justify-center gap-5  w-10/12">
        <button
          onClick={handleRestartChapter}
          className="bg-blue-700 text-white px-2 py-1 rounded-md hover:scale-110"
        >
          Restart
        </button>
        <button
          onClick={() => handleNavigation("ata")}
          className="bg-blue-950 text-white px-3 py-1 rounded hover:scale-110"
        >
          ATA's
        </button>
        <button
          onClick={() => handleNavigation("start")}
          className="bg-blue-950 text-white px-2 py-1 rounded-md hover:scale-110"
        >
          Dashboard
        </button>
      </div>
    </div>
  );
}

export default Finish;
