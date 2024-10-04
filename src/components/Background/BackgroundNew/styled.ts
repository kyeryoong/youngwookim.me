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
`;

export const Text = styled('h1')<TextProps>`
  font-size: 5rem;
  font-weight: ${({ isBold }) => (isBold ? 700 : 500)};
  font-style: ${({ isItalic }) => isItalic && 'italic'};
  height: 80px;
  line-height: 80px;
  color: ${({ theme }) => theme.color.white};
`;
