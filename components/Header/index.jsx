import Image from 'next/image';
import Cookie from 'js-cookie';
import { useEffect, useState } from 'react';
import { 
  H2__NAME,
  HEADER,
  DIV__USER_INFO,
  IMG_USER, 
  DIV__THREE,
  DIV__TWO,
  DIV__ONE,
  FIGURE__LOGO
} from './styles';

export const Header = () => {

  const [user, setUser] = useState();

  useEffect(() => {

    const getUserData = async () => {

        /** mediante la librería "js-cookie" extraemos la cookie que guardamos con el token (lo de response.cookie() )  */

        console.log('Bearer ' + Cookie.get('JWT'));

        const response = await fetch('http://localhost:3000/user', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + Cookie.get('JWT'),
              }
        });
        const data = await response.json();
        // Dejo este console.log para ver lo que devuelve jaja además esto después sería bueno guardarlo en el contexto para usarlo en toda la aplicación 👍
        setUser(data.result);
        console.log(data);
    }
    getUserData();
}, []);

  return (
    <>
      {
        user && <>
          <HEADER>
            <DIV__THREE></DIV__THREE>
            <DIV__TWO></DIV__TWO>
            <DIV__ONE></DIV__ONE>
            <FIGURE__LOGO>
              <Image src="/Logo.svg" alt="Logotipo de Kruge en SVG" height={24} width={57} />
            </FIGURE__LOGO>
            <DIV__USER_INFO>
              <IMG_USER src={user.photo} alt="Fotografía de Usuario extraida del provider"></IMG_USER>
              <H2__NAME>{user.name}</H2__NAME>
            </DIV__USER_INFO>
          </HEADER>
        </>
      }
    </>
  ); 
}  