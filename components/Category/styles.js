import Styled from 'styled-components';
import GlobalStyle from '@styles/globalStyles';

export const SECTION__CATEGORIES = Styled.section`
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