import styled from 'styled-components';

type PaginationWrapperProps = {
  size: number;
};

type DotProps = { size: number; isSelcted: boolean };

export const PaginationWrapper = styled('div')<PaginationWrapperProps>`
  width: fit-content;
  height: ${({ size }) => `${size}px`};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ size }) => `min(${size * 0.5}vw, ${size * 1.5}px)`};
`;

export const Dot = styled('div')<DotProps>`
  width: ${({ size, isSelcted }) => (isSelcted ? `${size}px` : `${size * 0.75}px`)};
  height: ${({ size, isSelcted }) => (isSelcted ? `${size}px` : `${size * 0.75}px`)};
  border-radius: ${({ size }) => `${size}px`};
  background-color: ${({ theme, isSelcted }) =>
    isSelcted ? theme.color.gray[200] : theme.color.gray[700]};
  transition: 0.5s;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.color.white};
  }
`;
