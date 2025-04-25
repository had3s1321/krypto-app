"use client";

import { useAppSelector } from "@/lib/hooks";
import { getDate, getTime } from "@/utils/formatUtils";

const ConvertorHeader = () => {
  const { locale } = useAppSelector((state) => state.user);
  const date = getDate(undefined, { isShort: "short", locale: locale });
  const time = getTime(locale);

  return (
    <div className="mb-6 font-grotesk text-[var(--clr-nav-text)]">
      <h2 className="mb-1 text-xl font-medium">Online currency convertor</h2>
      <span>
        {date} {time}
      </span>
    </div>
  );
};

export default ConvertorHeader;
