"use client";

import { Button } from "@/components/ui/shadcn/button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

const ThemeToggler = () => {
  const { resolvedTheme, setTheme } = useTheme();

  const handleTheme = () => {
    if (resolvedTheme === "dark") setTheme("light");
    else setTheme("dark");
  };

  return (
    <Button onClick={handleTheme} className="bg-[var(--clr-nav-foreground)]">
      {resolvedTheme === "light" ? <Sun /> : <Moon />}
    </Button>
  );
};

export default ThemeToggler;
