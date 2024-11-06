import styled from 'styled-components';

export const PageWrapper = styled('div')`
  min-height: 100vh;
  padding-left: 15vw;
  padding-right: 15vw;
  padding-top: 20vh;
  padding-bottom: 20vh;
  background-color: ${({ theme }) => theme.color.black};

  @media (pointer: coarse) or (max-width: 1000px) {
    padding-left: 5vw;
    padding-right: 5vw;
    padding-top: 15vh;
    padding-bottom: 15vh;
  }
`;
