import { keyframes } from 'styled-components';

export const COLORS = {
  gray64: 'blue',
  hovercolor: 'cyan'
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