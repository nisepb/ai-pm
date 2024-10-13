import React from 'react';

function BackgroundPattern() {
  return (
    <svg
      width="100%"
      height="100%"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: -1, // Ensure it stays behind all content
        opacity: 0.1, // Make it lighter and less intrusive
      }}
    >
      <defs>
        <pattern
          id="grid"
          width="100"
          height="100"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M 100 0 L 0 0 0 100"
            fill="none"
            stroke="rgba(0, 0, 0, 0.1)" // Lighter stroke color for the grid lines
            strokeWidth="1"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid)" />
    </svg>
  );
}

export default BackgroundPattern;
