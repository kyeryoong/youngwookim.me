import { ChevronLeft, ChevronRight } from 'react-bootstrap-icons';
import styled from 'styled-components';

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

export const ArrowButtonWrapper = styled('div')`
  width: min(490px, 70vw);
  height: 200px;
  position: fixed;
  left: calc(50vw - min(245px, 35vw));
  bottom: calc((100dvh - min(490px, 70vw) - 200px) / 2);
  transition: 0.5s;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ArrowButton = styled('button')`
  width: min(15vw, 60px);
  height: min(15vw, 60px);
  color: ${({ theme }) => theme.color.white};
  background-color: transparent;
  border: none;
  margin: 0px;
  cursor: pointer;
  transition: 0.5s;

  &:disabled {
    opacity: 0.5;
    cursor: default;
  }
`;

export const LeftButton = styled(ArrowButton)`
  margin-left: calc(-1 * min(15vw, 60px));
`;

export const RightButton = styled(ArrowButton)`
  margin-right: calc(-1 * min(15vw, 60px));
`;

export const LeftIcon = styled(ChevronLeft)`
  width: 50%;
  height: 50%;
`;

export const RightIcon = styled(ChevronRight)`
  width: 50%;
  height: 50%;
`;
