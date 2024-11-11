import Image from 'next/image';
import styled from 'styled-components';

type IntroRightWrapperProps = {
  color: string;
};

export const IntroWrapper = styled('div')`
  width: 100%;
  height: 100svh;
  position: relative;
  display: flex;
  flex-direction: row;

  @media (pointer: coarse) or (max-width: 1200px) {
    flex-direction: column-reverse;
  }
`;

export const IntroLeftWrapper = styled('div')`
  width: 50%;
  height: 100svh;
  background-color: rgb(15, 15, 15);
  padding: 80px;
  display: flex;
  flex-direction: column;
  position: relative;

  @media (pointer: coarse) or (max-width: 1200px) {
    width: 100%;
    height: 50svh;
    padding: min(10vw, 80px) min(5vw, 80px);
  }
`;

export const IntroRightWrapper = styled('div')<IntroRightWrapperProps>`
  width: 50%;
  height: 100svh;
  background-color: ${({ color }) => color};
  position: relative;

  @media (pointer: coarse) or (max-width: 1200px) {
    width: 100%;
    height: 50svh;
  }
`;

export const IntroGraphic = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: bottom;

  @media (pointer: coarse) or (max-width: 1200px) {
    width: 100vw;
    height: 50svh;
  }
`;
