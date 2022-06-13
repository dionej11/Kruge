import styled from 'styled-components';
import GlobalStyle from '@styles/globalStyles';

const BUTTON_TEMPLATE = styled.button`
  align-items: center;
  background: ${props => GlobalStyle.COLORS[props.color] || props.color};
  border: none;
  border-radius: 1.25rem;
  color: #ffffff;
  cursor: pointer;
  display: flex;
  font-size: 0.875rem;
  justify-content: space-evenly;
  text-align: center;
`;

export const INOUT__button = styled(BUTTON_TEMPLATE)`
  height: 2.1rem;
  width: 7rem;
`;

export const SAVE__button = styled(BUTTON_TEMPLATE)`
  height: 3rem;
  font-size: 1rem;
  width: 12rem;
`;

export const LOGIN__button = styled(BUTTON_TEMPLATE)`
  background: #192B3A;
  color: ${GlobalStyle.COLORS.azul};
  height: 2rem;
  width: 12.5rem;
`;

export const INOUT__section = styled.section`
  display: flex;
  background: ${props => props.fill};
  width: max-content;
  border-radius: 4rem;
`;


