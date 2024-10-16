import Spline from '@splinetool/react-spline';
import styled from 'styled-components';

type SplineObjectProps = {
  isVisible: boolean;
};

export const HomeWrapper = styled('div')`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0px;
  left: 0px;
`;

export const SplineObject = styled(Spline)<SplineObjectProps>`
  position: fixed;
  top: calc(50vh - 23vw + 2vw);
  left: 4vw;
  z-index: 100;
  opacity: 0;
  animation: fadeIn 2s forwards;
  animation-delay: 1s;

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  canvas {
    width: 46vw !important;
    height: 46vw !important;
  }
`;

export const Text = styled('h1')`
  font-family: 'Poppins';
  font-size: 24vw;
  font-weight: 600;
  width: 100%;
  height: 600px;
  line-height: 600px;
  text-align: center;
  letter-spacing: -1.1vw;
  margin-left: -0.9vw;
  position: fixed;
  top: calc(50vh - 300px);

  background: ${({ theme }) =>
    `linear-gradient(120deg, ${theme.color.gray[100]} 0%, ${theme.color.black} 95%)`};
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
`;

export const SubText = styled('h2')`
  font-size: min(2rem, 4vw);
  font-weight: 500;
  width: 100%;
  position: fixed;
  top: calc(50vh + 12vw + 50px);
  text-align: center;
  color: ${({ theme }) => theme.color.gray[500]};
`;
