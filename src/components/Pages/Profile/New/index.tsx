import { useEffect, useState } from 'react';

import Page1 from './Page1';
import Page3 from './Page3';
import * as S from './styled';

const New = () => {
  const [positionY, setPositionY] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      setPositionY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <S.NewProfileWrapper>
      <Page1 positionY={positionY} />
      {/* <Page2 positionY={positionY} /> */}
      <Page3 positionY={positionY} />

      <S.Page4>주요 담당 업무</S.Page4>
    </S.NewProfileWrapper>
  );
};

export default New;
