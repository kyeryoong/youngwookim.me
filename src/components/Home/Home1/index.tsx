import { useCallback, useState } from 'react';

import * as S from './styled';

const Home1 = () => {
  const [show, setShow] = useState<boolean>(false);

  const handleLoad = useCallback(() => {
    setShow(true);
  }, []);

  return (
    <S.HomeWrapper>
      <S.SplineObject
        scene="https://prod.spline.design/tz-iZFMCruhoDf9b/scene.splinecode"
        onLoad={handleLoad}
        show={show}
      />

      <S.TitleTop>
        <S.Highlight degree={270}>아름다운 것</S.Highlight>을
        <br />
        좋아하는
      </S.TitleTop>

      <S.TitleBottom>
        <S.Highlight degree={90}>프론트엔드</S.Highlight> 개발자
        <br />
        김영우입니다
      </S.TitleBottom>
    </S.HomeWrapper>
  );
};

export default Home1;
