import { HomeIcon, PortfolioIcon } from "@/components/PageHeader/NavBar/icons";
import Link from "next/link";

// TODO: dynamically change font weight to 500 and opacity-50 for !current page
const NavLinks = () => {
  return (
    <ul className="flex items-center justify-center gap-8 text-[var(--clr-nav-text)]">
      <li className="flex text-base font-medium">
        <HomeIcon />
        <Link href="/">Home</Link>
      </li>
      <li className="flex text-base font-medium">
        <PortfolioIcon />
        <Link href="/portfolio">Portfolio</Link>
      </li>
    </ul>
  );
};

export default NavLinks;
