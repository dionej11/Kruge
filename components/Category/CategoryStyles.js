import Styled from 'styled-components';
import GlobalStyle from '@styles/globalStyles';


export const IMG__ICON = Styled.img`
    text-align: center;
    width: 40px;
    height: 40px;
`

export const DIV__EDIT = Styled.div`
    position: absolute;
    right: 0;
    top: 0;
    z-index: 999;
    margin: 0px -10px 0px 0px;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background-color: ${GlobalStyle.COLORS.principal};
    display: grid;
    place-content: center;1
`

export const P__NAME = Styled.div`
    margin-top: 10px;
    font-size: 13px;
`

export const DIV__CATEGORY = Styled.div`
    position: relative;
    text-align: center;
    width: 40px;
    height: 40px;
    box-shadow: 2px 1px 4px rgba(0, 0, 0, 0.1);
    border-radius: 20px;
    background-color: ${GlobalStyle.blanco};
    margin: 0px 8px;
    padding: 6px;
    border: ${props => props.stylesSelected ?
    "5px solid"+GlobalStyle.COLORS.principal+"" : "0"};

    svg {
        width: 22px;
        height: 22px;
        padding: 10px;
        color: #C9C5C5;
    }
`