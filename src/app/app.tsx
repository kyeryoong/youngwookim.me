'use client';

import Header from '@/components/Header';
import Menu from '@/components/Menu';
import store from '@/stores/store';
import dark from '@/theme/dark';
import light from '@/theme/light';
import { observer } from 'mobx-react-lite';
import { ThemeProvider } from 'styled-components';
import * as S from './appStyled';
import { useEffect } from 'react';

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
