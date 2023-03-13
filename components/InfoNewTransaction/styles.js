import Styled from 'styled-components';
import GlobalStyle from '@styles/globalStyles';

export const DIV__INFO_TRASACTION = Styled.div`
    position: relative;
    top: -40px;
    z-index: 30;
    width: 80%;
    box-shadow: 2px 1px 4px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    background-color: #FFF;
    margin: 18px auto;
    padding: 10px;

    p {
        text-align: left;
        width: 100%;
        font-weight: 500;
    }
`

export const INPUT__INFO_CATEGORY = Styled.input`
    width: 90%;
    box-shadow: 2px 1px 4px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    background-color: #FFF;
    margin: 18px auto;
    padding: 10px;
    border: 0;
`

export const INPUT__INFO_DETAILS = Styled.input`
    width: 90%;
    box-shadow: 2px 1px 4px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    background-color: #FFF;
    margin: 18px auto;
    padding: 10px;
    border: 0;
`

export const SELECT__INFO_TRANSACTION = Styled.select`
    width: 85%;
    box-shadow: 2px 1px 4px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    background-color: #FFF;
    margin: 18px auto;
    padding: 10px;
    border: 0;
`

export const DIV__CATEGORY = Styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`
export const DIV__DATE = Styled.div`
    display: grid;
    align-items: center;
    justify-content: center;
    width: 98%;
    grid-template-columns: 10% 88%;

    /* input {
        width: 100%;
    } */
`