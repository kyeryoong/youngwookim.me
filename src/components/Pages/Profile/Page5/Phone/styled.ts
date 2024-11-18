import Image from 'next/image';
import styled from 'styled-components';

export const PhoneWrapper = styled('section')`
  width: 450px;
  aspect-ratio: 1 / 2;
  position: relative;

  @media (pointer: coarse) or (max-width: 1000px) {
    width: min(72vw, 450px);
  }
`;

export const PhoneMockup = styled(Image)`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: 1;
  transform: scale(1.05);
`;

export const VideoPlayer = styled('video')`
  width: 100%;
  height: 100%;
  border-radius: 50px;

  @media (pointer: coarse) or (max-width: 1000px) {
    border-radius: min(8vw, 50px);
  }
`;
