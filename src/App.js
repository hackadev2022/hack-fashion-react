import React, { useState } from "react";
import "./App.css";
import { Home } from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Cadastro from "./pages/Cadastro/cadastro";
import { Produto } from "./pages/Produto/Produto";

import { Routes, Route } from "react-router-dom";
import { Carrinho } from "./pages/Carrinho/Carrinho";
import Checkout from "./pages/Checkout/Checkout";

function App() {
  let [produtosCarrinho, setProdutosCarrinho] = useState([]);
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>

        <Route path="/Login" element={<Login />}></Route>

        <Route path="/Cadastro" element={<Cadastro />}></Route>

        <Route
          path="/Produto/:itemID/:nome"
          element={
            <Produto
              produtosCarrinho={produtosCarrinho}
              setProdutosCarrinho={setProdutosCarrinho}
            />
          }
        ></Route>

        <Route
          path="/Carrinho"
          element={<Carrinho produtosCarrinho={produtosCarrinho} />}
        ></Route>
        <Route
          path="/Checkout" element={<Checkout />}></Route>
      </Routes>
    </>
  );
}

export default App;
