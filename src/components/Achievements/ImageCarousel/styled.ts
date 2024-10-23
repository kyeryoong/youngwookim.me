import styled from 'styled-components';

type ImageCarouselWrapperProps = {
  width: string;
  height: string;
};

type ImageCarouselProps = {
  width: string;
  height: string;
  index: number;
  length: number;
};

export const ImageCarouselWrapper = styled('div')<ImageCarouselWrapperProps>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  overflow: hidden;
  position: relative;
`;

export const ImageCarousel = styled('div')<ImageCarouselProps>`
  /* width: ${({ width }) => `calc(${width} * 3)`}; */
  height: ${({ height }) => height};
  position: absolute;
  display: flex;
  left: ${({ index, width }) => `calc(${index} * ${width} * -1)`};
  transition: 1s;
`;
