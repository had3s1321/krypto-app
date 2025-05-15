import { Tabs, TabsList, TabsTrigger } from "@/components/ui/shadcn/tabs";

interface IntervalTabsProps {
  value?: string;
  onValueChange?: (val: string) => void; // eslint-disable-line
  disabled?: boolean;
}

const intervalValues = ["1D", "7D", "14D", "1M", "1Y"];

const IntervalTabs = ({
  value,
  onValueChange,
  disabled,
}: IntervalTabsProps) => {
  return (
    <Tabs
      defaultValue="1D"
      value={value}
      onValueChange={onValueChange}
      className={`${disabled && "hover:cursor-not-allowed"} flex w-full rounded-sm bg-[var(--clr-nav-foreground)] text-[var(--clr-nav-text)] shadow-lg md:w-max`}
    >
      <TabsList className="flex w-full justify-between">
        {intervalValues.map((el) => (
          <TabsTrigger key={el} value={el} disabled={disabled} className="px-5">
            {el}
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  );
};

export default IntervalTabs;
