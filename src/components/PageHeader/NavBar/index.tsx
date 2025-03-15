import NavLinks from "./NavLinks";
import NavLogo from "./NavLogo";
import NavToolBar from "./NavToolBar";

const NavBar = () => {
  return (
    <nav className="flex w-full bg-[var(--clr-nav-bg)] text-[var(--clr-nav-text)]">
      <div className="mx-auto flex h-12 w-full max-w-[1440px] justify-between">
        <NavLogo />
        <NavLinks />
        <NavToolBar />
      </div>
    </nav>
  );
};

export default NavBar;
