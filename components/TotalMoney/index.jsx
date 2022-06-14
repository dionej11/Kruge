import { useEffect, useState } from "react";
import Cookie from 'js-cookie';

import { 
  PROGRESS_BAR__section, 
  SKILL__div,OUTER__div,
  INNER__div, 
  TOTAL_MONEY__h2, 
  PROGRESS_IN__svg,
  PROGRESS_OUT__svg, 
  STROKE_IN___circle, 
  STROKE_OUT___circle 
} from "./style";

const TotalMoney = () => {
  const [totalMoney, setTotalMoney] = useState(0);//state para la cantidad de dinero actual del usuario
  const [valuesTrans, setvaluesTrans] = useState({});//state para la grafica circular de transacciones del usuario

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
    console.log(data);
    setTotalMoney(data.result.total_money);
    setvaluesTrans({out: data.result[0].count, in: data.result[1].count});
    }
    getUserTotalMoney();
  },[]);
  
  /*****Función grafica circular transacciones usuario*********/
  const valueStrokeCalculator= (values) => {//params: cantidad de ingresos y gastos del usuario
    const DASHOFFSET_DEFAULT = 649;
    let valuesDash = { in: 0, out: 0 };
    /*Según la transacción (ingreso o  gasto) con mayor cantidad, se calcula su porcentaje en la grafica y lo sobrante se le asigna a la menor. 
    No se calcula con precisón a ambas transacciones por el desfase del espacio entre las dos barras de progreso y por el valor a ojo que se 
    le dió al dash off set. Y asi no quedan tocandose*/
    if (values.in > values.out) {
      let porcentage = (100 * values.in) / (values.in + values.out);
      valuesDash.in = parseInt(DASHOFFSET_DEFAULT - (DASHOFFSET_DEFAULT * (porcentage / 100)));
      valuesDash.out = 695 - valuesDash.in;
    }else if (values.out > values.in) {
      let porcentage = (100 * values.out) / (values.in + values.out);
      valuesDash.out = parseInt(DASHOFFSET_DEFAULT - (DASHOFFSET_DEFAULT * (porcentage / 100)));
      valuesDash.in = 695 - valuesDash.out;
    }
    return valuesDash;
  }

  const STROKES_PROGRESS = valueStrokeCalculator(valuesTrans);

  return (
    <PROGRESS_BAR__section>
      <SKILL__div>
        <OUTER__div>
          <INNER__div>
            <TOTAL_MONEY__h2>
              {"$ "+new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 1 }).format(totalMoney)}
            </TOTAL_MONEY__h2>
          </INNER__div>
        </OUTER__div>
        <PROGRESS_IN__svg display={STROKES_PROGRESS.in === 0 ? "none":"block"}>
          <STROKE_IN___circle valueStroke={STROKES_PROGRESS.in} />
        </PROGRESS_IN__svg>
        <PROGRESS_OUT__svg display={STROKES_PROGRESS.out === 0 ? "none":"block"}>
          <STROKE_OUT___circle valueStroke={STROKES_PROGRESS.out} />
        </PROGRESS_OUT__svg>
      </SKILL__div>
    </PROGRESS_BAR__section>
  );
}

export default TotalMoney;