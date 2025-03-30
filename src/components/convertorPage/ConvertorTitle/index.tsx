"use client";

import { useAppSelector } from "@/lib/hooks";
import { getDate, getTime } from "@/utils/formatUtils";

const ConvertorTitle = () => {
  const { locale } = useAppSelector((state) => state.user);
  const date = getDate("short", locale);
  const time = getTime(locale);

  return (
    <div className="mb-6 font-grotesk text-[var(--clr-nav-text)]">
      <h3 className="mb-1 text-xl font-medium">Online currency convertor</h3>
      <span>
        {date} {time}
      </span>
    </div>
  );
};

export default ConvertorTitle;
