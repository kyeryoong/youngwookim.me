import { useState } from 'react';

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

      <S.Text>
        Devel<S.Highlight>o</S.Highlight>per
      </S.Text>

      <S.TextGradient />
    </S.HomeWrapper>
  );
};

export default Home2;
