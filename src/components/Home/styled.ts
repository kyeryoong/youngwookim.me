import styled from 'styled-components';

type HomeWrapperProps = {
  page: number;
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
`;
