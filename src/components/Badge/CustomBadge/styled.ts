import Image from 'next/image';
import styled from 'styled-components';

type CustomBadgeWrapperProps = {
  $size: number;
  $rgb1: string;
  $rgb2?: string;
  $core?: boolean;
};

type CustomBadgeIconProps = {
  $size: number;
  $textColor: string;
};

type CustomBadgeNameProps = {
  $size: number;
  $textColor: string;
};

export const CustomBadgeWrapper = styled('div')<CustomBadgeWrapperProps>`
  font-weight: 600;
  width: fit-content;
  height: ${({ $size }) => `${$size * 1.8}px`};
  position: relative;
  border-radius: ${({ $size }) => `${$size * 1.8}px`};
  padding-left: ${({ $size }) => `${$size / 1.75}px`};
  padding-right: ${({ $size }) => `${$size / 1.25}px`};
  display: flex;
  align-items: center;
  gap: ${({ $size }) => `${$size / 5}px`};
  background: ${({ $rgb1, $rgb2 }) => `linear-gradient(90deg, ${$rgb1}, ${$rgb2}, ${$rgb1})`};
  background-size: 200% 200%;

  @media (pointer: coarse) or (max-width: 1000px) {
    height: ${({ $size }) => `min(${($size * 1.8) / 8}vw, ${$size * 1.75}px)`};
    padding-left: ${({ $size }) => `min(${$size / 14}vw, ${$size / 1.75}px)`};
    padding-right: ${({ $size }) => `min(${$size / 12}vw, ${$size / 1.5}px)`};
    gap: ${({ $size }) => `min(${$size / 5 / 8}vw, ${$size / 5}px)`};
  }
`;

export const CustomBadgeIcon = styled(Image)<CustomBadgeIconProps>`
  width: ${({ $size }) => `${$size * 1.25}px`};
  height: ${({ $size }) => `${$size * 1.25}px`};
  filter: ${({ $textColor }) =>
    $textColor === 'black' &&
    'invert(100%) sepia(100%) saturate(0%) hue-rotate(218deg) brightness(104%) contrast(102%)'};

  @media (pointer: coarse) or (max-width: 1000px) {
    width: ${({ $size }) => `min(${($size * 1.25) / 8}vw, ${$size / 1.5}px)`};
    height: ${({ $size }) => `min(${($size * 1.25) / 8}vw, ${$size / 1.5}px)`};
  }
`;

export const CustomBadgeName = styled('div')<CustomBadgeNameProps>`
  font-size: ${({ $size }) => `${$size / 1.6}px`};
  color: ${({ $textColor }) => $textColor};

  @media (pointer: coarse) or (max-width: 1000px) {
    font-size: ${({ $size }) => `min(${$size / 12}vw, ${$size / 1.6}px)`};
  }
`;

export const IconOnlyBadgeWrapper = styled('div')<CustomBadgeWrapperProps>`
  width: ${({ $size }) => `${$size * 1.8}px`};
  height: ${({ $size }) => `${$size * 1.8}px`};
  position: relative;
  border-radius: ${({ $size }) => `${$size * 1.8}px`};
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ $rgb1, $rgb2 }) => `linear-gradient(90deg, ${$rgb1}, ${$rgb2}, ${$rgb1})`};
  background-size: 200% 200%;

  @media (pointer: coarse) or (max-width: 1000px) {
    width: ${({ $size }) => `min(${($size * 1.8) / 8}vw, ${$size * 1.8}px)`};
    height: ${({ $size }) => `min(${($size * 1.8) / 8}vw, ${$size * 1.8}px)`};
  }
`;

export const IconOnlyBadgeIcon = styled(Image)<CustomBadgeIconProps>`
  width: 60%;
  height: 60%;
  filter: ${({ $textColor }) =>
    $textColor === 'black' &&
    'invert(100%) sepia(100%) saturate(0%) hue-rotate(218deg) brightness(104%) contrast(102%)'};
`;
