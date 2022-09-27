import "./style.css";
import { Link } from "react-router-dom";
import { Button } from "../../components/Button/Button";
import { useState } from "react";
import axios from 'axios';
import { useForm } from 'react-hook-form';


const url = 'http://localhost:80/customer'

export default function Cadastro() {

  const {register, setValue, setFocus} = useForm();

  const [ nome, setNome] = useState(undefined)
  const [ email, setEmail] = useState(undefined)
  const [ telefone, setTelefone] = useState(undefined)
  const [ senha, setSenha] = useState(undefined)

  var [ cep, setCep] = useState(undefined)
  const [ endereço, setEndereço] = useState(undefined)
  const [ numero, setNumero] = useState(undefined)
  const [ complemento, setComplemento] = useState(undefined)
  const [ referencia, setReferencia] = useState(undefined)
  const [ bairro, setBairro] = useState(undefined)
  const [ cidade, setCidade] = useState(undefined)
  const [uf, setUf] = useState(undefined)
  // const [ estados, setEstados] = useState(undefined)



  const hendleSubmit = async () =>{
    try {

      let status;

          if(telefone === undefined){
                status = await axios.post(url, {nome, email, senha, cep, endereço, numero,
                  complemento, referencia, bairro, cidade})
          }else{
                status = await axios.post(url, {nome, email, senha, telefone, cep, endereço, numero,
                  complemento, referencia, bairro, cidade})
          }
          console.log(status)
         
    } catch (error) {
       console.log(error)
    }
}

// const checkCEP = (e) => {
//     cep = e.target.value.replace(/\D/g, '')
//     console.log(cep)
//     fetch(`https://viacep.com.br/ws/${cep}/json/`).then(res => res.json()).then(data => {
//       console.log(data);
//       setValue('endereço', data.logradouro)
//       setValue('bairro', data.bairro)
//       setValue('cidade', data.localidade)
//     })
// }



  return (
    <div>
      <div>
        <div className="text-container-header">
          <div className="text-conta">
            <h1>CRIAR CONTA</h1>

            {/* <input type="radio" name="option-radio" value={value} onChange={(e) => setValue(e.target.value)}/>
            <label for="pj"> Pessoa Júridica </label> */}

            <input type="radio" name="option-radio" />
            <label for="cpf"> Pessoa Fisica </label>
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
              name="name"
              id="name"
              title="Este campo é obrigátorio"
              placeholder="Insira seu email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              
            ></input>
{/* 
            <label for="cnpj">CNPJ</label>
            <input
              type="number"
              name="cnpj"
              id="name"
              title="Este campo é obrigátorio"
              placeholder="Insira seu CNPJ"
              
            ></input> */}

            {/* <label for="r-social">Razão Social</label>
            <input
              type="text"
              name="r-social"
              id="name"
              title="Este campo é obrigátorio"
              placeholder="Insira a Razão Social"
              
            ></input> */}

            {/* <label for="i-estadual">Inscrição Estadual</label>
            <input
              type=""
              name="i-estadual"
              id="name"
              title="Este campo é obrigátorio"
              placeholder="Insira sua Inscrição"
              
            ></input> */}

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

            {/* <label for="fixo">Telefone Fixo</label>
            <input
              type="number"
              name="fixo"
              id="name"
              title="Este campo é obrigátorio"
              placeholder="Insira seu Telefone Fixo"

              
            ></input> */}

            {/* <label for="n-vendedor">Nome do vendedor</label>
            <input
              type="number"
              name="n-vendedor"
              id="name"
              title="Este campo é obrigátorio"
              placeholder=""
              
            ></input> */}

            <label for="fixo">Senha</label>
            <input
              type="text"
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
//              onBlur={checkCEP}
              
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
             // {...register("endereço")}
              
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
             // {...register("bairro")}
              
            ></input>

            <label for="Cidade">Cidade</label>
            <input
              type="text"
              name="Cidade"
              id="name"
              title="Este campo é obrigátorio"
              placeholder="Insira a sua cidade"
              value={cidade}
              onChange={(e) => setCidade(e.target.value)}
              //{...register("cidade")}
              
            ></input>

            <label for="Estado">Estados</label>

            <select name="Estado" id="Estado" value={uf} onChange={(e) => setUf(e.target.value)}>
              <option value="">Selecione</option>
              <option value="SP">São Paulo</option>
              <option value="RJ">Rio de Janeiro</option>
              <option value="MG">Minas Gerais</option>
              <option value="GO">Goías</option>
              <option value="AC">Acre</option>
              <option value="AL">Alagoas</option>
              <option value="AP">Amapá</option>
              <option value="AM">Amazonas</option>
              <option value="BA">Bahia</option>
              <option value="CE">Ceará</option>
              <option value="ES">Espírito Santo</option>
              <option value="MA">Maranhão</option>
              <option value="MT">Mato Grosso</option>
              <option value="MS">Mato Grosso do Sul</option>
              <option value="PA">Pará</option>
              <option value="PE">Pernambuco</option>
              <option value="PI">Piauí</option>
              <option value="RN">Rio Grande do Norte</option>
              <option value="RS">Rio Grande do Sul</option>
              <option value="RO">Rondônia</option>
              <option value="RR">Roraima</option>
              <option value="SC">Santa Catarina</option>
              <option value="SE">Sergipe</option>
              <option value="TO">Tocantins</option>
              <option value="DF">Distrito Federal</option>
            </select>
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
