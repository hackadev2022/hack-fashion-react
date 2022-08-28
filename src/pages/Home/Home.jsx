import "./Home.css";
import { Banner } from "../../components/Banner/Banner";
import { Produtos } from "../../components/Produtos/Produtos";
import { produtos } from "../../assets/produtos/produtos";
import { Header } from "../../components/Header/Header";
import { useState } from "react";

export const Home = () => {
  let [searchFilter, setSearchFilter] = useState("");
  let [showOffersOnly, setShowOffersOnly] = useState(false);
  const produtosFiltrados = produtos.filter(
    (produto) =>
      produto.name.includes(searchFilter) ||
      produto.color.includes(searchFilter) ||
      produto.type.includes(searchFilter) ||
      produto.trademark.includes(searchFilter)
  );
  const produtosOffer = produtos.filter((produto) => produto.offer.isOffer);

  const handleSearch = (search) => {
    setSearchFilter(formatSearch(search));
  };

  const handleClickBanner = () => {
    setShowOffersOnly(true);
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
      <Header searchFn={handleSearch} setShowOffersOnly={setShowOffersOnly} />
      <Banner
        bannerTitle="Título do banner"
        bannerMainInfo="Até 50% off"
        bannerInfo="Não perca essa oportunidade !"
        bannerDirectoryImg="banners/banner_ilustrativo3.png"
        fn={handleClickBanner}
      />
      <section className="section__produtos">
        {!showOffersOnly && (
          <>
            {produtosFiltrados.map((produto) => (
              <Produtos key={produto.id} produto={produto} />
            ))}
          </>
        )}
        {showOffersOnly && (
          <>
            {produtosOffer.map((produto) => (
              <Produtos key={produto.id} produto={produto} />
            ))}
          </>
        )}
      </section>
    </>
  );
};
