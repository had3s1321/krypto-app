import StatsBar from "./StatsBar";
import NavBar from "./NavBar";

const PageHeader = () => {
  return (
    <header className="mb-8 font-inter">
      <StatsBar />
      <NavBar />
    </header>
  );
};

export default PageHeader;
