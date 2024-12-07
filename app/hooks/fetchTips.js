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
