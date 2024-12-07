"use client";

import { useEffect } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useRouter } from "next/navigation";
import PlaneLoader from "./PlaneLoader";

export default function ProtectedRoute({ children }) {
  const { isAuthenticated, currUser } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated && currUser !== undefined) {
      // no user is logged in
      router.push("/");
    }
  }, [isAuthenticated, currUser, router]);

  if (currUser === undefined) {
    // show loader while fetching authentication state
    return <PlaneLoader />;
  }

  return isAuthenticated ? children : null;
}
