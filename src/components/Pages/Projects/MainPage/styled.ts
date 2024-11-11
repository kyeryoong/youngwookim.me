import styled from 'styled-components';

const selectedWidth = 'min(480px, 64vw)';
const arrowButtonWidth = 'min(92vw, 720px)';
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

export const PaginationWrapper = styled('div')`
  width: 100vw;
  display: flex;
  justify-content: center;
  position: fixed;
  bottom: 10dvh;
`;
