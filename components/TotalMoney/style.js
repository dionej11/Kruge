import Styled from 'styled-components';
import GlobalStyles from '@styles/globalStyles';

export const CONTAINER_TOLTA_MONEY__section = Styled.section`
  background: white;
  position: relative;
  top: -50px;
  z-index: 20;
  width: min-content;
  height: 290px;
  margin: 0 auto;
  border-radius: 20px;
  padding: 5px;
  box-sizing: border-box;
  box-shadow: 2px 1px 4px rgba(0, 0, 0, 0.1);

  div:first-child {
    z-index:20;
    right: -1px;
  }
  div:last-child {
    transform: scaleX(-1);
    top: -280px;
    /* transform: rotate(190deg); */
  }
`
export const PROGRESS_BAR__div = Styled.div`
  width: ${props => props.width};
  aspect-ratio: 1;
  position: relative;
  display: inline-grid;
  margin: 5px;
  place-content: center;
  font-size: 25px;
  font-weight: bold;
  font-size: 1.8rem;
  background: ${GlobalStyles.COLORS.principal};
  background: -webkit-linear-gradient(to bottom, ${GlobalStyles.COLORS.principal}, ${GlobalStyles.COLORS.secundario});
  background: linear-gradient(to bottom, ${GlobalStyles.COLORS.principal}, ${GlobalStyles.COLORS.secundario});
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;

  &:before,
  &:after {
    content:"";
    position: absolute;
    border-radius: 50%;
  }
  &:before {
    inset:0;
    background:
      radial-gradient(farthest-side,${props => props.color} 98%,#0000) top/${props => props.border} ${props => props.border} no-repeat,
      conic-gradient(${props => props.color} calc(${props => props.porcentage}*1%),#0000 0);
    -webkit-mask: radial-gradient(farthest-side,#0000 calc(99% - ${props => props.border}),#000 calc(100% - ${props => props.border}));
    mask: radial-gradient(farthest-side,#0000 calc(99% - ${props => props.border}),#000 calc(100% - ${props => props.border}));
  }
  &:after {
    inset: calc(50% - ${props => props.border}/2);
    background: ${props => props.color};
    transform: rotate(calc(${props => props.porcentage}*3.6deg)) translateY(calc(50% - ${props => props.width}/2));
  }
`