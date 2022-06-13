import TotalMoney from '@components/TotalMoney';
import Cookie from 'js-cookie';
import { useEffect } from 'react';

const Home = ({ user }) => {

    /** A esta página redirecciona el backend tras iniciar sesión correctamente */
    /** En el useEffect se trae la información el usuario que acaba de iniciar sesión (GET /user -> requiere enviar el token JWT) */

    useEffect(() => {

        const getUserData = async () => {

            /** mediante la librería "js-cookie" extraemos la cookie que guardamos con el token (lo de response.cookie() )  */

            const response = await fetch('http://localhost:3000/user', {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + Cookie.get('JWT'),
                  }
            });
            const data = await response.json();
            // Dejo este console.log para ver lo que devuelve jaja además esto después sería bueno guardarlo en el contexto para usarlo en toda la aplicación 👍
            console.log(data);
        }
        getUserData();
    }, []);

    return (
        <>
            <h1>Home 🏡</h1>
            <TotalMoney/>
        </>
    )
}

export default Home;