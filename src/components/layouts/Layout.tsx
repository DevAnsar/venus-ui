import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import SideNav from "./sidenav/SideNav";
import Header from "./header/Header";
import Footer from "./Footer";
import WalletConnectModal from "./WalletConnectModal";
import "./LayoutStyles.css";
// import { useNavigate, useLocation } from "react-router-dom";

const Layout: React.FC = () => {
  const [showSidenav, setShowSidenav] = useState<boolean>(false);

  return (
    <div className={`main-wrapper font-spartan overflow-hidden relative z-10`}>

      <WalletConnectModal/>
      <Header handleMenuToggle={() => setShowSidenav((state) => !state)}/>
      <SideNav showMenu={showSidenav} />

      <div
        className={`content-body ml-0 md:ml-20 lg:ml-48 px-5 md:px-7 lg:px-9 pb-14 lg:pb-10 `}
      >
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
