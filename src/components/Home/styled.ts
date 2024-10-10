import styled from 'styled-components';

export const BackgroundWrapper = styled('div')`
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.color.black};
  display: flex;
  align-content: center;
  flex-wrap: wrap;
  gap: 30px 40px;
  padding-left: 100px;
  padding-right: 100px;

  @media (pointer: coarse) or (max-width: 1000px) {
    padding-left: 5vw;
    padding-right: 5vw;
    gap: 3vw 4vw;
  }
`;
