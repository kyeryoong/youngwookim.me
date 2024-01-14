'use client';
import styled from 'styled-components';

export const Wrapper = styled('div')`
  width: 100vw;
  height: 100vh;
  background-color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled('span')<{ delay?: number }>`
  font-size: 3rem;
  font-weight: 700;
  width: 100vw;
  text-align: center;
  display: block;
  background: linear-gradient(180deg, rgb(255, 255, 255) 20%, rgb(180, 180, 180) 90%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: Float 2s;
  animation-fill-mode: forwards;
  animation-delay: ${({ delay }) => `${delay}s`};
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
