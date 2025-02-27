import React from "react";

const Logo = () => {
  return (
    <svg
      width="150"
      height="50"
      viewBox="0 0 150 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient
          id="logoGradient"
          x1="0"
          y1="0"
          x2="150"
          y2="0"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#00D4FF" />
          <stop offset="100%" stopColor="#FF007A" />
        </linearGradient>
      </defs>
      <text
        x="50%"
        y="50%"
        dominantBaseline="middle"
        textAnchor="middle"
        fontFamily="'Poppins', sans-serif"
        fontSize="32"
        fontWeight="bold"
        fill="url(#logoGradient)"
      >
        OKM
      </text>
    </svg>
  );
};

export default Logo;
