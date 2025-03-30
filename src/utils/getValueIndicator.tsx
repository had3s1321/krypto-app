import { DownIcon, UpIcon } from "@/components/ui/icons";

type ValueIndicator = {
  icon?: React.ReactNode | null;
  classTW: string;
};

export const getValueIndicator = (num: number): ValueIndicator => {
  const valueIndicator: ValueIndicator = { icon: null, classTW: "" };
  if (num > 0) {
    valueIndicator.icon = <UpIcon />;
    valueIndicator.classTW = "text-green-500";
  } else if (num < 0) {
    valueIndicator.icon = <DownIcon />;
    valueIndicator.classTW = "text-red-500";
  } else {
    valueIndicator.classTW = "text-[var(--clr-text)]";
  }

  return valueIndicator;
};
