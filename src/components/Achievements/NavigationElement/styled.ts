import styled from 'styled-components';

type NavigationElementProps = {
  isFocused: boolean;
};

type ButtonWrapperProps = {
  isFocused: boolean;
};

type ProgressBarProps = {
  isFocused: boolean;
  progress: number;
};

export const NavigationElement = styled('div')<NavigationElementProps>`
  width: 100%;
  height: 100%;
  position: relative;
`;

export const Info = styled('div')`
  display: flex;
  flex-direction: row;
  gap: 8px;
`;

export const TitleWrapper = styled('div')<NavigationElementProps>`
  width: 80%;
  cursor: ${({ isFocused }) => (isFocused ? 'default' : 'pointer')};
  transition: 0.5s;

  &:hover {
    h2,
    h3 {
      opacity: 1;
    }
  }

  @media (pointer: coarse) or (max-width: 1000px) {
    width: 95%;
    transform: ${({ isFocused }) => (isFocused ? 'scale(1)' : 'scale(0)')};
    transform-origin: top left;

    &:hover {
      h2,
      h3 {
        opacity: ${({ isFocused }) => (isFocused ? 1 : 0)};
      }
    }
  }
`;

export const Index = styled('h1')<NavigationElementProps>`
  font-size: 6rem;
  color: ${({ theme }) => theme.color.white};
  margin-top: -32px;
  margin-bottom: 8px;
  opacity: ${({ isFocused }) => (isFocused ? 1 : 0.6)};
  transition: 0.5s;

  @media (pointer: coarse) or (max-width: 1000px) {
    font-size: min(12vw, 6rem);
  }
`;

export const KoreanTitle = styled('h2')<NavigationElementProps>`
  font-size: ${({ isFocused }) => (isFocused ? '1.6rem' : '1rem')};
  font-weight: 500;
  color: ${({ theme }) => theme.color.white};
  word-break: keep-all;
  opacity: ${({ isFocused }) => (isFocused ? 1 : 0.6)};
  transition: 0.5s;

  @media (pointer: coarse) or (max-width: 1000px) {
    font-size: ${({ isFocused }) => (isFocused ? 'min(3.2vw, 1.6rem)' : 'min(2vw, 1rem)')};
    opacity: ${({ isFocused }) => (isFocused ? 1 : 0)};
  }
`;

export const EnglishTitle = styled('h3')<NavigationElementProps>`
  font-size: ${({ isFocused }) => (isFocused ? '1.2rem' : '0.8rem')};
  font-weight: 400;
  color: ${({ theme }) => theme.color.white};
  margin-top: ${({ isFocused }) => (isFocused ? '4px' : '2px')};
  word-break: keep-all;
  opacity: ${({ isFocused }) => (isFocused ? 1 : 0.6)};
  transition: 0.5s;

  @media (pointer: coarse) or (max-width: 1000px) {
    font-size: ${({ isFocused }) => (isFocused ? 'min(2.4vw, 1.2rem)' : 'min(1.6vw, 0.8rem)')};
    opacity: ${({ isFocused }) => (isFocused ? 1 : 0)};
  }
`;

export const Label = styled('h2')<NavigationElementProps>`
  font-size: ${({ isFocused }) => (isFocused ? '3.6rem' : '2rem')};
  font-weight: 600;
  color: ${({ theme }) => theme.color.white};
  margin-top: ${({ isFocused }) => (isFocused ? '6px' : '3px')};
  word-break: keep-all;
  opacity: ${({ isFocused }) => (isFocused ? 1 : 0.6)};
  transition: 0.5s;

  @media (pointer: coarse) or (max-width: 1000px) {
    font-size: ${({ isFocused }) => (isFocused ? 'min(7.2vw, 3.6rem)' : 'min(4vw, 2rem)')};
    opacity: ${({ isFocused }) => (isFocused ? 1 : 0)};
  }
`;

export const ButtonWrapper = styled('div')<ButtonWrapperProps>`
  margin-top: 8px;
  opacity: ${({ isFocused }) => (isFocused ? 1 : 0)};
  pointer-events: ${({ isFocused }) => (isFocused ? 'default' : 'none')};
  transition: 0.5s;
`;

export const ProgressBarWrapper = styled('div')`
  width: 100%;
  height: 2px;
  background-color: ${({ theme }) =>
    theme.mode === 'dark' ? 'rgba(255, 255, 255, 0.3)' : 'rgba(0, 0, 0, 0.3)'};
  position: absolute;
  bottom: 0px;
`;

export const ProgressBar = styled('div')<ProgressBarProps>`
  width: ${({ progress }) => `${progress * 11.11}%`};
  height: 2px;
  background-color: ${({ theme }) => theme.color.white};
  opacity: ${({ isFocused }) => (isFocused ? 1 : 0)};
  transition: width 1s linear;
`;
