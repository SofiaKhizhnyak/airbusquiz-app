"use client";

import StatsChart from "@/app/components/StatsChart";
import { useAuth } from "@/app/contexts/AuthContext";
import { useEffect, useState } from "react";
import StatsTable from "@/app/components/StatsTable";
import NextImage from "next/image";
import PlaneLoader from "@/app/components/PlaneLoader";
import { fetchUserProgress } from "../../hooks/fetchProgress";

function StatsPage() {
  const { userId } = useAuth();
  const [atasData, setAtasData] = useState({});
  const [questionsData, setQuestionsData] = useState({});
  const [activeTabAtas, setActiveTabAtas] = useState("");
  const [activeTabQuestions, setActiveTabQuestions] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Group progress data by type and chapter
  const groupProgressData = (progressData) => {
    const grouped = progressData.reduce(
      (acc, item) => {
        // Initialize containers if they don't exist
        if (!acc.atas) acc.atas = {};
        if (!acc.questions) acc.questions = {};

        // Determine which container to use based on type
        const container = item.type === "ata" ? acc.atas : acc.questions;

        let chapterKey = item.chapter;
        if (item.type === "questions") {
          // For questions, ensure consistent chapter key format
          // Remove any special characters and convert to lowercase
          chapterKey = item.chapter.toLowerCase().trim();
        }

        // Initialize array for this chapter if it doesn't exist
        if (!container[chapterKey]) {
          container[chapterKey] = [];
        }

        const formattedTimestamp =
          item.timestamp?.toDate?.() || new Date(item.timestamp);

        // Add the progress entry with properly formatted timestamp
        container[chapterKey].push({
          ...item,
          timestamp: formattedTimestamp,
          progress: Number(item.progress),
        });

        // Sort entries by timestamp
        container[chapterKey].sort((a, b) => b.timestamp - a.timestamp);

        return acc;
      },
      { atas: {}, questions: {} }
    );

    return grouped;
  };

  useEffect(() => {
    const loadUserProgress = async () => {
      if (!userId) {
        setIsLoading(false);
        return;
      }

      try {
        setIsLoading(true);
        setError(null);

        const userProgress = await fetchUserProgress(userId);
        const groupedData = groupProgressData(userProgress);

        setAtasData(groupedData.atas);
        setQuestionsData(groupedData.questions);

        // Set initial active tabs immediately
        const firstAtaChapter = Object.keys(groupedData.atas)[0];
        const firstQuestionChapter = Object.keys(groupedData.questions)[0];

        // Set default active tabs only if they haven't been set yet
        if (!activeTabAtas) setActiveTabAtas(firstAtaChapter);
        if (!activeTabQuestions && firstQuestionChapter)
          setActiveTabQuestions(firstQuestionChapter);
      } catch (error) {
        console.error("Error fetching user progress:", error);
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    loadUserProgress();
  }, [userId]);

  /* const renderTabs = (data, activeTab, setActiveTab, type) => (
    <div>
      <div className="flex flex-wrap gap-2 border-b pb-1 mb-1">
        {Object.keys(data).map((chapter) => (
          <button
            key={chapter}
            className={`text-gray-600 text-sm px-1 py-0.5 rounded-lg ${
              activeTab === chapter ? "bg-indigo-100" : ""
            }`}
            onClick={() => setActiveTab(chapter)}
          >
            {chapter}
          </button>
        ))}
      </div>
      <div>
        {
           data[activeTab] &&   <StatsChart
            progressData={data[activeTab]}
          />
        }
      </div>
    </div>
  );*/

  const renderTabs = (data, activeTab, setActiveTab) => (
    <>
      <div className="flex gap-2 border-b pb-1 mb-1 z-40">
        {Object.keys(data).map((chapter) => (
          <button
            key={chapter}
            className={`text-gray-600 text-sm px-1 py-0.5 rounded-lg ${
              activeTab === chapter ? "bg-indigo-100" : ""
            }`}
            onClick={() => setActiveTab(chapter)}
          >
            {chapter}
          </button>
        ))}
      </div>
      <div>
        {activeTab && data[activeTab] && (
          <StatsChart key={`#-${activeTab}`} progressData={data[activeTab]} />
        )}
      </div>
    </>
  );

  if (isLoading) return <PlaneLoader />;
  if (error)
    return <div className="text-red-500">Error loading progress: {error}</div>;

  return (
    <div className="flex flex-col w-full px-6 lg:px-14 py-4 overflow-y-scroll h-screen max-h-screen xs:pb-24 pb-48">
      {/* TITLE */}
      <div className="flex flex-col items-center justify-center">
        <p className="font-extrabold text-blue-950 text-2xl tracking-wider dark:text-slate-950 z-20 text-shadow-dark uppercase">
          Altitude Check:
        </p>
        <p className="text-lg xs:text-xl text-[#a8acb8c4] dark:text-[#415880b4] font-bold -translate-y-[14px] uppercase tracking-widest text-shadow-sm opacity-60">
          Track Your Progress
        </p>
      </div>

      {/* INDEX */}
      <div className="opacity-80 flex justify-end px-10 ">
        {/* <NextImage
          className="opacity-50"
          src="/images/altitude.png"
          alt="plane altitude image"
          height={100}
          width={100}
        /> */}

        <StatsTable atasData={atasData} questionsData={questionsData} />
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 mt-4">
        {/* ATAs Progress Tabs */}
        <div className="border-1 border-gray-100 border-dashed shadow-sm shadow-yellow-300 rounded-md py-2 px-4 bg-slate-50">
          <h2 className="text-sm font-bold text-shadow-sm text-center tracking-wider text-[#3c3d3fc4] uppercase">
            ATAs
          </h2>
          {Object.keys(atasData).length > 0 ? (
            renderTabs(atasData, activeTabAtas, setActiveTabAtas)
          ) : (
            <NoProgress />
          )}
        </div>

        {/* Questions Progress Tabs */}
        <div className="border-1 border-gray-100 border-dashed shadow-sm shadow-yellow-300 rounded-md py-2 px-4 bg-slate-50">
          <h2 className="text-sm font-bold text-center tracking-wider text-[#3c3d3fc4] first:text-shadow-sm uppercase">
            Questions
          </h2>
          {Object.keys(questionsData).length > 0 ? (
            renderTabs(questionsData, activeTabQuestions, setActiveTabQuestions)
          ) : (
            <NoProgress />
          )}
        </div>
      </div>

      {/* Background Image */}
      <div
        className="absolute top-[13%] sm:top-[20%] left-[10%] w-3/4 h-3/4 bg-center bg-contain bg-no-repeat opacity-[0.03] pointer-events-none transition-all"
        style={{ backgroundImage: "url('/images/altitude.png')" }}
      ></div>
    </div>
  );
}

export default StatsPage;

function NoProgress({ message = "no progress yet" }) {
  return (
    <div className="flex flex-col items-center justify-center opacity-60 mt-1">
      <NextImage
        src="/images/nodata.png"
        alt="No data available"
        height={80}
        width={70}
      />
      <p className="mt-2 text-gray-500 text-sm">{message}</p>
    </div>
  );
}
