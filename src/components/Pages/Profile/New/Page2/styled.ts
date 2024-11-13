import { Rocket } from 'react-bootstrap-icons';
import { styled } from 'styled-components';

type DaysValueProps = {
  show: boolean;
};

type DaysLabelProps = {
  isFinished: boolean;
};

type ProgressBarProps = {
  progress: number;
};

export const Page2Wrapper = styled('div')`
  width: 100%;
  height: 300dvh;
  background-color: ${({ theme }) => theme.color.black};
  top: 0px;
  position: sticky;
`;

export const DaysWrapper = styled('div')`
  width: 100%;
  height: 100dvh;
  display: grid;
  grid-template-columns: repeat(2, fit-content(100%));
  align-content: center;
  align-items: start;
  justify-content: center;
  gap: 16px;
  transition: 0.5s;
`;

export const DaysValue = styled('h1')<DaysValueProps>`
  font-size: 24rem;
  font-weight: 700;
  height: 18rem;
  color: ${({ theme }) => theme.color.white};
  text-align: center;
  letter-spacing: -24px;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: ${({ show }) => (show ? 1 : 0)};
  transition: 0.5s;

  @media (pointer: coarse) or (max-width: 1200px) {
    font-size: min(28vw, 24rem);
    height: min(21vw, 18rem);
    letter-spacing: calc(-1 * min(2vw, 24px));
  }
`;

export const DaysLabel = styled('h2')<DaysLabelProps>`
  font-size: 3rem;
  font-weight: 300;
  width: fit-content;
  max-width: ${({ isFinished }) => (isFinished ? '30vw' : '0px')};
  color: ${({ theme }) => theme.color.white};
  overflow: hidden;
  white-space: nowrap;
  opacity: ${({ isFinished }) => (isFinished ? 1 : 0)};
  transition: 1.5s;

  @media (pointer: coarse) or (max-width: 1200px) {
    font-size: min(3vw, 3rem);
  }
`;

export const ProgressWrapper = styled('div')<ProgressBarProps>`
  width: ${({ progress }) => `${progress}%`};
  position: fixed;
  bottom: 10dvh;
`;

export const ProgressBar = styled('div')`
  height: 4px;
  background: linear-gradient(270deg, #00beff, #0038d7 20vw);
`;

export const ProgressIcon = styled(Rocket)`
  width: 48px;
  height: 48px;
  padding: 8px;
  transform: translateY(calc(-50% - 2px)) rotate(90deg);
  color: ${({ theme }) => theme.color.white};
  background-color: ${({ theme }) => theme.color.black};
  position: absolute;
  right: 0px;
`;
