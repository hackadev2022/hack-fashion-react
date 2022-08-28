import "./ProdutosPage.css";
import { Produtos } from "../../components/Produtos/Produtos";
import { produtos } from "../../assets/produtos/produtos";
import { Header } from "../../components/Header/Header";
import { useState } from "react";
import { useParams } from "react-router-dom";

export const ProdutosPage = () => {
  let [searchFilter, setSearchFilter] = useState("");
  let [showOffersOnly, setShowOffersOnly] = useState(false);

  const params = useParams();

  const produtosFiltrados = produtos.filter(
    (produto) =>
      produto.name.includes(params.type) ||
      produto.color.includes(params.type) ||
      produto.type.includes(params.type) ||
      produto.trademark.includes(params.type)
  );
  const produtosOffer = produtos.filter((produto) => produto.offer.isOffer);

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
      <Header searchFn={handleSearch} setShowOffersOnly={setShowOffersOnly} />
      <h1>Filtrando por : {params.type}</h1>
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
