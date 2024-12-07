"use client";

import {
  createContext,
  useContext,
  useReducer,
  useEffect,
  useMemo,
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
        error: null,
        isLoading: false,
      };
    case "LOGIN_START":
      return { ...state, isLoading: true, error: null };
    case "LOGIN_ERROR":
      return { ...state, error: action.payload, isLoading: false };
    case "LOGOUT":
      return { ...state, currUser: null, error: null, isLoading: false };
    case "INIT_USER":
      return { ...state, currUser: action.payload, isLoading: false };
    default:
      return state;
  }
}

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(authReducer, initialState);
  const router = useRouter();

  // Set up listener for authentication state changes
  useEffect(() => {
    // Check for cached user in localStorage
    const cachedUser = localStorage.getItem("currUser");

    if (cachedUser) {
      dispatch({ type: "INIT_USER", payload: JSON.parse(cachedUser) });
    }

    // keep track of auth state changes, such as session expiration or user logout
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch({ type: "INIT_USER", payload: user });
        localStorage.setItem("airBusQuizApp_currUser", JSON.stringify(user));
      } else {
        dispatch({ type: "INIT_USER", payload: null });
        localStorage.removeItem("currUser");
      }
    });

    return () => unsubscribe(); // remove the listener on unmount (when the app closed)
  }, []);

  const login = async (email, password) => {
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
  };

  //clear app-specific local storage data
  const clearAppStorage = () => {
    const appKeys = Object.keys(localStorage).filter((key) =>
      key.startsWith("airBusQuizApp_")
    );
    appKeys.forEach((key) => localStorage.removeItem(key));
    console.log("Cleared app-specific local storage data");
  };

  const logout = async () => {
    try {
      await signOut(auth);
      dispatch({ type: "LOGOUT" });
      clearAppStorage(); // clear the dta from local storage when the user logout
      router.push("/");
    } catch (error) {
      dispatch({
        type: "LOGIN_ERROR",
        payload: error.message || "An error occurred during logout",
      });
    }
  };

  const contextValue = useMemo(
    () => ({
      currUser: state.currUser,
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
