import React from "react";
import { GoHome } from "react-icons/go";
import { FaStore } from "react-icons/fa";
import { BsCardList } from "react-icons/bs";
import { LuLayoutDashboard } from "react-icons/lu";
import { BiSolidUser } from "react-icons/bi";

function Header() {
  const [navbar, setNavbar] = React.useState(false);
  const onClickHandler = () => {
    setNavbar(!navbar);
  };
  return (
    <>
      {/* <div className="header h-[70px] flex bg-[#073B52] items-center px-5 justify-between text-[#fff] ">
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
      </div> */}
      <nav className="w-full px-5 gap-3 h-20 shadow relative z-[30] flex items-center justify-between bg-[#073B52]   md:flex md:justify-between md:items-center">
        <span className="cursor-pointer md:w-[500px] z-[40] bg-[#073B52] w-full h-full flex items-center  ">
          <a href="{`/`}">
          <div className="logo text-3xl text-[#EFBA00] font-['Nunito',sans-serif]">
          Lab n Box
        </div>
          </a>
        </span>

        <div
          className="text-5xl cursor-pointer mx-2 md:hidden block h-10 w-7"
          onClick={onClickHandler}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
          </svg>
        </div>
        <ul
          className={`md:flex md:items-center -z-50  md:z-auto md:static absolute bg-[#073B52] w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100  mt-0 transition-all ease-in duration-500 ${!navbar && "opacity-0 top-[-400px]"
            } ${navbar && "opacity-100 top-20"}`}
        >
          <li className="mx-4 mb-6 md:my-0">
            <a href="#" className=" flex items-center gap-1 text-l">
              <GoHome />
              <p>Home</p>
            </a>
          </li>
          <li className="mx-4 mb-6 md:my-0">
            <a href="#" className=" flex items-center gap-1 text-l">
              <FaStore />
              <p>Store</p>
            </a>
          </li>
          <li className="mx-4 mb-6 md:my-0">
            <a href="#" className=" flex items-center gap-1 text-l">
              <BsCardList />
              <p>Courses</p>
            </a>
          </li>
          <li className="mx-4 mb-6 md:my-0">
            <a href="#" className=" flex items-center gap-1 text-l">
              <LuLayoutDashboard />
              <p>Clan</p>
            </a>
          </li>
          <li className="mx-4 mb-6 md:my-0">
            <a href="#" className=" flex items-center gap-1 text-l">
              <BiSolidUser />
              <p>SignIn</p>
            </a>
          </li>

        </ul>
      </nav>
    </>
  );
}

export default Header;
