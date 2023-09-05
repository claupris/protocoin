import React, { useState } from "react";
import Box from "../components/form/Box";
import "./Styles.css";
import Logo from "../public/Group1444.png";
import LogoWhite from "../public/LogoWhite.png";
import Button from "../components/form/Button";
import { Controller } from "../controller/Controller";
import { useNavigate } from "react-router-dom";

interface AccountFormProps {
  onSubmit: (
    firstName: string,
    lastName: string,
    email: string,
    username: string,
    password: string
  ) => void;
}

export const EMAIL_REGEX =
  /^([a-z]){1,}([a-z0-9._-]){1,}([@]){1}([a-z]){2,}([.]){1}([a-z]){2,}([.]?){1}([a-z]?){2,}$/i;
export const USERNAME_REGEX = /^[a-zA-Z0-9_.-]*$/;

export function Account() {
  let navigate = useNavigate();

  const handleAccount = (
    firstName: string,
    lastName: string,
    email: string,
    username: string,
    password: string
  ) => {
    const User = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      username: username,
      password: password,
      transactions: [],
    };

    const resp = Controller.cadastrar(User);
    if (resp === true) {
      navigate("/");
      alert("usuário cadastrado!");
    } else {
      alert(resp);
    }
  };

  const isEmailValid = (value: string) => {
    return EMAIL_REGEX.test(value);
  };

  const isUsernameValid = (value: string) => {
    return USERNAME_REGEX.test(value);
  };

  const AccountForm: React.FC<AccountFormProps> = ({ onSubmit }) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState("");
    const [usernameError, setUsernameError] = useState("");

    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setFirstName(event.target.value);
    };
    const handleLastnameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setLastName(event.target.value);
    };
    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setEmail(event.target.value);

      if (!isEmailValid(event.target.value) && event.target.value != "") {
        setEmailError("Digite um endereço de e-mail válido.");
      } else {
        setEmailError("");
      }
    };

    const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setUsername(event.target.value);

      if (!isUsernameValid(event.target.value) && event.target.value != "") {
        setUsernameError("Somente letras, números, '.', '_' e '-'");
      } else {
        setUsernameError("");
      }
    };

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setPassword(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent) => {
      event.preventDefault();
      if (email.match(EMAIL_REGEX) && username.match(USERNAME_REGEX)) {
        onSubmit(firstName, lastName, email, username, password);
      } else {
        return;
      }
    };

    return (
      <form onSubmit={handleSubmit}>
        <Box width="500px" height="800px" borderRadius="40px">
          <div>
            <img src={Logo} alt="Logo" className="input-logo" />
            <input
              className="custom-input"
              type="text"
              value={firstName}
              onChange={handleNameChange}
              placeholder="Nome"
              title="Nome"
              required
            />
            <br />
            <br />
            <input
              className="custom-input"
              type="text"
              value={lastName}
              onChange={handleLastnameChange}
              placeholder="Sobrenome"
              title="Sobrenome"
              required
            />
            <br />
            <br />
            <input
              className="custom-input"
              type="text"
              value={email}
              onChange={handleEmailChange}
              placeholder="email"
              title="Email"
              required
            />
            {emailError && (
              <span className="error-message">
                <br />
                {emailError}
              </span>
            )}
            <br />
            <br />
            <input
              className="custom-input"
              type="text"
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
              minLength={6}
              required
            />
            <br />
            <br />
            <Button width="405px" marginLeft="47px">
              CADASTRAR
            </Button>
            <span className="custon-cadastrar">
              Já possui conta?
              <a href="/"> Entrar</a>
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
      <AccountForm onSubmit={handleAccount} />
      <img src={LogoWhite} alt="Logo" className="logo-white" />
    </div>
  );
}
