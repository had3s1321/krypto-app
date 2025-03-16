import Link from "next/link";
import { PageOptions } from ".";
import { handlePageTabLink } from "@/utils/formatUtils";

interface PageTabProps {
  name: PageOptions;
  route: PageOptions;
}
// TODO: set the text colors after the navbar is done, since the PageHeader pr is still open
const PageTab = ({ name, route }: PageTabProps) => {
  const isOnRoute = name === route;

  return (
    <Link
      href={handlePageTabLink(name)}
      className={`inline-block w-1/2 ${!isOnRoute && "text-[var(--clr-hover)]"} ${isOnRoute && "bg-[var(--primary-foreground)]"} rounded-sm py-3 text-center`}
    >
      {name}
    </Link>
  );
};

export default PageTab;
