import { makeAutoObservable } from 'mobx';

type ThemeType = 'light' | 'dark';

export class ThemeStore {
  theme: ThemeType = 'dark';

  constructor() {
    makeAutoObservable(this);
  }

  setTheme = (value: ThemeType) => {
    this.theme = value;
    localStorage.setItem('youngwookim.me_theme', String(value));
  };

  toggleTheme = () => {
    const prevTheme = this.theme;

    if (prevTheme === 'dark') {
      this.theme = 'light';
      localStorage.setItem('youngwookim.me_theme', String('light'));
    } else {
      this.theme = 'dark';
      localStorage.setItem('youngwookim.me_theme', String('dark'));
    }
  };
}
