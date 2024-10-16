'use client';

import { observer } from 'mobx-react-lite';

import NewHome from '@/components/NewHome';

import * as S from './styled';

const Main = observer(() => {
  return (
    <S.Wrapper>
      <NewHome />
    </S.Wrapper>
  );
});

export default Main;
