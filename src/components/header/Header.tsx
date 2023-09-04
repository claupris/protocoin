import Logo from "./../../public/Group1444.png";
import { Controller } from "../../controller/Controller";
import { FaWallet, FaArrowDown, FaBitcoin } from "react-icons/fa";
import "./Header.css";

const Header = () => {
  const user = Controller.getUser();
  return (
    <header
      style={{
        backgroundColor: "black",
        padding: "10px",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <div>
        <img
          src={Logo}
          alt="Logo"
          style={{ width: "250px", marginLeft: "20px", marginTop: "5%" }}
        />
      </div>
      <nav>
        <ul style={{ listStyleType: "none", padding: 2 }}>
          <li style={{ display: "inline", margin: "0 20px" }}>
            <a
              href="/dashboard"
              style={{ textDecoration: "none", color: "white", fontSize: "19px" }}
            >
              <FaBitcoin /> Dashboard
            </a>
          </li>
          <li style={{ display: "inline", margin: "0 20px" }}>
            <a href="/wallet" style={{ textDecoration: "none", color: "white", fontSize: "19px" }}>
              <FaWallet /> Carteira
            </a>
          </li>
          <li style={{ display: "inline", margin: "0 20px" }} role="menuitem">
            <a
              title="Sair"
              href="/"
              style={{ textDecoration: "none", color: "white", fontSize: "19px" }}
              onClick={Controller.logout}
            >
              {user.firstName} <FaArrowDown />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  ); //{/*<div className="custom-header"><img src={Logo} className="custom-logo" /></div>;*/}
};
export default Header;
