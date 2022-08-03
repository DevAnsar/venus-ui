import { useState } from "react";
import HintIcon from "../../assets/LayoutIcons/HintIcon";
import ShieldIcon from "../../assets/LayoutIcons/ShieldIcon";

import Switcher from "../layouts/Switcher";

const MyAccount = () => {
  const [enabled, setEnabled] = useState<boolean>(true);
  
  return (
    <div className="w-full bg-[#282931] flex flex-col rounded-3xl p-5">
      <div className="w-full flex justify-between items-center mb-6">
        <span className="text-lg">My account</span>
        <div className="flex items-center">
          <HintIcon className="w-4 h-4 text-slate-400 hover:cursor-help" />
          <span className="text-base mx-2">APY with XVS</span>
          <Switcher enabled={enabled} setEnabled={setEnabled} />
        </div>
      </div>

      <div className="w-full flex flex-col mb-4">
        <div className="flex items-center gap-3 mb-1">
          <span className="text-base text-slate-400">Net APY</span>
          <HintIcon className="w-4 h-4 text-slate-400 hover:cursor-help" />
        </div>
        <div className="flex items-center gap-3">
          <span className="text-4xl text-emerald-500 font-bold">0%</span>
        </div>
      </div>

      <div className="w-full flex flex-col items-start md:flex-row md:divide-x divide-slate-600 mb-6 gap-y-1">
        <div className="w-full flex justify-between items-center md:flex-col md:items-start">
          <span className="text-sm md:text-base text-slate-400">
            Daily earnings
          </span>
          <span className="text-base md:text-lg">$0.00</span>
        </div>

        <div className="w-full flex justify-between items-center md:flex-col md:items-start md:px-9">
          <span className="text-sm md:text-base text-slate-400">
            Supply balance
          </span>
          <span className="text-base md:text-lg">$0.00</span>
        </div>

        <div className="w-full flex justify-between items-center md:flex-col md:items-start md:pl-9">
          <span className="text-sm md:text-base text-slate-400">
            Borrow balance
          </span>
          <span className="text-base md:text-lg">$0.00</span>
        </div>
      </div>

      <div className="w-full flex flex-col mb-4">
        <div className="w-full flex justify-between mb-2">
          <div className="flex items-center gap-1">
            <span className="text-sm md:text-base text-slate-400">
              Borrow limit used:
            </span>
            <span className="text-base md:text-lg">0%</span>
            <HintIcon className="w-4 h-4 text-slate-400 hover:cursor-help" />
          </div>
          <div className="flex items-center gap-1">
            <span className="text-sm md:text-base text-slate-400">Limit:</span>
            <span className="text-base md:text-lg">$0.00</span>
          </div>
        </div>

        <div className="flex w-full mb-4">
            <span className="w-full h-2 relative rounded-md bg-[#1f2028]">
                <span className="w-1 h-2 bg-[#e93d44] rounded-sm absolute top-0 left-[80%]"></span>
            </span>
        </div>

        <div className="w-full flex justify-end">
          <div className="flex items-center gap-1">
            <ShieldIcon className="w-4 h-4" />
            <span className="text-sm md:text-base text-slate-400">
              Your safe limit:
            </span>
            <span className="text-base md:text-lg">$0.00</span>
            <HintIcon className="w-4 h-4 text-slate-400 hover:cursor-help" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default MyAccount;
