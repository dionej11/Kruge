import { useRouter } from 'next/router'
import Cookie from 'js-cookie';
import { Header } from '@components/Header';
import { MenuNav } from '@components/Menu';
import { NewCategoryValue } from '@components/NewCategoryValue';
import { useEffect, useState } from 'react';
import { InfoNewTransaction } from '@components/InfoNewTransaction';
import { FaTrash, FaShareAlt, FaPen } from "react-icons/fa";
import Styled from 'styled-components';
import { Toaster, toast } from 'react-hot-toast';

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

    const deleteTrans = async () => {
        const response = await fetch(`http://localhost:3000/transactions/${tran}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + Cookie.get('JWT'),
            }
        });
        const data = await response.json();

        data.message = "TRANSACTION DELETED" ? 
        toast.success('Hiper eliminada!', {"style": {
            borderRadius: '10px',
            background: '#292929',
            color: '#FFF',
        }})
        :toast.error("Mmm algo salió mal :(", {"style": {
            borderRadius: '10px',
            background: '#292929',
            color: '#FFF',
        }})
        setTimeout(() => {
            router.push('/home')
          }, 2000)
    }

    const deleteTransToast = ()=> {
        toast((t) => (
            <div style={{display: "flex", flexDirection: "column"}}>
                <span>
                ¿De verdad quieres eliminar esta transacción?
                </span>
                <div style={{display: "flex", justifyContent: "space-evenly", marginTop: "5px"}}>
                    <button style={{width: "6rem", height: "2rem", borderRadius: "7px", border: "none", backgroundColor: "#FF6565", cursor: 'pointer', color: "#FFF"}}
                        onClick={deleteTrans}>
                        Sip
                    </button>
                    <button style={{width: "6rem", height: "2rem", borderRadius: "7px", border: "none", backgroundColor: "#6d6d6d", cursor: 'pointer', color: "#FFF"}} 
                        onClick={() => toast.dismiss(t.id)}>
                        Nop
                    </button>
                </div>
            </div>

        ),{ 
            "style": {
                borderRadius: '10px',
                background: '#292929',
                color: '#FFF',
            }
        });
    }

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
        <Actions>
            <div>
                <FaPen />
                <span>Editar</span>
            </div>
            <div>
                <FaShareAlt />
                <span>Compartir</span>
            </div>
            <div onClick={deleteTransToast}>
                <FaTrash />
                <span>Eliminar</span>
            </div>
        </Actions>
        <Toaster position="bottom-center" reverseOrder={false} />
        <MenuNav />
        </>
    )
}

const Actions = Styled.section`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 85%;
    background: white;
    margin: -2rem auto 8rem;
    box-shadow: 2px 1px 4px rgba(0,0,0,0.1);
    border-radius: 10px;
    background-color: #FFF;
    padding: 7px 0;
    div {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
        cursor: pointer;
    }
    div:first-child {
        color: #5F5FC4;
        font-weight: 500;
    }
    div:last-child {
        color: #FF6565;
        font-weight: 500;
    }
    div:nth-child(2) {
        color: #404040;
        font-weight: 500;
    }
`

export default ViewTrans;