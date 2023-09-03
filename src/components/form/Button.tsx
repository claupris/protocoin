import React from "react";
import "./Styles.css"; // Arquivo CSS para estilização
import { type } from "os";

interface CenteredButtonProps {
  width?: string;
  height?: string;
  borderRadius?: string;
  marginLeft?: string;
  children?: React.ReactNode;
  onClick?: () => void;
}

const Button: React.FC<CenteredButtonProps> = ({
  width = "200px",
  height = "50px",
  borderRadius = "5px",
  marginLeft = "50px",
  onClick = "toast",
  children,
}) => {
  const ButtonStyle: React.CSSProperties = {
    width,
    height,
    borderRadius,
    marginLeft,
  };

  return (
    <button className="custom-button" style={ButtonStyle} type="submit">
      <span className="custom-button-text">
        <b>{children}</b>
      </span>
    </button>
  );
};
export default Button;
