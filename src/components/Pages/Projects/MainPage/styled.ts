import styled from 'styled-components';

type DotProps = {
  isSelcted: boolean;
};

const selectedWidth = 'min(480px, 64vw)';
const arrowButtonWidth = 'min(100vw, 800px)';
const halfArrowButtonWidth = `calc(${arrowButtonWidth} / 2)`;

export const MainPageWrapper = styled('div')`
  width: 100vw;
  height: 100dvh;
  background-color: ${({ theme }) => theme.color.black};
  position: fixed;
  top: 0px;
  left: 0px;
  display: flex;
  align-items: center;
`;

export const ProjectItemsWrapper = styled('div')`
  display: flex;
`;

export const ArrowButtonWrapper = styled('div')`
  width: ${arrowButtonWidth};
  height: 200px;
  position: fixed;
  left: calc(50vw - ${halfArrowButtonWidth});
  bottom: calc((100dvh - ${selectedWidth} - 200px) / 2);
  transition: 0.5s;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Pagination = styled('div')`
  width: 100vw;
  height: 12px;
  position: fixed;
  bottom: 10dvh;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: min(4vw, 16px);
`;

export const Dot = styled('div')<DotProps>`
  width: ${({ isSelcted }) => (isSelcted ? '12px' : '8px')};
  height: ${({ isSelcted }) => (isSelcted ? '12px' : '8px')};
  border-radius: 14px;
  background-color: ${({ theme, isSelcted }) =>
    isSelcted ? theme.color.gray[200] : theme.color.gray[700]};
  transition: 0.5s;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.color.white};
  }
`;
