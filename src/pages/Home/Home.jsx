import "./Home.css";
import { Banner } from "../../components/Banner/Banner";
import { Produtos } from "../../components/Produtos/Produtos";
import { produtos } from "../../assets/produtos/produtos";
import { Header } from "../../components/Header/Header";
import { useState } from "react";

export const Home = () => {
  let [searchFilter, setSearchFilter] = useState("");
  const produtosFiltrados = produtos.filter(
    (produto) =>
      produto.name.includes(searchFilter) ||
      produto.color.includes(searchFilter) ||
      produto.type.includes(searchFilter) ||
      produto.trademark.includes(searchFilter)
  );

  const handleSearch = (search) => {
    setSearchFilter(formatSearch(search));
  };

  const formatSearch = (e) => {
    const formattedSearch = e
      .toLowerCase()
      .replace(/(?:^|\s)\S/g, function (a) {
        return a.toUpperCase();
      });
    return formattedSearch;
  };

  return (
    <>
      <Header searchFn={handleSearch} />
      <Banner
        bannerTitle="Título do banner"
        bannerMainInfo="10% off"
        bannerInfo="Não perca essa oportunidade !"
        bannerDirectoryImg="banners/banner_ilustrativo3.png"
      />
      <section className="section__produtos">
        {produtosFiltrados.map((produto) => (
          <Produtos key={produto.id} produto={produto} />
        ))}
      </section>
    </>
  );
};
