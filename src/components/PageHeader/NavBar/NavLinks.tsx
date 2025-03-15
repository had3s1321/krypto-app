import { HomeIcon, PortfolioIcon } from "@/components/ui/icons";
import Link from "next/link";

// TODO: dynamically change font weight to 500 and opacity-50 for !current page
const NavLinks = () => {
  return (
    <div className="flex items-center justify-center gap-8 text-[var(--clr-nav-text)]">
      <span className="flex text-base font-medium">
        <HomeIcon />
        <Link href="/">Home</Link>
      </span>
      <span className="flex text-base font-medium">
        <PortfolioIcon />
        <Link href="/portfolio">Portfolio</Link>
      </span>
    </div>
  );
};

export default NavLinks;
