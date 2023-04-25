import { useRouter } from 'next/router';
import { DIV__TRASACTION, P__VALUE__TRANSACTION } from './TransactionStyle';

export const Transaction = ({ icon, title, value, type, idTrans }) => {
    const router = useRouter();
    console.log(idTrans);
    return (
        <DIV__TRASACTION onClick={()=> router.push(`/view/${idTrans}`)}>
            <img src={icon} alt="Icono de la categoría"/>
            <h3>{title}</h3>
            <P__VALUE__TRANSACTION type={type}>$ {new Intl.NumberFormat('es-ES').format(value)}</P__VALUE__TRANSACTION>
        </DIV__TRASACTION>
    )
}