import NavLinks from "./NavLinks";
import NavLogo from "./NavLogo";

const NavBar = () => {
  return (
    <nav className="flex w-full gap-6 bg-[var(--clr-nav-bg)] text-[var(--clr-nav-text)]">
      <div className="mx-auto flex h-12 w-full max-w-[1440px] justify-between">
        <NavLogo />
        <NavLinks />
      </div>
    </nav>
  );
};

export default NavBar;
