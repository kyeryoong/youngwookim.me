'use client';
import styled from 'styled-components';

export const Wrapper = styled('div')`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.color.black};
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
`;

export const Heading = styled('span')<{ delay?: number }>`
  font-size: 4rem;
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
  z-index: 100;

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
