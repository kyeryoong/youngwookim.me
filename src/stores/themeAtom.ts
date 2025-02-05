import { atom } from 'jotai';

export type ThemeType = 'light' | 'dark';

export const themeAtom = atom('dark', (get, set, value: string) => {
  set(themeAtom, value);
  localStorage.setItem('theme', value);
});

export const toggleThemeAtom = atom(null, (get, set) => {
  const newTheme = get(themeAtom) === 'dark' ? 'light' : 'dark';

  set(themeAtom, newTheme);
  localStorage.setItem('theme', newTheme);
  document.body.style.backgroundColor = newTheme === 'dark' ? 'black' : 'white';
});
