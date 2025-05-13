import StatsBar from "./StatsBar";
import NavBar from "./NavBar";

const PageHeader = () => {
  return (
    <header className="mb-4 flex flex-col-reverse font-inter md:mb-8 md:flex-col">
      <StatsBar />
      <NavBar />
    </header>
  );
};

export default PageHeader;
