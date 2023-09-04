import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Box from "../components/form/Box";
import Logo from "../public/Group1444.png";
import LogoWhite from "../public/LogoWhite.png";
import Button from "../components/form/Button";
import "./Styles.css";
import { Controller } from "../controller/Controller";
import { USERNAME_REGEX } from "./Account";
import "react-toastify/dist/ReactToastify.css";
import { Alert, AlertTitle } from "@mui/material";

interface LoginFormProps {
  onSubmit: (username: string, password: string) => void;
}

export function Login() {
  let navigate = useNavigate();

  let isFailed = true;

  const handleLogin = (username: string, password: string) => {
    if (username && password) {
      const response = Controller.login(username, password);
      if (response) {
        navigate("/dashboard");
        isFailed = false;
        return response;
      } else {
        return false;
      }
    }
  };

  const isUsernameValid = (value: string) => {
    return USERNAME_REGEX.test(value);
  };

  const LoginForm: React.FC<LoginFormProps> = ({ onSubmit }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [usernameError, setUsernameError] = useState("");
    const [falha, setfalha] = useState("");

    const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setUsername(event.target.value);

      if (!isUsernameValid(event.target.value) && event.target.value != "") {
        setUsernameError(
          "O username deve conter apenas letras, números e caracteres especiais permitidos('.', '-' e '_')."
        );
      } else {
        setUsernameError("");
      }
    };

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setPassword(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent) => {
      if (isFailed) setfalha("Usuário ou senha incorretos,");
      event.preventDefault();
      onSubmit(username, password);
    };

    return (
      <form onSubmit={handleSubmit}>
        <Box width="500px" height="550px" borderRadius="40px">
          <div>
            <img src={Logo} alt="Logo" className="input-logo" />
            <input
              className="custom-input"
              type="username"
              value={username}
              onChange={handleUsernameChange}
              placeholder="Username"
              title="Username"
              required
            />
            {usernameError && (
              <span className="error-message">
                <br />
                {usernameError}
              </span>
            )}
            <br />
            <br />
            <input
              className="custom-input"
              type="password"
              value={password}
              onChange={handlePasswordChange}
              placeholder="Senha"
              title="Senha"
              required
            />
            <br />
            <br />
            <a href="" className="a-style">
              <Button width="405px" marginLeft="47px">
                LOGIN
              </Button>
            </a>
            <br />
            {falha && (
              <Alert severity="error">
                <AlertTitle>Erro</AlertTitle>
                {falha} <strong>tente novamente!</strong>
              </Alert>
            )}
            <br />
            <span className="custon-cadastrar">
              Ainda não tem conta?
              <a href="/account"> criar conta</a>
            </span>
          </div>
        </Box>
      </form>
    );
  };

  return (
    <div className="login-container">
      <br />
      <br />
      <LoginForm onSubmit={handleLogin} />
      <img src={LogoWhite} alt="Logo" className="logo-white" />
    </div>
  );
}
