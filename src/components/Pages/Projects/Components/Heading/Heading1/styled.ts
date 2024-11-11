import styled from 'styled-components';

export const Heading1Wrapper = styled('h1')`
  font-size: 2rem;
  font-weight: 600;
  width: 100%;
  color: ${({ theme }) => theme.color.white};
  border-bottom: 1px solid ${({ theme }) => theme.color.gray[800]};
  padding-bottom: 20px;
  margin-bottom: 20px;

  @media (pointer: coarse) or (max-width: 1000px) {
    font-size: min(6vw, 2rem);
    padding-bottom: min(5vw, 20px);
    margin-bottom: min(5vw, 20px);
  }
`;
