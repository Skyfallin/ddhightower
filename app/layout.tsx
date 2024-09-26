"use client";

import { ChakraProvider } from "@chakra-ui/react";
import { Inter } from "next/font/google";
import HeaderBar from "./components/header-bar";
import NavBar from "./components/nav-bar";
import "./globals.css";
import { metadata } from "./metadata";
import customTheme from "./theme/custom-theme";
import "./theme/styles.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body>
        <ChakraProvider cssVarsRoot="body" theme={customTheme}>
          <HeaderBar />
          <NavBar />
          <section className="min-h-screen">{children}</section>
          {/* <Footer /> */}
        </ChakraProvider>
      </body>
    </html>
  );
}
