import { useState } from "react";
import "./CadastroTeste.css";
import axios from "axios";

export const CadastroTeste = () => {
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [ddd, setDdd] = useState("");
  let [phone, setPhone] = useState("");
  let [dddPhone, setDddPhone] = useState("");
  let [address, setAddress] = useState("");
  let [uf, setUf] = useState("");
  let [city, setCity] = useState("");
  let [cep, setCep] = useState("");
  let [update, setUpdate] = useState(false);

  const cadastro = async () => {
    setDddPhone(`(${ddd})${phone}`);
    console.log("dddPhone");
    console.log(dddPhone);
    if (
      name === "" ||
      email === "" ||
      password === "" ||
      ddd === "" ||
      address === "" ||
      uf === "" ||
      city === "" ||
      cep === ""
    ) {
      alert("CAMPO(S) OBROGATÓRIO(S) NÃO PREENCHIDO(S)");
    } else {
      try {
        const customer_id = await axios.post("http://localhost/customerteste", {
          name,
          email,
          password,
          phone: dddPhone,
        });
        await axios.post("http://localhost/address", {
          customer_id: customer_id.data[0].customer_id,
          address,
          uf,
          city,
          cep,
        });
        alert("cadastrou");
        setUpdate(!update);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <section>
      <h1>Cadastro Teste</h1>
      <br />
      Nome *:
      <input
        id="cadastro-teste__input-name"
        type="text"
        name="name"
        placeholder="Nome"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      Email *:
      <input
        id="cadastro-teste__input-email"
        type="text"
        name="email"
        placeholder="email@email.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      Senha *:
      <input
        id="cadastro-teste__input-password"
        type="password"
        name="password"
        placeholder="senha"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      Telefone: (
      <input
        id="cadastro-teste__input-ddd"
        type="text"
        name="ddd"
        placeholder="00"
        maxLength="2"
        value={ddd}
        onChange={(e) => setDdd(e.target.value)}
      />
      )
      <input
        id="cadastro-teste__input-phone"
        type="text"
        name="phone"
        placeholder="Celular"
        maxLength="9"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <br />
      Estado*:
      <input
        id="cadastro-teste__input-uf"
        type="text"
        name="uf"
        placeholder="GO"
        maxLength="2"
        value={uf}
        onChange={(e) => setUf(e.target.value.toUpperCase())}
      />
      <br />
      Cidade *:
      <input
        id="cadastro-teste__input-city"
        type="text"
        name="city"
        placeholder="Cidade"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <br />
      CEP *:
      <input
        id="cadastro-teste__input-cep"
        type="text"
        name="cep"
        placeholder="CEP"
        maxLength="8"
        value={cep}
        onChange={(e) => setCep(e.target.value)}
      />
      <br />
      Endereço *:
      <input
        id="cadastro-teste__input-address"
        type="text"
        name="address"
        placeholder="endereço"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
      <br />
      <button
        onClick={() => {
          cadastro();
        }}
      >
        Cadastrar
      </button>
    </section>
  );
};

export default CadastroTeste;
