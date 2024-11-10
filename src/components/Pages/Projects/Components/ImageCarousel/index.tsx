import 'swiper/css';

import { useRef, useState } from 'react';
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';

import IconButton from '@/theme/IconButton';
import Pagination from '@/theme/Pagination';

import * as S from './styled';

type ImageCarouselProps = {
  images: string[];
};

const ImageCarouselStyle = {
  width: '100%',
  height: '100%',
  borderRadius: '8px',
};

const ImageCarousel = ({ images }: ImageCarouselProps) => {
  const swiperRef = useRef<SwiperRef>(null);

  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const handleSlideChange = () => {
    setCurrentIndex(swiperRef.current?.swiper.activeIndex as number);
  };

  const handleLeftButtonClick = () => {
    swiperRef.current?.swiper.slidePrev();
  };

  const handleRightButtonClick = () => {
    swiperRef.current?.swiper.slideNext();
  };

  const handlePaginationClick = (index: number) => {
    swiperRef.current?.swiper.slideTo(index);
  };

  return (
    <S.ImageCarouselWrapper>
      <Swiper ref={swiperRef} onSlideChange={handleSlideChange} style={ImageCarouselStyle}>
        {images.map((image) => (
          <SwiperSlide key={image}>
            <S.SwiperSlideImage width={0} height={0} sizes={'100%'} src={image} alt={image} />
          </SwiperSlide>
        ))}
      </Swiper>

      <S.LeftButtonWrapper>
        <IconButton
          type={'left'}
          onClick={handleLeftButtonClick}
          disabled={(swiperRef.current?.swiper.activeIndex as number) === 0}
        />
      </S.LeftButtonWrapper>

      <S.RightButtonWrapper>
        <IconButton
          type={'right'}
          onClick={handleRightButtonClick}
          disabled={
            (swiperRef.current?.swiper.activeIndex as number) ===
            (swiperRef.current?.swiper.slides.length as number) - 1
          }
        />
      </S.RightButtonWrapper>

      <S.PaginationWrapper>
        <Pagination
          currentIndex={currentIndex}
          totalIndex={swiperRef.current?.swiper.slides.length as number}
          onClick={handlePaginationClick}
        />
      </S.PaginationWrapper>
    </S.ImageCarouselWrapper>
  );
};

export default ImageCarousel;
