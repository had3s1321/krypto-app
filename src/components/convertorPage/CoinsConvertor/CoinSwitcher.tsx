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
      className="absolute left-0 right-0 top-1/3 z-20 mx-auto w-fit hover:cursor-pointer"
    >
      <SwitchCoinsIcon theme={theme} />
    </div>
  );
};

export default CoinSwitcher;
