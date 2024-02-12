'use client';

import Header from '@/components/Header';
import Menu from '@/components/Menu';
import store from '@/stores/store';
import dark from '@/theme/dark';
import light from '@/theme/light';
import { observer } from 'mobx-react';
import { ThemeProvider } from 'styled-components';

type AppProps = { children: React.ReactNode };

const App = observer(({ children }: AppProps) => {
  const theme = store.theme === 'light' ? light : dark;

  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Menu />
      {children}
    </ThemeProvider>
  );
});

export default App;
