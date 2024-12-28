"use client";
import { useQuiz } from "../../contexts/QuizContext";
import React, { useEffect, useState } from "react";
import PlaneLoader from "../../components/PlaneLoader";
import { useRouter } from "next/navigation";
import NextImage from "next/image";
import { saveUserProgress } from "../../hooks/saveProgress";
import { useAuth } from "../../contexts/AuthContext";

const finishImages = {
  Expert: "/images/finish/1.png",
  Good: "/images/finish/2.png",
  Okay: "/images/finish/3.png",
  Weak: "/images/finish/4.png",
  Fail: "/images/finish/5.png",
};

function Finish() {
  const [msg, setMsg] = useState("");
  const [imgSrc, setImgSrc] = useState(null);
  const [currPercentage, setCurrPercentage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [progressSaved, setProgressSaved] = useState(false); //flag to prevent re-execution of saveProgress

  const router = useRouter();

  const { points, questions, dispatch, type, selectedChapter } = useQuiz();
  const { userId } = useAuth();

  useEffect(() => {
    if (loading) {
      return <PlaneLoader />;
    }
  }, [loading]);

  // preload images
  useEffect(() => {
    Object.values(finishImages).forEach((src) => {
      const img = new window.Image();
      img.src = src;
    });
  }, []);

  // save progress to firestore
  const saveProgress = async (percentage) => {
    if (!userId || !type || !selectedChapter || percentage === undefined) {
      console.log("Invalid data for saving progress:", {
        userId,
        type,
        selectedChapter,
        percentage,
      });
      return;
    }

    try {
      let normalizedChapter = selectedChapter;
      if (type === "questions") {
        // Take only the first word and convert to lowercase
        normalizedChapter = selectedChapter.split("/")[0].trim().toLowerCase();
      }

      const roundedPercentage = Math.round(percentage);

      await saveUserProgress(
        userId,
        type,
        normalizedChapter,
        roundedPercentage
      );
    } catch (error) {
      // Handle error appropriately
      console.log("Failed to save progress:", error);
      // Maybe show an error message to the user
    }
  };

  /* useEffect(() => {
    if (!progressSaved) {
      const percentage =
        questions.length > 0 ? (points / questions.length) * 100 : 0;

      saveProgress(percentage);

      // Set the message and image based on the score
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

      setCurrPercentage(percentage);
    }
  }, [points, questions]); */

  // Save progress and set the message and image based on the score
  useEffect(() => {
    // used to prevent async operations, initiated by useEffect, from updating state after unmount
    let isActive = true;

    const executeSaveProgress = async () => {
      if (!progressSaved && isActive) {
        // calculation of the percentage of the correct answered questions for specific chapter
        const percentage =
          questions.length > 0 ? (points / questions.length) * 100 : 0;

        // save the progress to firestore
        try {
          await saveProgress(percentage);
          setProgressSaved(true);
        } catch (error) {
          console.log("Error saving progress:", error);
        }

        // Set the message and the image based on the score
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

        setCurrPercentage(percentage);
      }
    };

    executeSaveProgress();

    return () => {
      isActive = false;
    };
  });

  // Set loading to false when the message and image are set
  useEffect(() => {
    if (msg && imgSrc) {
      setLoading(false);
    }
  }, [msg, imgSrc]);

  const handleNavigation = (type) => {
    setLoading(true);
    dispatch({ type: "resetStatus" });
    router.push(type === "start" ? `/pages/start` : `/pages/${type}`);
  };

  const handleRestartChapter = async () => {
    if (!userId || !type || !selectedChapter) {
      console.log("Missing required data for saving progress");
      return;
    }

    try {
      setLoading(true);

      // Calculate percentage
      const percentage =
        questions.length > 0
          ? Math.round((points / questions.length) * 100)
          : 0;

      // Save progress
      await saveProgress(percentage);

      // Update local state
      dispatch({
        type: "updateProgress",
        payload: {
          type,
          chapter: selectedChapter,
          progress: percentage,
        },
      });

      // Reset chapter
      dispatch({ type: "resetChapter" });

      // Navigate to the chapter to restart
      router.push(`/pages/${type}/${selectedChapter}`);
    } catch (error) {
      console.log("Error during chapter restart:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="poppins mt-14 w-full flex flex-col items-center justify-center ">
      <div className="rounded-lg flex flex-col items-center justify-center shadow transition hover:shadow-lg px-6 py-4">
        <div className="text-md tracking-wide text-shadow-sm font-semibold uppercase mb-2">
          <p className="text-center text-gray-800">
            You scored {points} out of {questions.length}.
          </p>
          <p className="text-center text-gray-700">
            That’s <strong>{currPercentage.toFixed()}%</strong> correct!
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
          ATA&apos;s
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
