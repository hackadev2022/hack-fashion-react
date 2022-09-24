import React from "react";
import "./login-style.css";
import { Link } from "react-router-dom";
import { useState } from "react";
// import { useRef } from "react";

export default function Login({ setIsLoged }) {
  let [loginId, setLoginId] = useState("");
  let [loginPassword, setLoginPassword] = useState("");

  // const login = () => {
  //   fetch(`http://localhost/customers/${loginId}`)
  //     .then((res) => res.json())
  //     .then((resultado) => {
  //       productSizeP.current = resultado[0].p;
  //       productSizeM.current = resultado[0].m;
  //       productSizeG.current = resultado[0].g;
  //       productSizeGG.current = resultado[0].gg;

  //       setUpdate(!update);
  //     });
  // };

  return (
    <>
      <div className="login-container">
        <input
          className="in-text-pass"
          type="text"
          name="loginId"
          placeholder="exemplo@exemplo.com"
          value={loginId}
          onChange={(e) => setLoginId(e.target.value)}
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
        <button className="space loginbtn">LOGIN</button>
        <br></br>
        <p>Não é cadastrado?</p>
        <Link className="link-style" to="/Cadastro">
          Cadastre-se
        </Link>
      </div>
    </>
  );
}
