import styled from 'styled-components';

export const LayoutWrapper = styled('div')`
  min-height: 100vh;
  padding-left: 15vw;
  padding-right: calc(15vw + 280px);
  padding-top: 150px;
  padding-bottom: 20vh;
  background-color: ${({ theme }) => theme.color.black};

  @media (max-width: 1500px) {
    padding-left: 5vw;
    padding-right: calc(5vw + 280px);
  }

  @media (pointer: coarse) or (max-width: 1000px) {
    padding-left: 5vw;
    padding-right: 5vw;
    padding-top: 15vh;
    padding-bottom: 15vh;
  }
`;
