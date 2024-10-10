import styled from 'styled-components';

import { FontSizeType } from '@/stores/homeStore';

type TextProps = {
  fontSize: FontSizeType;
  isBold: boolean;
  isItalic: boolean;
  isUnderline: boolean;
  textColor: string;
  borderColor: string;
};

export const Text = styled('h1')<TextProps>`
  font-size: ${({ fontSize }) => `${fontSize / 2}rem`};
  font-weight: ${({ isBold }) => (isBold ? 700 : 500)};
  font-style: ${({ isItalic }) => isItalic && 'italic'};
  height: 80px;
  line-height: 80px;
  color: ${({ theme, textColor }) =>
    textColor === 'white'
      ? theme.color.white
      : textColor === 'black'
        ? theme.color.gray[800]
        : textColor};
  text-decoration: ${({ isUnderline }) => isUnderline && 'underline'};
  text-decoration-thickness: 4px;

  @media (pointer: coarse) or (max-width: 1000px) {
    font-size: ${({ fontSize }) => `min(${fontSize}vw, ${fontSize / 2}rem)`};
    height: min(10vw, 80px);
    line-height: min(10vw, 80px);
    text-decoration-thickness: min(0.5vw, 4px);
  }
`;
