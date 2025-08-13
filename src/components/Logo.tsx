import React from 'react';

interface LogoProps {
  className?: string;
  width?: number;
  height?: number;
  mobileLogoSrc?: string;
  desktopLogoSrc?: string;
}

const Logo: React.FC<LogoProps> = ({ 
  className, 
  width = 120, 
  height = 40,
  mobileLogoSrc = "/mobile-hop.svg",
  desktopLogoSrc = "/hop-logo.png"
}) => {
  return (
    <>
      {/* Mobile Logo */}
      <img
        src={mobileLogoSrc}
        alt="HOP Logo"
        className={`rounded-lg object-contain md:hidden ${className}`}
        width={width}
        height={height}
        style={{ 
          display: 'block'
        }}
      />
      {/* Desktop Logo */}
      <img
        src={desktopLogoSrc}
        alt="HOP Logo"
        className={`rounded-lg object-contain hidden md:block ${className}`}
        width={width}
        height={height}
        style={{ 
          display: 'block'
        }}
      />
    </>
  );
};

export default Logo;