import "./style.css";
import { Link } from "react-router-dom";
import { Button } from "../../components/Button/Button.jsx";

export default function Cadastro() {
  return (
    <div className="cadastro-container">
      <div className="header-text-container">
        <div>
          <h1>CRIAR CONTA</h1>
          <input type="radio" name="pj"></input>
          <label for="pj"> Pessoa Júridica</label>
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

      <div className="area-cadastro">
        <br></br>
        <h1>Dados cadastrais</h1>
        <br></br>
        <label for="name">Nome do Responsável</label>
        <br></br>
        <input
          tabIndex="1"
          type="text"
          name="name"
          id="name"
          title="Este campo é obrigátorio"
          placeholder="Insira seu nome completo"
          required=""
        ></input>
        <br></br>
        <br></br>
        <label for="email">Email</label>
        <br></br>
        <input
          type="email"
          name="name"
          id="name"
          title="Este campo é obrigátorio"
          placeholder="Insira seu nome completo"
          required=""
        ></input>
        <br></br>
        <br></br>
        <label for="cnpj">CNPJ</label>
        <br></br>
        <input
          type="number"
          name="cnpj"
          id="name"
          title="Este campo é obrigátorio"
          placeholder="Insira seu nome completo"
          required=""
        ></input>
        <br></br>
        <br></br>
        <label for="r-social">Razão Social</label>
        <br></br>
        <input
          type="text"
          name="r-social"
          id="name"
          title="Este campo é obrigátorio"
          placeholder="Insira seu nome completo"
          required=""
        ></input>
        <br></br>
        <br></br>
        <label for="i-estadual">Inscrição Estadual</label>
        <br></br>
        <input
          type=""
          name="i-estadual"
          id="name"
          title="Este campo é obrigátorio"
          placeholder="Insira seu nome completo"
          required=""
        ></input>
        <br></br>
        <br></br>
        <label for="Celular">Celular</label>
        <br></br>
        <input
          type="number"
          name="Celular"
          id="name"
          title="Este campo é obrigátorio"
          placeholder="Insira seu nome completo"
          required=""
        ></input>
        <br></br>
        <br></br>
        <label for="fixo">Telefone Fixo</label>
        <br></br>
        <input
          type="number"
          name="fixo"
          id="name"
          title="Este campo é obrigátorio"
          placeholder="Insira seu nome completo"
          required=""
        ></input>
        <br></br>
        <br></br>
        <label for="n-vendedor">Nome do vendedor</label>
        <br></br>
        <input
          type="number"
          name="n-vendedor"
          id="name"
          title="Este campo é obrigátorio"
          placeholder="Insira seu nome completo"
          required=""
        ></input>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <div className="area-cadastro-endereco">
        <h1>Endereço</h1>

        <br></br>
        <br></br>
        <label for="cep">CEP</label>
        <br></br>
        <input
          type="number"
          name="cep"
          id="name"
          title="Este campo é obrigátorio"
          placeholder="Insira seu nome completo"
          required=""
        ></input>
        <br></br>
        <br></br>
        <label for="endereço">Endereço</label>
        <br></br>
        <input
          type="text"
          name="endereço"
          id="name"
          title="Este campo é obrigátorio"
          placeholder="Insira seu nome completo"
          required=""
        ></input>
        <br></br>
        <br></br>
        <label for="Número">Número</label>
        <br></br>
        <input
          type="number"
          name="Número"
          id="name"
          title="Este campo é obrigátorio"
          placeholder="Insira seu nome completo"
          required=""
        ></input>
        <br></br>
        <br></br>
        <label for="Complemento">Complemento</label>
        <br></br>
        <input
          type="text"
          name="Complemento"
          id="name"
          title="Este campo é obrigátorio"
          placeholder="Insira seu nome completo"
          required=""
        ></input>
        <br></br>
        <br></br>
        <label for="Rêferencia">Rêferencia </label>
        <br></br>
        <input
          type="Rêferencia "
          name="Rêferencia"
          id="name"
          title="Este campo é obrigátorio"
          placeholder="Insira seu nome completo"
          required=""
        ></input>
        <br></br>
        <br></br>
        <label for="Bairro">Bairro </label>
        <br></br>
        <input
          type="text"
          name="Bairro"
          id="name"
          title="Este campo é obrigátorio"
          placeholder="Insira seu nome completo"
          required=""
        ></input>
        <br></br>
        <br></br>
        <label for="Cidade">Endereço</label>
        <br></br>
        <input
          type="text"
          name="Cidade"
          id="name"
          title="Este campo é obrigátorio"
          placeholder="Insira seu nome completo"
          required=""
        ></input>
        <br></br>
        <br></br>
        <label for="Estado">Estados</label>
        <br></br>

        <select name="Estado" id="Estado" required="">
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
        <br></br>
        <br></br>
        <br></br>

        <Button txt={"Login"} />
      </div>
    </div>
  );
}
