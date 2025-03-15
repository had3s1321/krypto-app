import NavLogo from "./NavLogo";

const NavBar = () => {
  return (
    <nav className="flex w-full gap-6 bg-[var(--clr-nav-bg)] text-[var(--clr-text)]">
      <div className="mx-auto flex h-12 max-w-[1440px]">
        <NavLogo />
      </div>
    </nav>
  );
};

export default NavBar;
