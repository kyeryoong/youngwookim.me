import styled from 'styled-components';

type HighlightProps = {
  degree: number;
};

export const HomeWrapper = styled('div')`
  width: 100vw;
  height: 100dvh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TitleTop = styled('h1')`
  font-size: 4.8rem;
  font-weight: 600;
  color: transparent;
  background: ${({ theme }) =>
    `linear-gradient(90deg, ${theme.color.gray[500]}, ${theme.color.white})`};
  background-clip: text;
  -webkit-background-clip: text;
  position: absolute;
  top: 15dvh;
  left: 100px;

  @media (pointer: coarse) or (max-width: 1000px) {
    font-size: min(7.2vw, 4.8rem);
    left: 5vw;
  }
`;

export const TitleBottom = styled('h1')`
  font-size: 4.8rem;
  font-weight: 600;
  color: transparent;
  background: ${({ theme }) =>
    `linear-gradient(90deg, ${theme.color.white}, ${theme.color.gray[500]})`};
  background-clip: text;
  -webkit-background-clip: text;
  text-align: right;
  position: absolute;
  bottom: 12dvh;
  right: 100px;

  @media (pointer: coarse) or (max-width: 1000px) {
    font-size: min(7.2vw, 4.8rem);
    right: 5vw;
  }
`;

export const Highlight = styled('span')<HighlightProps>`
  font-size: 4.8rem;
  font-weight: 600;
  color: transparent;
  background: ${({ theme, degree }) =>
    `linear-gradient(${degree}deg, ${theme.color.youngBlue}, ${theme.color.youngLightBlue})`};
  background-clip: text;
  -webkit-background-clip: text;

  @media (pointer: coarse) or (max-width: 1000px) {
    font-size: min(7.2vw, 4.8rem);
  }
`;
