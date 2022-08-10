import React from "react";
import "./App.css";
import { Header } from "./components/Header/Header";
import { Banner } from "./components/Banner/Banner";

function App() {
  return (
    <>
      <Header />
      <Banner
        bannerTitle="Título do banner"
        bannerMainInfo="10% off"
        bannerInfo="Não perca essa oportunidade !"
        bannerDirectoryImg="banners/banner_ilustrativo3.png"
      />
    </>
  );
}

export default App;
