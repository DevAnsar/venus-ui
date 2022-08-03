import BarrowTable from "./BarrowTable";
import type { DataseedInterface } from "../../../types";

const BorrowMarket: React.FC<{ dataseed: DataseedInterface[] }> = ({
  dataseed,
}) => {
  return ( 
    <div className="w-full bg-[#282931] flex flex-col rounded-3xl h-full">
      <div className="w-full flex justify-between items-center mb-6  px-5 pt-6">
        <span className="text-lg">Borrow market</span>
      </div>

      <div className="w-full flex flex-col mb-4">
        <BarrowTable dataseed={dataseed} />
      </div>
    </div>
  );
};

export default BorrowMarket;
