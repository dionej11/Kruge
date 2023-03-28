import Styled from 'styled-components';
import GlobalStyle from '@styles/globalStyles';

export const DIV__TRASACTION = Styled.div`
    width: 84%;
    box-shadow: 2px 1px 4px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    background-color: ${GlobalStyle.blanco};
    margin: 18px auto;
    padding: 10px;
    display: grid;
    grid-template-columns: 18% 62% 20%;
    align-items: center;
    cursor: pointer;

    h3 {
        font-family: ${GlobalStyle.TYPOGRAPIC.roboto};
        font-weight: 400;
        font-size: 14px;
    }

    img {
        width: 32px;
        height: 32px;
        border-radius: 50%;
    }
`

export const P__VALUE__TRANSACTION = Styled.div`
    color: ${({ type }) =>  type === "ingreso" ? GlobalStyle.COLORS.principal : GlobalStyle.COLORS.secundario };
    font-weight: bold;
    font-family: ${GlobalStyle.TYPOGRAPIC.roboto};
    font-weight: bold;
    font-size: 13px
`