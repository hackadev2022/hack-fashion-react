import React from "react";
import "./App.css";
import { Header } from "./components/Header/Header";
import { Banner } from "./components/Banner/Banner";
import Login from './components/Login-teste/Login';
import Cadastro from './components/pag-cadastro/cadastro'
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={
          <div>
          <Banner
              bannerTitle="Título do banner"
              bannerMainInfo="10% off"
              bannerInfo="Não perca essa oportunidade !"
              bannerDirectoryImg="banners/banner_ilustrativo3.png"
            />

            </div>
            }>

            </Route>
          <Route path="/Login" element={<Login />}></Route>
        </Routes>

        <Routes>
          
          <Route path="/Cadastro" element={<Cadastro />}></Route>

        </Routes>
      </BrowserRouter>








      {/* <Header />
      <Banner
        bannerTitle="Título do banner"
        bannerMainInfo="10% off"
        bannerInfo="Não perca essa oportunidade !"
        bannerDirectoryImg="banners/banner_ilustrativo3.png"
      /> */}
    </>
  );
}

export default App;
