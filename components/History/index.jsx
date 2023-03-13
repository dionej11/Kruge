import { Transaction } from './Transaction';
import { SECTION__HISTORY } from './styles';

import Cookie from 'js-cookie';
import { useEffect, useState, useContext } from 'react';
import { Context } from '../../context';


export const History = () => {

  const [History, setHistory] = useState();
  const { filterTransactions, setFilterTransactions } = useContext(Context)

  useEffect(() => {

      const getHistory = async () => {

          const response = await fetch('http://localhost:3000/transactions', {
              headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json',
                  'Authorization': 'Bearer ' + Cookie.get('JWT'),
                }
          });
          const data = await response.json();
          // Dejo este console.log para ver lo que devuelve jaja además esto después sería bueno guardarlo en el contexto para usarlo en toda la aplicación 👍
          setHistory(data.result);
      }
      getHistory();
  }, []);

  return (
    <SECTION__HISTORY>
      <h2>Últimos movimientos: </h2>
      {
          filterTransactions?.length > 0 ?
            filterTransactions.map((item, index) => (
              <Transaction 
                key={`history-transaction-${index}`}
                icon={item.categoryObject[0].icon}
                title={item.details}
                value={item.value}
                type={item.type}
              />
            ))
          : filterTransactions?.length === 0 ?
              <h2>Esta categoría no tiene transacciones 😜</h2>
          : History &&
          History.map((item, index) => (
            <Transaction 
              key={`history-transaction-${index}`}
              icon={item.categoryObject[0].icon}
              title={item.details}
              value={item.value}
              type={item.type}
            />
          ))
        }
    </SECTION__HISTORY>
  );
}