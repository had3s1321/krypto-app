import NavLinks from "./NavLinks";
import NavLogo from "./NavLogo";
import NavToolBar from "./NavToolBar";

const NavBar = () => {
  return (
    <nav className="flex w-full bg-[var(--clr-nav-bg)] pb-3 text-[var(--clr-nav-text)]">
      <div className="mx-auto flex h-12 w-full max-w-[calc(100%-32px)] justify-between lg:max-w-[1296px]">
        <NavLogo />
        <NavLinks />
        <NavToolBar />
      </div>
    </nav>
  );
};

export default NavBar;
