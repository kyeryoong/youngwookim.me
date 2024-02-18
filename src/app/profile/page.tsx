'use client';

import 'swiper/css';
import 'swiper/css/free-mode';

import { observer } from 'mobx-react';
import { Mousewheel } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import Footer from '@/components/Footer';
import Profile1 from '@/components/Profile/Profile1';
import Profile2 from '@/components/Profile/Profile2';
import Profile3 from '@/components/Profile/Profile3';

const Profile = observer(() => {
  return (
    <Swiper
      direction={'vertical'}
      slidesPerView="auto"
      mousewheel={true}
      modules={[Mousewheel]}
      autoHeight={true}
      speed={1000}
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
  );
});

export default Profile;
