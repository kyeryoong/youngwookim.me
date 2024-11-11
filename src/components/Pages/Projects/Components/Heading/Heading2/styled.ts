import styled from 'styled-components';

export const Heading2Wrapper = styled('h2')`
  font-size: 1.2rem;
  font-weight: 400;
  width: 100%;
  color: ${({ theme }) => theme.color.gray[500]};
  margin-bottom: 12px;

  @media (pointer: coarse) or (max-width: 1000px) {
    font-size: min(3.6vw, 1.2rem);
    margin-bottom: min(3vw, 12px);
  }
`;
