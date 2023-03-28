import { useRouter } from 'next/router'
import Cookie from 'js-cookie';
import { Header } from '@components/Header';
import { MenuNav } from '@components/Menu';
import { NewCategoryValue } from '@components/NewCategoryValue';
import { useEffect, useState } from 'react';
import { InfoNewTransaction } from '@components/InfoNewTransaction';
import { FaTrash, FaShareAlt, FaPen } from "react-icons/fa";

const ViewTrans = () => {
    const router = useRouter();
    const { tran }= router.query;
    const [transData, setTransData] = useState();
    useEffect(() => {
        const getTransData = async () => {
            const response = await fetch(`http://localhost:3000/transactions/${tran}`, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + Cookie.get('JWT'),
                    }
            });
            const data = await response.json();
            setTransData(data.result);
            console.log(data);
        }
        getTransData();
    }, []);
    return (
        <>
        <Header />
        {
        transData &&
        <>
        <NewCategoryValue modeTran='view' fixedType={transData.type} fixedBadge={transData.badge} fixedValue={transData.value}/>
        <InfoNewTransaction modeTran='view' fixedDetailes={transData.details} fixedCategory={transData.category} fixedDate={transData.date} />
        </>
        }
        <div>
            <FaPen />
            <span>Editar</span>
            <FaShareAlt />
            <span>Compartir</span>
            <FaTrash />
            <span>Eliminar</span>
        </div>
        <MenuNav />
        </>
    )
}

export default ViewTrans;