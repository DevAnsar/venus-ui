import React, { useState } from "react";
import type { DataseedInterface } from "../../types";
import SupplyTable from "./SupplySection/SupplyTable";
import BorrowTable from "./BarrowSection/BarrowTable";

import { Tab } from "@headlessui/react";
import HintIcon from "../../assets/LayoutIcons/HintIcon";

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

const BorrowSupplyMarket: React.FC<{ dataseed: DataseedInterface[] }> = ({
  dataseed,
}) => {
  return (
    <div className="w-full bg-[#282931] flex flex-col rounded-3xl py-5 min-h-full">
      <Tab.Group>
        <div className="w-full flex justify-between items-center mb-6 px-5">
          <span className="text-lg">Supply/Borrow market</span>
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
                Supply
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
                Borrow
              </Tab>
            </Tab.List>
          </div>
        </div>

        <div className="w-full flex flex-col mb-9">
          <Tab.Panels className="mt-2">
            <Tab.Panel>
              <div className="flex flex-col">
                <span className="text-md  text-left mb-4 px-5">Supply market</span>
                <SupplyTable dataseed={dataseed} />
              </div>
            </Tab.Panel>
            <Tab.Panel>
              <div className="flex flex-col">
                <span className="text-md text-left mb-4 px-5">Borrow market</span>
                <BorrowTable dataseed={dataseed} />
              </div>
            </Tab.Panel>
          </Tab.Panels>
        </div>
      </Tab.Group>
    </div>
  );
};
export default BorrowSupplyMarket;
