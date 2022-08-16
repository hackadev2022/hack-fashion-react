import React from "react";
import "./App.css";
import { Header } from "./components/Header/Header";
import { Home } from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Cadastro from "./pages/Cadastro/cadastro";
import { Footer } from "./components/Footer/Footer";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>

          <Route path="/Login" element={<Login />}></Route>

          <Route path="/Cadastro" element={<Cadastro />}></Route>
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
