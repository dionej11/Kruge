import Styled from 'styled-components';
import GlobalStyles from '@styles/globalStyles';

export const PROGRESS_BAR__section = Styled.section`
  background: #FFFFFF;
  border-radius: 10%;
  height: 18rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2rem auto;
  width: 18rem;
  position: relative;
  top: -6rem;
  z-index: 100;
`;

export const SKILL__div = Styled.div`
  width: 15rem;
  height: 15rem;
  position: relative;
`;

export const OUTER__div = Styled.div`
  width: 15rem;
  height: 15rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  box-shadow: 6px 6px 10px -1px rgba(0,0,0,0.15), -6px -6px 10px -1px rgba(255,255,255,0.7);
`;

export const INNER__div = Styled.div`
  height: 12.5rem;
  width: 12.5rem;
  margin:0;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  box-shadow: inset 4px 4px 6px -1px rgba(0,0,0,0.2), inset -4px -4px 6px -1px rgba(255,255,255,0.7), -0.5px -0.5px 0px rgba(255,255,255,1), 0.5px 0.5px 0px rgba(0,0,0,0.15), 0px 12px 10px -10px rgba(0,0,0,0.05);
`;

export const TOTAL_MONEY__h2 = Styled.h2`
  font-size: 2rem;
  z-index: 1;
  background: ${GlobalStyles.COLORS.principal};
  background: -webkit-linear-gradient(to bottom, ${GlobalStyles.COLORS.principal}, ${GlobalStyles.COLORS.secundario});
  background: linear-gradient(to bottom, ${GlobalStyles.COLORS.principal}, ${GlobalStyles.COLORS.secundario});
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
`;

const PROGRESS_BAR = Styled.svg`
  position: absolute;
  top:0;
  left:0;
  height: 240px;
  width: 240px;
`;

export const PROGRESS_IN__svg = Styled(PROGRESS_BAR)`
  transform: rotate(12deg);
`;

export const PROGRESS_OUT__svg = Styled(PROGRESS_BAR)`
  transform: scaleY(-1);
`;

const PROGRESS_STROKE__circle = Styled.circle`
  cx: 120;
  cy: 120;
  r: 110;
  stroke-linecap: round;
  fill: none;
  stroke-width: 20px;
  stroke-dasharray: 670;
  stroke-dashoffset: 649;
`;

export const STROKE_IN___circle = Styled(PROGRESS_STROKE__circle)`
  stroke: ${GlobalStyles.COLORS.principal};
  animation: animUno 2s linear forwards;
  
  @keyframes animUno {
    100% {
      stroke-dashoffset: ${props => props.valueStroke};
    }
  }
`;

export const STROKE_OUT___circle = Styled(PROGRESS_STROKE__circle)`
  stroke: ${GlobalStyles.COLORS.secundario};
  animation: animDos 2s linear forwards;
  
  @keyframes animDos {
    100% {
      stroke-dashoffset: ${props => props.valueStroke};
    }
  }
`;