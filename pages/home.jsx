import Cookie from 'js-cookie';
import { useEffect } from 'react';

const Home = ({ user }) => {

    useEffect(() => {

        const getUserData = async () => {
            const response = await fetch('http://localhost:3000/user', {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + Cookie.get('JWT'),
                  }
            });
            const data = await response.json();
            console.log(data);
        }
        getUserData();
    }, []);

    return (
        <>
            <h1>Home 🏡</h1>
            <h1>{ user?.name }</h1>
        </>
    )
}

export default Home;