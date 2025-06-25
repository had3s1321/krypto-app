import HeaderTitle from "./HeaderTitle";
import AddAssetDialog from "./AddAssetDialog";

const PortfolioHeader = () => {
  return (
    <div className="mb-6 flex w-full items-center justify-between font-grotesk">
      <HeaderTitle />
      <AddAssetDialog />
    </div>
  );
};

export default PortfolioHeader;
