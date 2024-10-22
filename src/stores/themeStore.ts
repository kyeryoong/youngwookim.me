import { makeAutoObservable } from 'mobx';

export type ThemeType = 'light' | 'dark';

export class ThemeStore {
  theme: ThemeType = 'dark';

  constructor() {
    makeAutoObservable(this);
  }

  setTheme = (value: ThemeType) => {
    this.theme = value;
    localStorage.setItem('theme', String(value));
  };

  toggleTheme = () => {
    if (this.theme === 'dark') {
      this.theme = 'light';
      localStorage.setItem('theme', String('light'));
      document.body.style.backgroundColor = 'white';
    } else {
      this.theme = 'dark';
      localStorage.setItem('theme', String('dark'));
      document.body.style.backgroundColor = 'black';
    }
  };
}
