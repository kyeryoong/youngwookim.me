import styled from 'styled-components';

type HomeWrapperProps = {
  page: number;
};

type CursorProps = {
  show: boolean;
};

export const HomeWrapper = styled('div')<HomeWrapperProps>`
  width: 200vw;
  height: 100dvh;
  display: grid;
  grid-template-columns: 100vw 100vw;
  overflow: hidden;
  position: fixed;
  top: 0px;
  left: ${({ page }) => (page === 1 ? '-100vw' : '0vw')};
  transition: 3s;
`;

export const SubText = styled('span')`
  font-size: min(2rem, 4vw);
  font-weight: 400;
  width: 100vw;
  height: 100px;
  line-height: 100px;
  text-align: center;
  position: fixed;
  top: calc(50dvh + 15vw);
  left: 0px;
  color: ${({ theme }) => theme.color.gray[200]};
  z-index: 100;
  transition: 0.5s;
`;

export const Cursor = styled('span')<CursorProps>`
  font-weight: 100;
  width: 20px;
  height: 20px;
  margin-left: 6px;
  opacity: ${({ show }) => (show ? 1 : 0)};
`;
