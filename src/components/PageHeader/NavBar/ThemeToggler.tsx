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
    <Button onClick={handleTheme} className="bg-[var(--clr-nav-foreground)]">
      {mounted && resolvedTheme === "light" ? <Sun /> : <Moon />}
    </Button>
  );
};

export default ThemeToggler;
