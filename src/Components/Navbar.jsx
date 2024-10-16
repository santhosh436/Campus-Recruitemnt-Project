import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RxAvatar } from "react-icons/rx";
import { IoReorderThreeOutline } from "react-icons/io5";
import navbarlogooo from '../Images/navbarlogooo.png'


const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isAvatarDropdownOpen, setAvatarDropdownOpen] = useState(false);

  const navItems = [
    { name: "Company Login", to: "/companylogin" },
    { name: "Admin Login", to: "/adminlogin" },
    { name: "Student Login", to: "/studentlogin" }
  ];

  const avatarDropdownItems = ["Profile", "Contact Us", "Dashboard", "Testimonies", "Our Success"];

  return (
    <nav className="bg-gradient-to-r from-[#000428] to-[#004e92] p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-black text-2xl font-bold">
          <Link to="/"><img src={navbarlogooo} alt="" className="w-16 h-10" /></Link>
        </div>
        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-white">
          {navItems.map((item, index) => (
            <li key={index} className="hover:text-gray-300 cursor-pointer">
              <Link to={item.to}>{item.name}</Link>
            </li>
          ))}
        </ul>

        {/* Avatar Dropdown */}
        <div className="relative">
          <RxAvatar
            size={30}
            className="text-white cursor-pointer"
            onClick={() => setAvatarDropdownOpen(!isAvatarDropdownOpen)}
          />
          {isAvatarDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-30 py-2">
              {avatarDropdownItems.map((item, index) => (
                <div
                  key={index}
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer"
                >
                  {item}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <IoReorderThreeOutline
            size={30}
            className="text-black cursor-pointer"
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          />
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-gray-700 text-white">
          <ul className="space-y-4 p-4">
            {navItems.map((item, index) => (
              <li key={index} className="hover:text-gray-300 cursor-pointer">
                <Link to={item.to}>{item.name}</Link>
              </li>
            ))}
            <div className="border-t border-gray-600 my-4"></div>
            {avatarDropdownItems.map((item, index) => (
              <li key={index} className="hover:text-gray-300 cursor-pointer">
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
