import { Transaction } from './Transaction';
import { SECTION__HISTORY } from './styles';

export const History = () => {

  const Items = [
    {
      icon: "https://upload.wikimedia.org/wikipedia/commons/2/2a/LoL_icon.svg",
      title: "Ingreso",
      value: 5000,
      type: "I"
    },
    {
      icon: "https://upload.wikimedia.org/wikipedia/commons/2/2a/LoL_icon.svg",
      title: "Ingreso",
      value: 5000,
      type: "G"
    },
    {
      icon: "https://upload.wikimedia.org/wikipedia/commons/2/2a/LoL_icon.svg",
      title: "Ingreso",
      value: 5000,
      type: "I"
    },
  ];

  return (
    <SECTION__HISTORY>
      <h2>Historial: </h2>
      {
          Items.map((item, index) => (
            <Transaction 
              key={`history-transaction-${index}`}
              icon={item.icon}
              title={item.title}
              value={item.value}
              type={item.type}
            />
          ))
      }
    </SECTION__HISTORY>
  );
}