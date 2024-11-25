import React from "react";

const Logo = () => {
  return (
    <>
      <svg
        className="mx-auto h-12 w-auto"
        xmlns="http://www.w3.org/2000/svg"
        width={300}
        height={150}
        viewBox="0 0 300 150"
      >
        <defs>
          <linearGradient
            id="metallicGradientY"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop
              offset="0%"
              style={{ stopColor: "#FFD700", stopOpacity: 1 }}
            />{" "}
            <stop
              offset="100%"
              style={{ stopColor: "#FFA500", stopOpacity: 1 }}
            />{" "}
          </linearGradient>
          <linearGradient
            id="metallicGradientH"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop
              offset="0%"
              style={{ stopColor: "#00FF00", stopOpacity: 1 }}
            />{" "}
            <stop
              offset="100%"
              style={{ stopColor: "#008000", stopOpacity: 1 }}
            />{" "}
          </linearGradient>
          <linearGradient
            id="metallicGradientA"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop
              offset="0%"
              style={{ stopColor: "#1E90FF", stopOpacity: 1 }}
            />{" "}
            <stop
              offset="100%"
              style={{ stopColor: "#0000FF", stopOpacity: 1 }}
            />{" "}
          </linearGradient>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation={4} result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <text
          x={30}
          y={90}
          fontFamily="Arial"
          fontSize={72}
          fontWeight="bold"
          filter="url(#glow)"
        >
          <tspan fill="url(#metallicGradientY)">Y</tspan>
          <tspan fill="url(#metallicGradientH)">H</tspan>
          <tspan fill="url(#metallicGradientA)">A</tspan>
        </text>
      </svg>
    </>
  );
};

export default Logo;
