import styled from 'styled-components';

type ImageViewerWrapperProps = {
  show: boolean;
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

export const CloseButtonWrapper = styled('div')`
  position: absolute;
  top: 40px;
  right: 40px;
  z-index: 1;

  @media (pointer: coarse) or (max-width: 1000px) {
    top: min(5vw, 40px);
    right: min(5vw, 40px);
  }
`;
