import StatsBar from "./StatsBar";
import NavBar from "./NavBar";

const PageHeader = () => {
  return (
    <header className="font-inter">
      <StatsBar />
      <NavBar />
    </header>
  );
};

export default PageHeader;
