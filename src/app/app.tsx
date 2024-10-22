'use client';

import { observer } from 'mobx-react-lite';
import { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Menu from '@/components/Menu';
import { useStore } from '@/stores';
import { ThemeType } from '@/stores/themeStore';
import dark from '@/theme/dark';
import font from '@/theme/font';
import light from '@/theme/light';
import ToastPopup from '@/theme/ToastPopup';

import * as S from './appStyled';

type AppProps = { children: React.ReactNode };

const App = observer(({ children }: AppProps) => {
  const { menuStore, themeStore } = useStore();

  const [isThemeLoaded, setIsThemeLoaded] = useState<boolean>(false);

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
      const themeMode = localStorage.getItem('theme');

      if (themeMode) {
        themeStore.setTheme(themeMode as ThemeType);
      } else {
        localStorage.setItem('theme', 'dark');
      }

      setIsThemeLoaded(true);
    }
  }, []);

  return (
    <ThemeProvider theme={themeStore.theme === 'dark' ? { ...dark, font } : { ...light, font }}>
      {isThemeLoaded && (
        <S.AppWrapper>
          <Header />
          <Menu />
          {children}
          <Footer />
          <ToastPopup />
        </S.AppWrapper>
      )}
    </ThemeProvider>
  );
});

export default App;
