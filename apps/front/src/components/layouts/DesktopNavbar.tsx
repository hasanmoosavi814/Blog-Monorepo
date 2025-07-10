"use client";

import { PropsWithChildren, useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const DesktopNavbar = (props: PropsWithChildren) => {
  // ============= State ============
  const [scrollPosition, setScrollPosition] = useState(0);
  // ============= Function ============
  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  // ============= Effect ============
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isScrollDown = scrollPosition > 10;
  // ============= Rendering ============
  return (
    <nav
      className={cn(
        "fixed transition-colors w-full z-50 text-black top-0 hidden md:block",
        {
          "backdrop-blur-md bg-white/30 text-gray-700 shadow-md": isScrollDown,
        }
      )}
    >
      <div className="flex items-center px-4 py-4 container">
        {props.children}
      </div>
    </nav>
  );
};

export default DesktopNavbar;
