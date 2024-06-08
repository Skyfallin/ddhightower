"use client";

import { ChakraProvider } from "@chakra-ui/react";
import { Inter } from "next/font/google";
import "./globals.css";
import { metadata } from "./metadata";
import customTheme from "./theme/custom-theme";
import "./theme/styles.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

function Footer() {
  return (
    <footer className="bg-accent-1 border-t border-accent-2">
      <div className="container mx-auto px-5">
        <div className="py-28 flex flex-col lg:flex-row items-center">
          <h3 className="text-4xl lg:text-5xl font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
            D. D. Hightower
          </h3>
          <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
            <a
              href="https://medium.com/@ddhightower"
              className="mx-3 bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
            >
              Read on Medium
            </a>
            <a
              href={`https://github.com/skyfallin/`}
              className="mx-3 font-bold hover:underline"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

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
          <section className="min-h-screen">
            {children}
            <Footer />
          </section>
        </ChakraProvider>
      </body>
    </html>
  );
}
