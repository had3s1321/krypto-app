import IntervalTabs from "@/components/ui/IntervalTabs";

const ChartSuspenseContainer = ({
  children,
}: {
  children?: React.ReactNode;
}) => (
  <>
    <div className="mb-8 flex aspect-video h-auto min-h-[200px] w-full items-center justify-center rounded-md bg-[var(--foreground)] text-[var(--clr-text)] shadow-lg md:aspect-auto md:h-64">
      {children}
    </div>
    <IntervalTabs disabled />
  </>
);

export default ChartSuspenseContainer;
