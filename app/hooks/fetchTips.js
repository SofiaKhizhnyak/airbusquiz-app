"use client";
import { db } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";

export const fetchTipsFromFirestore = async () => {
  try {
    const tipsCollectionRef = collection(db, "tips");
    const tipsSnapshot = await getDocs(tipsCollectionRef);
    return tipsSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  } catch (error) {
    console.error("Error fetching tips:", error);
    throw error;
  }
};

/*
The fetchTipsFromFirestore function retrieves data from the "tips" collection in a Firestore database. 
It is an asynchronous utility that fetches all documents from the specified collection, 
maps them into a structured format with their document ID, 
and returns the results as an array.

Benefits:
- Reusability: Encapsulates Firestore query logic into a single function.
- Error Handling: Handles and logs errors during data fetching.
- Structured Data: Provides a clean array of objects with id and data for easy use in components.
*/
