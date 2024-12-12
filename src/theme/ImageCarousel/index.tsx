import 'swiper/css';

import { useCallback, useEffect, useRef, useState } from 'react';
import { CSSProperties } from 'styled-components';
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';

import IconButton from '../IconButton';
import LoadingSpinner from '../LoadingSpinner';
import Pagination from '../Pagination';
import * as S from './styled';

type CarouselOptionsProps = {
  allowMouseDrag?: boolean;
  showPrevNextButtons?: boolean;
  showPagination?: boolean;
};

type ImageCarouselProps = {
  images: string[];
  imageIndex?: number;
  carouselOptions?: CarouselOptionsProps;
  carouselStyle?: CSSProperties;
  imageStyle?: CSSProperties;
  paginationStyle?: CSSProperties;
};

const ImageCarousel = ({
  images,
  imageIndex,
  carouselOptions = { allowMouseDrag: true, showPrevNextButtons: false, showPagination: false },
  carouselStyle,
  imageStyle,
  paginationStyle,
}: ImageCarouselProps) => {
  const swiperRef = useRef<SwiperRef>(null);

  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const handleSlideChange = useCallback(() => {
    setCurrentIndex(swiperRef.current?.swiper.activeIndex as number);
  }, []);

  const handleLeftButtonClick = () => {
    swiperRef.current?.swiper.slidePrev();
  };

  const handleRightButtonClick = () => {
    swiperRef.current?.swiper.slideNext();
  };

  const handlePaginationClick = useCallback((index: number) => {
    swiperRef.current?.swiper.slideTo(index);
  }, []);

  useEffect(() => {
    if (imageIndex !== undefined) {
      setCurrentIndex(imageIndex);
      swiperRef.current?.swiper.slideTo(imageIndex);
    }
  }, [imageIndex]);

  return (
    <S.ImageCarouselWrapper>
      <Swiper
        ref={swiperRef}
        onSlideChange={handleSlideChange}
        style={carouselStyle}
        speed={500}
        allowTouchMove={carouselOptions?.allowMouseDrag}
      >
        {images.map((image) => (
          <SwiperSlide
            key={image}
            style={{
              width: '100%',
              height: '100%',
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <S.SwiperSlideImage
              width={0}
              height={0}
              sizes={'100%'}
              src={image}
              alt={image}
              style={imageStyle}
            />

            <S.LoadingSpinnerWrapper>
              <LoadingSpinner size={40} />
            </S.LoadingSpinnerWrapper>
          </SwiperSlide>
        ))}
      </Swiper>

      {carouselOptions.showPrevNextButtons && (
        <>
          <S.LeftButtonWrapper>
            <IconButton
              type={'left'}
              onClick={handleLeftButtonClick}
              disabled={currentIndex === 0}
            />
          </S.LeftButtonWrapper>

          <S.RightButtonWrapper>
            <IconButton
              type={'right'}
              onClick={handleRightButtonClick}
              disabled={currentIndex === images?.length - 1}
            />
          </S.RightButtonWrapper>
        </>
      )}

      {carouselOptions?.showPagination && (
        <S.PaginationWrapper style={paginationStyle}>
          <Pagination
            currentIndex={currentIndex}
            totalIndex={images.length}
            onClick={handlePaginationClick}
          />
        </S.PaginationWrapper>
      )}
    </S.ImageCarouselWrapper>
  );
};

export default ImageCarousel;
