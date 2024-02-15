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
`;
