import React, { useState } from "react";
import { FaTwitter, FaDiscord, FaYoutube, FaReddit } from "react-icons/fa";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import dethlogo from './Images/dethlogo.png'
import './App.css';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0d1c] text-white px-6 py-4 flex items-center justify-between shadow-md">
      {/* Logo */}
      <div className="flex items-center gap-4 text-3xl">
        <img src={dethlogo} alt="logo" className="w-10 h-10" />
        <span className="death4">cult of DETH</span>
      </div>

      {/* Nav Items */}
      <div className="flex gap-6 items-center">
        <a href="#" className="hover:text-lime-400"></a>
        <a href="#" className="hover:text-lime-400"></a>
        <a href="#" className="hover:text-lime-400">CA: TBA</a>

        {/* Dropdown */}
        
        {/* Connect Button */}
        <button className="bg-fuchsia-400 text-black px-4 py-2 rounded-lg font-semibold hover:bg-fuchsia-300">
          Connect
        </button>
      </div>
    </nav>
  );
};

export default Navbar;