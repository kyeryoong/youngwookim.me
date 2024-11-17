import Image from 'next/image';
import styled from 'styled-components';

export const PhoneWrapper = styled('section')`
  width: 400px;
  height: 760px;
  position: relative;
  border-radius: 20px;
  overflow: hidden;

  @media (pointer: coarse) or (max-width: 1200px) {
    width: min(80vw, 400px);
    height: min(152vw, 760px);
  }
`;

export const PhoneMockup = styled(Image)`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: 1;
`;

export const VideoPlayer = styled('video')`
  width: 100%;
  height: 100%;
  padding: 5%;
  border-radius: 50px;
  object-fit: fill;
  position: absolute;
  top: 0px;
  left: 0px;
`;
