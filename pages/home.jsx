import { Categories } from "@components/Category";
import { Header } from "@components/Header";
import TotalMoney from '@components/TotalMoney';
import { History } from '@components/History'

import Cookie from 'js-cookie';
import { useEffect } from 'react';

const Home = () => {

    return (
        <>
            <Header />
            <TotalMoney/>
            <Categories />
            <History />
        </>
    )
}

export default Home;