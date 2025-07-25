export const CopyIcon = ({ onClick }: { onClick?: () => void }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    fill="none"
    viewBox="0 0 18 18"
    className="hover:cursor-pointer"
    onClick={onClick}
  >
    <g
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      opacity="0.7"
    >
      <path d="M12 9.675v3.15c0 2.625-1.05 3.675-3.675 3.675h-3.15C2.55 16.5 1.5 15.45 1.5 12.825v-3.15C1.5 7.05 2.55 6 5.175 6h3.15C10.95 6 12 7.05 12 9.675"></path>
      <path d="M16.5 5.175v3.15C16.5 10.95 15.45 12 12.825 12H12V9.675C12 7.05 10.95 6 8.325 6H6v-.825C6 2.55 7.05 1.5 9.675 1.5h3.15c2.625 0 3.675 1.05 3.675 3.675"></path>
    </g>
  </svg>
);

export const PlusIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 32 32"
  >
    <circle cx="16" cy="16" r="16" fill="#7878FA" />
    <path
      d="M21 15h-5v-5a1 1 0 0 0-2 0v5H9a1 1 0 0 0 0 2h5v5a1 1 0 0 0 2 0v-5h5a1 1 0 0 0 0-2z"
      fill="#FFFFFF"
    />
  </svg>
);

export const RedirectIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="21"
    height="20"
    fill="none"
    viewBox="0 0 21 20"
  >
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="M11.038 9.116a4.783 4.783 0 0 1 0 6.775c-1.876 1.867-4.909 1.875-6.775 0s-1.875-4.908 0-6.775"
    ></path>
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="M8.978 11.175a5.01 5.01 0 0 1 0-7.075c1.95-1.958 5.117-1.95 7.075 0s1.95 5.117 0 7.075"
    ></path>
  </svg>
);
