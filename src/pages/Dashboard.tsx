import React from "react";
import Box from "../components/form/Box";
import TableDash from "../components/table/Table";
import Header from "../components/header/Header";
import "./Styles.css";
import { Controller } from "../controller/Controller";
import { useNavigate } from "react-router-dom";

interface DashboardProps {}

const data = [
  { column1: "Valor 1", column2: "Valor 2", column3: "Valor 3" },
  { column1: "Valor 4", column2: "Valor 5", column3: "Valor 6" },
];

export function Dashboard() {
  const Dash: React.FC = () => {
    return (
      <div className="custom-dash">
        <Header></Header>
        <TableDash></TableDash>
      </div>
    );
  };

  return <Dash></Dash>;
}
