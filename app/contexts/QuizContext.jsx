"use client";
import { createContext, useContext, useReducer, useEffect } from "react";
import { db } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";
import { useAuth } from "./AuthContext";

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

const firestoreToDisplayNameMap = {
  AIRCON1: "AIRCON / PRES / VENT 1",
  AIRCON2: "AIRCON / PRES / VENT 2",
  AIRCON3: "AIRCON / PRES / VENT 3",
  AIRCON4: "AIRCON / PRES / VENT 4",
  APU: "APU",
  AUTOFLIGHT: "AUTOFLIGHT",
  DOORS: "DOORS",
  ENGINES1: "ENGINES 1",
  ENGINES2: "ENGINES 2",
  EQUIPMENT: "EQUIPMENT",
  FIRE: "FIRE PROTECTION",
  FUEL: "FUEL",
  HYDRAULIC: "HYDRAULIC SYSTEM",
  "ICE&RAIN": "ICE & RAIN PROTECTION",
  NAVIAGTION1: "NAVIGATION 1",
  NAVIGATION2: "NAVIGATION 2",
  OXYGEN: "OXYGEN",
  PNEUMATICS: "PNEUMATICS",
};

// Fetching questions from Firestore for a specific ATA subcollection
/* const fetchQuestionsFromFirestore = async (ataCollectionName) => {
  const localStorageKey = `airBusQuizApp_${ataCollectionName}`;

  // Check localStorage for cached data
  const cachedData = JSON.parse(localStorage.getItem(localStorageKey));
  if (cachedData) {
    console.log(`Serving ${ataCollectionName} from localStorage`);
    return cachedData;
  }

  // If no valid cache, fetch fresh data from Firestore
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

    // Save fetched data to localStorage
    localStorage.setItem(localStorageKey, JSON.stringify(questions));
    console.log(`Cached ${ataCollectionName} in localStorage`);

    return questions;
  } catch (error) {
    console.log("Error fetching questions from Firestore:", error);
    throw error;
  }
}; */

/* const fetchQuestionsFromFirestore = async (collectionName, chapterName) => {
  const localStorageKey = `airBusQuizApp_${collectionName}_${chapterName}`;

  // Check localStorage for cached data
  const cachedData = JSON.parse(localStorage.getItem(localStorageKey));
  if (cachedData) {
    console.log(
      `Serving ${chapterName} from ${collectionName} from localStorage`
    );
    return cachedData;
  }

  try {
    console.log(`Fetching questions from ${collectionName}/${chapterName}...`);

    // Reference the subcollection
    const collectionRef = collection(db, collectionName);
    const collectionSnapshot = await getDocs(collectionRef);

    let questions = [];
    for (const doc of collectionSnapshot.docs) {
      const subcollectionRef = collection(
        db,
        collectionName,
        doc.id,
        chapterName
      );
      const subcollectionSnapshot = await getDocs(subcollectionRef);

      if (subcollectionSnapshot.docs.length === 0) {
        console.warn(
          `No questions found in ${collectionName}/${chapterName} under document ${doc.id}`
        );
        continue;
      }

      questions = [
        ...questions,
        ...subcollectionSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })),
      ];
    }

    if (questions.length === 0) {
      throw new Error(`No questions found in subcollection: ${chapterName}`);
    }

    // Cache the fetched questions in localStorage
    localStorage.setItem(localStorageKey, JSON.stringify(questions));
    console.log(`Cached ${chapterName} from ${collectionName} in localStorage`);

    return questions;
  } catch (error) {
    console.error(
      `Error fetching questions from ${collectionName}/${chapterName}:`,
      error
    );
    throw error;
  }
};
 */

const fetchQuestionsFromFirestore = async (collectionName, chapterName) => {
  const localStorageKey = `airBusQuizApp_${collectionName}_${chapterName}`;

  // Check localStorage for cached data
  const cachedData = JSON.parse(localStorage.getItem(localStorageKey));
  if (cachedData) {
    console.log(
      `Serving ${chapterName} from ${collectionName} from localStorage`
    );
    return cachedData;
  }

  try {
    let firestoreSubcollectionName;

    // Use appropriate mapping based on the collection
    if (collectionName === "atas") {
      firestoreSubcollectionName = chapterName;
    } else if (collectionName === "questions") {
      firestoreSubcollectionName = Object.keys(firestoreToDisplayNameMap).find(
        (value) => firestoreToDisplayNameMap[value] === chapterName
      );
    }

    if (!firestoreSubcollectionName) {
      throw new Error(`No matching Firestore subcollection for ${chapterName}`);
    }

    console.log(
      `Fetching questions from ${collectionName}/${firestoreSubcollectionName}...`
    );

    const mainCollectionRef = collection(db, collectionName);
    const mainCollectionSnapshot = await getDocs(mainCollectionRef);

    let questions = [];
    let subcollectionFound = false;

    for (const doc of mainCollectionSnapshot.docs) {
      const subcollectionRef = collection(
        db,
        collectionName,
        doc.id,
        firestoreSubcollectionName
      );
      const subcollectionSnapshot = await getDocs(subcollectionRef);

      if (!subcollectionSnapshot.empty) {
        subcollectionFound = true;
        questions = [
          ...questions,
          ...subcollectionSnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          })),
        ];
        break; // Stop looping once the correct subcollection is found
      }
    }

    if (!subcollectionFound) {
      throw new Error(
        `No subcollection found for ${firestoreSubcollectionName}`
      );
    }

    // Cache the fetched questions in localStorage
    localStorage.setItem(localStorageKey, JSON.stringify(questions));
    console.log(`Cached ${chapterName} from ${collectionName} in localStorage`);

    return questions;
  } catch (error) {
    console.log(
      `Error fetching questions from ${collectionName}/${chapterName}:`,
      error
    );
  }
};

