"use client";

import {
  createContext,
  useContext,
  useReducer,
  useEffect,
  useMemo,
  useCallback,
} from "react";
import { useRouter } from "next/navigation";
import { auth } from "@/firebase";
import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

// Initial state for the authentication context
const initialState = {
  currUser: undefined, // indicate loading state
  userId: null,
  error: null, // authentication error
  isLoading: true, // auth status indicator (checking for user in localstorage and firebase)
};

// handle states
function authReducer(state, action) {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return {
        ...state,
        currUser: action.payload,
        userId: action.payload?.uid || null,
        error: null,
        isLoading: false,
      };
    case "LOGIN_START":
      return { ...state, isLoading: true, error: null };
    case "LOGIN_ERROR":
      return { ...state, error: action.payload, isLoading: false };
    case "LOGOUT":
      return {
        ...state,
        currUser: null,
        userId: null,
        error: null,
        isLoading: false,
      };
    case "INIT_USER":
      return {
        ...state,
        currUser: action.payload,
        userId: action.payload?.uid || null,
        isLoading: false,
      };
    default:
      return state;
  }
}

const LOCAL_STORAGE_KEY = "airBusQuizApp_currentUser";
const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(authReducer, initialState);
  const router = useRouter();

  // Set up listener for authentication state changes
  useEffect(() => {
    // Check for cached user in localStorage
    const cachedUser = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (cachedUser) {
      try {
        const user = JSON.parse(cachedUser);
        dispatch({ type: "INIT_USER", payload: user });
      } catch (error) {
        console.log("Failed to parse cached user:", error);
        localStorage.removeItem(LOCAL_STORAGE_KEY);
      }
    }

    // keep track of auth state changes, such as session expiration or user logout
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch({ type: "INIT_USER", payload: user });
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(user));
      } else {
        dispatch({ type: "INIT_USER", payload: null });
        unsubscribe();
      }
    });

    return () => unsubscribe(); // remove the listener on unmount (when the app closed)
  }, []);

  /* const login = async (email, password) => {
    dispatch({ type: "LOGIN_START" });
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      dispatch({ type: "LOGIN_SUCCESS", payload: user });
      localStorage.setItem("airBusQuizApp_currUser", JSON.stringify(user));
      router.push("/pages/start");
    } catch (error) {
      const errorCode = error.code;

      if (errorCode === "auth/user-not-found") {
        router.push("/pages/nouser");
      } else {
        dispatch({
          type: "LOGIN_ERROR",
          payload:
            error.message ||
            "An error occurred. Please check your credentials.",
        });
      }
    }
  }; */

  //clear app-specific local storage data
  const clearAppStorage = useCallback(() => {
    const appKeys = Object.keys(localStorage).filter((key) =>
      key.startsWith("airBusQuizApp_")
    );
    appKeys.forEach((key) => localStorage.removeItem(key));
  }, []);

  const login = useCallback(
    async (email, password) => {
      dispatch({ type: "LOGIN_START" });
      try {
        const userCredential = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
        const user = userCredential.user;
        dispatch({ type: "LOGIN_SUCCESS", payload: user });
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(user));
        router.push("/pages/start");
      } catch (error) {
        if (error.code === "auth/user-not-found") {
          router.push("/pages/nouser");
          return;
        }

        dispatch({
          type: "LOGIN_ERROR",
          payload: error.message || "An error occurred during login",
        });
      }
    },
    [router]
  );

  const logout = useCallback(async () => {
    try {
      await signOut(auth);
      dispatch({ type: "LOGOUT" });
      clearAppStorage();
      router.push("/");
    } catch (error) {
      dispatch({
        type: "LOGIN_ERROR",
        payload: error.message || "An error occurred during logout",
      });
    }
  }, [router, clearAppStorage]);

  const contextValue = useMemo(
    () => ({
      currUser: state.currUser,
      userId: state.userId,
      isAuthenticated: !!state.currUser,
      error: state.error,
      isLoading: state.isLoading,
      login,
      logout,
    }),
    [state, login, logout]
  );

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
}

// useAuth hook to access the authentication context
export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
