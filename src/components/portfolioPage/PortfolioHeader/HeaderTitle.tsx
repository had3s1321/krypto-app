"use client";

import { useScreenBreakpoint } from "@/hooks/useScreenBreakpoint";

const HeaderTitle = () => {
  const breakpoint = useScreenBreakpoint();

  if (breakpoint === "md") return null;

  return (
    <h2 className="text-2xl font-medium text-[var(--clr-nav-text)]">
      Portfolio
    </h2>
  );
};

export default HeaderTitle;
