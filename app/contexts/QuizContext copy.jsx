"use client";
import { createContext, useContext, useReducer, useEffect } from "react";
import { db } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";

const QuizContext = createContext();

// Mapping ATA number to subcollection names
const ataQuestionMap = {
  21: "ata21q",
  26: "ata26q",
  27: "ata27q",
  28: "ata28q",
  29: "ata29q",
  32: "ata32q",
  36: "ata36q",
  52: "ata52q",
};

// Mapping predefined data questions
const questionsMap = {
  1: async () => {
    const { qData1 } = await import("../data/qData");
    return qData1;
  },
  2: async () => {
    const { qData2 } = await import("../data/qData");
    return qData2;
  },
  3: async () => {
    const { qData3 } = await import("../data/qData");
    return qData3;
  },
  4: async () => {
    const { qData4 } = await import("../data/qData");
    return qData4;
  },
  5: async () => {
    const { qData5 } = await import("../data/qData");
    return qData5;
  },
  6: async () => {
    const { qData6 } = await import("../data/qData");
    return qData6;
  },
};

const questionCache = {};

// Fetching questions from Firestore for a specific ATA subcollection
const fetchQuestionsFromFirestore = async (ataCollectionName) => {
  // Check if the data is already cached
  if (questionCache[ataCollectionName]) {
    return questionCache[ataCollectionName];
  }
  try {
    const atasCollectionRef = collection(db, "atas");
    const atasSnapshot = await getDocs(atasCollectionRef);

    let questions = [];
    for (const doc of atasSnapshot.docs) {
      const subcollectionRef = collection(
        db,
        "atas",
        doc.id,
        ataCollectionName
      );
      const subcollectionSnapshot = await getDocs(subcollectionRef);

      if (!subcollectionSnapshot.empty) {
        questions = [
          ...questions,
          ...subcollectionSnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          })),
        ];
      }
    }

    if (questions.length === 0) {
      throw new Error(
        `No questions found in subcollection: ${ataCollectionName}`
      );
    }

    // Cache the result
    questionCache[ataCollectionName] = questions;

    return questions;
  } catch (error) {
    console.log("Error fetching questions from Firestore:", error);
    throw error; // Re-throw the error to be handled by the caller
  }
};

const initialState = {
  type: null,
  selectedChapter: null,
  questions: [],
  status: "idle",
  index: 0,
  answer: null,
  points: 0,
  highscore: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "dataReceived":
      return {
        ...state,
        questions: action.payload,
        status: "ready",
      };

    case "dataFailed":
      return {
        ...state,
        status: "error",
      };

    case "start":
      return {
        ...state,
        status: "active",
      };

    case "selectChapter":
      return {
        ...state,
        type: action.payload.type,
        selectedChapter: action.payload.chapter,
        status: "loading",
      };

    case "resetChapter":
      return {
        ...state,
        index: 0,
        answer: null,
        points: 0,
        status: "ready",
        questions: state.questions.map((question) => ({
          ...question,
          userAnswer: null,
          isCorrect: null,
        })),
      };

    case "resetStatus":
      return {
        ...initialState,
        highscore: state.highscore,
      };

    case "newAnswer":
      const currentQuestion = state.questions[state.index];
      const isCorrect = currentQuestion?.answer === action.payload;

      return {
        ...state,
        points: isCorrect ? state.points + 1 : state.points,
        questions: state.questions.map((q, idx) =>
          idx === state.index
            ? { ...q, userAnswer: action.payload, isCorrect }
            : q
        ),
        answer: action.payload,
      };

    case "nextQuestion":
      if (state.index >= state.questions.length - 1) {
        return {
          ...state,
          status: "finished",
        };
      }
      return {
        ...state,
        index: state.index + 1,
        answer: state.questions[state.index + 1]?.userAnswer ?? null,
      };

    case "previousQuestion":
      if (state.index === 0) {
        return state;
      }

      const prevIndex = state.index - 1;

      return {
        ...state,
        index: prevIndex,
        answer: state.questions[prevIndex]?.userAnswer ?? null,
      };

    case "finish":
      return {
        ...state,
        status: "finished",
        highscore: Math.max(state.points, state.highscore),
      };

    default:
      console.warn("Unknown action type:", action.type);
      return state;
  }
}

function QuizProvider({ children }) {
  const [
    {
      type,
      questions,
      status,
      index,
      answer,
      points,
      highscore,
      selectedChapter,
    },
    dispatch,
  ] = useReducer(reducer, initialState);
  const numQuestions = questions.length;

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        if (type && selectedChapter) {
          // If the type is 'ata', fetch from Firestore, else from predefined data
          let data;

          if (type === "ata") {
            const subcollectionName = ataQuestionMap[selectedChapter];
            if (subcollectionName) {
              data = await fetchQuestionsFromFirestore(subcollectionName);
            } else {
              dispatch({ type: "dataFailed" });
              return;
            }
          } else {
            const loadQuestions = questionsMap[selectedChapter];
            if (loadQuestions && typeof loadQuestions === "function") {
              data = await loadQuestions();
            } else {
              dispatch({ type: "dataFailed" });
              return;
            }
          }

          if (data) {
            dispatch({ type: "dataReceived", payload: data });
          } else {
            console.log("No data loader found for the selected chapter.");
            dispatch({ type: "dataFailed" });
          }
        }
      } catch (err) {
        console.log("Error fetching questions:", err);
        dispatch({ type: "dataFailed" });
      }
    };

    fetchQuestions();
  }, [type, selectedChapter]);

  return (
    <QuizContext.Provider
      value={{
        type,
        questions,
        status,
        index,
        answer,
        points,
        highscore,
        selectedChapter,
        dispatch,
        numQuestions,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
}

function useQuiz() {
  const context = useContext(QuizContext);
  if (!context) {
    throw new Error("QuizContext must be used within a QuizProvider");
  }
  return context;
}

export { QuizProvider, useQuiz };
