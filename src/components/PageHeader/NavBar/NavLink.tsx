"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";
import { HomeIcon, PortfolioIcon } from "./icons";
import { setColor } from "@/utils/setColor";

interface NavLinkProps {
  name: "Home" | "Portfolio";
  path: string;
}

const NavLink = ({ name, path }: NavLinkProps) => {
  const { theme } = useTheme();
  const pathname = usePathname();

  const color = setColor(pathname === path, theme);
  const twColor = `text-[${color}]`;

  return (
    <li className={`flex text-base font-medium ${twColor}`}>
      {name === "Home" ? (
        <HomeIcon color={color} />
      ) : (
        <PortfolioIcon color={color} />
      )}
      <Link href={path}>{name}</Link>
    </li>
  );
};

export default NavLink;
