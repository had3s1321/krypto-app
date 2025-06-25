import MobileLink, { MobileLinkProps } from "./MobileLink";
import { ConvertorIcon, OverviewIcon, PortfolioIcon } from "./icons";

const linksConfig: MobileLinkProps[] = [
  { name: "Overview", path: "/", icon: <OverviewIcon /> },
  { name: "Convertor", path: "/convertor", icon: <ConvertorIcon /> },
  { name: "Portfolio", path: "/portfolio", icon: <PortfolioIcon /> },
];

const MobileNavigation = () => {
  return (
    <ul className="fixed bottom-0 left-0 z-50 flex h-24 w-full items-center justify-between border-t p-3 backdrop-blur-sm">
      {linksConfig.map((link) => (
        <MobileLink
          key={link.name}
          name={link.name}
          path={link.path}
          icon={link.icon}
        />
      ))}
    </ul>
  );
};

export default MobileNavigation;
