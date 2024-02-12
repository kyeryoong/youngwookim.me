import { makeAutoObservable } from 'mobx';

class Store {
  isMenuOpen: boolean = false;
  isDarkMode: boolean = true;

  constructor() {
    makeAutoObservable(this);
  }

  setIsMenuOpen = (value: boolean) => {
    this.isMenuOpen = value;
  };

  setIsDarkMode = (value: boolean) => {
    this.isDarkMode = value;
  };
}

export default new Store();
