import StatsBar from "./StatsBar";
import NavBar from "./NavBar";

const PageHeader = () => {
  return (
    <header className="mb-8 flex flex-col-reverse font-inter md:flex-col">
      <StatsBar />
      <NavBar />
    </header>
  );
};

export default PageHeader;
