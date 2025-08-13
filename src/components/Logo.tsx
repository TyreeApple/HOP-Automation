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
  desktopLogoSrc = "/mobile-hop.svg"
}) => {
  return (
    <div className="flex-shrink-0">
      <img
        src={mobileLogoSrc}
        alt="HOP Logo"
        className={`rounded-lg object-contain ${className}`}
        width={width}
        height={height}
        style={{ 
          display: 'block'
        }}
      />
    </div>
  );
};

export default Logo;