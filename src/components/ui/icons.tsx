export const DownIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="none"
      viewBox="0 0 16 16"
    >
      <path
        fill="color(display-p3 0.9961 0.1333 0.3922)"
        d="m8 9.667 3.333-3.333H4.666z"
      ></path>
    </svg>
  );
};

export const UpIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="none"
      viewBox="0 0 16 16"
    >
      <path
        fill="color(display-p3 0.0039 0.9451 0.8902)"
        d="M8 6.333 4.668 9.666h6.667z"
      ></path>
    </svg>
  );
};

// table loader svg
export const FadeStaggerSquares = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
      <rect
        fill="#A2A3ED"
        stroke="#A2A3ED"
        strokeWidth="6"
        width="30"
        height="30"
        x="25"
        y="85"
      >
        <animate
          attributeName="opacity"
          calcMode="spline"
          dur="2"
          values="1;0;1;"
          keySplines=".5 0 .5 1;.5 0 .5 1"
          repeatCount="indefinite"
          begin="-.4"
        ></animate>
      </rect>
      <rect
        fill="#A2A3ED"
        stroke="#A2A3ED"
        strokeWidth="6"
        width="30"
        height="30"
        x="85"
        y="85"
      >
        <animate
          attributeName="opacity"
          calcMode="spline"
          dur="2"
          values="1;0;1;"
          keySplines=".5 0 .5 1;.5 0 .5 1"
          repeatCount="indefinite"
          begin="-.2"
        ></animate>
      </rect>
      <rect
        fill="#A2A3ED"
        stroke="#A2A3ED"
        strokeWidth="6"
        width="30"
        height="30"
        x="145"
        y="85"
      >
        <animate
          attributeName="opacity"
          calcMode="spline"
          dur="2"
          values="1;0;1;"
          keySplines=".5 0 .5 1;.5 0 .5 1"
          repeatCount="indefinite"
          begin="0"
        ></animate>
      </rect>
    </svg>
  );
};
