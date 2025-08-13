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
      className={`rounded-lg ${className}`}
      width={width}
      height={height}
      style={{ 
        objectFit: 'contain', 
        display: 'block'
      }}
    />
  );
};

export default Logo;