import 'swiper/css';

import { Swiper, SwiperSlide } from 'swiper/react';

import * as S from './styled';

type ImageCarouselProps = {
  images: string[];
};

const ImageCarousel = ({ images }: ImageCarouselProps) => {
  const ImageCarouselStyle = {
    width: '100%',
    height: '100%',
    borderRadius: '8px',
  };

  return (
    <S.ImageCarouselWrapper>
      <Swiper style={ImageCarouselStyle}>
        {images.map((image) => (
          <SwiperSlide key={image}>
            <S.SwiperSlideImage width={0} height={0} sizes={'100%'} src={image} alt={image} />
          </SwiperSlide>
        ))}
      </Swiper>
    </S.ImageCarouselWrapper>
  );
};

export default ImageCarousel;
