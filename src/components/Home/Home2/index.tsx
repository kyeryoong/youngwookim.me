import { useEffect, useState } from 'react';

import poppins from '@/font/poppins';

import * as S from './styled';

const Home2 = () => {
  const [showSplineObject, setShowSplineObject] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplineObject(true);
    }, 13000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <S.HomeWrapper>
      {showSplineObject && (
        <S.SplineObject scene="https://prod.spline.design/Mnz0onbnszi8Pssm/scene.splinecode" />
      )}

      <S.Text className={poppins.className}>Developer</S.Text>

      <S.TextGradient />
    </S.HomeWrapper>
  );
};

export default Home2;
