import NavLinks from "./NavLinks";
import NavLogo from "./NavLogo";
import NavToolBar from "./NavToolBar";

const NavBar = () => {
  return (
    <nav className="flex w-full bg-[var(--clr-nav-bg)] pb-2 text-[var(--clr-nav-text)] md:pb-3">
      <div className="relative mx-auto flex h-10 w-full max-w-[calc(100%-16px)] justify-between md:max-w-[calc(100%-32px)] lg:max-w-[1296px]">
        <NavLogo />
        <NavLinks />
        <NavToolBar />
      </div>
    </nav>
  );
};

export default NavBar;
