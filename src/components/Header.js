import React from "react";
import { GoHome } from "react-icons/go";
import { FaStore } from "react-icons/fa";
import { BsCardList } from "react-icons/bs";
import { LuLayoutDashboard } from "react-icons/lu";
import { BiSolidUser } from "react-icons/bi";

function Header() {
  return (
    <div className="header h-[70px] flex bg-[#073B52] items-center px-5 justify-between text-[#fff] ">
      <div className="logo text-3xl text-[#EFBA00] font-['Nunito',sans-serif]">
        Lab n Box
      </div>
      <ul className="flex items-center gap-8">
        <li className="flex items-center gap-1 text-l">
          <GoHome />
          <a href="#">Home</a>
        </li>
        <li className="flex items-center gap-1 text-l">
          <FaStore />
          <a href="#">Store</a>
        </li>
        <li className="flex items-center gap-1 text-l">
          <BsCardList />
          <a href="#">My Courses</a>
        </li>
        <li className="flex items-center gap-1 text-l">
          <LuLayoutDashboard />
          <a href="#">Clan</a>
        </li>
        <li className="flex items-center gap-1 text-l">
          <BiSolidUser />
          <a href="#">SignIn</a>
        </li>
      </ul>
    </div>
  );
}

export default Header;
