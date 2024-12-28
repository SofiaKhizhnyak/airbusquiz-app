"use client";

import {
  doc,
  setDoc,
  collection,
  getDocs,
  Timestamp,
} from "firebase/firestore";
import { db } from "../../firebase";

/**
 * Saves a user's progress for a specific quiz
 */
export async function saveUserProgress(userId, type, chapter, progress) {
  // Input validation
  if (!userId || !type || !chapter || progress === undefined) {
    const error = new Error("Missing required parameters");
    error.details = { userId, type, chapter, progress };
    throw error;
  }

  // Validate progress is a number between 0 and 100
  const numericProgress = Number(progress);
  if (isNaN(numericProgress) || numericProgress < 0 || numericProgress > 100) {
    throw new Error("Progress must be a number between 0 and 100");
  }

  // Create a unique, consistent document ID
  const docId = `${type}_${chapter}`.toLowerCase();
  const docRef = doc(db, "users", userId, "progress", docId);

  try {
    // Save with additional metadata
    await setDoc(
      docRef,
      {
        type,
        chapter,
        progress: numericProgress,
        timestamp: Timestamp.now(),
        lastUpdated: new Date().toISOString(),
      },
      { merge: true }
    ); // Use merge to update existing documents

    return { success: true, docId };
  } catch (error) {
    console.error("Error saving progress:", error);
    throw new Error(`Failed to save progress: ${error.message}`);
  }
}

/**
 * Fetches all progress entries for a user
 */
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

/**
 * Utility function to validate progress data
 * Can be used before saving to ensure data consistency
 */
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
