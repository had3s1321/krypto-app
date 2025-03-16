import PageTab from "./PageTab";

export type PageOptions = "Coins" | "Convertor";

const PageTabs = ({ route }: { route: PageOptions }) => {
  const pages: PageOptions[] = ["Coins", "Convertor"];

  return (
    <div className="mb-9 w-[calc(40%-2rem)] rounded-sm bg-[var(--foreground)] p-1 font-inter">
      {pages.map((el) => (
        <PageTab key={el} name={el} route={route} />
      ))}
    </div>
  );
};

export default PageTabs;
