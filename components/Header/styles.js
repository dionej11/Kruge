import Styled from 'styled-components';
import GlobalStyle from '@styles/globalStyles';

export const HEADER = Styled.header`
   background-color: ${GlobalStyle.COLORS.principal};
   border-radius: 0px 0px 30px 30px;
   height: 172px;
   position: relative;
   overflow: hidden;
   z-index: -200;
`

export const DIV__THREE = Styled.div`
    background-color: #5353C6;
    width: 75vw;
    position: absolute;
    top: -55%;
    left: -15%;
    height: 75vw;
    z-index: 2;
    border-radius: 50%;
`
export const DIV__TWO = Styled.div`
    background-color: #5F5FC4;
    width: 58vw;
    position: absolute;
    top: -55%;
    left: -17%;
    height: 58vw;
    z-index: 3;
    border-radius: 50%;
`
export const DIV__ONE = Styled.div`
    background-color: #7070BD;
    width: 45vw;
    position: absolute;
    top: -55%;
    left: -20%;
    height: 45vw;
    z-index: 4;
    border-radius: 50%;
`

export const FIGURE__LOGO = Styled.figure`
    position: absolute;
    z-index: 5;
    width: 90%;
    display: flex;
    justify-content: flex-end;
    margin-top: 10px;
`

export const DIV__USER_INFO = Styled.div`
    display: flex;
    margin: 0px auto;
    justify-content: flex-start;
    align-items: center;
    height: 80%;
    width: 18rem;
    left: 0;
    right: 0;
    position: absolute;
    z-index: 5;
`
export const IMG_USER = Styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin: 10px;
`
export const H2__NAME = Styled.h2`
    color: ${GlobalStyle.COLORS.blanco};
    font-size: 19px;
    font-weight: bold;
    font-family: ${GlobalStyle.TYPOGRAPIC.roboto};
`