// import { useRouter } from 'next/router'
// import Cookie from 'js-cookie';
// import { Header } from '@components/Header';
// import { MenuNav } from '@components/Menu';
// import { NewCategoryValue } from '@components/NewCategoryValue';
// import { useEffect, useState } from 'react';
// import { InfoNewTransaction } from '@components/InfoNewTransaction';
// import Styled from 'styled-components';
// import { Toaster, toast } from 'react-hot-toast';

// const ViewTrans = () => {
//     const router = useRouter();
//     const { editTran }= router.query;
//     const [transData, setTransData] = useState();
//     useEffect(() => {
//         const getTransData = async () => {
//             const response = await fetch(`http://localhost:3000/transactions/${editTran}`, {
//                 headers: {
//                     'Accept': 'application/json',
//                     'Content-Type': 'application/json',
//                     'Authorization': 'Bearer ' + Cookie.get('JWT'),
//                     }
//             });
//             const data = await response.json();
//             setTransData(data.result);
//             console.log(data);
//         }
//         getTransData();
//     }, []);

//     return(
//         <>
//         <Header />
//         <MenuNav />
//         </>
//     )
// }