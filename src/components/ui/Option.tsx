import React, { ChangeEvent } from "react";

interface OptionProps {
  handleSorting: (e: ChangeEvent<HTMLSelectElement>) => void;
  options: {value: string; label: string}[];
}

const Option: React.FC<OptionProps> = ({ handleSorting, options }) => {
  return (
    <select onChange={handleSorting} className="inline-flex w-full sm:h-12 h-10 px-3 mb-3 sm:text-base text-md font-medium text-gray-900 transition rounded-md border-2 shadow-sm bg-indigo-50 hover:bg-slate-200 sm:w-full sm:ml-2.5 sm:mb-0 focus:shadow-outline focus:outline-none">
      {options.map(option => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  )
}

export default Option;