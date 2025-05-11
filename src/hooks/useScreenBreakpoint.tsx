import { useState, useEffect } from "react";

type Breakpoint = "md" | "lg" | "xl";

export function useScreenBreakpoint() {
  const [breakpoint, setBreakpoint] = useState<Breakpoint>("xl");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) setBreakpoint("md");
      else if (window.innerWidth < 1024) setBreakpoint("lg");
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return breakpoint;
}
