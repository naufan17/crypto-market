import React from 'react';

interface NotFoundProps {
    title: string;
}

const Header: React.FC<NotFoundProps> = ({ title }) => {
    return (
        <div className="relative px-4 py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-8">
            <div className="max-w-xl mt-16 sm:mt-24 md:mx-auto sm:text-center lg:max-w-2xl">
                <h2 className="mb-8 font-sans text-3xl font-bold leading-none tracking-tight text-red-700 sm:text-5xl md:mx-auto">
                    {title}
                </h2>
            </div>
        </div>
    )
}

export default Header;