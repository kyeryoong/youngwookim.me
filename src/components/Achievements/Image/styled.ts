import Image from 'next/image';
import styled from 'styled-components';

type ImageProps = {
  isImageLoaded: boolean;
};

export const ImageWrapper = styled('div')`
  width: 100vw;
  height: 100dvh;
  position: relative;
`;

export const ImagePlaceholder = styled('div')<ImageProps>`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.color.black};
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0px;
  left: 0px;
  opacity: ${({ isImageLoaded }) => (isImageLoaded ? 0 : 1)};
  transition: 0.5s;
`;

export const ImageItem = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
