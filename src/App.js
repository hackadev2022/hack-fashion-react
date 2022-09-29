import React, { useEffect, useState } from "react";
import "./App.css";
import { Home } from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Cadastro from "./pages/Cadastro/cadastro";
import { Produto } from "./pages/Produto/Produto";
import { ProdutosPage } from "./pages/ProdutosPage/ProdutosPage";
import { Routes, Route } from "react-router-dom";
import { Carrinho } from "./pages/Carrinho/Carrinho";
import Checkout from "./pages/Checkout/Checkout";
import Layout from "./components/Layout/Layout";

function App() {
  let [produtosCarrinho, setProdutosCarrinho] = useState([]);

  useEffect(() => {
    if (localStorage.customerData) {
      setCustomerData(JSON.parse(localStorage.customerData));
    }
    if (localStorage.produtosCarrinho) {
      setProdutosCarrinho(JSON.parse(localStorage.produtosCarrinho));
    }
  }, []);

  const [customerData, setCustomerData] = useState([
    {
      customer_id: "",
      name: "",
      phone: "",
      loged: false,
    },
  ]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout customerData={customerData} />}>
          <Route index element={<Home />}></Route>
          <Route path="/:type" element={<ProdutosPage />}></Route>
          <Route path="/:type/:type2" element={<ProdutosPage />}></Route>
          <Route
            path="/Login"
            element={
              <Login
                customerData={customerData}
                setCustomerData={setCustomerData}
              />
            }
          ></Route>
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
            path="/Checkout"
            element={
              <Checkout
                produtosCarrinho={produtosCarrinho}
                isLoged={customerData[0].loged}
                customer_id={customerData[0].customer_id}
              />
            }
          ></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
