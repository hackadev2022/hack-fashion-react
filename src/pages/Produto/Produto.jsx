import "./Produto.css";
import { Header } from "../../components/Header/Header";
import { useParams } from "react-router-dom";
import { produtos } from "../../assets/produtos/produtos";
const Produto = () => {
    const params = useParams();
    const produto = produtos.filter((produto) =>
    produto.id.includes(`${params.itemID}`) && produto.name.includes(`${params.nome}`)
  );
  console.log(produto);
    return <>
    <Header/>
    <section>
        <h1>Estamos aqui</h1> 
    <img src= {produto[0].imgDirectory} alt={produto[0].name}/>
    <h1>R$ {produto[0].price}</h1>
    </section></>
}
export default Produto 

