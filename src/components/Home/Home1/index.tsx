import { useEffect, useState } from 'react';

import poppins from '@/font/poppins';

import * as S from './styled';

const Home1 = () => {
  const [showSplineObject, setShowSplineObject] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplineObject(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <S.HomeWrapper>
      {showSplineObject && (
        <S.SplineObject scene="https://prod.spline.design/tz-iZFMCruhoDf9b/scene.splinecode" />
      )}

      <S.Text className={poppins.className}>Frontend</S.Text>

      <S.TextGradient />
    </S.HomeWrapper>
  );
};

export default Home1;
