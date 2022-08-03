export interface DataseedInterface {
  underlyingSymbol: string;
  borrowApy: number;
  supplyApy: string;
  borrowVenusApy: string;
  supplyVenusApy: string;
  liquidity: string;
}

export interface WalletModalContextInterface {
  showWalletModal: boolean;
  setShowWalletModal: (state : boolean) => void;
}
