import styled from 'styled-components';
import { COLORS, easyMove } from './style-constants';

const MarkerStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 36px;
  height: 36px;
  font-size: 10px;
  color: #fff;
  text-transform: uppercase;
  border: 2px solid #fff;
  border-radius: 50%;
  background-color: ${COLORS.gray64};
  background-size: cover;
  background-position: center;
  transition: transform 0.1s;
  animation: ${easyMove} 0.3s;
  &:hover {
    border-radius:0%;
    transform: scale(5);
    background-color:${COLORS.hovercolor}

  }
`;


export default MarkerStyled;