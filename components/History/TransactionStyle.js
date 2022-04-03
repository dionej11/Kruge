import Styled from 'styled-components';
import GlobalStyle from '@styles/globalStyles';

export const DIV__TRASACTION = Styled.div`
    width: 90vw;
    box-shadow: 2px 1px 4px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    background-color: ${GlobalStyle.blanco};
    margin: 18px auto;
    padding: 10px;
    display: grid;
    grid-template-columns: 18% 62% 20%;
    align-items: center;

    img {
        width: 32px;
        height: 32px;
        border-radius: 50%;
    }
`

export const P__VALUE__TRANSACTION = Styled.div`
    color: ${({ type }) =>  type === "I" ? GlobalStyle.principal : GlobalStyle.secundario };
    font-weight: bold;
`