import { faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { ChangeEvent } from 'react';

interface InputSearchProps {
  handleSearch: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}

const InputSearch: React.FC<InputSearchProps> = ({ handleSearch, placeholder }) => {
  return (
    <div className="relative inline-flex w-full items-center mb-4 sm:mb-0">
      <span className="absolute left-0 flex items-center px-4 text-gray-500">
        <FontAwesomeIcon icon={faMagnifyingGlass} className="text-gray-500"/>
      </span>
      <input 
        type="search" 
        onChange={handleSearch}
        placeholder={placeholder}  
        className="inline-flex w-full sm:h-12 h-10 pl-10 pr-10 sm:text-base text-md text-gray-900 bg-transparent border-2 border-gray-400 rounded-xl appearance-none sm:w-full sm:mr-2.5 sm:mb-0 focus:border-gray-500 focus:outline-none focus:shadow-outline [&::-webkit-search-cancel-button]:appearance-none"
        required
      />
      <button className="absolute right-0 px-3 sm:px-5 text-gray-500" onClick={() => handleSearch({ target: { value: '' } } as ChangeEvent<HTMLInputElement>)}>
        <FontAwesomeIcon icon={faXmark} className="text-gray-500"/>
      </button>
    </div>
  )
}

export default InputSearch;