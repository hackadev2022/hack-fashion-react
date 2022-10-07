import { NavLink } from "react-router-dom";
import { Button } from "../../components/Button/Button";
import "./UserConfigs.css";

export const UserConfigs = ({ customerData, setCustomerData }) => {
  console.log("customerData");
  console.log(customerData);

  const fnDeslogar = () => {
    setCustomerData([
      {
        customer_id: "",
        name: "",
        phone: "",
        loged: false,
      },
    ]);
    localStorage.removeItem("customerData");
  };
  return (
    <section className="section__userConfigs">
      {customerData[0].loged !== true && (
        <NavLink to="/login">
          <h1>faça o login clicando AQUI</h1>
        </NavLink>
      )}
      {customerData[0].loged === true && (
        <>
          <h1>você está logado</h1>
          <Button txt={"DESLOGAR"} fn={fnDeslogar}></Button>
        </>
      )}
    </section>
  );
};

export default UserConfigs;
