import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="flex w-full gap-6 bg-green-700">
      <Link href="/">Home</Link>
      <Link href="/coin/bitcoin">Bitcoin</Link>
      <Link href="/coin/ethereum">Ethereum</Link>
      <Link href="/portfolio">Portfolio</Link>
    </nav>
  );
};

export default NavBar;
