export const SwitchCoinsIcon = ({ theme }: { theme?: string }) => {
  const isDark = theme === "dark";

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="48"
      height="48"
      fill="none"
      viewBox="0 0 48 48"
    >
      <rect
        width="48"
        height="48"
        fill={isDark ? "#fff" : "#353570"}
        rx="24"
      ></rect>
      <path
        stroke={isDark ? "color(display-p3 0.2392 0.2392 0.4941)" : "#fff"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="m14.5 28 4 4m0 0 4-4m-4 4V18a2 2 0 0 1 2-2v0M25.5 20l4-4m0 0 4 4m-4-4v15a2 2 0 0 1-2 2v0"
      ></path>
    </svg>
  );
};
