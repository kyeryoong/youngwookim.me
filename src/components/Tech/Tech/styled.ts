import Image from 'next/image';
import styled from 'styled-components';

type TechWrapperProps = {
  $rgb1: string;
  $rgb2?: string;
  $core?: boolean;
};

type TechIconProps = {
  $textColor: string;
};

type TechNameProps = {
  $textColor: string;
};

export const TechWrapper = styled('div')<TechWrapperProps>`
  font-weight: 600;
  width: fit-content;
  position: relative;
  border-radius: 100px;
  padding-top: 6px;
  padding-bottom: 6px;
  padding-left: 16px;
  padding-right: 24px;
  display: flex;
  align-items: center;
  background: ${({ $rgb1, $rgb2 }) => `linear-gradient(90deg, ${$rgb1}, ${$rgb2}, ${$rgb1})`};
  background-size: 200% 200%;

  @media (pointer: coarse) or (max-width: 1000px) {
    font-size: ${({ theme }) => theme.font.mobile.xxl};
    padding-top: min(0.75vw, 6px);
    padding-bottom: min(0.75vw, 6px);
    padding-left: min(2vw, 16px);
    padding-right: min(3vw, 24px);
  }
`;

export const TechIcon = styled(Image)<TechIconProps>`
  width: 64px;
  height: 64px;
  padding: 4px;
  z-index: 100;
  filter: ${({ $textColor }) =>
    $textColor === 'black' &&
    'invert(100%) sepia(100%) saturate(0%) hue-rotate(218deg) brightness(104%) contrast(102%)'};

  @media (pointer: coarse) or (max-width: 1000px) {
    width: min(8vw, 64px);
    height: min(8vw, 64px);
  }
`;

export const TechName = styled('span')<TechNameProps>`
  font-size: 1.6rem;
  color: ${({ $textColor }) => $textColor};

  @media (pointer: coarse) or (max-width: 1000px) {
    font-size: min(3.2vw, 1.6rem);
  }
`;
