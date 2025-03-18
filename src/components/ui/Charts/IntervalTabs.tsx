import { Tabs, TabsList, TabsTrigger } from "@/components/ui/shadcn/tabs";

const IntervalTabs = () => {
  const intervalValues = ["1D", "14D", "1W", "1M", "1Y"];

  return (
    <Tabs
      defaultValue="1D"
      className="flex w-max rounded-sm bg-[var(--clr-nav-foreground)] text-[var(--clr-nav-text)]"
    >
      <TabsList>
        {intervalValues.map((el) => (
          <TabsTrigger key={el} value={el} className="px-5">
            {el}
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  );
};

export default IntervalTabs;
