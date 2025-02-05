'use client';

import { useSetAtom } from 'jotai';
import { observer } from 'mobx-react-lite';
import { useRouter } from 'next/navigation';
import { signIn, signOut, useSession } from 'next-auth/react';
import { useEffect, useRef, useState } from 'react';

import jetBrainsMono from '@/font/jetBrainsMono';
import useStore from '@/stores';
import { themeAtom, toggleThemeAtom } from '@/stores/themeAtom';

import isMobile from '../../../utils/isMobile';
import * as S from './styled';
import { fortuneTexts, helpText, initText } from './text';

const Prompt = observer(() => {
  const { menuStore } = useStore();
  const setThemeValue = useSetAtom(themeAtom);
  const toggleThemeValue = useSetAtom(toggleThemeAtom);
  const { data: session } = useSession();

  const router = useRouter();
  const ref = useRef<HTMLInputElement>(null);

  const [currentLine, setCurrentLine] = useState<string>('');
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [previousLines, setPreviousLines] = useState<string[]>([]);
  const [resultLines, setResultLines] = useState<string[]>([]);

  useEffect(() => {
    if (!isMobile()) {
      ref.current?.focus();
    }

    if (menuStore.isMenuOpened) {
      setCurrentLine('');
      setPreviousLines([]);
      setResultLines([initText]);
    }
  }, [menuStore.isMenuOpened]);

  const processCommand = () => {
    event?.preventDefault();

    menuStore.setPromptEntered();
    setResultLines((prev: string[]) => [...prev, `> ${currentLine}`]);

    const [prefix, suffix] = currentLine.trim().toLowerCase().split(' ');

    /********** 주요 명령어 **********/
    // 페이지 이동
    if (prefix === 'cd') {
      if (suffix === undefined) {
        setCurrentLine('');
      } else if (suffix === 'home') {
        router.push('/');
        menuStore.setIsMenuOpened(false);
        ref.current?.blur();
      } else if (suffix === 'profile') {
        router.push('profile');
        menuStore.setIsMenuOpened(false);
        ref.current?.blur();
      } else if (suffix === 'tech') {
        router.push('tech');
        menuStore.setIsMenuOpened(false);
        ref.current?.blur();
      } else if (suffix === 'projects') {
        router.push('projects');
        menuStore.setIsMenuOpened(false);
        ref.current?.blur();
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
      menuStore.setIsMenuOpened(false);
    }

    // 테마 변경
    else if (prefix === 'theme') {
      if (suffix === undefined) {
        toggleThemeValue();
      } else if (suffix === 'dark' || suffix === 'light') {
        setThemeValue(suffix);
      } else {
        setResultLines((prev: string[]) => [...prev, `bash: theme: No such theme`]);
      }
    }

    // 도웁말 출력
    else if (prefix === 'help') {
      setResultLines((prev: string[]) => [...prev, helpText]);
    }

    /********** 기타 명령어 **********/
    // 현재 경로 출력
    else if (prefix === 'pwd') {
      setResultLines((prev: string[]) => [...prev, `${window.location.href}`]);
    }

    // 현재 사용자 이름 출력
    else if (prefix === 'whoami') {
      setResultLines((prev: string[]) => [...prev, 'user']);
    }

    // 현재 날짜 출력
    else if (prefix === 'date') {
      setResultLines((prev: string[]) => [...prev, `${String(new Date())}`]);
    }

    // 현재 날짜 출력
    else if (prefix === 'fortune') {
      setResultLines((prev: string[]) => [
        ...prev,
        suffix !== undefined
          ? fortuneTexts[Number(suffix)]
          : fortuneTexts[Math.floor(Math.random() * fortuneTexts.length)],
      ]);
    }

    // 프롬프트 확장
    else if (prefix === 'expand') {
      menuStore.setIsMenuExpanded(!menuStore.isMenuExpanded);
    }

    // 관리자 로그인
    else if (prefix === 'login') {
      if (session) {
        setResultLines((prev: string[]) => [
          ...prev,
          "bash: login: you're already logged in as admin",
        ]);
      } else {
        signIn('github');
      }
    }

    // 관리자 로그아웃
    else if (prefix === 'logout') {
      if (session) {
        signOut();
      } else {
        setResultLines((prev: string[]) => [...prev, "bash: logout: you're not logged in"]);
      }
    }

    // 유효하지 않은 명령어
    else {
      if (suffix || prefix) {
        setResultLines((prev: string[]) => [...prev, `bash: ${currentLine}: command not found`]);
      }
    }

    setPreviousLines((prev: string[]) => [...prev, currentLine]);
    setCurrentLine('');
  };

  const handleLineChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setCurrentLine(event.target.value);
  };

  return (
    <S.PromptWrapper onSubmit={processCommand}>
      <S.ResultLineWrapper>
        {resultLines.map((resultLine: string, index: number) => (
          <S.ResultLine key={index} className={jetBrainsMono.className}>
            {resultLine}
          </S.ResultLine>
        ))}
      </S.ResultLineWrapper>
      <S.CurrentLineCursor className={jetBrainsMono.className} />
      <S.CurrentLineInput
        value={currentLine}
        onChange={handleLineChange}
        ref={ref}
        spellCheck={false}
        style={{ cursor: 'text' }}
        className={jetBrainsMono.className}
      />
    </S.PromptWrapper>
  );
});

export default Prompt;
