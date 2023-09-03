import React from "react";
import Header from "../components/header/Header";
import "./Styles.css";
import { Controller } from "../controller/Controller";
import { useNavigate } from "react-router-dom";

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
      </div>
    );
  };

  handleAutentication();
  return <Wallet></Wallet>;
}
