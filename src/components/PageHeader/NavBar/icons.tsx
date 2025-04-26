export const HomeIcon = ({ color }: { color: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="25"
    height="24"
    fill="none"
    viewBox="0 0 25 24"
  >
    <path
      fill={color}
      d="m20.54 6.82-5.76-4.03c-1.57-1.1-3.98-1.04-5.49.13L4.28 6.83c-1 .78-1.79 2.38-1.79 3.64v6.9c0 2.55 2.07 4.63 4.62 4.63h10.78c2.55 0 4.62-2.07 4.62-4.62V10.6c0-1.35-.87-3.01-1.97-3.78M13.25 18c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-3c0-.41.34-.75.75-.75s.75.34.75.75z"
    ></path>
  </svg>
);

export const PortfolioIcon = ({ color }: { color: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="25"
    height="24"
    fill="none"
    viewBox="0 0 25 24"
  >
    <path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="m21.5 12-9 6-9-6m18 4-9 6-9-6m18-8-9 6-9-6 9-6z"
    ></path>
  </svg>
);

export const SearchIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    fill="none"
    viewBox="0 0 20 20"
    className="fill-[var(--clr-nav-text)]"
  >
    <path d="M8.334 2.083a6.25 6.25 0 0 1 4.97 10.04l3.952 3.954a.833.833 0 0 1-1.1 1.248l-.078-.07-3.954-3.952a6.25 6.25 0 1 1-3.79-11.22m0 1.667a4.583 4.583 0 1 0 0 9.166 4.583 4.583 0 0 0 0-9.166"></path>
  </svg>
);

export const DropdownDownIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="12"
    height="12"
    fill="none"
    viewBox="0 0 12 12"
    className="fill-[var(--clr-nav-text)] stroke-[var(--clr-nav-text)]"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="m9 4.5-3 3-3-3"
    ></path>
  </svg>
);
