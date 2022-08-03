import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { useWalletModal } from "./../../contexts/walletModalContext";
import {
  MetaMask,
  Coinbase,
  Trust,
  WalletConnect,
  BinanceChain,
  Brave,
  Infinity,
  BitKeep,
  Ledger,
} from "./../../assets/Wallets";

const WalletConnectModal: React.FC = () => {
  const { showWalletModal, setShowWalletModal } = useWalletModal();
  return (
    <Transition appear show={showWalletModal} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        onClose={() => setShowWalletModal(false)}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-60" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-lg transform overflow-hidden rounded-2xl bg-[#282931] text-slate-50 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 w-full text-center py-6 border-b border-gray-700"
                >
                  Connect a wallet
                </Dialog.Title>
                <div className="mt-2 px-6 flex flex-col py-6">
                  <div className="w-full grid grid-cols-4 gap-4">
                    <button
                      type="button"
                      className="text-center hover:bg-[#383944] rounded-lg p-2"
                    >
                      <MetaMask className="mt-0 mb-1 mx-auto  w-12" />
                      <div className="text-xs">MetaMask</div>
                    </button>

                    <button
                      type="button"
                      className="text-center hover:bg-[#383944] rounded-lg p-2"
                    >
                      <Coinbase className="mt-0 mb-1 mx-auto w-12" />
                      <div className="text-xs">Coinbase Wallet</div>
                    </button>

                    <button
                      type="button"
                      className="text-center hover:bg-[#383944] rounded-lg p-2"
                    >
                      <Trust className="mt-0 mb-1 mx-auto  w-12" />
                      <div className="text-xs">Trust Wallet</div>
                    </button>

                    <button
                      type="button"
                      className="text-center hover:bg-[#383944] rounded-lg p-2"
                    >
                      <WalletConnect className="mt-0 mb-1 mx-auto  w-12" />
                      <div className="text-xs">WalletConnect</div>
                    </button>

                    <button
                      type="button"
                      className="text-center hover:bg-[#383944] rounded-lg p-2"
                    >
                      <BinanceChain className="mt-0 mb-1 mx-auto  w-12" />
                      <div className="text-xs">Binance Chain Wallet</div>
                    </button>

                    <button
                      type="button"
                      className="text-center hover:bg-[#383944] rounded-lg p-2"
                    >
                      <Brave className="mt-0 mb-1 mx-auto  w-12" />
                      <div className="text-xs">Brave Wallet</div>
                    </button>

                    <button
                      type="button"
                      className="text-center hover:bg-[#383944] rounded-lg p-2"
                    >
                      <Infinity className="mt-0 mb-1 mx-auto  w-12" />
                      <div className="text-xs">Infinity Wallet</div>
                    </button>

                    <button
                      type="button"
                      className="text-center hover:bg-[#383944] rounded-lg p-2"
                    >
                      <BitKeep className="mt-0 mb-1 mx-auto  w-12" />
                      <div className="text-xs">BitKeep</div>
                    </button>

                    <button
                      type="button"
                      className="text-center hover:bg-[#383944] rounded-lg p-2"
                    >
                      <Ledger className="mt-0 mb-1 mx-auto  w-12" />
                      <div className="text-xs">Ledger</div>
                    </button>
                  </div>
                  <div className="py-6 text-center">
                    <span className="text-sm">
                      By connecting a wallet, you agree to Venus'{" "}
                      <a className="text-blue-500" href="/">
                        Terms of Service
                      </a>
                    </span>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};
export default WalletConnectModal;
