import Styled from 'styled-components';
import GlobalStyles from '@styles/globalStyles';

export const CONTAINER_VALUE__section = Styled.section`
    background: white;
    position: relative;
    top: -50px;
    z-index: 20;
    width: 85%;
    margin: 0 auto;
    border-radius: 20px;
    padding: 1rem;
    box-sizing: border-box;
    box-shadow: 2px 1px 4px rgb(0 0 0 / 10%);
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;

    p {
        text-align: left;
        width: 100%;
        font-weight: 500;
    }
`
export const INPUT_DATA__div = Styled.div`
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
`
export const VALUE__input = Styled.input`
    width: 10rem;
    height: 1.5rem;
    border: none;
    border-bottom: 1px solid #BBBBBB;
    background: none;
    outline: none;
    text-align: end;
    font-size: 1rem;
    font-weight: 600;
    font-family: 'Roboto', sans-serif;
    color: ${props => props.typeTran.type === 'ingreso'? '#5C5CD1': "#FF6565"};

`
export const SELECTED__div = Styled.div`
    img {
        border-radius: 100%;
    }
    button {
        display: flex;
        justify-content: space-between;
        gap: 10px;
        align-items: center;
        outline: none;
        background: none;
        border: none;
        cursor: pointer;
    }
`
export const ARROW = Styled.span`
    font-family: monospace;
    font-weight: 700;
    font-size: 1rem;
    transform: rotate(90deg);
`
export const OPTIONS__div = Styled.div`
    display: inline-grid;
    gap: 10px;
    padding: 5px 0;
    img {
        cursor: pointer;
        border-radius: 100%;
    }

`