import Image from "next/image";
import logo from "../../../../public/logo.png";

const NavLogo = () => {
  return (
    <div className="flex items-center justify-center gap-2 lg:items-start">
      <Image src={logo} alt="Krypto Land Logo" width={24} height={24} />
      <h1 className="hidden text-xl font-bold lg:block">Krypto Land</h1>
    </div>
  );
};

export default NavLogo;
