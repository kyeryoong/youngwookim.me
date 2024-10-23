import { useState } from 'react';

import poppins from '@/font/poppins';

import * as S from './styled';

const Home2 = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <S.HomeWrapper>
      <S.SplineObject
        scene="https://prod.spline.design/Mnz0onbnszi8Pssm/scene.splinecode"
        isVisible={isVisible}
        onLoad={() => setIsVisible(true)}
      />

      <S.Text className={poppins.className}>
        Devel<S.Highlight>o</S.Highlight>per
      </S.Text>

      <S.TextGradient />
    </S.HomeWrapper>
  );
};

export default Home2;
