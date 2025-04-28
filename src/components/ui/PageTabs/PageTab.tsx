import Link from "next/link";
import { PageOptions } from ".";
import { handlePageTabLink } from "@/utils/formatUtils";

interface PageTabProps {
  name: PageOptions;
  route: PageOptions;
}

const PageTab = ({ name, route }: PageTabProps) => {
  const isOnRoute =
    name === route
      ? "text-[var(--clr-light-perm)] bg-[var(--primary-foreground)] "
      : "text-[var(--clr-nav-text)] ";

  return (
    <Link
      href={handlePageTabLink(name)}
      className={`inline-block w-1/2 ${isOnRoute} rounded-sm py-2 text-center shadow-sm`}
    >
      {name}
    </Link>
  );
};

export default PageTab;
