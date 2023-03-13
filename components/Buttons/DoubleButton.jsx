import styled from 'styled-components';
import GlobalStyle from '@styles/globalStyles';
import { BasicButton } from './BasicButton';
import { useState } from 'react';

export const DoubleButton = ({type, setType}) => {
    const [tapButton, setTapButton] = useState("principal");

    return (
        <CONTAINER_BTN__div background={tapButton === "principal"?"#8585DD":"#FF8B8B"}>
            <BasicButton onClick={() => {setTapButton("principal"); setType({...type, type: 'ingreso'})}} color={tapButton === "principal"?"principal":"#FF8B8B"} width="100%">Ingresos</BasicButton>
            <BasicButton onClick={() => {setTapButton("secundario"); setType({...type, type: 'gasto'})}}  color={tapButton === "principal"?"#8585DD":"secundario"} width="100%">Gastos</BasicButton>
        </CONTAINER_BTN__div>
    );
}
/**Styles**/
const CONTAINER_BTN__div = styled.div`
    width: 100%;
    height: 2.2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 1.25rem;
    background: ${props => GlobalStyle.COLORS[props.background] || props.background};
    cursor: pointer;
`