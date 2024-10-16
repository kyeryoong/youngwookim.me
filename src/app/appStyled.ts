import styled from 'styled-components';

export const AppWrapper = styled('body')`
  &::-webkit-scrollbar {
    width: 15px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.color.gray[800]};
    background-clip: padding-box;
  }

  &::-webkit-scrollbar-track {
    background-color: ${({ theme }) => theme.color.black};
  }

  opacity: 0;
  animation-name: FadeIn;
  animation-duration: 0.5s;
  animation-fill-mode: forwards;
  transition: 0.5s;

  @keyframes FadeIn {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }
`;
