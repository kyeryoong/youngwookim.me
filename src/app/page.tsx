'use client';
import { observer } from 'mobx-react';
import * as S from './styled';

const Home = observer(() => {
  return (
    <S.Wrapper>
      <S.Title>안녕하세요</S.Title>
      <S.Title delay={0.5}>프론트엔드 개발자</S.Title>
      <S.Title delay={1}>김영우 입니다.</S.Title>
    </S.Wrapper>
  );
});

export default Home;
