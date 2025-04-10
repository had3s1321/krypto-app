import { Button } from "@/components/ui/shadcn/button";

const PortfolioHeader = () => {
  return (
    <div className="mb-8 flex w-full justify-between font-grotesk">
      <h2 className="text-2xl font-medium text-[var(--clr-nav-text)]">
        Portfolio
      </h2>
      <Button className="w-1/6 bg-[var(--primary-foreground)] text-[var(--clr-light-perm)]">
        Add Asset
      </Button>
    </div>
  );
};

export default PortfolioHeader;
