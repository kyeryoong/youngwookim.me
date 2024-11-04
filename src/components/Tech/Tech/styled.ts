import Image from 'next/image';
import styled from 'styled-components';

type TechWrapperProps = {
  $size: number;
  $rgb1: string;
  $rgb2?: string;
  $core?: boolean;
};

type TechIconProps = {
  $size: number;
  $textColor: string;
};

type TechNameProps = {
  $size: number;
  $textColor: string;
};

export const TechWrapper = styled('div')<TechWrapperProps>`
  font-weight: 600;
  width: fit-content;
  height: ${({ $size }) => `${$size * 1.8}px`};
  position: relative;
  border-radius: 100px;
  padding-left: ${({ $size }) => `${$size / 1.75}px`};
  padding-right: ${({ $size }) => `${$size / 1.5}px`};
  display: flex;
  align-items: center;
  background: ${({ $rgb1, $rgb2 }) => `linear-gradient(90deg, ${$rgb1}, ${$rgb2}, ${$rgb1})`};
  background-size: 200% 200%;

  @media (pointer: coarse) or (max-width: 1000px) {
    height: ${({ $size }) => `min(${($size * 1.8) / 8}vw, ${$size * 1.75}px)`};
    padding-left: ${({ $size }) => `min(${$size / 14}vw, ${$size / 1.75}px)`};
    padding-right: ${({ $size }) => `min(${$size / 12}vw, ${$size / 1.5}px)`};
  }
`;

export const TechIcon = styled(Image)<TechIconProps>`
  width: ${({ $size }) => `${$size * 1.25}px`};
  height: ${({ $size }) => `${$size * 1.25}px`};
  margin-right: ${({ $size }) => `${$size / 5}px`};
  filter: ${({ $textColor }) =>
    $textColor === 'black' &&
    'invert(100%) sepia(100%) saturate(0%) hue-rotate(218deg) brightness(104%) contrast(102%)'};

  @media (pointer: coarse) or (max-width: 1000px) {
    width: ${({ $size }) => `min(${($size * 1.25) / 8}vw, ${$size / 1.5}px)`};
    height: ${({ $size }) => `min(${($size * 1.25) / 8}vw, ${$size / 1.5}px)`};
    margin-right: ${({ $size }) => `min(${$size / 5 / 8}vw, ${$size / 5}px)`};
  }
`;

export const TechName = styled('div')<TechNameProps>`
  font-size: ${({ $size }) => `${$size / 1.5}px`};
  color: ${({ $textColor }) => $textColor};

  @media (pointer: coarse) or (max-width: 1000px) {
    font-size: ${({ $size }) => `min(${$size / 12}vw, ${$size / 1.5}px)`};
  }
`;
