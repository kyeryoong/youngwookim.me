import styled from 'styled-components';

export const AppWrapper = styled('div')`
  height: 100dvh;
  transition: 0.5s;

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
`;
