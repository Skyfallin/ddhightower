"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const Intro = dynamic(() => import("./intro"));
const IntroMobile = dynamic(() => import("./intro-mobile"));

const ResponsiveIntro = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Example breakpoint for mobile
    };

    // Check screen size on client-side
    handleResize();

    // Add event listener to handle window resize
    window.addEventListener("resize", handleResize);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return isMobile ? <IntroMobile /> : <Intro />;
};

export default ResponsiveIntro;
