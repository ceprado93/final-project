import { keyframes } from 'styled-components'

export const COLORS = {
  gray64: '#2763BF ',
  hovercolor: '#DEC33A'
};

export const easyMove = keyframes`
  from {
    transform: translateY(-10%);
    opacity: 0;
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;