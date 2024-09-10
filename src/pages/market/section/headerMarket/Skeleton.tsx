import React from 'react';

const Skeleton: React.FC = () => {
  return (
    <div className="relative px-4 py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-8">
      <div className="animate-pulse">
        <div className="flex flex-col sm:flex-row mt-4 sm:mt-8 justify-between lg:items-center">
          <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 mb-4 sm:mb-0 items-center">
            <div className="flex items-center justify-center w-14 h-14 rounded-full bg-slate-400 sm:w-16 sm:h-16"></div>
            <div className="h-5 sm:h-6 w-36 sm:w-40 col-span-2 bg-slate-400 rounded-xl"></div>
          </div>
          <div className="grid gap-4 grid-cols-1">
            <div className="h-4 sm:h-5 w-48 sm:w-56 col-span-2 bg-slate-400 rounded-lg"></div>
            <div className="h-4 sm:h-5 w-48 sm:w-56 col-span-2 bg-slate-400 rounded-lg"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skeleton;