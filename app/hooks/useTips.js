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
