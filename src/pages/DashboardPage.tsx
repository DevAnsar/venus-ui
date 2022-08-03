import React, { useEffect, useState } from "react";
import MyAccount from "./../components/Dashboard/MyAccount";
import MintRepay from "./../components/Dashboard/MintRepay";
import MiniBorrowSupplyMarket from "./../components/Dashboard/MiniBorrowSupplyMarket"
import BorrowSupplyMarket from "./../components/Dashboard/BorrowSupplyMarket";
import SupplyMarket from "../components/Dashboard/SupplySection/SupplyMarket";
import BorrowMarket from "../components/Dashboard/BarrowSection/BorrowMarket";
import {useWalletModal} from "./../contexts/walletModalContext"
import Api from "./../api";
import type {DataseedInterface} from "./../types"


const DashboardPage: React.FunctionComponent = () => {
  const [dataseed, setDataseed] = useState<DataseedInterface[]>([]);
  const { setShowWalletModal } = useWalletModal();

  useEffect(() => {
    const fetchKey =setInterval(() =>{
      getListDataseed();
    },5000);

    return ()=>clearInterval(fetchKey);
  }, []);

  const getListDataseed = async () => {
    // start sending request
    try {
      const res = await Api.list();
      if (res.ok) {
        const data = await res.json();
        // async call must dispatch action whether on success or failure
        // console.log(data.data.markets);
        setDataseed(data.data.markets);
      } else {
        throw new Error(`Your requests has some error`);
      }
    } catch (e) {
      throw new Error(`Your requests has some error`);
    }
  };

  return (
    <div className="flex justify-center flex-col  w-full">
      <div className="flex justify-between items-center mb-3 md:mb-6 lg:mb-9">
        <h1 className="text-md md:text-2xl font-bold">Dashboard</h1>
        <button
        onClick={() =>setShowWalletModal(true)}
          type="button"
          className="hidden md:block py-3 px-5  bg-indigo-500 hover:bg-indigo-600 focus:ring-indigo-500 text-white transition ease-in duration-200 text-center text-base shadow-md focus:outline-none rounded-lg"
        >
          Connect wallet
        </button>
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-5 md:gap-7 lg:gap-9 w-full">
        <div className="MyAccountSection col-span-1 ">
          <MyAccount />
        </div>
        <div className="pMintRepaySection col-span-1">
          <MintRepay />
        </div>
        
        {/* /create supply and borrow section for each device size/ */}
        <div className="pMintRepaySection col-span-1  md:hidden">
          <MiniBorrowSupplyMarket dataseed={dataseed} />
        </div>
        <div className="pMintRepaySection col-span-1 hidden md:block lg:hidden">
          <BorrowSupplyMarket dataseed={dataseed} />
        </div>
        <div className="MyAccountSection col-span-1 hidden lg:block">
          <SupplyMarket dataseed={dataseed} />
        </div>
        <div className="pMintRepaySection col-span-1 hidden lg:block">
          <BorrowMarket dataseed={dataseed} />
        </div>
        {/* // */}

      </div>
    </div>
  );
};

export default DashboardPage;
