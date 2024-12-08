import Spline from '@splinetool/react-spline';
import styled from 'styled-components';

type SplineObjectWrapper = {
  show: boolean;
};

type HighlightProps = {
  degree: number;
};

export const HomeWrapper = styled('div')`
  width: 100vw;
  height: 100dvh;
  position: relative;
  background-color: ${({ theme }) => theme.color.black};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SplineObject = styled(Spline)<SplineObjectWrapper>`
  width: 1000px !important;
  height: 1000px !important;
  background-color: transparent !important;
  position: absolute;
  z-index: 100;
  opacity: 0;
  transform: scale(0);
  animation: ${({ show }) => show && 'fadeIn 2s forwards'};
  animation-delay: 1s;

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
    width: 1000px !important;
    height: 1000px !important;
    background-color: transparent !important;
  }

  @media (pointer: coarse) or (max-width: 1000px) {
    width: min(120vw, 1000px) !important;
    height: min(120vw, 1000px) !important;

    canvas {
      width: min(120vw, 1000px) !important;
      height: min(120vw, 1000px) !important;
    }
  }
`;

export const TitleTop = styled('h1')`
  font-size: 4.8rem;
  font-weight: 600;
  color: transparent;
  background: ${({ theme }) =>
    `linear-gradient(90deg, ${theme.color.gray[500]}, ${theme.color.white})`};
  background-clip: text;
  -webkit-background-clip: text;
  position: absolute;
  top: 15dvh;
  left: 100px;

  @media (pointer: coarse) or (max-width: 1000px) {
    font-size: min(9.6vw, 4.8rem);
    left: 5vw;
  }
`;

export const TitleBottom = styled('h1')`
  font-size: 4.8rem;
  font-weight: 600;
  color: transparent;
  background: ${({ theme }) =>
    `linear-gradient(90deg, ${theme.color.white}, ${theme.color.gray[500]})`};
  background-clip: text;
  -webkit-background-clip: text;
  text-align: right;
  position: absolute;
  bottom: 12dvh;
  right: 100px;

  @media (pointer: coarse) or (max-width: 1000px) {
    font-size: min(9.6vw, 4.8rem);
    right: 5vw;
  }
`;

export const Highlight = styled('span')<HighlightProps>`
  font-size: 4.8rem;
  font-weight: 600;
  color: transparent;
  background: ${({ theme, degree }) =>
    `linear-gradient(${degree}deg, ${theme.color.youngBlue}, ${theme.color.youngLightBlue})`};
  background-clip: text;
  -webkit-background-clip: text;

  @media (pointer: coarse) or (max-width: 1000px) {
    font-size: min(9.6vw, 4.8rem);
  }
`;
