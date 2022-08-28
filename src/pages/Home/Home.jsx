import "./Home.css";
import { Banner } from "../../components/Banner/Banner";
import { Produtos } from "../../components/Produtos/Produtos";
import { produtos } from "../../assets/produtos/produtos";
import { Header } from "../../components/Header/Header";
import { useState } from "react";

export const Home = () => {
  const produtosOffer = produtos.filter((produto) => produto.offer.isOffer);

  let [showOffersOnly, setShowOffersOnly] = useState(false);

  const handleClickBanner = () => {
    setShowOffersOnly(true);
  };

  return (
    <>
      <Header setShowOffersOnly={setShowOffersOnly} />
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
            {produtos.map((produto) => (
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
