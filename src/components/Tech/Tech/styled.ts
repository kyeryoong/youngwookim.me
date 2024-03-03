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
  font-size: ${({ theme }) => theme.font.xxl};
  font-weight: 600;
  width: fit-content;
  position: relative;
  border-radius: 100px;
  padding-top: 7.5px;
  padding-bottom: 7.5px;
  padding-left: 15px;
  padding-right: 25px;
  display: flex;
  align-items: center;
  background: ${({ $rgb1, $rgb2 }) => `linear-gradient(90deg, ${$rgb1}, ${$rgb2}, ${$rgb1})`};
  background-size: 200% 200%;

  @media (pointer: coarse) or (max-width: 1000px) {
    font-size: ${({ theme }) => theme.font.mobile.xxl};
    padding-top: 5px;
    padding-bottom: 5px;
    padding-left: 10px;
    padding-right: 16.5px;
  }
`;

export const TechIcon = styled(Image)<TechIconProps>`
  width: 60px;
  height: 60px;
  padding: 5px;
  z-index: 100;
  filter: ${({ $textColor }) =>
    $textColor === 'black' &&
    'invert(100%) sepia(100%) saturate(0%) hue-rotate(218deg) brightness(104%) contrast(102%)'};

  @media (pointer: coarse) or (max-width: 1000px) {
    width: 40px;
    height: 40px;
  }
`;

export const TechName = styled('span')<TechNameProps>`
  color: ${({ $textColor }) => $textColor};
`;
