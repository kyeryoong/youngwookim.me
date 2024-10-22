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
import ToastPopup from '@/theme/ToastPopup';

import * as S from './appStyled';

type AppProps = { children: React.ReactNode };

export const dynamic = 'force-dynamic';

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

  return (
    <ThemeProvider theme={themeStore.theme === 'dark' ? { ...dark, font } : { ...light, font }}>
      <S.AppWrapper>
        <Header />
        <Menu />
        {children}
        <Footer />
        <ToastPopup />
      </S.AppWrapper>
    </ThemeProvider>
  );
});

export default App;
