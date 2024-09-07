"use client";
import React from "react";
import { FaFilter } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa6";
import { useRouter } from "next/navigation";
const Navbar = () => {
  const router = useRouter();
  return (
    <nav
      className="pl-8 pr-8 pt-4 pb- flex flex-col items-center justify-between top-0 fixed w-full gap-2 bg-white
    "
    >
      <div className="w-full flex justify-between">
        {/* Left Circle */}
        <div
          className="flex items-center w-14 h-14 bg-sky-100 rounded-full justify-center"
          onClick={() => router.back()}
        >
          <FaChevronLeft className="text-[#21435b] w-6 h-6" />
        </div>

        {/* Center Text */}
        <div className="text-[#21435b] text-lg font-semibold">
          Search filters
        </div>

        {/* Right Icon */}
        <div className="flex items-center w-14 h-14 bg-sky-100 rounded-full justify-center">
          <FaFilter className="text-[#21435b] w-6 h-6" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
