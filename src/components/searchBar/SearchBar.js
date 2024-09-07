import React from "react";
import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  return (
    <div className="flex items-center bg-sky-100 rounded-2xl p-3">
      <input
        type="text"
        placeholder="Gurugram"
        className="bg-sky-100 placeholder-[#21435b] text-white flex-grow p-2 outline-none"
      />
      <FaSearch className="text-[#21435b] w-5 h-5 ml-2" />
    </div>
  );
};

export default SearchBar;
