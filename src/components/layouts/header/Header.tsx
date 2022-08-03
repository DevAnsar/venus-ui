import React from "react";
import MiniLogo from "./../../../assets/MiniLogo";
import { useWalletModal } from "./../../../contexts/walletModalContext";

const SideNav: React.FunctionComponent<{
  handleMenuToggle: () => void;
}> = ({ handleMenuToggle }) => {
  const { setShowWalletModal } = useWalletModal();

  return (
    <div className="py-4 w-full px-5">
      <div className="md:hidden flex justify-between items-center gap-8">
        <MiniLogo className="w-12" />
        <button
          onClick={() => setShowWalletModal(true)}
          type="button"
          className="w-full py-2 px-5 mx-5 bg-blue-500 hover:bg-indigo-600 focus:ring-indigo-500 text-white transition ease-in duration-200 text-center text-base shadow-md focus:outline-none rounded-lg"
        >
          Connect wallet
        </button>
        <div
          className="w-12 h-4 flex flex-col justify-between cursor-pointer"
          onClick={handleMenuToggle}
        >
          <span className="w-full h-0.5 rounded-sm bg-white"></span>
          <span className="w-full h-0.5 rounded-sm bg-white"></span>
          <span className="w-full h-0.5 rounded-sm bg-white"></span>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
