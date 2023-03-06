import { Header } from "@components/Header";
import { MenuNav } from "@components/Menu/index";
import { NewCategoryValue } from "@components/NewCategoryValue";
import { useState } from "react";

const Transaction = () => {
  const [type, setType] = useState({type:'ingreso', badge: 'COP', value:0});
  return (
    <>
      <Header />
      <MenuNav />
      <NewCategoryValue type={type} setType={setType}/>
    </>
  );
}
export default Transaction;