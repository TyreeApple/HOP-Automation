import React from 'react';

interface LogoProps {
  className?: string;
  width?: number;
  height?: number;
}

const Logo: React.FC<LogoProps> = ({ className, width = 120, height = 40 }) => {
  return (
    <img
      src="/Untitled design.svg"
      alt="HOP Logo"
      className={`rounded-lg object-contain ${className}`}
      width={width}
      height={height}
      style={{ 
        display: 'block'
      }}
    />
  );
};

export default Logo;