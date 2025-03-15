import CurrencyDropdown from "./CurrencyDropdow";
import SearchBar from "./SearchBar";

const NavToolBar = () => {
  return (
    <div className="flex gap-3 pt-1">
      <SearchBar />
      <CurrencyDropdown />
    </div>
  );
};

export default NavToolBar;
