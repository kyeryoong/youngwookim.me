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
  width: 800px !important;
  height: 800px !important;
  background-color: transparent !important;
  z-index: 100;

  canvas {
    width: 800px !important;
    height: 800px !important;
    background-color: transparent !important;
  }

  @media (pointer: coarse) or (max-width: 1000px) {
    width: min(80vw, 800px) !important;
    height: min(80vw, 800px) !important;

    canvas {
      width: min(80vw, 800px) !important;
      height: min(80vw, 800px) !important;
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
  background: ${({ degree }) => `linear-gradient(${degree}deg, #00beff, #0038d7)`};
  background-clip: text;
  -webkit-background-clip: text;

  @media (pointer: coarse) or (max-width: 1000px) {
    font-size: min(9.6vw, 4.8rem);
  }
`;
