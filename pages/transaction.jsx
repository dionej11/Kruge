import { Header } from "@components/Header";
import { MenuNav } from "@components/Menu/index";
import { NewCategoryValue } from "@components/NewCategoryValue";
import { InfoNewTransaction } from "@components/InfoNewTransaction";
import { useState } from "react";

const Transaction = () => {
  const [type, setType] = useState({type:'ingreso', badge: 'COP', value:0});
  const [info, setInfo] = useState({category: null, date: null, details: null});

  console.log(info);

  return (
    <>
      <Header />
      <MenuNav />
      <NewCategoryValue type={type} setType={setType}/>
      <InfoNewTransaction info={info} setInfo={setInfo} />
    </>
  );
}
export default Transaction;