import Image from 'next/image';
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

Image

export const Header = () => {
  return (
    <>
      <HEADER>
        <DIV__THREE></DIV__THREE>
        <DIV__TWO></DIV__TWO>
        <DIV__ONE></DIV__ONE>
        <FIGURE__LOGO>
          <Image src="/Logo.svg" alt="Logotipo de Kruge en SVG" height={24} width={57} />
        </FIGURE__LOGO>
        <DIV__USER_INFO>
          <IMG_USER src="https://secure.gravatar.com/avatar/057532cef1428b594c5be9699a133f36?s=256&d=mm&r=g" alt="Fotografía de Usuario extraida del provider"></IMG_USER>
          <H2__NAME>Nombre del usuario</H2__NAME>
        </DIV__USER_INFO>
      </HEADER>
    </>
  ); 
}  