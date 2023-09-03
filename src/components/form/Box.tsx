import React from "react";
import "./Styles.css"; // Arquivo CSS para estilização

interface CenteredBoxProps {
  width?: string;
  height?: string;
  marginLeft?: string;
  marginRight?: string;
  borderRadius?: string;
  backgroundColor?: string;
  marginTop?: string;
  children?: React.ReactNode;
}

const Box: React.FC<CenteredBoxProps> = ({
  width = "200px",
  height = "200px",
  marginLeft = "auto",
  marginRight = "auto",
  borderRadius = "10px",
  backgroundColor = "black",
  marginTop = "0px",
  children,
}) => {
  const boxStyle: React.CSSProperties = {
    width,
    height,
    marginLeft,
    borderRadius,
    backgroundColor,
    marginRight,
    marginTop,
  };

  return (
    <div className="centered-box" style={boxStyle}>
      {children}
    </div>
  );
};

export default Box;
