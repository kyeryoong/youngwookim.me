import { useCallback, useEffect, useState } from 'react';

import * as S from './styled';

const Home2 = () => {
  const [show, setShow] = useState<boolean>(false);

  const handleLoad = useCallback(() => {
    setShow(true);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <S.HomeWrapper>
      <S.SplineObject
        scene="https://prod.spline.design/Mnz0onbnszi8Pssm/scene.splinecode"
        onLoad={handleLoad}
        show={show}
      />

      <S.TitleTop>
        <S.Highlight degree={270}>사용자 경험</S.Highlight>을
        <br />
        생각하는
      </S.TitleTop>

      <S.TitleBottom>
        <S.Highlight degree={90}>프론트엔드</S.Highlight> 개발자
        <br />
        김영우입니다
      </S.TitleBottom>
    </S.HomeWrapper>
  );
};

export default Home2;
