import styled from 'styled-components';

import IconButton from '@/theme/IconButton';

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

export const CloseButton = styled(IconButton)`
  background-color: yellow;
  border: 1px solid red;
`;

export const CloseButtonWrapper = styled('div')`
  position: absolute;
  top: 24px;
  right: 24px;

  @media (pointer: coarse) or (max-width: 1000px) {
    top: min(2.5vw, 24px);
    right: min(2.5vw, 24px);
  }
`;

export const LeftButtonWrapper = styled('div')`
  position: absolute;
  top: calc(50dvh - 24px);
  left: 24px;

  @media (pointer: coarse) or (max-width: 1000px) {
    left: min(2.5vw, 24px);
  }
`;

export const RightButtonWrapper = styled('div')`
  position: absolute;
  top: calc(50dvh - 24px);
  right: 24px;

  @media (pointer: coarse) or (max-width: 1000px) {
    right: min(2.5vw, 24px);
  }
`;
