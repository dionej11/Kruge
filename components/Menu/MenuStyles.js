import styled from 'styled-components';
import GlobalStyle from '@styles/globalStyles';

export const MENU__MENU = styled.menu`
  align-items: center;
  background: #FFFFFF;
  border-radius: 30px 30px 0px 0px;
  bottom: 0;
  box-shadow: 0px 1px 15px -3px rgba(161,159,161,1);
  display: flex;
  height: 5rem;
  left: 0;
  margin: 0;
  padding: 0;
  position: fixed;
  right: 0;
  z-index: 99;
  -webkit-box-shadow: 0px 1px 15px -3px rgba(161,159,161,1);
  -moz-box-shadow: 0px 1px 15px -3px rgba(161,159,161,1);
`;

export const MENU__UL = styled.ul`
  align-items: center;
  display: flex;
  font-size: 1rem;
  height: 100%;
  justify-content: space-around;
  list-style: none;
  margin: 0;
  padding: 0;
  width: 100%;
`;

export const MENU__LI = styled.li`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 60%;
  justify-content: end;
  font-weight: ${props => props.weight};
  
  & a {
    text-decoration: none;
    color: #000000;
  }
`;

export const ADD_BUTTON = styled.button`
  background: ${GlobalStyle.COLORS.principal};
  border: none;
  border-radius: 2rem;
  color: #FFFFFF;
  cursor: pointer;
  font-size: 2rem;
  height: 3rem;
  text-align: center;
  width: 3rem;
`;

export const INDICATOR__DIV = styled.div`
  background: ${GlobalStyle.COLORS.principal};
  width: 10px;
  height: 10px;
  border-radius: 1rem;
  opacity: ${props => props.opacity};
`; 