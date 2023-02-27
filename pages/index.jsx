import Cookies from 'js-cookie'
import { useRouter } from 'next/router';
import Image from 'next/image';
import { BUTTON__PROVIDER, MAIN__BGLOGIN, SECTION__LOGINBTNS, P__NAMEPROVIDER } from '../Styles/Login';

const Login = () => {

  const sizeIcons = 18;
  const Router = useRouter();

  const handlerWindowLogin = (provider) => {

    const popup = window.open(`http://localhost:3000/auth/${provider}`,
    "targetWindow",
    `toolbar=no,
          location=no,
          status=no,
          menubar=no,
          scrollbars=yes,
          resizable=yes,
          width=320,
          height=700`)

      window.addEventListener("message", (event) => {
        if (event.origin === "http://localhost:3000") {
          if (event.data) {
            Cookies.set('JWT', event.data);
            popup?.close();
            Router.push('/home')
          }
        }
      });
  }

  /** LOGIN
    ⚠ Para usar las rutas de iniciar sesión que hicimos en el backend (auth/google, auth/github, etc...) se hace de la siguiente manera:
   
    👉<a href="http://localhost:3000/auth/...." />👈 -> No hacemos fetch, sino que nos movemos a esa ruta, el backend nos redireccioná de regreso tras completa el login 👌
   */
  return (
    <MAIN__BGLOGIN>
        <Image src="/Logo.svg" alt="Logotipo de Kruge en SVG" height={125} width={207} />
        <SECTION__LOGINBTNS>
          <BUTTON__PROVIDER onClick={() => handlerWindowLogin('google')}>
            <Image src="/Google.svg" alt="Logo de la plataforma Google" height={sizeIcons} width={sizeIcons} />
            <P__NAMEPROVIDER>Continuar con Google</P__NAMEPROVIDER>
            </BUTTON__PROVIDER>
          <BUTTON__PROVIDER onClick={() => handlerWindowLogin('gitHub')}>
            <Image src="/GitHub.svg" alt="Logo de la plataforma GitHub" height={sizeIcons} width={sizeIcons} />
            <P__NAMEPROVIDER>Continuar con GitHub</P__NAMEPROVIDER>
            </BUTTON__PROVIDER>
          <BUTTON__PROVIDER onClick={() => handlerWindowLogin('discord')}>
            <Image src="/Discord.svg" alt="Logo de la plataforma Discord" height={sizeIcons} width={sizeIcons} />
            <P__NAMEPROVIDER>Continuar con Discord</P__NAMEPROVIDER>
            </BUTTON__PROVIDER>
          <BUTTON__PROVIDER onClick={() => handlerWindowLogin('twitch')}>
            <Image src="/Twitch.svg" alt="Logo de la plataforma Twitch" height={sizeIcons} width={sizeIcons} />
            <P__NAMEPROVIDER>Continuar con Twitch</P__NAMEPROVIDER>
            </BUTTON__PROVIDER>
        </SECTION__LOGINBTNS>
    </MAIN__BGLOGIN>
  );
}

export default Login;