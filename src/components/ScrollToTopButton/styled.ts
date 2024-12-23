import { ChevronUp } from 'react-bootstrap-icons';
import styled from 'styled-components';

type ScrollToTopButtonWrapperProps = {
  $show: boolean;
};

export const ScrollToTopButtonWrapper = styled('button')<ScrollToTopButtonWrapperProps>`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  outline: none;
  border: none;
  color: ${({ theme }) => theme.color.white};
  background-color: ${({ theme }) => theme.color.gray[950]};
  position: fixed;
  bottom: ${({ $show }) => ($show ? '8dvh' : '-200px')};
  box-shadow: 0px 0px 12px 5px rgba(50, 50, 50, 0.3);
  right: 100px;
  cursor: pointer;
  z-index: 1000;
  transition: 0.5s;

  &:hover {
    background-color: ${({ theme }) => theme.color.gray[900]};
    transform: scale(1.2);
  }

  &:active {
    background-color: ${({ theme }) => theme.color.gray[800]};
    transform: scale(1.2);
  }

  @media (pointer: coarse) or (max-width: 1000px) {
    width: min(10vw, 60px);
    height: min(10vw, 60px);
    right: 5vw;
  }
`;

export const ArrowUpIcon = styled(ChevronUp)`
  width: 50%;
  height: 50%;
`;
