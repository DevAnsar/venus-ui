import React, { useState } from "react";
import type { DataseedInterface } from "../../types";
import {SupplyTableMini} from "./SupplySection/SupplyTable";
import {BorrowTableMini} from "./BarrowSection/BarrowTable";

import { Tab } from "@headlessui/react";
import HintIcon from "../../assets/LayoutIcons/HintIcon";

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

const MiniBorrowSupplyMarket: React.FC<{ dataseed: DataseedInterface[] }> = ({
  dataseed,
}) => {
  return (
    <div className="flex flex-col mt-6">
      <Tab.Group>
        <div>
          <div className="w-full flex flex-col justify-between items-center mb-6">
            <span className="text-lg mb-4">Markets</span>
            <div className="flex items-center w-full">
              <Tab.List className="flex space-x-1 p-1 w-full">
                <Tab
                  className={({ selected }) =>
                    classNames(
                      "px-4 w-full rounded-lg py-4 text-sm font-medium leading-5 text-gray-400",
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
                      "px-4 w-full rounded-lg py-4 text-sm font-medium leading-5 text-gray-400",
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
        </div>

        <div className="w-full flex flex-col rounded-3xl py-5 min-h-full">
          <div className="w-full flex flex-col mb-9">
            <Tab.Panels className="mt-2">
              <Tab.Panel>
                <div className="flex flex-col">
                  <span className="text-xl  text-left mb-4">
                    Supply market
                  </span>
                  <SupplyTableMini dataseed={dataseed} />
                </div>
              </Tab.Panel>
              <Tab.Panel>
                <div className="flex flex-col">
                  <span className="text-xl text-left mb-4">
                    Borrow market
                  </span>
                  <BorrowTableMini dataseed={dataseed} />
                </div>
              </Tab.Panel>
            </Tab.Panels>
          </div>
        </div>
      </Tab.Group>
    </div>
  );
};
export default MiniBorrowSupplyMarket;
