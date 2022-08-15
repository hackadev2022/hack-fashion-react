import React from "react";
import "./App.css";
import { Header } from "./components/Header/Header";
import { Banner } from "./components/Banner/Banner";
import Login from "./components/Login-teste/Login";
import Cadastro from "./components/pag-cadastro/cadastro";
import { Footer } from "./components/Footer/Footer";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Banner
                  bannerTitle="Título do banner"
                  bannerMainInfo="10% off"
                  bannerInfo="Não perca essa oportunidade !"
                  bannerDirectoryImg="banners/banner_ilustrativo3.png"
                />
              </>
            }
          ></Route>

          <Route path="/Login" element={<Login />}></Route>

          <Route path="/Cadastro" element={<Cadastro />}></Route>
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
