import { useState } from 'react';

import LoadingSpinner from '@/theme/LoadingSpinner';

import * as S from './styled';

type ImageProps = {
  imgSrc: string;
  alt: string;
};

const Image = ({ imgSrc, alt }: ImageProps) => {
  const [isImageLoaded, setIsImageLoaded] = useState<boolean>(false);

  return (
    <S.ImageWrapper>
      <S.ImagePlaceholder isImageLoaded={isImageLoaded}>
        <LoadingSpinner size={72} weight={3} />
      </S.ImagePlaceholder>

      <S.ImageItem
        width={0}
        height={0}
        sizes={'100vw'}
        src={imgSrc}
        alt={alt}
        onLoadingComplete={() => setIsImageLoaded(true)}
      />
    </S.ImageWrapper>
  );
};

export default Image;
