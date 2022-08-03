import React from "react";
import MiniLogo from "./../../../assets/MiniLogo";
import { Link, NavLink } from "react-router-dom";

import {
  HomeIcon,
  MarketIcon,
  Vault,
  History,
  Vote,
  XVS,
  ConvertIcon,
  XvsPredictionIcon,
  LeftArrowIcon,
} from "./../../../assets/SideBarImages";

const SideNav: React.FC<{ showMenu: boolean }> = ({ showMenu }) => {
  return (
    <div
      className={`bg-[#282931] ${
        showMenu ? "w-screen absolute " : "hidden"
      } z-30  md:block md:fixed md:h-full w-full md:w-20 lg:w-48 md:top-0 md:bottom-0 rounded-none`}
    >
      <div className="hidden md:block text-center mt-8">
        <Link
          to="/"
          className=" text-slate-50 text-3xl "
        >
          <div className="flex justify-center items-center">
            <MiniLogo className="w-9" />
            <span className="md:hidden lg:block ml-3">VENUS</span>
          </div>
        </Link>
      </div>
      <div className="menu active md:mt-16">
        <ul className="show list-none flex flex-col md:block items-start md:items-center">
          <SideNavItem className=" text-slate-50" to="/">
            <HomeIcon className="w-6 h-6 md:w-full md:h-full lg:w-6 lg:h-6" />
            <span className="md:hidden lg:block ml-3 ">Dashboard</span>
          </SideNavItem>

          <SideNavItem className="text-gray-400" to="/">
            <MarketIcon className="w-6 h-6 md:w-full md:h-full lg:w-6 lg:h-6" />
            <span className="md:hidden lg:block ml-3">Market</span>
          </SideNavItem>

          <SideNavItem className="text-gray-400" to="/">
            <Vault className="w-6 h-6 md:w-full md:h-full lg:w-6 lg:h-6" />
            <span className="md:hidden lg:block ml-3">Vault</span>
          </SideNavItem>

          <SideNavItem className="text-gray-400" to="/">
            <History className="w-6 h-6 md:w-full md:h-full lg:w-6 lg:h-6" />
            <span className="md:hidden lg:block ml-3">History</span>
          </SideNavItem>

          <SideNavItem className="text-gray-400" to="/">
            <Vote className="w-6 h-6 md:w-full md:h-full lg:w-6 lg:h-6" />
            <span className="md:hidden lg:block ml-3">Vote</span>
          </SideNavItem>

          <SideNavItem className="text-gray-400" to="/">
            <XVS className="w-6 h-6 md:w-full md:h-full lg:w-6 lg:h-6" />
            <span className="md:hidden lg:block ml-3">XVS</span>
          </SideNavItem>

          <SideNavItem className="text-gray-400" to="/">
            <ConvertIcon className="w-6 h-6 md:w-full md:h-full lg:w-6 lg:h-6" />
            <span className="md:hidden lg:block ml-3">Convert VRT</span>
          </SideNavItem>

          <SideNavItem className="text-gray-400" to="/">
            <XvsPredictionIcon className="w-6 h-6 md:w-full md:h-full lg:w-6 lg:h-6" />
            <span className="md:hidden lg:block ml-3">XVS Prediction</span>
          </SideNavItem>

          <li className="logout md:absolute md:bottom-12 md:left-0 md:right-0 py-3 px-6">
            <div
              data-toggle="tooltip"
              data-placement="right"
              title=""
              data-original-title="Signout"
              className="block md:mb-5 hover:cursor-pointer"
            >
              {/* <LogoutIcon
                className={`w-5 md:w-full text-gray-600 hover:text-gray-800  font-light hover:scale-105`}
              /> */}
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export const SideNavItem: React.FC<{
  to: string;
  children?: React.ReactNode;
  className?: string;
}> = ({ to, children, className }) => {
  return (
    <li
      className={`active text-center w-full py-3 md:py-0 hover:bg-[#383944] md:hover:bg-inherit px-5 md:px-0`}
    >
      <NavLink
        to={to}
        data-toggle="tooltip"
        data-placement="right"
        title=""
        className={`flex md:hover:bg-[#383944] items-center w-auto md:mx-3 lg:mx-0 md:p-4 md:rounded-2xl lg:rounded-none lg:px-6 lg:py-4 ${className}`}
        data-original-title="Home"
      >
        <div className="flex w-full items-center md:justify-center lg:justify-start">
          {children}
        </div>
        <LeftArrowIcon className="w-5 md:hidden" />
      </NavLink>
    </li>
  );
};
export default SideNav;
