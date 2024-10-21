'use client';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/scrollbar';

import { observer } from 'mobx-react-lite';
import { useEffect, useRef, useState } from 'react';
import { useTheme } from 'styled-components';
import SwiperCore from 'swiper';
import { FreeMode, Mousewheel, Scrollbar } from 'swiper/modules';
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';

import Footer from '@/components/Footer';
import Profile1 from '@/components/Profile/Profile1';
import Profile2 from '@/components/Profile/Profile2';
import Profile3 from '@/components/Profile/Profile3';
import Profile4 from '@/components/Profile/Profile4';
import { ScrollToTopButton } from '@/components/ScrollToTopButton';
import { isMobile } from '@/utils/isMobile';

const Profile = observer(() => {
  const theme = useTheme();

  const swiperRef = useRef<SwiperRef>(null);
  const slideRef = useRef<SwiperRef>(null);

  const [slide, setSlide] = useState<number>(0);
  const [progress, setProgress] = useState<number>(0);
  const [disableScroll, setDisableScroll] = useState<boolean>(false);

  const handleSlideChange = (swiper: SwiperCore) => {
    setSlide(swiper.activeIndex as number);

    if (swiper.activeIndex === 2) {
      swiper.disable();
    }
  };

  const handleScroll = (swiper: SwiperCore) => {
    if (!disableScroll) {
      setProgress(swiper.progress * 100);

      if (swiper.isBeginning || swiper.isEnd) {
        swiperRef?.current?.swiper?.enable();
      }
    }
  };

  const handleScrollToTopButtonClick = () => {
    swiperRef?.current?.swiper?.slideTo(0);
    setSlide(0);
  };

  useEffect(() => {
    if (disableScroll) {
      slideRef.current?.swiper.disable();
    } else {
      slideRef.current?.swiper.enable();
    }
  }, [disableScroll]);

  return (
    <>
      <Swiper
        direction={'vertical'}
        slidesPerView="auto"
        mousewheel={true}
        modules={[Mousewheel]}
        autoHeight={true}
        speed={1000}
        ref={swiperRef}
        onSlideChange={handleSlideChange}
        onTransitionStart={() => setDisableScroll(true)}
        onTransitionEnd={() => setDisableScroll(false)}
        allowTouchMove={isMobile()}
        style={{
          width: '100vw',
          height: '100vh',
          position: 'fixed',
          top: '0px',
          left: '0px',
          backgroundColor: theme.color.black,
          zIndex: '2',
        }}
      >
        <SwiperSlide>
          <Profile1 />
        </SwiperSlide>
        <SwiperSlide>
          <Profile2 />
        </SwiperSlide>
        <SwiperSlide>
          <Swiper
            ref={slideRef}
            direction={'vertical'}
            slidesPerView={'auto'}
            freeMode={true}
            modules={[FreeMode, Scrollbar, Mousewheel]}
            scrollbar={true}
            mousewheel={true}
            scrollbar={false}
            onScroll={handleScroll}
            onTouchMove={handleScroll}
            style={{
              width: '100vw',
              height: '100dvh',
              position: 'relative',
            }}
          >
            <Profile4.Title />
            <Profile4.Messenger progress={progress} />
            <SwiperSlide>
              <Profile4.Background />
            </SwiperSlide>
          </Swiper>
        </SwiperSlide>
        <SwiperSlide>
          <Profile3 />
        </SwiperSlide>
        <SwiperSlide>
          <Footer />
        </SwiperSlide>
      </Swiper>

      <ScrollToTopButton
        onClick={handleScrollToTopButtonClick}
        show={isMobile() ? false : slide !== 0}
      />
    </>
  );
});

export default Profile;
