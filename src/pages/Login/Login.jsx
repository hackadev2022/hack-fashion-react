import React from "react";
import "./login-style.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function Login({ customerData, setCustomerData }) {
  let [loginEmail, setLoginEmail] = useState("");
  let [loginPassword, setLoginPassword] = useState("");
  let [update, setUpdate] = useState(false);

  const login = async () => {
    try {
      const resultado = await axios.post("http://localhost/login", {
        loginEmail,
        loginPassword,
      });
      setCustomerData(resultado.data);
      console.log(customerData);
      setUpdate(!update);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="login-container">
        <input
          className="in-text-pass"
          type="text"
          name="loginId"
          placeholder="exemplo@exemplo.com"
          value={loginEmail}
          onChange={(e) => setLoginEmail(e.target.value)}
        ></input>
        <div className="space"></div>
        <input
          className="in-text-pass"
          type="password"
          name="loginPassword"
          value={loginPassword}
          placeholder="SENHA"
          onChange={(e) => setLoginPassword(e.target.value)}
        ></input>
        <button
          className="space loginbtn"
          onClick={() => {
            login();
          }}
        >
          LOGIN
        </button>
        <br></br>
        <p>Não é cadastrado?</p>
        <Link className="link-style" to="/Cadastro">
          Cadastre-se
        </Link>
      </div>
    </>
  );
}
