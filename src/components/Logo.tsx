import React from 'react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ size = 'md', className = '' }) => {
  const sizeClasses = {
    sm: 'w-8 h-8 text-sm',
    md: 'w-10 h-10 text-lg', 
    lg: 'w-12 h-12 text-xl'
  };

  return (
    <div className={`${sizeClasses[size]} ${className}`}>
      <div className="w-full h-full rounded-full bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center shadow-lg">
        <span className="font-bold text-white">NC</span>
      </div>
    </div>
  );
};

export default Logo;