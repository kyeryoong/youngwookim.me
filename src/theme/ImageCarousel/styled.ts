import Image from 'next/image';
import styled from 'styled-components';

export const ImageCarouselWrapper = styled('section')`
  width: 100%;
  height: 100%;
  position: relative;
`;

export const SwiperSlideImage = styled(Image)`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
`;

export const LoadingSpinnerWrapper = styled('div')`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LeftButtonWrapper = styled('div')`
  position: absolute;
  top: 50%;
  left: 32px;
  transform: translateY(-50%);
  z-index: 1;

  @media (pointer: coarse) or (max-width: 1000px) {
    left: min(5vw, 32px);
  }
`;

export const RightButtonWrapper = styled('div')`
  position: absolute;
  top: 50%;
  right: 32px;
  transform: translateY(-50%);
  z-index: 1;

  @media (pointer: coarse) or (max-width: 1000px) {
    right: min(5vw, 32px);
  }
`;

export const PaginationWrapper = styled('div')`
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 40px;
  z-index: 1;
`;
