import Link from 'next/link';
import styled from 'styled-components';

export const MessengerWrapper = styled('div')`
  width: min(1000px, 90vw);
  height: min(800px, 80dvh);
  position: fixed;
  top: calc(50dvh - min(400px, 40dvh));
  right: calc(50vw - min(500px, 45vw));
  z-index: 10;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 20px;
  transition: 0.5s;
`;

export const BoardButton = styled(Link)`
  width: fit-content;
  display: block;
  margin-top: 12px;
`;
