import "./ProdutosPage.css";
import { Produtos } from "../../components/Produtos/Produtos";
import { produtos } from "../../assets/produtos/produtos";
import { useParams } from "react-router-dom";

export const ProdutosPage = () => {
  const params = useParams();

  const produtosFiltrados = produtos.filter(
    (produto) =>
      produto.name.includes(params.type) ||
      produto.color.includes(params.type) ||
      produto.type.includes(params.type) ||
      produto.trademark.includes(params.type)
  );

  const produtosFiltradosSlider = produtos.filter(
    (produto) =>
      produto.type.includes(params.type) && produto.type.includes(params.type2)
  );

  return (
    <>
      <h1>
        Filtrando por :{" "}
        {produtosFiltradosSlider.length === 0 && <>{params.type}</>}
        {produtosFiltradosSlider.length > 0 && (
          <>
            {params.type} / {params.type2}
          </>
        )}
      </h1>
      <section className="section__produtos">
        {produtosFiltradosSlider.length === 0 && (
          <>
            {produtosFiltrados.map((produto, key) => (
              <Produtos key={key} produto={produto} />
            ))}
          </>
        )}
        {produtosFiltradosSlider.length > 0 && (
          <>
            {produtosFiltradosSlider.map((produto, key) => (
              <Produtos key={key} produto={produto} />
            ))}
          </>
        )}
      </section>
    </>
  );
};
