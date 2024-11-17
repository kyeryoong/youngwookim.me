import styled from 'styled-components';

type Page1BackgroundProps = {
  showBackground: boolean;
};

type TextWrapperProps = {
  showBackground: boolean;
};

type KeywordWrapperProps = {
  progress: number;
};

type KeywordProps = {
  show: boolean;
  progress: number;
};

export const Page1Wrapper = styled('div')`
  width: 100%;
  height: 550dvh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.color.black};
  position: sticky;
  top: 0px;
`;

export const Page1Background = styled('div')<Page1BackgroundProps>`
  width: 100%;
  height: 100dvh;
  position: fixed;
  top: 0px;
  background: ${({ theme }) =>
    `linear-gradient(270deg, ${theme.color.cyan[300]}, ${theme.color.blue[700]})`};
  opacity: ${({ showBackground }) => (showBackground ? 1 : 0)};
  transition: 0.5s;
`;

export const TextWrapper = styled('div')<TextWrapperProps>`
  font-size: 3.6rem;
  font-weight: ${({ showBackground }) => (showBackground ? 200 : 500)};
  width: 100%;
  height: 100dvh;
  line-height: 75px;
  color: ${({ theme, showBackground }) =>
    showBackground ? 'rgba(255, 255, 255, 0.85)' : theme.color.white};
  position: fixed;
  top: 0px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  transition: 0.5s;

  @media (pointer: coarse) or (max-width: 1600px) {
    font-size: min(11vw, 3.6rem);
    line-height: min(12vw, 75px);
    flex-direction: column;
  }
`;

export const KeywordWrapper = styled('div')<KeywordWrapperProps>`
  width: ${({ progress }) =>
    progress === 0 ? '0px' : progress === 1 ? '575px' : progress === 2 ? '688px' : '787px'};
  height: 75px;
  text-align: center;
  color: white;
  white-space: nowrap;
  text-align: center;
  margin-left: ${({ progress }) => (progress ? '20px' : '8px')};
  margin-right: ${({ progress }) => (progress ? '20px' : '8px')};
  transform: ${({ progress }) =>
    progress <= 1
      ? 'translateY(0px)'
      : progress === 2
        ? 'translateY(-75px)'
        : 'translateY(-150px)'};
  transition: 0.5s;

  @media (pointer: coarse) or (max-width: 1600px) {
    width: 100vw;
    height: ${({ progress }) => (progress > 0 ? 'min(24vw, 150px)' : '0px')};
    transform: ${({ progress }) =>
      progress <= 1
        ? 'translateY(-0vw)'
        : progress === 2
          ? 'translateY(calc(-1 * min(24vw, 150px)))'
          : 'translateY(calc(-2 * min(24vw, 150px)))'};
  }
`;

export const Keyword = styled('h1')<KeywordProps>`
  font-size: 3.6rem;
  font-weight: 600;
  height: 75px;
  line-height: 75px;
  opacity: ${({ show }) => (show ? 1 : 0)};
  text-align: center;
  transition: 0.5s;

  br {
    display: none;
  }

  @media (pointer: coarse) or (max-width: 1600px) {
    font-size: min(11vw, 3.6rem);
    height: min(24vw, 150px);
    line-height: min(12vw, 75px);

    br {
      display: inline;
    }
  }
`;
