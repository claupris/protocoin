import "./../form/Styles.css";

interface CenteredBoxProps {
  width?: string;
  height?: string;
  marginLeft?: string;
  marginRight?: string;
  backgroundColor?: string;
  border?: string;
  float?: string;
  borderRadius?: string;
  borderColor?: string;
  opacity?: number;
  marginTop?: string;
  children?: React.ReactNode;
}

const BoxWallet: React.FC<CenteredBoxProps> = ({
  width = "200px",
  height = "200px",
  marginLeft = "0px",
  marginRight = "auto",
  backgroundColor = "white",
  border = "10px",
  float = "left",
  borderRadius = "10px",
  borderColor = "#404040",
  opacity = 1,
  marginTop = "80px",
  children,
}) => {
  const boxStyle: React.CSSProperties = {
    width,
    height,
    marginLeft,
    backgroundColor,
    border,
    borderRadius,
    borderColor,
    opacity,
    marginRight,
    marginTop,
  };

  return (
    <div className="centered-box" style={boxStyle}>
      {children}
    </div>
  );
};
export default BoxWallet;
