'use client';
import { useState, useEffect } from 'react';
import { observer } from 'mobx-react';

import * as S from './styled';
import Background1 from '@/components/Background1';

const Home = observer(() => {
  const [page, setPage] = useState<number>(0);

  useEffect(() => {
    setTimeout(() => {
      setPage((page + 1) % 3);
    }, 5000);
  });

  return (
    <S.Wrapper>
      <Background1 />

      <S.HeadingWrapper>
        <S.Heading delay={500}>안녕하세요</S.Heading>
        <S.Heading delay={1000}>프론트엔드 개발자</S.Heading>
        <S.Heading delay={1500}>김영우입니다.</S.Heading>
      </S.HeadingWrapper>
    </S.Wrapper>
  );
});

export default Home;
