import type { DataseedInterface } from "../../../types";
import { CoinIcons } from "./../../../assets/Coins";
import Switcher from "../../layouts/Switcher";

const SupplyTableRow = ({ data }: { data: DataseedInterface }) => {
  return (
    <tr className="text-slate-50 hover:bg-[#ffffff14] cursor-pointer h-14">
      <td className="px-5 py-3 text-sm">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            {CoinIcons(data.underlyingSymbol)}
          </div>
          <div className="ml-3">
            <p className=" whitespace-no-wrap" title={data.underlyingSymbol}>
              {data.underlyingSymbol}
            </p>
          </div>
        </div>
      </td>
      <td className="px-5 py-3 text-sm text-right">
        <p
          className="whitespace-no-wrap"
          title={`${Number(+data.supplyVenusApy + +data.supplyApy).toFixed(
            2
          )}%`}
        >
          {Number(+data.supplyVenusApy + +data.supplyApy).toFixed(2)}%
        </p>
      </td>
      <td
        className="px-5 py-3 text-sm text-right"
        title={`0 ${data.underlyingSymbol}`}
      >
        <p className="whitespace-no-wrap">0 {data.underlyingSymbol}</p>
      </td>
      <td className="px-5 py-3 text-sm text-right">
        <Switcher />
      </td>
    </tr>
  );
};

export const SupplyTableMiniRow = ({ data }: { data: DataseedInterface }) => {
  return (
    <div className="bg-[#282931] w-full flex flex-col gap-5 rounded-3xl p-5 divide-y divide-gray-700">
      <div>
        <span className="px-5 py-3 text-sm">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              {CoinIcons(data.underlyingSymbol)}
            </div>
            <div className="ml-3">
              <p className=" whitespace-no-wrap" title={data.underlyingSymbol}>
                {data.underlyingSymbol}
              </p>
            </div>
          </div>
        </span>
      </div>
      <div className="flex items-center">
        <span className="px-5 py-3 text-sm  w-1/3">
          <p className="whitespace-no-wrap text-sm text-gray-400 mb-3">APY</p>
          <p
            className="whitespace-no-wrap"
            title={`${Number(+data.supplyVenusApy + +data.supplyApy).toFixed(
              2
            )}%`}
          >
            {Number(+data.supplyVenusApy + +data.supplyApy).toFixed(2)}%
          </p>
        </span>
        <span
          className="px-5 py-3 text-sm  w-1/3"
          title={`0 ${data.underlyingSymbol}`}
        >
          <p className="whitespace-no-wrap text-sm text-gray-400 mb-3">
            Wallet
          </p>
          <p className="whitespace-no-wrap">0 {data.underlyingSymbol}</p>
        </span>
        <span className="px-5 py-3 text-sm  w-1/3">
          <p className="whitespace-no-wrap text-sm text-gray-400 mb-3">
            Collateral
          </p>
          <Switcher />
        </span>
      </div>
    </div>
  );
};
export default SupplyTableRow;
