import { useEffect, useState } from "react";
import Cookie from 'js-cookie';

import { 
  CONTAINER_TOLTA_MONEY__section,
  PROGRESS_BAR__div
} from "./style";

const TotalMoney = () => {
  const [totalMoneyData, setTotalMoneyData] = useState(0);//state para la cantidad de dinero actual del usuario

  useEffect(() => { 
    const getUserTotalMoney = async () => {
      const response = await fetch('http://localhost:3000/total_money', {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + Cookie.get('JWT'),
          }
      });
      const data = await response.json();//objeto con la cantidad de gastos,ingresos y dinero actual del usuario
      // console.log(data);
      setTotalMoneyData(data.result);
    }
    getUserTotalMoney();
  },[]);
  
  return (
    <CONTAINER_TOLTA_MONEY__section>
      {
        totalMoneyData ? 
          totalMoneyData.total_money <= 0 ? 
            <>
            <PROGRESS_BAR__div width="270px" porcentage="100" color="#e4e4e4" border="20px">{"$ "+new Intl.NumberFormat('es-ES').format(totalMoneyData.total_money)}</PROGRESS_BAR__div>
            <PROGRESS_BAR__div width="270px" porcentage="100" color="#e4e4e4" border="20px"></PROGRESS_BAR__div>
            </>
          :<>
            <PROGRESS_BAR__div 
              width="270px" 
              porcentage={(totalMoneyData[1].count*100/(totalMoneyData[0].count+totalMoneyData[1].count)).toFixed()} 
              color="#5F5FC4" 
              border="20px">
              {"$ "+new Intl.NumberFormat('es-ES').format(totalMoneyData.total_money)}
            </PROGRESS_BAR__div>
            <PROGRESS_BAR__div 
              width="270px" 
              porcentage={(totalMoneyData[0].count*100/(totalMoneyData[0].count+totalMoneyData[1].count)).toFixed()-2.5} 
              color="#FF6565" 
              border="20px">
            </PROGRESS_BAR__div> 
            </>
        :<p>cargando...</p>
      }
    </CONTAINER_TOLTA_MONEY__section>
  );
}

export default TotalMoney;