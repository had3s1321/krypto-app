"use client";

import { useScreenBreakpoint } from "@/hooks/useScreenBreakpoint";
import NavLink from "./NavLink";

const NavLinks = () => {
  const breakpoint = useScreenBreakpoint();

  if (breakpoint === "md") return null;

  return (
    <ul className="flex items-center justify-center gap-8">
      <NavLink name="Home" path="/" />
      <NavLink name="Portfolio" path="/portfolio" />
    </ul>
  );
};

export default NavLinks;
