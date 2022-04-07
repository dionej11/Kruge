import { INOUT__button, SAVE__button, LOGIN__button, INOUT__section } from "../components/Buttons/ButtonsStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faGithub, faDiscord} from "@fortawesome/free-brands-svg-icons";
import InOut from "../components/Buttons/InOut";

const Btns = () => {
  return (
    <>
    <InOut/>
      <p>Botones</p>
      <INOUT__button color="principal">Ingreso</INOUT__button>
      <br />
      <br />
      <INOUT__button color="secundario">Gasto</INOUT__button>
      <br />
      <br />
      <SAVE__button color="principal">Guardar</SAVE__button>
      <br />
      <br />
      <SAVE__button color="secundario">Guardar</SAVE__button>
      <br />
      <br />
      <LOGIN__button>
        <FontAwesomeIcon icon={faGoogle} />
        Continuar con Google</LOGIN__button>
      <br />
      <br />
      <LOGIN__button>
        <FontAwesomeIcon icon={faGithub} />
        Continuar con GitHub</LOGIN__button>
      <br />
      <br />
      <LOGIN__button>
        <FontAwesomeIcon icon={faDiscord} />
        Continuar con Discord</LOGIN__button>
      <br />
      <br />
    <InOut/>
      
    </>
  );
}

export default Btns;