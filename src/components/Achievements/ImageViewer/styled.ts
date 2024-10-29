import { ChevronLeft, ChevronRight, X } from 'react-bootstrap-icons';
import styled from 'styled-components';

type ImageViewerWrapperProps = {
  show: boolean;
};

type ButtonProps = {
  disabled: boolean;
};

export const ImageViewerWrapper = styled('div')<ImageViewerWrapperProps>`
  width: 100vw;
  height: 100dvh;
  background-color: ${({ theme }) => theme.color.black};
  position: fixed;
  top: ${({ show }) => (show ? '0px' : '100dvh')};
  left: 0px;
  opacity: ${({ show }) => (show ? 1 : 0)};
  z-index: 20000;
  pointer-events: ${({ show }) => (show ? 'default' : 'none')};
  transition: 0.5s;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CloseButton = styled(X)`
  width: 48px;
  height: 48px;
  border-radius: 48px;
  padding: 0.4%;
  color: ${({ theme }) => theme.color.white};
  background-color: ${({ theme }) => theme.color.gray[950]};
  box-shadow: 0px 0px 12px 5px rgba(50, 50, 50, 0.3);
  position: absolute;
  top: 48px;
  right: 48px;
  cursor: pointer;
  transition: 0.5s;

  &:hover {
    background-color: ${({ theme }) => theme.color.gray[900]};
  }

  &:active {
    background-color: ${({ theme }) => theme.color.gray[800]};
  }

  @media (pointer: coarse) or (max-width: 1000px) {
    width: min(10vw, 48px);
    height: min(10vw, 48px);
    top: min(5vw, 48px);
    right: min(5vw, 48px);
  }
`;

export const LeftButton = styled(ChevronLeft)<ButtonProps>`
  width: 48px;
  height: 48px;
  color: ${({ theme }) => theme.color.white};
  position: absolute;
  top: calc(50dvh - 24px);
  left: 24px;
  cursor: ${({ disabled }) => (disabled ? 'none' : 'pointer')};
  pointer-events: ${({ disabled }) => (disabled ? 'none' : 'default')};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  transition: 0.5s;

  &:hover {
    transform: ${({ disabled }) => !disabled && 'scale(1.2)'};
  }

  @media (pointer: coarse) or (max-width: 1000px) {
    width: min(10vw, 48px);
    height: min(10vw, 48px);
    top: calc(50dvh - min(6vw, 24px));
    left: min(2.5vw, 24px);
  }
`;

export const RightButton = styled(ChevronRight)<ButtonProps>`
  width: 48px;
  height: 48px;
  color: ${({ theme }) => theme.color.white};
  position: absolute;
  top: calc(50dvh - 24px);
  right: 24px;
  cursor: ${({ disabled }) => (disabled ? 'none' : 'pointer')};
  pointer-events: ${({ disabled }) => (disabled ? 'none' : 'default')};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  transition: 0.5s;

  &:hover {
    transform: ${({ disabled }) => !disabled && 'scale(1.2)'};
  }

  @media (pointer: coarse) or (max-width: 1000px) {
    width: min(10vw, 48px);
    height: min(10vw, 48px);
    top: calc(50dvh - min(5vw, 24px));
    right: min(2.5vw, 24px);
  }
`;
