import styled from 'styled-components';

type TextWrapperProps = {
  marginBottom: number;
};

export const TextWrapper = styled('p')<TextWrapperProps>`
  font-size: ${({ theme }) => theme.font.xl};
  width: 100%;
  color: ${({ theme }) => theme.color.gray[200]};
  text-align: justify;
  word-break: keep-all;
  margin-bottom: ${({ marginBottom }) => `${marginBottom}px`};

  @media (pointer: coarse) or (max-width: 1000px) {
    font-size: ${({ theme }) => theme.font.mobile.xl};
    margin-bottom: ${({ marginBottom }) => `min(${marginBottom / 8}vw , ${marginBottom}px)`};
  }
`;
