'use client';

import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import { ThemeProvider } from 'styled-components';

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Menu from '@/components/Menu';
import { useStore } from '@/stores';
import dark from '@/theme/dark';
import font from '@/theme/font';
import light from '@/theme/light';

import * as S from './appStyled';

type AppProps = { children: React.ReactNode };

const App = observer(({ children }: AppProps) => {
  const { menuStore, themeStore } = useStore();

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.ctrlKey && event.key.toUpperCase() === 'M') {
        event.preventDefault();
        menuStore.setIsMenuOpened(!menuStore.isMenuOpened);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const themeMode = localStorage.getItem('youngwookim.me_theme');

      if (themeMode === 'dark') {
        themeStore.setTheme('dark');
      } else if (themeMode === 'light') {
        themeStore.setTheme('light');
      } else {
        themeStore.setTheme('dark');
      }
    }
  }, []);

  return (
    <ThemeProvider theme={themeStore.theme === 'dark' ? { ...dark, font } : { ...light, font }}>
      <S.AppWrapper>
        <Header />
        <Menu />
        {children}
        <Footer />
      </S.AppWrapper>
    </ThemeProvider>
  );
});

export default App;
