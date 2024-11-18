import styled from 'styled-components';

type Title1Props = {
  progress: number;
};

type Title2Props = {
  show: boolean;
};

export const Page3Wrapper = styled('sec')`
  width: 100%;
  height: 400dvh;
  position: sticky;
  top: 0px;
`;

export const Scene1 = styled('div')`
  width: 100%;
  height: 100dvh;
  background-color: ${({ theme }) => theme.color.black};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

export const Title1Wrapper = styled('div')``;

export const Title1Top = styled('h1')<Title1Props>`
  font-size: 6rem;
  font-weight: 700;
  width: 100%;
  text-align: center;
  color: ${({ theme }) => theme.color.white};
  opacity: ${({ progress }) => (progress - 50) / 50};
  transform: ${({ progress }) =>
    progress < 100 ? `translateX(calc(-100% + ${progress}%))` : '0px'};
  transition: 0.1s;

  @media (pointer: coarse) or (max-width: 1000px) {
    font-size: min(10vw, 6rem);
  }
`;

export const Title1Bottom = styled('h1')<Title1Props>`
  font-size: 6rem;
  font-weight: 700;
  width: 100%;
  text-align: center;
  color: ${({ theme }) => theme.color.white};
  opacity: ${({ progress }) => (progress - 50) / 50};
  transform: ${({ progress }) =>
    progress < 100 ? `translateX(calc(100% - ${progress}%))` : '0px'};
  transition: 0.1s;

  @media (pointer: coarse) or (max-width: 1000px) {
    font-size: min(10vw, 6rem);
  }
`;

export const Scene2 = styled('div')`
  width: 100%;
  height: 100dvh;
  position: fixed;
  top: 50dvh;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  transition: 0.5s;
  background-color: ${({ theme }) => theme.color.black};

  @media (pointer: coarse) or (max-width: 1000px) {
    font-size: min(10vw, 6rem);
  }
`;

export const Title2Begin = styled('h1')<Title2Props>`
  font-size: 6rem;
  font-weight: 700;
  height: 400px;
  display: flex;
  align-items: center;
  color: white;
  transform: ${({ show }) =>
    show ? 'translateY(-25dvh) scale(0.8)' : 'translateY(0dvh) scale(1)'};
  opacity: ${({ show }) => (!show ? 1 : 0)};
  position: absolute;
  top: calc(50dvh - 200px);
  z-index: 1;
  transition: 0.5s;

  @media (pointer: coarse) or (max-width: 1000px) {
    font-size: min(10vw, 6rem);
  }
`;

export const Title2End = styled('h1')<Title2Props>`
  font-size: 6rem;
  font-weight: 700;
  height: 400px;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.color.white};
  background: ${({ theme }) =>
    `linear-gradient(90deg, ${theme.color.cyan[400]}, ${theme.color.green[400]})`};
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  transform: ${({ show }) =>
    show ? 'translateY(-25dvh) scale(0.8)' : 'translateY(0dvh) scale(1)'};
  opacity: ${({ show }) => (show ? 1 : 0)};
  position: absolute;
  top: calc(50dvh - 200px);
  z-index: 1;
  transition: 0.5s;

  @media (pointer: coarse) or (max-width: 1000px) {
    font-size: min(10vw, 6rem);
  }
`;

export const Scene2Background = styled('div')<Title2Props>`
  width: 100%;
  height: 100dvh;
  background: ${({ theme }) =>
    `linear-gradient(90deg, ${theme.color.cyan[300]}, ${theme.color.green[300]})`};
  position: absolute;
  top: 0px;
  left: 0px;
  opacity: ${({ show }) => (show ? 0 : 1)};
  transition: 0.5s;
`;
