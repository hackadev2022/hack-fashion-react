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

  return (
    <>
      <h1>Filtrando por : {params.type}</h1>
      <section className="section__produtos">
        {produtosFiltrados.map((produto, key) => (
          <Produtos key={key} produto={produto} />
        ))}
      </section>
    </>
  );
};
