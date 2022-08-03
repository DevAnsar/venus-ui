// import shib from "./shib.png";
// import tether from "./tether.png";
// import ethereum from "./ethereum-coins.png";
// import bitcoin from "./bitcoin.png";

import AAVE from "./AAVE";
import TRX from "./TRX";
import CAKE from "./CAKE";
import BCH from "./BCH";
import ADA from "./ADA";
import DOT from "./DOT";
import MATIC from "./MATIC";
import BETH from "./BETH";
import DAI from "./DAI";
import USDC from "./USDC";
import BNB from "./BNB";
import FIL from "./FIL";
import USDT from "./USDT";
import BUSD from "./BUSD";
import LTC from "./LTC";
import XRP from "./XRP";
import LINK from "./LINK";
import ETH from "./ETH";
import BTCB from "./BTCB";
import TUSD from "./TUSD";
import DOGE from "./DOGE";
import UST from "./UST";
import SXP from "./SXP";
import XVS from "./XVS";
import LUNA from "./LUNA";

export const CoinIcons = (name: string) => {
  switch (name) {
    case "TRX":
      return <TRX className="w-7 h-7 md:w-5 md:h-5 " />;

    case "Cake":
      return <CAKE className="w-7 h-7 md:w-5 md:h-5 " />;

    case "BCH":
      return <BCH className="w-7 h-7 md:w-5 md:h-5 " />;

    case "AAVE":
      return <AAVE className="w-7 h-7 md:w-5 md:h-5 " />;

    case "ADA":
      return <ADA className="w-7 h-7 md:w-5 md:h-5 " />;

    case "DOT":
      return <DOT className="w-7 h-7 md:w-5 md:h-5 " />;

    case "MATIC":
      return <MATIC className="w-7 h-7 md:w-5 md:h-5 " />;

    case "BETH":
      return <BETH className="w-7 h-7 md:w-5 md:h-5 " />;

    case "DAI":
      return <DAI className="w-7 h-7 md:w-5 md:h-5 " />;

    case "USDC":
      return <USDC className="w-7 h-7 md:w-5 md:h-5 " />;

    case "BNB":
      return <BNB className="w-7 h-7 md:w-5 md:h-5 " />;

    case "FIL":
      return <FIL className="w-7 h-7 md:w-5 md:h-5 " />;

    case "USDT":
      return <USDT className="w-7 h-7 md:w-5 md:h-5 " />;

    case "BUSD":
      return <BUSD className="w-7 h-7 md:w-5 md:h-5 " />;

    case "LTC":
      return <LTC className="w-7 h-7 md:w-5 md:h-5 " />;

    case "XRP":
      return <XRP className="w-7 h-7 md:w-5 md:h-5 " />;

    case "LINK":
      return <LINK className="w-7 h-7 md:w-5 md:h-5 " />;

    case "ETH":
      return <ETH className="w-7 h-7 md:w-5 md:h-5 " />;

    case "DOGE":
      return <DOGE className="w-7 h-7 md:w-5 md:h-5 " />;

    case "BTCB":
      return <BTCB className="w-7 h-7 md:w-5 md:h-5 " />;

    case "TUSD":
      return <TUSD className="w-7 h-7 md:w-5 md:h-5 " />;

    case "UST":
      return <UST className="w-7 h-7 md:w-5 md:h-5 " />;

    case "SXP":
      return <SXP className="w-7 h-7 md:w-5 md:h-5 " />;

    case "XVS":
      return <XVS className="w-7 h-7 md:w-5 md:h-5 " />;

    case "LUNA":
      return <LUNA className="w-7 h-7 md:w-5 md:h-5 " />;

    default:
      return undefined;
  }
};
