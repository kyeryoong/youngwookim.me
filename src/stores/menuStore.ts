import { makeAutoObservable } from 'mobx';

export class MenuStore {
  showHeader: boolean = true;
  isMenuOpened: boolean = false;
  isMenuExpanded: boolean = false;
  promptEntered: number = 0;

  constructor() {
    makeAutoObservable(this);
  }

  setShowHeader = (value: boolean) => {
    this.showHeader = value;
  };

  setIsMenuOpened = (value: boolean) => {
    this.isMenuOpened = value;

    if (value === false) {
      setTimeout(() => {
        this.setIsMenuExpanded(false);
      }, 500);
    }
  };

  setIsMenuExpanded = (value: boolean) => {
    this.isMenuExpanded = value;
  };

  setPromptEntered = () => {
    this.promptEntered++;
  };
}
