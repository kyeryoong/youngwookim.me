import { useState } from 'react';

import * as S from './styled';

const Home1 = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <S.HomeWrapper>
      <S.SplineObject
        scene="https://prod.spline.design/tz-iZFMCruhoDf9b/scene.splinecode"
        isVisible={isVisible}
        onLoad={() => setIsVisible(true)}
      />

      <S.Text>
        Fr<S.Highlight>o</S.Highlight>ntend
      </S.Text>

      <S.TextGradient />
    </S.HomeWrapper>
  );
};

export default Home1;
