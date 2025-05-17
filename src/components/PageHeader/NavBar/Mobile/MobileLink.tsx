"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface MobileLinkProps {
  children: React.ReactNode;
  name: "Overview" | "Convertor" | "Portfolio";
  path: "/" | "/convertor" | "/portfolio";
}

const MobileLink = ({ children, name, path }: MobileLinkProps) => {
  const pathname = usePathname();

  const onPath = path === pathname && "bg-[var(--primary-foreground)]";

  return (
    <li className={`w-[30%] rounded-md py-4 hover:cursor-pointer ${onPath}`}>
      <Link href={path} className="flex flex-col items-center gap-1">
        {children}
        <span className="text-[10px]">{name}</span>
      </Link>
    </li>
  );
};

export default MobileLink;
