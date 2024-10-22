'use client';

import { observer } from 'mobx-react-lite';
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

const App = observer(({ children }: AppProps) => {
  const { themeStore } = useStore();

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
