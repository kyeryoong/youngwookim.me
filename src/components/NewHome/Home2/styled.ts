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
  width: 26vw !important;
  height: 26vw !important;
  background-color: transparent !important;
  position: absolute;
  top: calc(50vh - 13vw + 1.3vw);
  left: 47vw;
  z-index: 100;

  canvas {
    width: 26vw !important;
    height: 26vw !important;
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
  letter-spacing: -2.7vw;
  margin-left: -1.8vw;
  color: ${({ theme }) => theme.color.white};
  position: absolute;
  top: calc(50vh - 300px);
`;

export const TextGradient = styled('div')`
  width: calc(100vw);
  height: 600px;
  line-height: 600px;
  position: absolute;
  top: calc(50vh - 300px);
  background: ${({ theme }) =>
    theme.mode === 'dark'
      ? `linear-gradient(120deg, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.1) 80%)`
      : `linear-gradient(120deg, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.1) 80%)`};
`;

export const Highlight = styled('span')`
  font-family: 'Poppins';
  font-size: 24vw;
  font-weight: 600;
  letter-spacing: -2.7vw;
  opacity: 0;
`;
