import styled from 'styled-components';

export const GradientBackgroundWrapper = styled('div')`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: 100px;
  background: linear-gradient(135deg, transparent 30%, white 50%, transparent 70%);
  opacity: 0.3;
  background-size: 200% 200%;
  animation-name: gradient;
  animation-duration: 2s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;

  @keyframes gradient {
    0% {
      background-position: 200% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;
