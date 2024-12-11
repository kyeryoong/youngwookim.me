import styled from 'styled-components';

type HomeWrapperProps = {
  page: number;
};

type VideoWrapperProps = {
  showVideo: boolean;
};

export const HomeWrapper = styled('div')<HomeWrapperProps>`
  width: 200vw;
  height: 100dvh;
  display: grid;
  grid-template-columns: 100vw 100vw;
  overflow: hidden;
  position: fixed;
  transform: ${({ page }) => (page === 0 ? 'translateX(0vw)' : 'translateX(-100vw)')};
  transition: 3s;
  z-index: 1;
`;

export const Video = styled('video')<VideoWrapperProps>`
  width: 720px;
  height: 720px;
  position: fixed;
  top: calc(50% - 360px);
  left: calc(50% - 360px);
  opacity: ${({ showVideo }) => (showVideo ? 1 : 0)};
  transform: ${({ showVideo }) => (showVideo ? 'scale(1)' : 'scale(0)')};
  transition-property: opacity transform;
  transition-duration: 1.5s;
  transition-delay: 0.5s;

  @media (pointer: coarse) or (max-width: 1000px) {
    width: min(80vw, 720px);
    height: min(80vw, 720px);
    top: calc(50% - min(40vw, 360px));
    left: calc(50% - min(40vw, 360px));
  }
`;
