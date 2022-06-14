import { useRouter } from 'next/router';
import Link from 'next/link';
import { MENU__MENU, MENU__UL, ADD_BUTTON, MENU__LI, INDICATOR__DIV } from "../Menu/MenuStyles";

export const MenuNav = () => {
  const router = useRouter();

  return (
    <MENU__MENU>
      <MENU__UL>

        <MENU__LI weight={router.asPath === "/home" && "bold"}>
          <Link href="/home"><a>Inicio</a></Link>
          <INDICATOR__DIV opacity={router.asPath === "/home" ? 1 : 0}/>
        </MENU__LI>

        <MENU__LI weight={router.asPath === "/data" && "bold"}>
          <Link href="/data"><a>Datos</a></Link>
          <INDICATOR__DIV opacity={router.asPath === "/data" ? 1 : 0}/>
        </MENU__LI>

        <MENU__LI>
          <ADD_BUTTON>+</ADD_BUTTON>
        </MENU__LI>

        <MENU__LI weight={router.asPath === "/profile" && "bold"}>
          <Link href="/profile"><a>Perfil</a></Link>
          <INDICATOR__DIV opacity={router.asPath === "/profile" ? 1 : 0}/>
        </MENU__LI>

        <MENU__LI>
          <Link href="/"><a>Salir</a></Link>
          <INDICATOR__DIV opacity="0" />
        </MENU__LI>
        
      </MENU__UL>
    </MENU__MENU>
  );
}
