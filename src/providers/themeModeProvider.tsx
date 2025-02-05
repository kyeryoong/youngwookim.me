'use client';

import { useAtom } from 'jotai';
import { ReactNode, useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';

import { themeAtom, ThemeType } from '@/stores/themeAtom';
import dark from '@/theme/dark';
import font from '@/theme/font';
import light from '@/theme/light';

type ThemeModeProviderProps = {
  children: ReactNode;
};

const ThemeModeProvider = ({ children }: ThemeModeProviderProps) => {
  const [themeValue, setThemeValue] = useAtom(themeAtom);

  const [isThemeLoaded, setIsThemeLoaded] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const themeMode = localStorage.getItem('theme');

      if (themeMode) {
        setThemeValue(themeMode as ThemeType);
      } else {
        localStorage.setItem('theme', 'dark');
      }

      setIsThemeLoaded(true);
    }
  }, []);

  return (
    <ThemeProvider theme={themeValue === 'dark' ? { ...dark, font } : { ...light, font }}>
      {isThemeLoaded && <>{children}</>}
    </ThemeProvider>
  );
};

export default ThemeModeProvider;
