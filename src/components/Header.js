import React from "react";
import { GoHome } from "react-icons/go";
import { FaStore } from "react-icons/fa";
import { BsCardList } from "react-icons/bs";
import { LuLayoutDashboard } from "react-icons/lu";
import { BiSolidUser } from "react-icons/bi";

function Header() {
  return (
    <div className="header">
      <div className="logo">Lab n box</div>
      <ul className="inline-block">
        <li>
          <GoHome />
          <a href="#"></a>
        </li>
        <li>
          <FaStore />
          <a href="#"></a>
        </li>
        <li>
          <BsCardList />
          <a href="#"></a>
        </li>
        <li>
          <LuLayoutDashboard />
          <a href="#"></a>
        </li>
        <BiSolidUser />
      </ul>
    </div>
  );
}

export default Header;
