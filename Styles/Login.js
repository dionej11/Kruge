import Styled from 'styled-components';
import GlobalStyle from '@styles/globalStyles';

export const MAIN__BGLOGIN = Styled.main`
   background-color: ${GlobalStyle.COLORS.principal};
   width: 100%;
   height: 100vh;
   position: relative;
   overflow: hidden;
   display: grid;
   place-content: center;
`

export const SECTION__LOGINBTNS = Styled.section`
    display: grid;
    place-content: center;
`;

export const BUTTON__PROVIDER = Styled.button`
    background-color: #192B3A;
    border-radius: 10px;
    width: 210px;
    height: 30px;
    border: 0;
    margin: 7px auto;
    padding: 10px 5px 10px 15px;
    font-family: ${GlobalStyle.TYPOGRAPIC.roboto};
    color: ${GlobalStyle.COLORS.azul};
    font-size: 15px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
`;

export const P__NAMEPROVIDER = Styled.p`
    padding-left: 11px;
`