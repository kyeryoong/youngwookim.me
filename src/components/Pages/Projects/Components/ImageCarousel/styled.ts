import Image from 'next/image';
import styled from 'styled-components';

export const ImageCarouselWrapper = styled('div')`
  position: relative;
`;

export const SwiperSlideImage = styled(Image)`
  width: 100%;
  height: 100%;
  border-radius: 8px;
`;

export const PaginationWrapper = styled('div')`
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: center;
  position: absolute;
  bottom: 5%;
  z-index: 1;
`;

export const LeftButtonWrapper = styled('div')`
  border-radius: 1000px;
  padding: 12px;
  background-color: rgba(50, 50, 50, 0.25);
  position: absolute;
  top: 50%;
  left: 12px;
  transform: translateY(-50%);
  z-index: 1;

  @media (pointer: coarse) or (max-width: 1000px) {
    padding: min(1.5vw, 12px);
    left: min(1.5vw, 12px);
  }
`;

export const RightButtonWrapper = styled('div')`
  border-radius: 1000px;
  padding: 12px;
  background-color: rgba(50, 50, 50, 0.25);
  position: absolute;
  top: 50%;
  right: 12px;
  transform: translateY(-50%);
  z-index: 1;

  @media (pointer: coarse) or (max-width: 1000px) {
    padding: min(1.5vw, 12px);
    right: min(1.5vw, 12px);
  }
`;
