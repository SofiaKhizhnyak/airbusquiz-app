"use client";
import { db } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";

async function fetchUserProgress(userId) {
  try {
    const progressRef = collection(db, "users", userId, "progress");
    const snapshot = await getDocs(progressRef);

    const progressData = snapshot.docs.map((doc) => {
      const data = doc?.data();
      return {
        chapter: doc?.id, // Ensure this is a string
        type: data?.type, // Provide default
        progress: Number(data.progress) || 0,
        timestamp: data.timestamp || new Date().toISOString(),
        ...data,
      };
    });

    console.log("Fetched progress data:", progressData); // Debug log
    return progressData;
  } catch (error) {
    console.error("Error fetching user progress:", error);
    throw error; // Propagate error to be handled by the component
  }
}

export { fetchUserProgress };
