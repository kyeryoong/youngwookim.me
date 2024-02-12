import { makeAutoObservable } from 'mobx';

type ThemeType = 'light' | 'dark';

class Store {
  isMenuOpen: boolean = false;
  theme: ThemeType = 'dark';

  constructor() {
    makeAutoObservable(this);
  }

  setIsMenuOpen = (value: boolean) => {
    this.isMenuOpen = value;
  };

  setTheme = (value: ThemeType) => {
    this.theme = value;
  };
}

export default new Store();
