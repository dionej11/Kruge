import styled from 'styled-components';
import GlobalStyle from '@styles/globalStyles';

export const BasicButton = ({color, children, width, height, onClick}) => {
    console.log(color)
    return (
        <BASIC_BTN_STYLE__button 
            color={color}
            width={width}
            height={height}
            onClick={onClick}>
            {children}
        </BASIC_BTN_STYLE__button>
    );
}
/**Styles**/
const BASIC_BTN_STYLE__button = styled.button`
    width: ${props => props.width?props.width:"7rem"};
    height: ${props => props.height?props.height:"2.2rem"};
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    background: ${props => GlobalStyle.COLORS[props.color] || props.color};
    border: none;
    border-radius: 1.25rem;
    text-align: center;
    color: #ffffff;
    font-size: 0.875rem;
    text-transform: capitalize;
    cursor: pointer;
`