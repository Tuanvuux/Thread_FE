import React from "react";
import IconSearch from "../assets/images/sidebar/search.svg"
import IconHome from "../assets/images/sidebar/home.svg"
import IconActivity from "../assets/images/sidebar/activity.svg"
import IconUser from "../assets/images/sidebar/user.svg"
import IconLogo from "../assets/images/sidebar/logo.svg"
const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-gray-800 text-white fixed top-0 left-0 flex flex-col shadow-lg">
      <h2 className="text-2xl font-bold p-4 border-b border-gray-600"><img src={IconLogo} alt="Home Icon" className="w-6 h-6 mr-2" /></h2>
      <ul className="flex flex-col p-4">
        <li className="mb-4">
            <a href="#home" className="flex items-center text-lg hover:text-blue-400 transition duration-200">
                <img src={IconHome} alt="Home Icon" className="w-6 h-6 mr-2" />
            </a>
        </li>
        <li className="mb-4">
          <a
            href="#about"
            className="text-lg hover:text-blue-400 transition duration-200"
          >
            <img src={IconSearch} alt="Home Icon" className="w-6 h-6 mr-2" />
          </a>
        </li>
        <li className="mb-4">
          <a
            href="#services"
            className="text-lg hover:text-blue-400 transition duration-200"
          >
            <img src={IconActivity} alt="Home Icon" className="w-6 h-6 mr-2" />
          </a>
        </li>
        <li className="mb-4">
          <a
            href="#contact"
            className="text-lg hover:text-blue-400 transition duration-200"
          >
            <img src={IconUser} alt="Home Icon" className="w-6 h-6 mr-2" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
