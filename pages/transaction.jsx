import { Header } from "@components/Header";
import { MenuNav } from "@components/Menu/index";
import { NewCategoryValue } from "@components/NewCategoryValue";
import { InfoNewTransaction } from "@components/InfoNewTransaction";
import { BasicButton } from "@components/Buttons/BasicButton";
import { useState } from "react";
import Cookie from 'js-cookie';

const Transaction = () => {
  const [type, setType] = useState({ type: "ingreso", badge: "COP", value: 0 });
  const [info, setInfo] = useState({
    category: null,
    date: null,
    details: null,
  });

  const sendNewTransaction = async () => {
    const newTrans = {
      ...type,
      value: parseInt(type.value),
      ...info,
    };

    const response = await fetch("http://localhost:3000/new_transaction", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${Cookie.get('JWT')}`,
      },
      body: JSON.stringify(newTrans)
    });
    const data = await response.json();
  };

  // FALTA LIMPIAR EL FORMULARIO + ALERTA DE SUCCESS

  return (
    <>
      <Header />
      <MenuNav />
      <NewCategoryValue type={type} setType={setType} />
      <InfoNewTransaction info={info} setInfo={setInfo} />
      <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
        <BasicButton
          onClick={sendNewTransaction}
          color={type.type === "ingreso" ? "principal" : "secundario"}
          width="85%"
          height={"40px"}
        >
          Guardar
        </BasicButton>
      </div>
    </>
  );
};
export default Transaction;
