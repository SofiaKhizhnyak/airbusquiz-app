"use client";

import React, { createContext, useContext } from "react";
import { ThemeProvider as NextThemesProvider, useTheme } from "next-themes";

export const ThemeContext = createContext();

export default function ThemeProvider({ children }) {
  const { theme, setTheme, resolvedTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  return (
    <ThemeContext.Provider value={{ theme: resolvedTheme, toggleTheme }}>
      <NextThemesProvider
        attribute="data-theme"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
        themes={["light", "dark"]}
      >
        {children}
      </NextThemesProvider>
    </ThemeContext.Provider>
  );
}
