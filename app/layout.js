import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./globals.css";
import { AuthProvider } from "./contexts/AuthContext";
import ClientLayout from "./components/ClientLayout";
import ThemeProvider from "./components/theme-provider";
import { NextUIProvider } from "@nextui-org/react";
import ClientQuizProvider from "./components/ClientQuizProvider";

export const metadata = {
  icons: { icon: "/favicon.png" },
  title: "Airbus Quiz",
  description:
    "Take flight and test your Airbus knowledge with this first-class quiz app!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>Airbus Quiz</title>

        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>

      <body
        className="h-[90vh]  xs:max-h-screen flex flex-col overflow-hidden bg-white text-black dark:bg-slate-800 dark:text-white "
        cz-shortcut-listen="true"
      >
        <NextUIProvider>
          <AuthProvider>
            <ThemeProvider>
              <Header />
              <ClientQuizProvider>
                <ClientLayout>{children}</ClientLayout>
              </ClientQuizProvider>
            </ThemeProvider>
            <Footer />
          </AuthProvider>
        </NextUIProvider>
      </body>
    </html>
  );
}
