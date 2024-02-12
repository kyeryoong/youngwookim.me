'use client';
import * as S from './styled';
import store from '@/stores/store';
import { useRouter } from 'next/navigation';
import { observer } from 'mobx-react';
import { useState, useEffect, useRef } from 'react';

const Prompt = observer(() => {
  const router = useRouter();
  const ref = useRef<HTMLInputElement>(null);

  const [currentLine, setCurrentLine] = useState<string>('');
  const [previousLines, setPreviousLines] = useState<string[]>([]);
  const [resultLines, setResultLines] = useState<string[]>([]);

  useEffect(() => {
    ref.current?.focus();

    setCurrentLine('');
    setPreviousLines([]);
    setResultLines([]);
  }, [store.isMenuOpen]);

  const processCommand = () => {
    event?.preventDefault();

    setResultLines((prev: string[]) => [...prev, `> ${currentLine}`]);

    const [prefix, suffix] = currentLine.trim().toLowerCase().split(' ');

    // 페이지 이동
    if (prefix === 'cd') {
      if (suffix === undefined) {
        setCurrentLine('');
      } else if (suffix === 'home') {
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
    }

    // 페이지 목록 출력
    else if (prefix === 'ls' || prefix === 'dir') {
      setResultLines((prev: string[]) => [...prev, 'home\t\tprofile\t\ttech']);
    }

    // 콘솔 초기화
    else if (prefix === 'clear' || prefix === 'cls') {
      setResultLines([]);
    }

    // 메뉴 닫기
    else if (prefix === 'exit') {
      store.setIsMenuOpen(false);
    }

    // 현재 경로 출력
    else if (prefix === 'pwd') {
      setResultLines((prev: string[]) => [...prev, `${window.location.href}`]);
    }

    // 현재 사용자 이름 출력
    else if (prefix === 'whoami') {
      setResultLines((prev: string[]) => [...prev, 'user']);
    }

    // 테마 변경
    else if (prefix === 'theme') {
      if (suffix === 'dark' || suffix === 'light') {
        store.setTheme(suffix);
      } else {
        setResultLines((prev: string[]) => [...prev, `bash: theme: No such theme`]);
      }
    }

    // 유효하지 않은 명령어
    else {
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
    <S.PromptWrapper onSubmit={processCommand}>
      <S.ResultLineWrapper>
        {resultLines.map((resultLine: string, index: number) => (
          <S.ResultLine key={index}>{resultLine}</S.ResultLine>
        ))}
      </S.ResultLineWrapper>
      <S.CurrentLineCursor />
      <S.CurrentLineInput value={currentLine} onChange={handleLineChange} ref={ref} />
    </S.PromptWrapper>
  );
});

export default Prompt;
