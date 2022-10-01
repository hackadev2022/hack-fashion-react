import "./style.css";
import { Link } from "react-router-dom";
import { Button } from "../../components/Button/Button";
import { useState } from "react";
import axios from 'axios';
import useEstados from "./Hooks/useEstados";
import useCidades from "./Hooks/useCidades";


const url = 'http://localhost:80/customer'

export default function Cadastro() {
  const  estados = useEstados()
  const [selectedEstados, setSelectedEstados] = useState('')
  const  cidades = useCidades({uf: selectedEstados})

  const [ nome, setNome] = useState(undefined)
  const [ email, setEmail] = useState(undefined)
  const [ telefone, setTelefone] = useState(undefined)
  const [ senha, setSenha] = useState(undefined)

  const [ cep, setCep] = useState(undefined)
  const [ endereço, setEndereço] = useState(undefined)
  const [ numero, setNumero] = useState(undefined)
  const [ complemento, setComplemento] = useState(undefined)
  const [ referencia, setReferencia] = useState(undefined)
  const [ bairro, setBairro] = useState(undefined)



  const hendleSubmit = async () =>{
    try {

      //let status;

          if(telefone === undefined){
                 await axios.post(url, {nome, email, senha, cep, endereço, numero,
                  complemento, referencia, bairro})
          }else{
                 await axios.post(url, {nome, email, senha, telefone, cep, endereço, numero,
                  complemento, referencia, bairro})
          }
          //console.log(status)
         
    } catch (error) {
       console.log(error)
    }
}

const handleEstadosUpdate = (event) => {
  setSelectedEstados(event.target.value)
}

  return (
    <div>
      <div>
        <div className="text-container-header">
          <div className="text-conta">
            <h1>CRIAR CONTA</h1>
          </div>
          <div className="text-align-style">
            <p>
              Já possui uma conta ? Clique aqui para fazer{" "}
              <Link className="style-login-btn" to="/Login">
                Login
              </Link>
            </p>
          </div>
        </div>

        <div className="cadastro-container">
          <div className="header-text-container"></div>

          <div className="area-cadastro">
            <h1>Dados cadastrais</h1>
            <label for="name">Nome</label>
            <input
              type="text"
              name="name"
              id="name"
              title="Este campo é obrigátorio"
              placeholder="Insira seu nome completo"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              
            ></input>

            <label for="email">Email</label>
            <input
              type="email"
              name="email"
              id="name"
              title="Este campo é obrigátorio"
              placeholder="Insira seu email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              
            ></input>

            <label for="Celular">Celular</label>
            <input
              type="number"
              name="Celular"
              id="name"
              title="Este campo é obrigátorio"
              placeholder="Insira seu celular"
              value={telefone}
              onChange={(e) => setTelefone(e.target.value)}
              
            ></input>

            <label for="fixo">Senha</label>
            <input
              type="password"
              name="senha"
              id="name"
              title="Este campo é obrigátorio"
              placeholder="Insira seu Telefone Fixo"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              
            ></input>

          </div>

          <div className="area-cadastro-endereco">

            <h1>Endereço</h1>

            <label for="cep">CEP</label>
            <input
              type="number"
              name="cep"
              id="name"
              title="Este campo é obrigátorio"
              placeholder="Insira seu CEP"
              value={cep}
              onChange={(e) => setCep(e.target.value)}
              
            ></input>

            <label for="endereço">Endereço</label>
            <input
              type="text"
              name="endereço"
              id="name"
              title="Este campo é obrigátorio"
              placeholder="Insira seu Endereço"
              value={endereço}
              onChange={(e) => setEndereço(e.target.value)}
              
            ></input>

            <label for="Número">Número</label>

            <input
              type="number"
              name="Número"
              id="name"
              title="Este campo é obrigátorio"
              placeholder="Numero Da Casa"
              value={numero}
              onChange={(e) => setNumero(e.target.value)}
              
            ></input>

            <label for="Complemento">Complemento</label>
            <input
              type="text"
              name="Complemento"
              id="name"
              title="Este campo é obrigátorio"
              placeholder="Complemento"
              value={complemento}
              onChange={(e) => setComplemento(e.target.value)}
              
            ></input>

            <label for="Rêferencia">Rêferencia </label>
            <input
              type="Rêferencia "
              name="Rêferencia"
              id="name"
              title="Este campo é obrigátorio"
              placeholder="Insira uma referencia"
              value={referencia}
              onChange={(e) => setReferencia(e.target.value)}
              
            ></input>

            <label for="Bairro">Bairro </label>
            <input
              type="text"
              name="Bairro"
              id="name"
              title="Este campo é obrigátorio"
              placeholder="Insira o seu Bairro"
              value={bairro}
              onChange={(e) => setBairro(e.target.value)}
            ></input>

            <label for="Estado">Estados</label>
            <select value={selectedEstados} onChange={handleEstadosUpdate}>
              {estados.map(estado =><option value={estado.sigla}>{estado.nome}</option>)}
            </select>

            <label for="Cidade">Cidade</label>
            <select>
              {cidades.map(cidade => <option>{cidade.nome}</option>)}
            </select>

            
            {/* <input
              type="text"
              name="Cidade"
              id="name"
              title="Este campo é obrigátorio"
              placeholder="Insira a sua cidade"
              value={cidade}
              onChange={(e) => setCidade(e.target.value)}              
              
            ></input> */}


            {/* <select name="Estado" id="Estado" value={estados} onChange={(e) => setEstados(e.target.value)}>
              <option value="">Selecione</option>
              <option value="São Paulo">São Paulo</option>
              <option value="Rio de Janeiro">Rio de Janeiro</option>
              <option value="Minas Gerais">Minas Gerais</option>
              <option value="Goías">Goías</option>
              <option value="Acre">Acre</option>
              <option value="Alagoas">Alagoas</option>
              <option value="Amapá">Amapá</option>
              <option value="Amazonas">Amazonas</option>
              <option value="Bahia">Bahia</option>
              <option value="Ceará">Ceará</option>
              <option value="Espírito Santo">Espírito Santo</option>
              <option value="Maranhão">Maranhão</option>
              <option value="Mato Grosso">Mato Grosso</option>
              <option value="Mato Grosso do Sul">Mato Grosso do Sul</option>
              <option value="Pará">Pará</option>
              <option value="Pernambuco">Pernambuco</option>
              <option value="Piauí">Piauí</option>
              <option value="Rio Grande do Norte">Rio Grande do Norte</option>
              <option value="Rio Grande do Sul">Rio Grande do Sul</option>
              <option value="Rondônia">Rondônia</option>
              <option value="Roraima">Roraima</option>
              <option value="Santa Catarina">Santa Catarina</option>
              <option value="Sergipe">Sergipe</option>
              <option value="Tocantins">Tocantins</option>
              <option value="Distrito Federal">Distrito Federal</option>
            </select> */}
          </div>
        </div>
      </div>
      <div className="login-create">
        <Button classes={"CreateBtn-test"} txt={"Criar Login"} fn={hendleSubmit}/>
        <Button classes={"LoginBtn-test"} txt={"Login"} />
      </div>
    </div>
  );
}
