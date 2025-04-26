import { DownIcon, UpIcon } from "@/components/ui/icons";

type ValueIndicator = {
  icon?: React.ReactNode | null;
  classTW: string;
};

export const getValueIndicator = (num: number): ValueIndicator => {
  const valueIndicator: ValueIndicator = { icon: null, classTW: "" };
  if (num > 0) {
    valueIndicator.icon = <UpIcon />;
    valueIndicator.classTW = "text-[#00B1A6]";
  } else if (num < 0) {
    valueIndicator.icon = <DownIcon />;
    valueIndicator.classTW = "text-[#FE2264]";
  } else {
    valueIndicator.classTW = "text-[var(--clr-text)]";
  }

  return valueIndicator;
};
