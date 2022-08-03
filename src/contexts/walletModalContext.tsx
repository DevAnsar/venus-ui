import { createContext, useContext, useState } from "react";
import type { WalletModalContextInterface } from "./../types";

export const WalletModalContext = createContext<
  WalletModalContextInterface | undefined
>(undefined);

const WalletModalProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [showWalletModal, setShowWalletModal] = useState<boolean>(false);

  return (
    <WalletModalContext.Provider
      value={{ showWalletModal, setShowWalletModal }}
    >
      {children}
    </WalletModalContext.Provider>
  );
};

export const useWalletModal = () => {
  const context = useContext(WalletModalContext);
  if (context === undefined) {
    throw new Error("provide the WalletModalProvider on top of three");
  }

  return context;
};
export default WalletModalProvider;
