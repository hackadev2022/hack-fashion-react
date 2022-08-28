import "./Produto.css";
import { useParams } from "react-router-dom";
import { produtos } from "../../assets/produtos/produtos";
import { ButtonProduct } from "../../components/Button-product/Button-product";

export const Produto = ({ produtosCarrinho, setProdutosCarrinho }) => {
  const params = useParams();
  const produto = produtos.filter(
    (produto) =>
      produto.id.includes(`${params.itemID}`) &&
      produto.name.includes(`${params.nome}`)
  );

  return (
    <>
      <section className="produto__container">
        <div className="produto__image-box">
        

        <img className="produto__image" src={produto[0].imgDirectory} alt={produto[0].name} />
        </div>
        <div>
        <h2 className="produto__title">{produto[0].name}</h2>  
        <h1>R$ {produto[0].price}, 00</h1>
        <ButtonProduct
          produto={produto[0]}
          produtosCarrinho={produtosCarrinho}
          setProdutosCarrinho={setProdutosCarrinho}
        
        />
        </div>
      </section>
    </>
  );
};
