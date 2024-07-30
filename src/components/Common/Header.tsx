import React from 'react';

interface HeaderProps {
  title?: string;
  subtitle?: string;
}

const Header: React.FC<HeaderProps> = ({ title, subtitle} ) => {
  return (
    <div className="relative px-4 py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-8">
      <div className="max-w-xl mt-16 sm:mt-24 md:mx-auto sm:text-center lg:max-w-2xl">
        {title && (
          <h2 className="mb-8 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-5xl md:mx-auto">
            {title}
          </h2>
        )}
        {subtitle && (
          <p className="text-sm text-gray-700 sm:text-lg">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  )
}

export default Header;