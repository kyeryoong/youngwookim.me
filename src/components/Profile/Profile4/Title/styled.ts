import styled from 'styled-components';

export const Title = styled('h1')`
  font-size: ${({ theme }) => theme.font.xxxxxl};
  font-weight: 500;
  color: ${({ theme }) => theme.color.white};
  position: absolute;
  top: 20dvh;
  left: 15vw;
  z-index: 10;
  opacity: 1;
  transition: 0.5s;

  @media (pointer: coarse) or (max-width: 1200px) {
    z-index: -1;
    opacity: 0;
  }
`;
