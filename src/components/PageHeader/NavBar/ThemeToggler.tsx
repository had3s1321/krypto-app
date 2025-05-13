"use client";

import { Button } from "@/components/ui/shadcn/button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ThemeToggler = () => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  const handleTheme = () => {
    if (resolvedTheme === "dark") setTheme("light");
    else setTheme("dark");
  };

  // avoids hydration error caused by the resolvedTheme
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <Button
      onClick={handleTheme}
      className="h-full bg-[var(--clr-nav-foreground)] px-3 shadow-lg hover:bg-[var(--clr-hover)] md:px-3"
    >
      {mounted && resolvedTheme === "dark" ? (
        <Sun className="fill-[var(--clr-nav-text)] stroke-[var(--clr-nav-text)]" />
      ) : (
        <Moon className="stroke-[var(--clr-nav-text)]" />
      )}
    </Button>
  );
};

export default ThemeToggler;
