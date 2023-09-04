import React from "react";
import Header from "../components/header/Header";
import "./Styles.css";
import { Controller } from "../controller/Controller";
import { useNavigate } from "react-router-dom";
import BoxWallet from "../components/wallet/BoxWallet";

interface WalletProps {}

export function Wallet() {
  let navigate = useNavigate();

  const handleAutentication = () => {
    const isAutenticate = Controller.autenticado();
    if (!isAutenticate) {
      navigate("/");
    }
  };

  const Wallet: React.FC = () => {
    return (
      <div className="custom-dash">
        <Header></Header>
        <BoxWallet
          width="900px"
          backgroundColor="#131313"
          marginLeft="30px"
          height="400px"
        ></BoxWallet>
        <div></div>
      </div>
    );
  };

  handleAutentication();
  return <Wallet></Wallet>;
}
