import "./Home.css";
import { Banner } from "../../components/Banner/Banner";
import { Produtos } from "../../components/Produtos/Produtos";
import { produtos } from "../../assets/produtos/produtos";

export const Home = () => {
  return (
    <>
      <Banner
        bannerTitle="Título do banner"
        bannerMainInfo="10% off"
        bannerInfo="Não perca essa oportunidade !"
        bannerDirectoryImg="banners/banner_ilustrativo3.png"
      />
      <section className="section__produtos">
        {produtos.map((produto) => (
          <Produtos key={produto.id} produto={produto} />
        ))}
      </section>
    </>
  );
};
