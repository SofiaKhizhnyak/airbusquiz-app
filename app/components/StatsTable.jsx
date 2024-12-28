"use client";

import { useEffect, useState } from "react";
import { Spinner } from "@nextui-org/spinner";

function StatsTable({ atasData, questionsData }) {
  const [atasAverage, setAtasAverage] = useState(null);
  const [questionsAverage, setQuestionsAverage] = useState(null);
  const [allTypesAverage, setAllTypesAverage] = useState(null);
  const [isCalculating, setIsCalculating] = useState(false);

  useEffect(() => {
    const calculateAverages = () => {
      setIsCalculating(true);

      // Calculate ATAS average
      const atasScores = Object.values(atasData)
        .flat()
        .map((item) => item.progress);
      const atasAvg = atasScores.length
        ? (
            atasScores.reduce((sum, score) => sum + score, 0) /
            atasScores.length
          ).toFixed(2)
        : 0;

      // Calculate Questions average
      const questionsScores = Object.values(questionsData)
        .flat()
        .map((item) => item.progress);
      const questionsAvg = questionsScores.length
        ? (
            questionsScores.reduce((sum, score) => sum + score, 0) /
            questionsScores.length
          ).toFixed(2)
        : 0;

      // Calculate Overall average
      const allScores = [...atasScores, ...questionsScores];
      const allAvg = allScores.length
        ? (
            allScores.reduce((sum, score) => sum + score, 0) / allScores.length
          ).toFixed(2)
        : 0;

      setAtasAverage(atasAvg);
      setQuestionsAverage(questionsAvg);
      setAllTypesAverage(allAvg);

      setIsCalculating(false);
    };

    calculateAverages();
  }, [atasData, questionsData]);

  const passingScore = 75;

  return (
    <div className="poppins w-[200px] ">
      <div className="bg-amber-50/80 border-1 border-cyan-800/60  shadow-sm shadow-teal-700/30 rounded-lg p-1">
        <table className="w-full ">
          {/* <caption className="text-[11px] font-semibold border-b-1 border-sky-950/60 border-dashed uppercase tracking-widest text-slate-800">
            index
          </caption> */}
          <caption className="relative text-[11px] font-semibold uppercase tracking-widest text-slate-800 mb-1">
            index
            <span
              className="absolute bottom-0 left-1/2 -translate-x-1/2 border-b border-dashed border-sky-950/40 w-1/2"
              aria-hidden="true"
            ></span>
          </caption>
          <tbody className="text-xs">
            <tr className="border-b-1 border-gray-100 ">
              <th className="tb-header p-2 ">Pass Score</th>
              <td className="p-2">{passingScore}</td>
            </tr>
            <tr className="border-b-1 border-gray-100 ">
              <th className="tb-header p-2 ">ATAS Average</th>
              <td className=" p-2">
                {isCalculating ? (
                  <Spinner color="blue" size="sm" />
                ) : (
                  atasAverage
                )}
              </td>
            </tr>
            <tr className="border-b-1 border-gray-100 ">
              <th className="tb-header p-2 ">Q&A Average</th>
              <td className=" p-2">
                {isCalculating ? (
                  <Spinner color="blue" size="sm" />
                ) : (
                  questionsAverage
                )}
              </td>
            </tr>
            <tr>
              <th className="tb-header p-2 ">Total Average</th>
              <td className=" p-2">
                {isCalculating ? (
                  <Spinner color="blue" size="sm" />
                ) : (
                  allTypesAverage
                )}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default StatsTable;
