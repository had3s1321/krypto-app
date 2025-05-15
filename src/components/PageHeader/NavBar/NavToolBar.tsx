import CurrencyDropdown from "./CurrencyDropdown";
import SearchBar from "./SearchBar";
import ThemeToggler from "./ThemeToggler";

const NavToolBar = () => {
  return (
    <div className="flex gap-2 pt-1 md:gap-3">
      <SearchBar />
      <CurrencyDropdown />
      <ThemeToggler />
    </div>
  );
};

export default NavToolBar;
