import React, { ChangeEvent } from 'react';

interface InputSearchProps {
  handleSearch: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}

const InputSearch: React.FC<InputSearchProps> = ({ handleSearch, placeholder }) => {
  return (
    <input 
      type="search" 
      onChange={handleSearch}
      placeholder={placeholder}  
      className="inline-flex w-full sm:h-12 h-10 px-3 mb-3 sm:text-base text-md text-gray-900 bg-transparent border-2 rounded appearance-none sm:w-full sm:mr-2.5 sm:mb-0 focus:border-indigo-50 focus:outline-none focus:shadow-outline"
      required
    />
  )
}

export default InputSearch;