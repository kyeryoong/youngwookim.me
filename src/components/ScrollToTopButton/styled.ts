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
  background-color: ${({ theme }) => theme.color.gray[800]};
  position: fixed;
  bottom: ${({ $show }) => ($show ? '8dvh' : '-200px')};
  box-shadow: 0px 0px 12px 5px rgba(50, 50, 50, 0.3);
  right: 100px;
  cursor: pointer;
  z-index: 1000;
  transition: 0.5s;

  &:hover {
    background-color: ${({ theme }) => theme.color.gray[700]};
    transform: scale(1.2);
  }

  @media (pointer: coarse) or (max-width: 1000px) {
    width: 40px;
    height: 40px;
    right: 5vw;
  }
`;

export const ArrowUpIcon = styled(ChevronUp)`
  width: 30px;
  height: 30px;

  @media (pointer: coarse) or (max-width: 1000px) {
    width: 20px;
    height: 20px;
  }
`;
