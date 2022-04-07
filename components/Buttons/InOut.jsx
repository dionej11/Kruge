import { INOUT__section, INOUT__button } from "./ButtonsStyles";
import { useState } from "react";

const InOut = () => {
  const [transaction, setTransaction] = useState("I");

  return (
    <INOUT__section fill={transaction === "I" ? "#5f5fc4b3" : "#ff6565b3"}>
      <INOUT__button 
        color={transaction === "I" ? "principal" : "#ff6565b3"}
        onClick={() => setTransaction("I")}>Ingreso</INOUT__button>
      <INOUT__button 
        color={transaction === "I" ? "#5f5fc4b3" : "secundario"}
        onClick={() => setTransaction("G")}>Gasto</INOUT__button>
    </INOUT__section>
  );
}

export default InOut;