import styled from 'styled-components';

type PaginationWrapperProps = {
  size: number;
};

type DotButtonProps = {
  size: number;
};

type DotProps = {
  size: number;
  isSelcted: boolean;
};

export const PaginationWrapper = styled('section')<PaginationWrapperProps>`
  width: fit-content;
  height: ${({ size }) => `${size}px`};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ size }) => `min(${size * 0.125}vw, ${size * 0.75}px)`};
`;

export const DotButton = styled('button')<DotButtonProps>`
  width: ${({ size }) => `${size * 2}px`};
  height: ${({ size }) => `${size * 2}px`};
  background-color: transparent;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    div {
      background-color: ${({ theme }) => theme.color.white};
      opacity: 1;
    }
  }
`;

export const Dot = styled('div')<DotProps>`
  width: ${({ size, isSelcted }) => (isSelcted ? `${size}px` : `${size * 0.75}px`)};
  height: ${({ size, isSelcted }) => (isSelcted ? `${size}px` : `${size * 0.75}px`)};
  border-radius: ${({ size }) => `${size}px`};
  background-color: ${({ theme, isSelcted }) =>
    isSelcted ? theme.color.gray[200] : theme.color.gray[700]};
  opacity: ${({ isSelcted }) => (isSelcted ? 1 : 0.5)};
  box-shadow: 0px 2px 4px 1px rgba(50, 50, 50, 0.5);
  transition: 0.2s;
`;
