import React from 'react';

export default function CloseIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="2rem"
      height="2rem"
      viewBox="0 0 24 24"
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeDasharray={12}
        strokeDashoffset={12}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 12l7 7M12 12l-7 -7M12 12l-7 7M12 12l7 -7"
      >
        <animate
          fill="freeze"
          attributeName="stroke-dashoffset"
          dur="0.3s"
          values="12;0"
        ></animate>
      </path>
    </svg>
  );
}
