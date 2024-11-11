import styled from 'styled-components';

type TextWrapperProps = {
  marginBottom: number;
};

export const TextWrapper = styled('p')<TextWrapperProps>`
  font-size: 1.2rem;
  width: 100%;
  color: ${({ theme }) => theme.color.gray[400]};
  text-align: justify;
  word-break: keep-all;
  margin-bottom: ${({ marginBottom }) => `${marginBottom}px`};

  @media (pointer: coarse) or (max-width: 1000px) {
    font-size: min(3.6vw, 1.2rem);
    margin-bottom: ${({ marginBottom }) => `min(${marginBottom / 8}vw , ${marginBottom}px)`};
  }
`;
