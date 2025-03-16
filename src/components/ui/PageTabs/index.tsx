import PageTab from "./PageTab";

export type PageOptions = "Coins" | "Convertor";

const PageTabs = ({ route }: { route: PageOptions }) => {
  const pages: PageOptions[] = ["Coins", "Convertor"];
  // TODO: set the bg  after the navbar is done, since the PageHeader pr is still open
  // TODO: add mb-9 to the navbar
  return (
    <div className="mb-9 w-[calc(40%-2rem)] rounded-sm bg-yellow-900 p-1 font-inter">
      {pages.map((el) => (
        <PageTab key={el} name={el} route={route} />
      ))}
    </div>
  );
};

export default PageTabs;
