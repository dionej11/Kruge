import Styled from 'styled-components';
import GlobalStyle from '@styles/globalStyles';

export const SECTION__CATEGORIES = Styled.section`

    position: relative;
    z-index: 30;
    top: -20px;

    h2 {
        font-family: ${GlobalStyle.TYPOGRAPIC.roboto};
        font-weight: bold;
        font-size: 15px;
        width: 84%;
        margin: 10px auto;
    }
`

export const UL__CATEGORIES = Styled.ul`
    width: 84%;
    height: 80px;
    margin: 0 auto;
    display: flex;
    overflow: auto;
    list-style: none;
`

export const DIV__OPTIONS = Styled.div`
    display: inline-grid;
    gap: 10px;
    padding: 5px 0;
    img {
        cursor: pointer;
        border-radius: 100%;
    }

`

export const DIV__EDIT_MODAL = Styled.div`
    background: white;
    border-radius: 10%;
    display: grid;
    place-content: center;
    width: 90%;
    height: 300px;
    margin: 0 auto;
    text-align: center;
    h2, label {
        font-weight: bold;
        font-size: 15px;
    }

    section, div {
        display: flex;
        align-items: center;
        justify-content: center;
    }
`

export const INPUT__EDIT_CATEGORY = Styled.input`
    width: 80%;
    margin: 0 auto;
    box-shadow: 2px 1px 4px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    background-color: #FFF;
    padding: 10px;
    border: 0;
`

export const INPUT__ICONS_LIST = Styled.section`
    display: flex;
    flex-wrap: wrap;
    width: 90%;
    justify-content: center;
    align-items: center;
`