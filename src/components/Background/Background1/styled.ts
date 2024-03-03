import styled from 'styled-components';

type HeadingProps = {
  $delay?: number;
};

export const BackgroundWrapper = styled('div')`
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.color.black};
  display: flex;
  align-items: center;
  justify-content: center;
  animation-name: FadeIn;
  animation-duration: 1s;
  animation-delay: 1s;
  animation-fill-mode: forwards;
  opacity: 0;

  @keyframes FadeIn {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }
`;

export const HeadingWrapper = styled('div')`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0px;
  left: 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 100;
`;

export const Heading = styled('span')<HeadingProps>`
  font-size: ${({ theme }) => theme.font.xxxxxl};
  font-weight: 700;
  color: white;
  background: ${({ theme }) =>
    theme.mode === 'dark'
      ? `linear-gradient(180deg, ${theme.color.white} 20%, ${theme.color.gray[500]} 90%)`
      : `linear-gradient(180deg, ${theme.color.gray[500]} 20%, ${theme.color.white} 90%)`};
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: Float 1.5s;
  animation-fill-mode: forwards;
  animation-delay: ${({ $delay }) => ($delay ? `${$delay / 1000}s` : '0s')};
  opacity: 0;
  transform: translateY(50px);

  @keyframes Float {
    0% {
      opacity: 0;
      transform: translateY(50px);
    }

    100% {
      opacity: 1;
      transform: translateY(0px);
    }
  }

  @media (pointer: coarse) or (max-width: 1000px) {
    font-size: ${({ theme }) => theme.font.mobile.xxxxxl};
  }
`;

export const Asterisk = styled('video')`
  width: 27vw;
  height: 27vw;
  min-width: 450px;
  min-height: 450px;
  position: fixed;
  bottom: 0vw;
  left: -2.5vw;
  z-index: 1;

  @media (pointer: coarse) or (max-width: 800px) {
    width: 48vw;
    height: 48vw;
    min-width: 48vw;
    height: 48vw;
  }
`;

export const ComponentSymbol = styled('video')`
  width: 36vw;
  height: 27vw;
  min-width: 600px;
  min-height: 450px;
  position: fixed;
  top: -5vw;
  right: -7.5vw;
  z-index: 1;

  @media (pointer: coarse) or (max-width: 800px) {
    width: 65vw;
    height: 48vw;
    min-width: 65vw;
    height: 48vw;
  }
`;
