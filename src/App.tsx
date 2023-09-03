import React from "react";
import logo from "./logo.svg";
import { Login } from "./pages/Login";
import { Account } from "./pages/Account";
import { Dashboard } from "./pages/Dashboard";
import { Wallet } from "./pages/wallet";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";

function Root() {
  return (
    <Routes>
      <Route path="/account" element={Account()} />
      <Route path="/dashboard" element={Dashboard()} />
      <Route path="/wallet" element={Wallet()} />

      <Route path="/" element={Login()} />

      <Route path="/:id" element={<Navigate to="/" />} />
    </Routes>
  );
}
function App() {
  return (
    <div className="App">
      <div className="App-header">
        <Router>
          <Root />
        </Router>
      </div>
    </div>
  );
}

export default App;
