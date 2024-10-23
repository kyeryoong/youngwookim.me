import Image from 'next/image';
import styled from 'styled-components';

type ImageItemWrapperProps = {
  width: string;
  height: string;
};

type ImageItemProps = {
  isImageLoaded: boolean;
};

export const ImageItemWrapper = styled('div')<ImageItemWrapperProps>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  position: relative;
`;

export const ImageItemPlaceholder = styled('div')<ImageItemProps>`
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
