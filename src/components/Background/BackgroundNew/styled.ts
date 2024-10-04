import styled from 'styled-components';

type TextProps = {
  isBold: boolean;
  isItalic: boolean;
};

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

  @media (pointer: coarse) or (max-width: 800px) {
    padding-left: 5vw;
    padding-right: 5vw;
    gap: 3vw 4vw;
  }
`;

export const Text = styled('h1')<TextProps>`
  font-size: 5rem;
  font-weight: ${({ isBold }) => (isBold ? 700 : 500)};
  font-style: ${({ isItalic }) => isItalic && 'italic'};
  height: 80px;
  line-height: 80px;
  color: ${({ theme }) => theme.color.white};

  @media (pointer: coarse) or (max-width: 800px) {
    font-size: min(10vw, 5rem);
    height: min(10vw, 80px);
    line-height: min(10vw, 80px);
  }
`;
