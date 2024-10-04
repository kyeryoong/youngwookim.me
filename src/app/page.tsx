'use client';

import { observer } from 'mobx-react-lite';

import Home from '@/components/Home';

import * as S from './styled';

const Main = observer(() => {
  return (
    <S.Wrapper>
      <Home />
    </S.Wrapper>
  );
});

export default Main;
