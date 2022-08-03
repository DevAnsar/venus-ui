import React,{ useState } from "react";
import type {DataseedInterface} from "../../../types"
import SupplyTable from "./SupplyTable";

const SupplyMarket : React.FC<{dataseed : DataseedInterface[]}> = ({dataseed}) => {

  return (
    <div className="w-full bg-[#282931] flex flex-col rounded-3xl h-full">
      <div className="w-full flex justify-between items-center mb-6 px-5 pt-6">
        <span className="text-lg">Supply market</span>
      </div>

      <div className="w-full flex flex-col mb-4">
        <SupplyTable dataseed={dataseed} />
      </div>

    </div>
  );
};
export default SupplyMarket;
