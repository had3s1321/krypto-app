import CurrencyDropdown from "./CurrencyDropdown";
import SearchBar from "./SearchBar";
import ThemeToggler from "./ThemeToggler";

const NavToolBar = () => {
  return (
    <div className="flex gap-3 pt-1">
      <SearchBar />
      <CurrencyDropdown />
      <ThemeToggler />
    </div>
  );
};

export default NavToolBar;
