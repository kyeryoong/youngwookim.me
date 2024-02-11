'use client';
import * as S from './styled';
import store from '@/stores/store';
import { observer } from 'mobx-react';
import React, { useState } from 'react';

const Console = observer(() => {
  const [line, setLine] = useState<string>('s');

  const processCommand = () => {
    event?.preventDefault();
    console.log(line);
    setLine('');
  };

  const handleLineChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setLine(event.target.value);
  };

  return (
    <S.ConsoleWrapper onSubmit={processCommand}>
      <S.Line value={line} onChange={handleLineChange} />
    </S.ConsoleWrapper>
  );
});

export default Console;
