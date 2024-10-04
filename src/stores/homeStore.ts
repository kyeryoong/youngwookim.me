import { makeAutoObservable } from 'mobx';

type LanguageType = 'en' | 'kr';

export class HomeStore {
  language: LanguageType = 'en';
  bold: boolean = false;
  italic: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  setLanguage = (value: LanguageType) => {
    this.language = value;
  };

  toggleBold = () => {
    this.bold = !this.bold;
  };

  toggleItalic = () => {
    this.italic = !this.italic;
  };
}
