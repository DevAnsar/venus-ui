import GithubIcon from "../../assets/LayoutIcons/GithubIcon";
import XVS from "../../assets/SideBarImages/XVS";
import TwitterIcon from "../../assets/LayoutIcons/TwitterIcon";

const Footer = () => {
  return (
    <div className="w-full bg-[#1f2028] py-3 px-5 md:px-7 lg:px-9 flex justify-between md:justify-end items-center fixed right-0 bottom-0">
      <span className="flex items-center gap-1">
        <p className="whitespace-no-wrap text-sm text-gray-400">
          Latest Block:
        </p>
        <p className="whitespace-no-wrap">{Number(20097024)}</p>
      </span>
      <div className="flex items-center gap-3 ml-3">
        <a
          href="https://bscscan.com/address/0xcF6BB5389c92Bdda8a3747Ddb454cB7a64626C63"
          className="p-1.5 rounded-md bg-[#282931] hover:bg-indigo-500 transition ease-in duration-200 cursor-pointer"
        >
          <XVS className="w-3.5 h-3.5 text-white " />
        </a>


        <a
          href="https://twitter.com/VenusProtocol"
          className="p-1.5 rounded-md bg-[#282931] hover:bg-indigo-500 transition ease-in duration-200 cursor-pointer"
        >
          <TwitterIcon className="w-3.5 h-3.5 text-white " />
        </a>

        <a
          href="https://github.com/"
          className="p-1.5 rounded-md bg-[#282931] hover:bg-indigo-500 transition ease-in duration-200 cursor-pointer"
        >
          <GithubIcon className="w-3.5 h-3.5 text-white " />
        </a>
      </div>
    </div>
  );
};
export default Footer;
