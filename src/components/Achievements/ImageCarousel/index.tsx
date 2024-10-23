import { Children, ReactNode } from 'react';

import * as S from './styled';

type ImageCarouselProps = {
  width: string;
  height: string;
  children: ReactNode | ReactNode[];
  index: number;
};

const ImageCarousel = ({ width, height, children, index }: ImageCarouselProps) => {
  return (
    <S.ImageCarouselWrapper width={width} height={height}>
      <S.ImageCarousel
        width={width}
        height={height}
        index={index}
        length={Children.count(children)}
      >
        {children}
      </S.ImageCarousel>
    </S.ImageCarouselWrapper>
  );
};

export default ImageCarousel;
