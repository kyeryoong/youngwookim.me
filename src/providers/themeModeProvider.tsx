'use client';

import { observer } from 'mobx-react-lite';
import { ReactNode, useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';

import { useStore } from '@/stores';
import { ThemeType } from '@/stores/themeStore';
import dark from '@/theme/dark';
import font from '@/theme/font';
import light from '@/theme/light';

type ThemeModeProviderProps = {
  children: ReactNode;
};

const ThemeModeProvider = observer(({ children }: ThemeModeProviderProps) => {
  const { themeStore } = useStore();

  const [isThemeLoaded, setIsThemeLoaded] = useState<boolean>(false);

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
      {isThemeLoaded && <>{children}</>}
    </ThemeProvider>
  );
});

export default ThemeModeProvider;
