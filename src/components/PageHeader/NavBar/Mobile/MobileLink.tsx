"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface MobileLinkProps {
  children: React.ReactNode;
  path: "/" | "/convertor" | "/portfolio";
}

const MobileLink = ({ children, path }: MobileLinkProps) => {
  const pathname = usePathname();

  const onPath = path === pathname && "bg-[var(--primary-foreground)]";

  return (
    <li className={`w-[30%] rounded-sm py-3 hover:cursor-pointer ${onPath}`}>
      <Link href={path} className="flex flex-col items-center">
        {children}
        <span className="text-xs">Overview</span>
      </Link>
    </li>
  );
};

export default MobileLink;
