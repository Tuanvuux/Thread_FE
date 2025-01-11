import React from "react";
import IconSearch from "../assets/images/sidebar/search.svg";
import IconHome from "../assets/images/sidebar/home.svg";
import IconActivity from "../assets/images/sidebar/activity.svg";
import IconUser from "../assets/images/sidebar/user.svg";
import IconLogo from "../assets/images/sidebar/logo.svg";
import IconMenu from "../assets/images/sidebar/menu.svg";
import IconPin from "../assets/images/sidebar/pin.svg";

const Sidebar = () => {
  return (
    <div className="flex flex-col w-16 bg-white h-screen p-4">
  <div className="mb-8">
    <img src={IconLogo} alt="Logo" className="w-12 h-auto mx-auto" />
  </div>

  {/* Cột chứa các icon menu */}
  <div className="flex flex-col items-center space-y-6 flex-grow justify-center">
    <a href="#home">
      <img src={IconHome} alt="Home Icon" className="w-6 h-6" />
    </a>
    <a href="#about">
      <img src={IconSearch} alt="Search Icon" className="w-6 h-6" />
    </a>
    <a href="#services">
      <img src={IconActivity} alt="Activity Icon" className="w-6 h-6" />
    </a>
    <a href="#contact">
      <img src={IconUser} alt="User Icon" className="w-6 h-6" />
    </a>
  </div>

  {/* Cột chứa các icon dưới cùng */}
  <div className="mt-auto flex flex-col items-center space-y-6">
    <a href="#home">
      <img src={IconPin} alt="Pin Icon" className="w-6 h-6" />
    </a>
    <a href="#about">
      <img src={IconMenu} alt="Menu Icon" className="w-6 h-6" />
    </a>
  </div>
</div>

  );
};

export default Sidebar;
