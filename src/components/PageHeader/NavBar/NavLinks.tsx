import NavLink from "./NavLink";

const NavLinks = () => {
  return (
    <ul className="flex items-center justify-center gap-8">
      <NavLink name="Home" path="/" />
      <NavLink name="Portfolio" path="/portfolio" />
    </ul>
  );
};

export default NavLinks;
