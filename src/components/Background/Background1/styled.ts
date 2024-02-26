import styled from 'styled-components';

type HeadingProps = {
  delay?: number;
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
  font-size: ${({ theme }) => theme.font.xxxxl};
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
  animation-delay: ${({ delay }) => (delay ? `${delay / 1000}s` : '0s')};
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
`;

export const Asterisk = styled('video')`
  width: 30vw;
  height: 30vw;
  position: fixed;
  bottom: 5vw;
  left: -5vw;
  z-index: 1;
`;

export const ComponentSymbol = styled('video')`
  width: 32vw;
  height: 24vw;
  position: fixed;
  top: -5vw;
  right: -5vw;
  z-index: 1;
`;

export const ArrowFunction = styled('video')`
  width: 50vw;
  height: 25vw;
  position: fixed;
  bottom: -5vw;
  right: 5vw;
  z-index: 1;
`;
