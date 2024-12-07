"use client";

import dynamic from "next/dynamic";

const LazyQuizProvider = dynamic(
  () => import("../contexts/QuizContext").then((mod) => mod.QuizProvider),
  {
    ssr: false,
  }
);

const ClientQuizProvider = ({ children }) => {
  return <LazyQuizProvider>{children}</LazyQuizProvider>;
};

export default ClientQuizProvider;
