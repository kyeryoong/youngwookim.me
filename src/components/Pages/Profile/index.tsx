import { throttle } from 'lodash';
import { useEffect, useState } from 'react';

import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import Page4 from './Page4';
import Page5 from './Page5';

const ProfilePage = () => {
  const [positionY, setPositionY] = useState<number>(0);

  useEffect(() => {
    const handleScroll = throttle(() => {
      setPositionY(window.scrollY);
    }, 100);

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      handleScroll.cancel();
    };
  }, []);

  return (
    <>
      <Page1 positionY={positionY} />
      <Page2 />
      <Page3 positionY={positionY} />
      <Page4 positionY={positionY} />
      <Page5 positionY={positionY} />
    </>
  );
};

export default ProfilePage;
