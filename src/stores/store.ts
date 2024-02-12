import { makeAutoObservable } from 'mobx';

type ThemeType = 'light' | 'dark';

class Store {
  isMenuOpen: boolean = false;
  theme: ThemeType;

  constructor() {
    if (typeof window !== 'undefined') {
      const localStorageTheme = localStorage.getItem('youngwookim.me_theme') as ThemeType;

      if (localStorageTheme) {
        this.theme = localStorageTheme;
      } else {
        this.theme = 'dark';
        localStorage.setItem('youngwookim.me_theme', 'dark');
      }
    } else {
      this.theme = 'dark';
    }

    makeAutoObservable(this);
  }

  setIsMenuOpen = (value: boolean) => {
    this.isMenuOpen = value;
  };

  setTheme = (value: ThemeType) => {
    this.theme = value;

    if (typeof window !== 'undefined') {
      localStorage.setItem('youngwookim.me_theme', value);
    }
  };
}

export default new Store();
