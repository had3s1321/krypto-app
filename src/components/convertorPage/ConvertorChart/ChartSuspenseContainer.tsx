const ChartSuspenseContainer = ({
  children,
}: {
  children?: React.ReactNode;
}) => (
  <div className="mb-8 flex h-64 min-h-[200px] w-full items-center justify-center rounded-md bg-[var(--foreground)] text-[var(--clr-text)] shadow-lg">
    {children}
  </div>
);

export default ChartSuspenseContainer;
