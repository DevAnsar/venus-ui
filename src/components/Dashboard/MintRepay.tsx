import { useState } from "react";
import { Tab } from "@headlessui/react";
import HintIcon from "../../assets/LayoutIcons/HintIcon";

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

const MintRepay = () => {
  return (
    <div className="w-full bg-[#282931] flex flex-col rounded-3xl p-5 min-h-full">
      <Tab.Group>
        <div className="w-full flex justify-between items-center mb-6">
          <span className="text-lg">Mint/Repay VAI</span>
          <div className="flex items-center">
            <Tab.List className="flex space-x-1 p-1">
              <Tab
                className={({ selected }) =>
                  classNames(
                    "px-4 rounded-lg py-3 text-sm font-medium leading-5 text-gray-400",
                    " focus:outline-none",
                    selected ? "bg-[#383944]" : "hover:bg-white/[0.12]"
                  )
                }
              >
                Mint VAI
              </Tab>

              <Tab
                className={({ selected }) =>
                  classNames(
                    "px-4 rounded-lg py-3 text-sm font-medium leading-5 text-gray-400",
                    " focus:outline-none",
                    selected ? "bg-[#383944]" : "hover:bg-white/[0.12]"
                  )
                }
              >
                Repay VAI
              </Tab>
            </Tab.List>
          </div>
        </div>

        <div className="w-full flex flex-col mb-9">
          <Tab.Panels className="mt-2">
            <Tab.Panel>
              <div className="w-full px-6 py-5 rounded-xl border border-[#383944] bg-[#38394433] flex items-center gap-2">
                <HintIcon className="w-4 h-4 text-blue-500 hover:cursor-help" />
                <span className="text-sm text-slate-200">
                  Please connect your wallet to mint VAI
                </span>
              </div>
            </Tab.Panel>
            <Tab.Panel>
              <div className="w-full px-6 py-5 rounded-xl border border-[#383944] bg-[#38394433] flex items-center gap-2">
                <HintIcon className="w-4 h-4 text-blue-500 hover:cursor-help" />
                <span className="text-sm text-slate-200">
                  Please connect your wallet to repay VAI
                </span>
              </div>
            </Tab.Panel>
          </Tab.Panels>
        </div>

        <div className="w-full flex flex-col mb-4">
          <button className="w-full px-6 py-3 transition ease-in duration-200 rounded-lg hover:bg-blue-500 hover:text-white border border-blue-600 focus:outline-none">
            Connect wallet
          </button>
        </div>
      </Tab.Group>
    </div>
  );
};
export default MintRepay;
