import { useRouter } from 'next/router';
import { Categories } from "@components/Category";
import { Header } from "@components/Header";
import TotalMoney from '@components/TotalMoney';
import { History } from '@components/History'

import Cookie from 'js-cookie';
import { useEffect } from 'react';
import { MenuNav } from "@components/Menu";

const Home = () => {

    const Router = useRouter();
    
    useEffect(() => {
        
        if (!Cookie.get('JWT')) {
            Router.push('/');
        }
        
    }, []);

    return (
        <>
            <Header />
            <TotalMoney/>
            <Categories />
            <History />
            <MenuNav />
        </>
    )

}

export default Home;