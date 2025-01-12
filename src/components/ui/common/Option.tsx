/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { ChangeEvent } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";

interface OptionProps {
  handleSorting: (e: ChangeEvent<HTMLSelectElement>) => void;
  options: {value: string; label: string, icon?: any}[];
}

const Option: React.FC<OptionProps> = ({ handleSorting, options }) => {
  return (
    <div className="relative inline-flex w-2/5 sm:w-40 md:w-48">
      <select onChange={handleSorting} className="w-full sm:w-40 md:w-48 sm:h-12 h-10 px-4 sm:text-base text-md font-medium transition rounded-xl border-2 border-gray-900 focus:border focus:ring-2 focus:ring-indigo-300 focus:shadow-outline focus:outline-none appearance-none">
        <option value="" disabled selected>Filter</option>
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
            <FontAwesomeIcon icon={option.icon} className="text-gray-900 ml-2"/>
          </option>
        ))}
      </select>
      <div className="absolute right-0 flex items-center py-3 sm:py-4 px-3 sm:px-4 pointer-events-none">
        <FontAwesomeIcon icon={faFilter} className="text-gray-900"/>
      </div>
    </div>
  )
}

export default Option;