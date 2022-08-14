import React from 'react';
import './login-style.css';
import {BrowserRouter as Router, Switch, Route, Link, NavLink} from 'react-router-dom'




export default function Login() {
  return (
    <div className="login-container">
      <input className='in-text-pass' type="number" placeholder= "ADICIONE CPF OU CNPJ" maxLength={2}></input>
      <div className='space'></div>
      <input className='in-text-pass' type="password" placeholder= "SENHA" ></input>
      <button className='space loginbtn' >LOGIN</button>
      <br></br>
      <p>Não é cadastrado?</p><Link className='link-style' to='/Cadastro'>Cadastre-se</Link>
         
    </div>
  );
}