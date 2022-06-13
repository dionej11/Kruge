import { Categories } from "@components/Category";
import { Header } from "@components/Header";
import { History } from "@components/History";

const Hola = () => {
  /** LOGIN
    ⚠ Para usar las rutas de iniciar sesión que hicimos en el backend (auth/google, auth/github, etc...) se hace de la siguiente manera:
   
    👉<a href="http://localhost:3000/auth/...." />👈 -> No hacemos fetch, sino que nos movemos a esa ruta, el backend nos redireccioná de regreso tras completa el login 👌
   */
  return (
    <div>
      <Header />
      Login 
    </div>
  );
}

export default Hola;