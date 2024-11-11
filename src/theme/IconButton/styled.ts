import { ChevronLeft, ChevronRight, XLg } from 'react-bootstrap-icons';
import styled from 'styled-components';

type IconButtonWrapperProps = {
  size: number;
};

export const IconButtonWrapper = styled('button')<IconButtonWrapperProps>`
  width: ${({ size }) => `${size}px`};
  height: ${({ size }) => `${size}px`};
  border: none;
  border-radius: ${({ size }) => `${size / 2}px`};
  margin: 0px;
  padding: 0px;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: 0.5s;

  &:hover {
    transform: scale(1.25);
  }

  &:disabled {
    opacity: 0.5;
    cursor: default;

    svg {
      fill: ${({ theme }) => theme.color.gray[700]};
    }

    &:hover {
      transform: scale(1);
    }
  }

  @media (pointer: coarse) or (max-width: 1000px) {
    width: ${({ size }) => `min(${size / 8}vw, ${size}px)`};
    height: ${({ size }) => `min(${size / 8}vw, ${size}px)`};
  }
`;

export const LeftIcon = styled(ChevronLeft)`
  width: 100%;
  height: 100%;
  color: ${({ theme }) => theme.color.white};
`;

export const RightIcon = styled(ChevronRight)`
  width: 100%;
  height: 100%;
  color: ${({ theme }) => theme.color.white};
`;

export const CloseIcon = styled(XLg)`
  width: 75%;
  height: 75%;
  color: ${({ theme }) => theme.color.white};
`;
