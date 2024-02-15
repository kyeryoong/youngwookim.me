'use client';

import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import { ThemeProvider } from 'styled-components';

import Header from '@/components/Header';
import Menu from '@/components/Menu';
import store from '@/stores/store';
import dark from '@/theme/dark';
import light from '@/theme/light';

import * as S from './appStyled';

type AppProps = { children: React.ReactNode };

const App = observer(({ children }: AppProps) => {
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.ctrlKey && event.key.toUpperCase() === 'M') {
        event.preventDefault();
        store.setIsMenuOpened(!store.isMenuOpened);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  return (
    <ThemeProvider theme={store.theme === 'dark' ? dark : light}>
      <S.AppWrapper>
        <Header />
        <Menu />
        {children}
      </S.AppWrapper>
    </ThemeProvider>
  );
});

export default App;
