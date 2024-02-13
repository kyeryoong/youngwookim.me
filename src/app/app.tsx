'use client';

import Header from '@/components/Header';
import Menu from '@/components/Menu';
import store from '@/stores/store';
import dark from '@/theme/dark';
import light from '@/theme/light';
import { observer } from 'mobx-react-lite';
import { ThemeProvider } from 'styled-components';
import * as S from './appStyled';

type AppProps = { children: React.ReactNode };

const App = observer(({ children }: AppProps) => {
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
