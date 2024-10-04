'use client';

import { observer } from 'mobx-react-lite';
import { useEffect, useState } from 'react';

import BackgroundNew from '@/components/Background/BackgroundNew';

import * as S from './styled';

const Home = observer(() => {
  const [page, setPage] = useState<number>(0);

  useEffect(() => {
    setTimeout(() => {
      setPage((page + 1) % 3);
    }, 5000);
  });

  return (
    <S.Wrapper>
      {/* <Background1 /> */}
      <BackgroundNew />
    </S.Wrapper>
  );
});

export default Home;
