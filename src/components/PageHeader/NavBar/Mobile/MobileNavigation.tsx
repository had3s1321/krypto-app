import MobileLink from "./MobileLink";
import { ConvertorIcon, OverviewIcon, PortfolioIcon } from "./icons";

const MobileNavigation = () => {
  return (
    <ul className="fixed bottom-0 left-0 z-50 flex h-24 w-full items-center justify-between border-t p-3 backdrop-blur-sm">
      <MobileLink name="Overview" path="/">
        <OverviewIcon />
      </MobileLink>
      <MobileLink name="Convertor" path="/convertor">
        <ConvertorIcon />
      </MobileLink>
      <MobileLink name="Portfolio" path="/portfolio">
        <PortfolioIcon />
      </MobileLink>
    </ul>
  );
};

export default MobileNavigation;
