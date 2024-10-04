'use client';

import { observer } from 'mobx-react-lite';
import { useEffect, useState } from 'react';

import Home from '@/components/Home';

import * as S from './styled';

const Main = observer(() => {
  const [page, setPage] = useState<number>(0);

  useEffect(() => {
    setTimeout(() => {
      setPage((page + 1) % 3);
    }, 5000);
  });

  return (
    <S.Wrapper>
      <Home />
    </S.Wrapper>
  );
});

export default Main;
