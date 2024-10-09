import { makeAutoObservable } from 'mobx';

export type FontSizeType = 8 | 9 | 10 | 12 | 15;

export type LanguageType = 'en' | 'kr';

export class HomeStore {
  fontSize: FontSizeType = 10;
  language: LanguageType = 'en';
  bold: boolean = false;
  italic: boolean = false;
  textColor: string = 'white';
  borderColor: string = 'transparent';

  constructor() {
    makeAutoObservable(this);
  }

  setFontsize = (value: FontSizeType) => {
    this.fontSize = value;
  };

  setLanguage = (value: LanguageType) => {
    this.language = value;
  };

  toggleBold = () => {
    this.bold = !this.bold;
  };

  toggleItalic = () => {
    this.italic = !this.italic;
  };

  setTextColor = (value: string) => {
    this.textColor = value;
  };

  setBorderColor = (value: string) => {
    this.borderColor = value;
  };
}
