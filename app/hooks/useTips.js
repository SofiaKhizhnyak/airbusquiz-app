"use client";
import { useState, useEffect } from "react";
import { fetchTipsFromFirestore } from "./fetchTips";

export const useTips = () => {
  const [tips, setTips] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTips = async () => {
      try {
        setLoading(true);
        const data = await fetchTipsFromFirestore();
        setTips(data);
      } catch (error) {
        setError("Failed to load tips.");
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchTips();
  }, []);

  return { tips, loading, error };
};

/*
The useTips is a custom hook that fetches data from the "tips" collection in a Firestore database. 
It manages the loading state, error handling, and stores the retrieved tips data, making it easy to use in components.

Benefits:
- Reusability: Centralizes data fetching logic into a reusable hook.
- State Management: Automatically handles loading, error, and data states.
- Error Handling: Manages and logs any errors during fetching.
- Structured Data: Provides a clean and ready-to-use data structure for components.
*/
