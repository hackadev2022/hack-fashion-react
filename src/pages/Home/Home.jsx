import { Banner } from "../../components/Banner/Banner";
import { Produtos } from "../../components/Produtos/Produtos";

export const Home = () => {
  return (
    <>
      <Banner
        bannerTitle="Título do banner"
        bannerMainInfo="10% off"
        bannerInfo="Não perca essa oportunidade !"
        bannerDirectoryImg="banners/banner_ilustrativo3.png"
      />
      <Produtos />
    </>
  );
};
