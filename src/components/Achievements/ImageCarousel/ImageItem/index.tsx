import { CSSProperties, useState } from 'react';

import LoadingSpinner from '@/theme/LoadingSpinner';

import * as S from './styled';

type ImageItemProps = {
  width: string;
  height: string;
  imgSrc: string;
  alt: string;
  style?: CSSProperties;
};

const ImageItem = ({ width, height, imgSrc, alt, style }: ImageItemProps) => {
  const [isImageLoaded, setIsImageLoaded] = useState<boolean>(false);

  const handleLoadingComplete = () => {
    setIsImageLoaded(true);
  };

  return (
    <S.ImageItemWrapper width={width} height={height}>
      <S.ImageItemPlaceholder isImageLoaded={isImageLoaded}>
        <LoadingSpinner size={72} weight={3} />
      </S.ImageItemPlaceholder>

      <S.ImageItem
        width={0}
        height={0}
        sizes={'100%'}
        src={imgSrc}
        alt={alt}
        onLoadingComplete={handleLoadingComplete}
        style={style}
      />
    </S.ImageItemWrapper>
  );
};

export default ImageItem;
