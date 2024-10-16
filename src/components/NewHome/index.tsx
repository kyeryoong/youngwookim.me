import { observer } from 'mobx-react-lite';
import { useState } from 'react';

import * as S from './styled';

const NewHome = observer(() => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <S.HomeWrapper>
      <S.SplineObject
        scene="https://prod.spline.design/tz-iZFMCruhoDf9b/scene.splinecode"
        isVisible={isVisible}
        onLoad={() => setIsVisible(true)}
      />

      <S.Text>Frontend</S.Text>

      <S.SubText>안녕하세요. 프론트엔드 개발자 김영우입니다.</S.SubText>
    </S.HomeWrapper>
  );
});

export default NewHome;