const initialState = {
  userId: null,
  type: null,
  selectedChapter: null,
  questions: [],
  status: "idle",
  index: 0,
  userAnswer: null,
  points: 0,
  chapters: Object.values(firestoreToDisplayNameMap), // returns an array containing all the values of that object
  progress: [], // User's progress for each chapter
};

/* function reducer(state, action) {
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
      };

    default:
      console.warn("Unknown action type:", action.type);
      return state;
  }
} */
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
        userAnswer: null,
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
        userAnswer: action.payload,
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
        userAnswer: state.questions[state.index + 1]?.userAnswer ?? null,
      };

    case "previousQuestion":
      if (state.index === 0) {
        return state;
      }

      const prevIndex = state.index - 1;

      return {
        ...state,
        index: prevIndex,
        userAnswer: state.questions[prevIndex]?.userAnswer ?? null,
      };

    case "finish":
      return {
        ...state,
        status: "finished",
      };

    case "setProgress":
      return {
        ...state,
        progress: action.payload,
      };

    case "updateProgress":
      const updatedProgress = [...state.progress];
      const existingProgressIndex = updatedProgress.findIndex(
        (p) =>
          p.type === action.payload.type && p.chapter === action.payload.chapter
      );

      if (existingProgressIndex >= 0) {
        updatedProgress[existingProgressIndex] = action.payload;
      } else {
        updatedProgress.push(action.payload);
      }

      return {
        ...state,
        progress: updatedProgress,
      };

    case "setUserId":
      return {
        ...state,
        currUserId: action.payload,
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
      userAnswer,
      points,
      selectedChapter,
      chapters,
      currUserId,
      progress,
    },
    dispatch,
  ] = useReducer(reducer, initialState);
  const numQuestions = questions.length;

  const { userId } = useAuth();

  useEffect(() => {
    if (userId) {
      dispatch({ type: "setUserId", payload: userId });
    }
  }, [userId]);

  useEffect(() => {
    const fetchQuestions = async () => {
      if (!type || !selectedChapter) {
        console.log("Type or selected chapter is not defined.");
        return;
      }

      try {
        let data;

        // Fetch from Firestore based on the type
        if (type === "ata") {
          const subcollectionName = ataQuestionMap[selectedChapter];
          if (!subcollectionName) {
            console.log(
              `No subcollection found for ATA chapter: ${selectedChapter}`
            );
            dispatch({ type: "dataFailed" });
            return;
          }
          data = await fetchQuestionsFromFirestore("atas", subcollectionName);
        } else if (type === "questions") {
          data = await fetchQuestionsFromFirestore(
            "questions",
            selectedChapter
          );
        }

        if (data) {
          dispatch({ type: "dataReceived", payload: data });
        } else {
          console.log("No data returned for the selected chapter.");
          dispatch({ type: "dataFailed" });
        }
      } catch (error) {
        console.log("Error fetching questions:", error);
        dispatch({ type: "dataFailed" });
      }
    };

    if (type && selectedChapter) {
      fetchQuestions();
    }
  }, [type, selectedChapter]);

  useEffect(() => {
    const loadProgress = async () => {
      try {
        const progressRef = collection(db, "users", currUserId, "progress");
        const progressSnapshot = await getDocs(progressRef);
        const progressData = progressSnapshot.docs.map((doc) => ({
          chapter: doc.id,
          ...doc.data(),
        }));
        dispatch({ type: "setProgress", payload: progressData });
      } catch (error) {
        console.log("Error loading progress:", error);
      }
    };

    loadProgress();
  }, [currUserId]);

  /*  const fetchSubcollectionData = async (subcollectionName) => {
    try {
      const questionsCollectionRef = collection(db, "questions");
      const questionsSnapshot = await getDocs(questionsCollectionRef);

      let subcollectionData = [];

      questionsSnapshot.forEach((doc) => {
        const docRef = doc.ref; // Get the document reference
        const subcollectionRef = collection(docRef, subcollectionName); // Get the specific subcollection
        const subcollectionSnapshot = getDocs(subcollectionRef);

        subcollectionSnapshot.forEach((questionDoc) => {
          const questionData = questionDoc.data(); // Get the question data
          subcollectionData.push(questionData);
        });
      });

      console.log("Subcollection Data:", subcollectionData);
      return subcollectionData;
    } catch (error) {
      console.error("Error fetching subcollection data:", error);
    }
  }; */

  return (
    <QuizContext.Provider
      value={{
        type,
        questions,
        status,
        index,
        userAnswer,
        points,
        selectedChapter,
        dispatch,
        numQuestions,
        chapters,
        progress,
        currUserId,
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
