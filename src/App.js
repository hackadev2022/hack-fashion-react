import React from "react";
import "./App.css";
import { Home } from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Cadastro from "./pages/Cadastro/cadastro";
import Produto from "./pages/Produto/Produto";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>

        <Route path="/Login" element={<Login />}></Route>

        <Route path="/Cadastro" element={<Cadastro />}></Route>

        <Route path="/Produto/:itemID/:nome" element={<Produto />}></Route>
      </Routes>
    </>
  );
}

export default App;
