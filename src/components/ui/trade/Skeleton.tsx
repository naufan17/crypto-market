import React from 'react';

const Skeleton: React.FC = () => {
  return (
    <div className="relative px-4 py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-8">
      <div className="animate-pulse">
        <div className="h-96 w-full bg-slate-400 rounded-lg"></div>
      </div>
    </div>
  );
}

export default Skeleton;