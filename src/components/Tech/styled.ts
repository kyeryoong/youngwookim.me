'use client';
import styled from 'styled-components';
import Image from 'next/image';

export const TechWrapper = styled('div')<{
  rgb1: string;
  rgb2?: string;
  core?: boolean;
}>`
  font-size: 1.8rem;
  font-weight: 600;
  width: fit-content;
  border-radius: 100px;
  padding-top: 7.5px;
  padding-bottom: 7.5px;
  padding-left: 15px;
  padding-right: 25px;
  display: flex;
  align-items: center;
  background: ${({ rgb1, rgb2 }) => `linear-gradient(90deg, ${rgb1}, ${rgb2}, ${rgb1})`};
  background-size: 200% 200%;
  animation-name: ${({ core }) => core && `Gradient`};
  animation-duration: 2s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;

  @keyframes Gradient {
    0% {
      background-position: 0% 50%;
    }
    100% {
      background-position: 200% 50%;
    }
  }
`;

export const TechIcon = styled(Image)<{
  textColor: string;
}>`
  width: 60px;
  height: 60px;
  padding: 5px;
  filter: ${({ textColor }) =>
    textColor === 'black' &&
    'invert(100%) sepia(100%) saturate(0%) hue-rotate(218deg) brightness(104%) contrast(102%)'};
`;

export const TechName = styled('span')<{
  textColor: string;
}>`
  color: ${({ textColor }) => textColor};
`;

export const TechList = styled('div')`
  margin-bottom: 100px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

export const TechListHeader = styled('span')`
  width: 100%;
  color: white;
  border-bottom: 1px solid white;
  padding-bottom: 35px;
  margin-bottom: 25px;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
`;

export const TechListCategoryName = styled('span')`
  font-size: 2rem;
  font-weight: 600;
  color: white;
`;

export const TechListCount = styled('span')`
  font-size: 3rem;
  font-weight: 700;
  color: white;
`;
