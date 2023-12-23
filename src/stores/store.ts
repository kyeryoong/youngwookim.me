import { makeAutoObservable } from 'mobx';

class Store {
  isMenuOpen: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  setIsMenuOpen = (isMenuOpen: boolean) => {
    this.isMenuOpen = isMenuOpen;
  };
}

const store = new Store();
export default store;
