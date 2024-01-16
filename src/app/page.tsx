'use client';
import { useState, useEffect } from 'react';
import { observer } from 'mobx-react';

import GradientBackground from '@/components/GradientBackground';
import * as S from './styled';

const Home = observer(() => {
  const [page, setPage] = useState<number>(0);

  useEffect(() => {
    setTimeout(() => {
      setPage((page + 1) % 2);
    }, 5000);
  });

  const colorPalette = [
    ['#C3E4FF', '#6EC3F4', '#EAE2FF', '#B9BEFF', '#B3B8F9'],
    ['#42A13B', '#FFFFFF', '#61DAFB', '#83CD29', '#FFFFFF'],
    ['red', 'blue', 'green', 'yellow', 'purple'],
  ];

  return (
    <S.Wrapper>
      <S.Slide show={page === 0}>
        <S.Title>안녕하세요</S.Title>
        <S.Title delay={500}>프론트엔드 개발자</S.Title>
        <S.Title delay={1000}>김영우 입니다.</S.Title>
      </S.Slide>

      <S.Slide show={page === 1}>
        <S.Title>안녕하세요</S.Title>
        <S.Title delay={500}>프론트엔드 개발자</S.Title>
        <S.Title delay={1000}>김영우 입니다.</S.Title>
      </S.Slide>

      <S.Slide show={page === 2}>
        <S.Title>안녕하세요</S.Title>
        <S.Title delay={500}>프론트엔드 개발자</S.Title>
        <S.Title delay={1000}>김영우 입니다.</S.Title>
        <GradientBackground colors={colorPalette[2]} />
      </S.Slide>
    </S.Wrapper>
  );
});

export default Home;
