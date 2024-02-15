import { makeAutoObservable } from 'mobx';

type ThemeType = 'light' | 'dark';
class Store {
  isMenuOpened: boolean = false;
  isMenuExpanded: boolean = false;
  theme: ThemeType = 'dark';

  constructor() {
    makeAutoObservable(this);
  }

  setIsMenuOpened = (value: boolean) => {
    this.isMenuOpened = value;

    if (value === false) {
      setTimeout(() => {
        this.isMenuExpanded = false;
      }, 500);
    }
  };

  setIsMenuExpanded = (value: boolean) => {
    this.isMenuExpanded = value;
  };

  setTheme = (value: ThemeType) => {
    this.theme = value;
    localStorage.setItem('youngwookim.me_theme', String(value));
  };
}

export default new Store();
