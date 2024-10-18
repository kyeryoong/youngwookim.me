'use client';

import 'swiper/css';
import 'swiper/css/free-mode';

import { observer } from 'mobx-react-lite';
import { useRef, useState } from 'react';
import { Mousewheel } from 'swiper/modules';
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';

import Footer from '@/components/Footer';
import Profile1 from '@/components/Profile/Profile1';
import Profile2 from '@/components/Profile/Profile2';
import Profile3 from '@/components/Profile/Profile3';
import { ScrollToTopButton } from '@/components/ScrollToTopButton';
import { isMobile } from '@/utils/isMobile';

const Profile = observer(() => {
  const swiperRef = useRef<SwiperRef>(null);

  const [slide, setSlide] = useState<number>(0);

  const handleSlideChange = () => {
    setSlide(swiperRef.current?.swiper.activeIndex as number);
  };

  const handleScrollToTopButtonClick = () => {
    if (swiperRef?.current?.swiper) {
      swiperRef?.current?.swiper.slideTo(0);
      setSlide(0);
    }
  };

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
        // onScroll={handleScroll}
        onSlideChange={handleSlideChange}
        style={{
          width: '100vw',
          height: '100vh',
          position: 'fixed',
          top: '0px',
          left: '0px',
          backgroundColor: 'black',
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
          <Profile3 />
        </SwiperSlide>
        <SwiperSlide>
          <Footer />
        </SwiperSlide>
      </Swiper>

      <ScrollToTopButton onClick={handleScrollToTopButtonClick} show={!isMobile()} />
    </>
  );
});

export default Profile;
