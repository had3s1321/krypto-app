import AddAssetDialog from "./AddAssetDialog";

const PortfolioHeader = () => {
  return (
    <div className="mb-6 flex w-full items-center justify-between font-grotesk">
      <h2 className="text-2xl font-medium text-[var(--clr-nav-text)]">
        Portfolio
      </h2>
      <AddAssetDialog />
    </div>
  );
};

export default PortfolioHeader;
