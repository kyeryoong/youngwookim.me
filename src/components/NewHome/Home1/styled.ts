import Spline from '@splinetool/react-spline';
import styled from 'styled-components';

type SplineObjectProps = {
  isVisible: boolean;
};

export const HomeWrapper = styled('div')`
  width: 100vw;
  height: 100vh;
  position: relative;
  background-color: ${({ theme }) => theme.color.black};
  overflow: hidden;
`;

export const SplineObject = styled(Spline)<SplineObjectProps>`
  width: 46vw !important;
  height: 46vw !important;
  background-color: transparent !important;
  position: absolute;
  top: calc(50vh - 23vw + 2vw);
  left: 3.5vw;
  z-index: 100;
  opacity: 0;
  transform: scale(0);
  animation: fadeIn 2s forwards;
  animation-delay: 1.5s;

  @keyframes fadeIn {
    0% {
      opacity: 0;
      transform: scale(0);
    }
    100% {
      opacity: 1;
      transform: scale(1);
    }
  }

  canvas {
    width: 46vw !important;
    height: 46vw !important;
    background-color: transparent !important;
  }
`;

export const Text = styled('h1')`
  font-family: 'Poppins';
  font-size: 24vw;
  font-weight: 600;
  width: 100vw;
  height: 600px;
  line-height: 600px;
  text-align: center;
  letter-spacing: -0.92vw;
  margin-left: -1.7vw;
  color: ${({ theme }) => theme.color.white};
  position: absolute;
  top: calc(50vh - 300px);
  transform: scale(2);
  opacity: 1;
  animation: zoomIn 2s forwards;

  @keyframes zoomIn {
    0% {
      transform: scale(2);
      opacity: 0;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }
`;

export const TextGradient = styled('div')`
  width: calc(100vw);
  height: 600px;
  line-height: 600px;
  position: absolute;
  top: calc(50vh - 300px);
  background: ${({ theme }) =>
    theme.mode === 'dark'
      ? `linear-gradient(120deg, rgba(0, 0, 0, 0.1) 20%, rgba(0, 0, 0, 0.9) 100%)`
      : `linear-gradient(120deg, rgba(255, 255, 255, 0.1) 20%, rgba(255, 255, 255, 0.9) 100%)`};
`;

export const Highlight = styled('span')`
  font-family: 'Poppins';
  font-size: 24vw;
  font-weight: 600;
  letter-spacing: -0.92vw;
  opacity: 1;
  animation: zoomOut 1s forwards;
  animation-delay: 2s;

  @keyframes zoomOut {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;
