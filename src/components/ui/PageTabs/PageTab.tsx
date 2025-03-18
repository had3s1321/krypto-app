import Link from "next/link";
import { PageOptions } from ".";
import { handlePageTabLink } from "@/utils/formatUtils";

interface PageTabProps {
  name: PageOptions;
  route: PageOptions;
}

const PageTab = ({ name, route }: PageTabProps) => {
  const isOnRoute = name === route;

  return (
    <Link
      href={handlePageTabLink(name)}
      className={`inline-block w-1/2 ${isOnRoute ? "text-[var(--clr-light-perm)]" : "text-[var(--clr-nav-text)]"} ${isOnRoute && "bg-[var(--primary-foreground)]"} rounded-sm py-3 text-center`}
    >
      {name}
    </Link>
  );
};

export default PageTab;
