import styled from 'styled-components';

import { FontSizeType } from '@/stores/homeStore';

type TextProps = {
  isBold: boolean;
  isItalic: boolean;
  fontSize: FontSizeType;
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
  font-size: ${({ fontSize }) => `${fontSize / 2}rem`};
  font-weight: ${({ isBold }) => (isBold ? 700 : 500)};
  font-style: ${({ isItalic }) => isItalic && 'italic'};
  height: 80px;
  line-height: 80px;
  color: ${({ theme }) => theme.color.white};
  transition: 0.25s;

  @media (pointer: coarse) or (max-width: 800px) {
    font-size: ${({ fontSize }) => `min(${fontSize}vw, ${fontSize / 2}rem)`};
    height: min(10vw, 80px);
    line-height: min(10vw, 80px);
  }
`;
