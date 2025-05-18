"use client";

import { useContext } from "react";
import { useTheme } from "next-themes";
import { ConvertorContext } from "@/contexts/convertorProvider";
import { SwitchCoinsIcon } from "./icons";

const CoinSwitcher = () => {
  const { handleSwitch } = useContext(ConvertorContext);
  const { theme } = useTheme();

  return (
    <div
      onClick={handleSwitch}
      className="absolute left-0 right-0 top-[40%] z-20 mx-auto w-fit rounded-full border-8 border-[var(--foreground)] transition-transform duration-300 hover:scale-110 hover:cursor-pointer md:top-1/3 md:border-none"
    >
      <SwitchCoinsIcon theme={theme} />
    </div>
  );
};

export default CoinSwitcher;
