import type { DataseedInterface } from "../../../types";
import BarrowTableRow,{BorrowTableMiniRow} from "./BorrowTableRow";

const BarrowTable : React.FC<{ dataseed: DataseedInterface[] }> = ({ dataseed }) => {
  return (
    <table className="min-w-full leading-normal">
      <thead>
        <tr className="text-slate-400">
          <th scope="col" className="px-5 py-3 text-left text-sm font-normal">
            Asset
          </th>
          <th scope="col" className="px-5 py-3 text-right text-sm font-normal">
            APY
          </th>
          <th scope="col" className="px-5 py-3 text-right text-sm font-normal">
            Wallet
          </th>
          <th scope="col" className="px-5 py-3 text-right text-sm font-normal">
            Liquidity
          </th>
        </tr>
      </thead>
      <tbody>
        {dataseed.map((data: DataseedInterface, idx: number) => (
          <BarrowTableRow key={idx} data={data} />
        ))}
      </tbody>
    </table>
  );
};

export const BorrowTableMini : React.FC<{ dataseed: DataseedInterface[] }> = ({
  dataseed,
}) => {
  return(
    <div className="w-full flex flex-col gap-5">
      {
        dataseed.map((data,idx)=><BorrowTableMiniRow key={`BorrowTableMiniRow${idx}`} data={data} />)
      }
    </div>
  );
};

export default BarrowTable;
