import React from "react";
import "./Styles.css"; // Arquivo CSS para estilização

interface InputProps {
  value?: string;
  placeholder?: string;
  onChange: (newValue: string) => void;
  icon?: React.ReactNode; // Ícone que pode ser passado como prop
}

const Input: React.FC<InputProps> = ({ value, placeholder, onChange, icon }) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <div className="custom-input-container">
      <input
        type="text"
        value={value}
        onChange={handleInputChange}
        className="custom-input"
        placeholder={placeholder}
      />
      {icon && <div className="custom-input-icon">{icon}</div>}
    </div>
  );
};

export default Input;
