import Image from 'next/image';
import styled from 'styled-components';

export const Title = styled('h1')`
  font-size: 6rem;
  font-weight: 600;
  color: white;
  word-break: keep-all;

  @media (pointer: coarse) or (max-width: 1200px) {
    font-size: min(10vw, 6rem);
  }
`;

export const Subtitle = styled('h2')`
  font-size: 2.4rem;
  font-weight: 500;
  color: white;
  word-break: keep-all;

  @media (pointer: coarse) or (max-width: 1200px) {
    font-size: min(4.8vw, 2.4rem);
  }
`;

export const Logo = styled(Image)`
  width: 240px;
  height: 48px;

  @media (pointer: coarse) or (max-width: 1200px) {
    width: min(30vw, 240px);
    height: min(6vw, 48px);
  }
`;
