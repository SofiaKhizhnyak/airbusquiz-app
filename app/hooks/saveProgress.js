"use client";

import {
  doc,
  setDoc,
  collection,
  getDocs,
  Timestamp,
  addDoc,
} from "firebase/firestore";
import { db } from "../../firebase";

export async function saveUserProgress(userId, type, chapter, progress) {
  if (!userId || !type || !chapter || progress === undefined) {
    const error = new Error("Missing required parameters");
    error.details = { userId, type, chapter, progress };
    throw error;
  }

  const numericProgress = Number(progress);
  if (isNaN(numericProgress) || numericProgress < 0 || numericProgress > 100) {
    throw new Error("Progress must be a number between 0 and 100");
  }

  try {
    // Instead of creating a document with a specific ID,
    // use addDoc to create a new document each time
    const progressRef = collection(db, "users", userId, "progress");

    const docData = {
      type,
      chapter,
      progress: numericProgress,
      timestamp: Timestamp.now(),
      lastUpdated: new Date().toISOString(),
    };

    // Add a new document with auto-generated ID
    const newDoc = await addDoc(progressRef, docData);

    return { success: true, docId: newDoc.id };
  } catch (error) {
    console.error("Error saving progress:", error);
    throw new Error(`Failed to save progress: ${error.message}`);
  }
}

export async function fetchUserProgress(userId) {
  if (!userId) {
    throw new Error("User ID is required to fetch progress");
  }

  try {
    const progressRef = collection(db, "users", userId, "progress");
    const snapshot = await getDocs(progressRef);

    if (snapshot.empty) {
      return [];
    }

    // Process and normalize the data
    return snapshot.docs
      .map((doc) => {
        const data = doc.data();
        return {
          id: doc.id,
          type: data.type,
          chapter: data.chapter,
          progress: Number(data.progress),
          timestamp: data.timestamp?.toDate() || new Date(),
          lastUpdated:
            data.lastUpdated || data.timestamp?.toDate().toISOString(),
        };
      })
      .sort((a, b) => b.timestamp - a.timestamp); // Sort by newest first
  } catch (error) {
    console.error("Error fetching user progress:", error);
    throw new Error(`Failed to fetch progress: ${error.message}`);
  }
}

export function validateProgressData(data) {
  const required = ["type", "chapter", "progress"];
  const missing = required.filter((field) => !data[field]);

  if (missing.length > 0) {
    throw new Error(`Missing required fields: ${missing.join(", ")}`);
  }

  if (
    typeof data.progress !== "number" ||
    data.progress < 0 ||
    data.progress > 100
  ) {
    throw new Error("Progress must be a number between 0 and 100");
  }

  return true;
}
