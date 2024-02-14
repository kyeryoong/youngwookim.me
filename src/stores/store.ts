import { makeAutoObservable } from 'mobx';

type ThemeType = 'light' | 'dark';

class Store {
  isMenuOpened: boolean = false;
  isMenuExpanded: boolean = false;
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

  setIsMenuOpened = (value: boolean) => {
    this.isMenuOpened = value;
  };

  setIsMenuExpanded = (value: boolean) => {
    this.isMenuExpanded = value;
  };

  setTheme = (value: ThemeType) => {
    this.theme = value;
    localStorage.setItem('youngwookim.me_theme', value);
  };
}

export default new Store();
