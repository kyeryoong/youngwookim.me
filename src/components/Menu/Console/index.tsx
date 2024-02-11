'use client';
import * as S from './styled';
import store from '@/stores/store';
import { useRouter } from 'next/navigation';
import { observer } from 'mobx-react';
import React, { useState } from 'react';

const Console = observer(() => {
  const router = useRouter();

  const [currentLine, setCurrentLine] = useState<string>('');
  const [previousLines, setPreviousLines] = useState<string[]>([]);
  const [resultLines, setResultLines] = useState<string[]>([]);

  const processCommand = () => {
    event?.preventDefault();

    setResultLines((prev: string[]) => [...prev, `> ${currentLine}`]);

    const [prefix, suffix] = currentLine.trim().toLowerCase().split(' ');

    if (prefix === 'cd') {
      if (suffix === 'home') {
        router.push('/');
        store.setIsMenuOpen(false);
      } else if (suffix === 'profile') {
        router.push('profile');
        store.setIsMenuOpen(false);
      } else if (suffix === 'tech') {
        router.push('tech');
        store.setIsMenuOpen(false);
      } else {
        setResultLines((prev: string[]) => [...prev, `bash: cd: ${suffix}: No such page`]);
      }
    } else if (prefix === 'clear' || prefix === 'cls') {
      setResultLines([]);
    } else {
      setResultLines((prev: string[]) => [...prev, `bash: ${currentLine}: command not found`]);
    }

    setPreviousLines((prev: string[]) => [...prev, currentLine]);
    setCurrentLine('');
  };

  const handleLineChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setCurrentLine(event.target.value);
  };

  console.log(previousLines);

  return (
    <S.ConsoleWrapper onSubmit={processCommand}>
      <S.ResultLineWrapper>
        {resultLines.map((resultLine: string, index: number) => (
          <S.ResultLine key={index}>{resultLine}</S.ResultLine>
        ))}
      </S.ResultLineWrapper>
      <S.CurrentLineCursor />
      <S.CurrentLineInput value={currentLine} onChange={handleLineChange} />
    </S.ConsoleWrapper>
  );
});

export default Console;
